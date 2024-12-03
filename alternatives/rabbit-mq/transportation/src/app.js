import config from "./config/config.js";
import amqp from "amqplib/callback_api.js";
import { createEvent } from "./utils/event-format.js";
import { createTrip } from "./utils/api.js";

const transportationQueue = config.TRANSPORTATION_QUEUE;
const messagingQueue = config.MESSAGING_QUEUE;

// Connect to RabbitMQ using the URL
amqp.connect(config.RABBITMQ_URL, function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    // Validate the queues exist
    channel.assertQueue(transportationQueue, { durable: true });
    channel.assertQueue(messagingQueue, { durable: true });

    // Consume messages from the transportationQueue
    channel.consume(
      transportationQueue,
      async (msg) => {
        if (msg !== null) {
          try {
            // Get the message content
            const content = JSON.parse(msg.content.toString());

            // Get the purchase data
            const purchase = content.data;

            // Create the Trip for the Purchase
            const trip = await createTrip({
              origin: "store",
              purchaseId: purchase.id,
              user: purchase.user,
            });

            // Send the new message to the messagingQueue
            channel.sendToQueue(
              messagingQueue,
              Buffer.from(JSON.stringify(createEvent(trip.id, trip))),
              {
                persistent: true,
              }
            );

            // Acknowledge the retrieved message
            console.log("Message sent for Trip with id: " + trip.id);
            channel.ack(msg);
          } catch (error) {
            console.error("Error processing message:", error);
            // Reject the message if there was an error
            channel.nack(msg);
          }
        }
      },
      {
        noAck: false, // Acknowledge messages manually
      }
    );
  });
});
