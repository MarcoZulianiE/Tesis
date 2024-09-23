import dotenv from "dotenv";

dotenv.config();

export default {
  PULSAR_URL: `pulsar://${process.env.PULSAR_HOST}:${process.env.PULSAR_PORT}`,
  UBER_TOPIC: "uber_topic",
  WHATSAPP_TOPIC: "whatsapp_topic",
  UBER_API: process.env.UBER_API,
};
