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
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
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
