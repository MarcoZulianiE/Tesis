import config from "./config/config.js";
import { createMessage } from "./utils/api.js";
import Pulsar from "pulsar-client";

const client = new Pulsar.Client({
  serviceUrl: config.PULSAR_URL,
  operationTimeoutSeconds: 30,
});

const whatsappTopic = config.WHATSAPP_TOPIC;

const consumer = await client.subscribe({
  topic: whatsappTopic,
  subscription: "whatsapp-service",
  subscriptionType: "Shared",
});

while (true) {
  const msg = await consumer.receive();

  // Get the message content
  const content = JSON.parse(msg.getData().toString());

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

  // Acknowledge the message to Pulsar
  consumer.acknowledge(msg);
}
