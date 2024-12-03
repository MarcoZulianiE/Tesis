import config from "./config/config.js";
import Pulsar from "pulsar-client";
import { createEvent } from "./utils/event-format.js";
import { createTrip } from "./utils/api.js";

const client = new Pulsar.Client({
  serviceUrl: config.PULSAR_URL,
  operationTimeoutSeconds: 30,
});

const transportationTopic = config.TRANSPORTATION_TOPIC;
const messagingTopic = config.MESSAGING_TOPIC;

const producer = await client.createProducer({
  topic: messagingTopic,
});
const consumer = await client.subscribe({
  topic: transportationTopic,
  subscription: "transportation-service",
  subscriptionType: "Shared",
});

while (true) {
  const msg = await consumer.receive();

  // Get the message content
  const content = JSON.parse(msg.getData().toString());

  // Get the purchase data
  const purchase = content.data;

  // Create the Trip for the Purchase
  const trip = await createTrip({
    origin: "store",
    purchaseId: purchase.id,
    user: purchase.user,
  });

  await producer.send({
    data: Buffer.from(JSON.stringify(createEvent(trip.id, trip))),
  });
  console.log("Message sent for Purchase with id: " + purchase.id);

  // Acknowledge the message to Pulsar
  consumer.acknowledge(msg);
}
