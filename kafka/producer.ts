const { Kafka } = require("kafkajs");

run().then(() => console.log("Done"), err => console.log(err));

async function run() {
  const kafka = new Kafka({ brokers: ["localhost:9092"] });
  const consumer = kafka.consumer({ groupId: '' + Date.now() });

  await consumer.connect();

  await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true });

  let startTime = Date.now();

  await consumer.run({ 
    eachMessage: async (data) => {
      console.log(Date.now() - startTime, data.message.value.toString('utf8'));
    }
  });

  const producer = kafka.producer();
  await producer.connect();

  // Wait 1 second before sending a new message
  await new Promise(resolve => setTimeout(resolve, 1000));

  await producer.send({
    topic: "quickstart-events",
    messages: [
      { value: "event 4" },
    ]
  });
}
