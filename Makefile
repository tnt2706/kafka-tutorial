.PHONY: producer consumer

producer:
	node ./app/producer.js

consumer:
	node ./app/consumer.js