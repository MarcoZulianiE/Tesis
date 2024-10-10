import config from "./config/config.js";
import { createEvent } from "./utils/event-format.js";
import { createTrip } from "./utils/api.js";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "uber-server",
  brokers: [`${config.KAFKA_HOST}:${config.KAFKA_PORT}`],
});

const uberTopic = config.UBER_TOPIC;
const whatsappTopic = config.WHATSAPP_TOPIC;

const consumer = kafka.consumer({ groupId: "uber-group" });
const producer = kafka.producer();

await consumer.connect();
await producer.connect();

await consumer.subscribe({ topic: uberTopic, fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    // Get the message content
    const content = JSON.parse(message.value);

    // Get the purchase data
    const purchase = content.data;

    // Create the Trip for the Purchase
    const trip = await createTrip({
      origin: "store",
      purchaseId: purchase.id,
      user: purchase.user,
    });

    await producer.send({
      topic: whatsappTopic,
      messages: [{ value: JSON.stringify(createEvent(trip.id, trip)) }],
    });
    console.log("Message sent for Purchase with id: " + purchase.id);
  },
});
