import dotenv from "dotenv";

dotenv.config();

export default {
  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: process.env.KAFKA_PORT,
  WHATSAPP_TOPIC: "whatsapp_topic",
  WHATSAPP_API: process.env.WHATSAPP_API,
};
