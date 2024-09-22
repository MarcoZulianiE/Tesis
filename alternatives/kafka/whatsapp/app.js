import config from "./config/config.js";
import { createMessage } from "./utils/api.js";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "whatsapp-server",
  brokers: [`${config.KAFKA_HOST}:${config.KAFKA_PORT}`],
});

const whatsappTopic = config.WHATSAPP_TOPIC;

const consumer = kafka.consumer({ groupId: "whatsapp-group" });

await consumer.connect();

await consumer.subscribe({ topic: whatsappTopic, fromBeginning: true });

await consumer.run({
  eachMessage: async ({ message }) => {
    // Get the message content
    const content = JSON.parse(message.value);

    // Get the trip data
    const trip = content.data;

    // Send a message for the Trip
    const whaMessage = await createMessage({
      purchaseId: trip.purchaseId,
      tripId: trip.id,
      message: "You got a free trip to your home.",
      user: trip.user,
    });

    console.log("Message sent:" + whaMessage.id);
  },
});
