import express, { json } from "express";
import { config } from "dotenv";
import Purchase from "./models/purchase.js";
import purchaseRoutes from "./routes/purchase-routes.js";

config();

const app = express();
app.use(json());
app.use(purchaseRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("API Store works");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await Purchase.sync();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
});
