import { Kafka } from "kafkajs";
import config from "./config/config.js";
import { createEvent } from "./utils/event-format.js";
import { getNewPurchases } from "./utils/api.js";

const kafka = new Kafka({
  clientId: "store-server",
  brokers: [`${config.KAFKA_HOST}:${config.KAFKA_PORT}`],
});

const transportationTopic = config.TRANSPORTATION_TOPIC;

/**
 * Checks recent store purchases and sends an event if the purchase value meets the specified threshold.
 * @param {Object} producer
 */
async function checkStorePurchases(producer, lastCheckedDate) {
  const purchases = await getNewPurchases(lastCheckedDate);

  for (const purchase of purchases) {
    if (purchase.total >= 150000) {
      await producer.send({
        topic: transportationTopic,
        messages: [
          { value: JSON.stringify(createEvent(purchase.id, purchase)) },
        ],
      });
      console.log(
        `Requested transportation for Purchase with id ${purchase.id}`
      );
    }
  }
}

let lastCheckedDate = new Date();

const producer = kafka.producer();

await producer.connect();

setInterval(function () {
  checkStorePurchases(producer, lastCheckedDate);
  lastCheckedDate = new Date();
}, 10000);
