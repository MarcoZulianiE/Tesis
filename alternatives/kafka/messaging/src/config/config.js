import dotenv from "dotenv";

dotenv.config();

export default {
  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: process.env.KAFKA_PORT,
  MESSAGING_TOPIC: "messaging_topic",
  MESSAGING_API: process.env.MESSAGING_API,
};
