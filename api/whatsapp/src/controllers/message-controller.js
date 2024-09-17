import Message from "../models/message.js";

export async function createMessage(req, res) {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: "Error creating message" });
  }
}

export async function getMessages(req, res) {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving messages" });
  }
}

export async function cleanMessages(req, res) {
  try {
    Message.destroy({
      where: {},
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error cleaning messages" });
  }
}
