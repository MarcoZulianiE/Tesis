import Purchase from "../models/purchase.js";

export async function createPurchase(req, res) {
  try {
    res.status(201).json(await Purchase.create(req.body));
  } catch (error) {
    res.status(400).json({ error: "Error creating purchase" });
  }
}

export async function getPurchases(req, res) {
  const lastChecked = req.query.lastChecked;
  try {
    const purchases = await Purchase.findAll();

    if (lastChecked) {
      res
        .status(200)
        .json(
          purchases.filter(
            (purchase) => purchase.createdAt > new Date(lastChecked)
          )
        );
    } else {
      res.status(200).json(purchases);
    }
  } catch (error) {
    res.status(400).json({ error: "Error retrieving purchases" });
  }
}

export async function cleanPurchases(req, res) {
  try {
    Purchase.destroy({
      where: {},
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error cleaning purchases" });
  }
}
