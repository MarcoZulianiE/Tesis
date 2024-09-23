import dotenv from "dotenv";

dotenv.config();

export default {
  PULSAR_URL: `pulsar://${process.env.PULSAR_HOST}:${process.env.PULSAR_PORT}`,
  WHATSAPP_TOPIC: "whatsapp_topic",
  WHATSAPP_API: process.env.WHATSAPP_API,
};
