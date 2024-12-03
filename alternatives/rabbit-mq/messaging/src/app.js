import config from "./config/config.js";
import amqp from "amqplib/callback_api.js";
import { createMessage } from "./utils/api.js";

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

    // Validate the queue exist
    channel.assertQueue(messagingQueue, { durable: true });

    // Consume messages from the messagingQueue
    channel.consume(
      messagingQueue,
      async (msg) => {
        if (msg !== null) {
          try {
            // Get the message content
            const content = JSON.parse(msg.content.toString());

            // Get the trip data
            const trip = content.data;

            // Send a message for the Trip
            await createMessage({
              purchaseId: trip.purchaseId,
              tripId: trip.id,
              message: "You got a free trip to your home.",
              user: trip.user,
            });

            // Acknowledge the retrieved message
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
