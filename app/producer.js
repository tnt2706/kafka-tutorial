/* eslint-disable no-await-in-loop */
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-kafka-1',
  brokers: ['127.0.0.1:9092'],
});

const producer = kafka.producer();

const run = async () => {
  // Producing
  await producer.connect();
  for (let index = 0; index < 5; index += 1) {
    await producer.send({
      topic: 'first_topic',
      messages: [
        { key: 'partition1', value: 'Hello KafkaJS user 1!', partition: 1 },
        { key: 'partition0', value: 'Hello KafkaJS user 0!', partition: 0 },
      ],
    });
  }
};

(async () => {
  try {
    await run();
    setTimeout(() => {
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
})();
