import config from "../config/config.js";

export async function getNewPurchases(lastCheckedDate) {
  const formatedDate = lastCheckedDate.toISOString().slice(0, 19) + "Z";
  try {
    const response = await fetch(
      `${config.STORE_API}/purchases?lastChecked=${formatedDate}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
