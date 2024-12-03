import dotenv from "dotenv";

dotenv.config();

export default {
  PULSAR_URL: `pulsar://${process.env.PULSAR_HOST}:${process.env.PULSAR_PORT}`,
  MESSAGING_TOPIC: "messaging_topic",
  MESSAGING_API: process.env.MESSAGING_API,
};
