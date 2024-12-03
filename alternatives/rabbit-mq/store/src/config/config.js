import dotenv from "dotenv";

dotenv.config();

export default {
  RABBITMQ_URL: `${process.env.RABBITMQ_PROTOCOL}://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
  TRANSPORTATION_QUEUE: "transportation_queue",
  STORE_API: process.env.STORE_API,
};
