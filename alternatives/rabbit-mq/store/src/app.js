import config from "./config/config.js";
import amqp from "amqplib/callback_api.js";
import { createEvent } from "./utils/event-format.js";
import { getNewPurchases } from "./utils/api.js";

const uberQueue = config.UBER_QUEUE;

/**
 * Checks recent store purchases and sends an event if the purchase value meets the specified threshold.
 * @param {Object} channel - The message broker channel used to send the event
 */
async function checkStorePurchases(channel, lastCheckedDate) {
  const purchases = await getNewPurchases(lastCheckedDate);

  for (const purchase of purchases) {
    if (purchase.total >= 150000) {
      channel.sendToQueue(
        uberQueue,
        Buffer.from(JSON.stringify(createEvent(purchase.id, purchase))),
        {
          persistent: true,
        }
      );
      console.log("Message sent for Purchase with id: " + purchase.id);
    }
  }
}

// Connect to rabbitMQ using the url
amqp.connect(config.RABBITMQ_URL, function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    // Validate the queue exists
    channel.assertQueue(uberQueue, {
      durable: true,
    });

    let lastCheckedDate = new Date();

    setInterval(function () {
      checkStorePurchases(channel, lastCheckedDate);
      lastCheckedDate = new Date();
    }, 10000);
  });
});
