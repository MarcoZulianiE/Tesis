import dotenv from "dotenv";
dotenv.config();

export const development = {
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  database: `${process.env.DB_NAME}`,
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  dialect: "postgres",
};
