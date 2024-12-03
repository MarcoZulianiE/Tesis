import dotenv from "dotenv";

dotenv.config();

export default {
  PULSAR_URL: `pulsar://${process.env.PULSAR_HOST}:${process.env.PULSAR_PORT}`,
  TRANSPORTATION_TOPIC: "transportation_topic",
  MESSAGING_TOPIC: "messaging_topic",
  TRANSPORTATION_API: process.env.TRANSPORTATION_API,
};
