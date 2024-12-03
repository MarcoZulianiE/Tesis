import config from "./config/config.js";
import Pulsar from "pulsar-client";
import { createEvent } from "./utils/event-format.js";
import { getNewPurchases } from "./utils/api.js";

const transportationTopic = config.TRANSPORTATION_TOPIC;

/**
 * Checks recent store purchases and sends an event if the purchase value meets the specified threshold.
 * @param {Object} channel - The message broker channel used to send the event
 */
async function checkStorePurchases(producer, lastCheckedDate) {
  if (!producer.isConnected()) {
    console.log("Reinitializing the producer...");
    producer = await client.createProducer({
      topic: transportationTopic,
    });
  }

  const purchases = await getNewPurchases(lastCheckedDate);

  for (const purchase of purchases) {
    if (purchase.total >= 150000) {
      await producer.send({
        data: Buffer.from(JSON.stringify(createEvent(purchase.id, purchase))),
      });
      console.log("Message sent for Purchase with id: " + purchase.id);
    }
  }
}

// Connect to pulsar using the url

const client = new Pulsar.Client({
  serviceUrl: config.PULSAR_URL,
  operationTimeoutSeconds: 30,
});

const producer = await client.createProducer({
  topic: transportationTopic,
});

let lastCheckedDate = new Date();

setInterval(async function () {
  await checkStorePurchases(producer, lastCheckedDate);
  lastCheckedDate = new Date();
}, 10000);
