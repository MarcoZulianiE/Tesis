import dotenv from "dotenv";

dotenv.config();

export default {
  PULSAR_URL: `pulsar://${process.env.PULSAR_HOST}:${process.env.PULSAR_PORT}`,
  UBER_TOPIC: "uber_topic",
  STORE_API: process.env.STORE_API,
};
