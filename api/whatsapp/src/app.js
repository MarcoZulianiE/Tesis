import express, { json } from "express";
import { config } from "dotenv";
import Message from "./models/message.js";
import messageRoutes from "./routes/message-routes.js";

config();

const app = express();
app.use(json());
app.use(messageRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("API WhatsApp works");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await Message.sync();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
});
