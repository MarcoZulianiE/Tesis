import config from "../config/config.js";

export async function createMessage(message) {
  console.log(
    `Creating message with messaging API for purchase id ${message.purchaseId}`
  );
  try {
    const response = await fetch(`${config.MESSAGING_API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const maessageData = await response.json();

    console.log(
      `Message created with id ${maessageData.id} for purchase id ${maessageData.purchaseId}`
    );
    return maessageData;
  } catch (error) {
    console.error(
      `Error creating message with messaging API for purchase id ${message.purchaseId}`,
      error
    );
    throw error;
  }
}
