import dotenv from "dotenv";

dotenv.config();

export default {
  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: process.env.KAFKA_PORT,
  UBER_TOPIC: "uber_topic",
  STORE_API: process.env.STORE_API,
};
