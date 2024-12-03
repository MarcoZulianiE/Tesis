import config from "../config/config.js";

export async function getNewPurchases(lastCheckedDate) {
  console.log("Getting new purchases from store API");
  const formatedDate = lastCheckedDate.toISOString().slice(0, 19) + "Z";
  try {
    const response = await fetch(
      `${config.STORE_API}/purchases?lastChecked=${formatedDate}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Received ${data.length} new purchases from store API`);
    return data;
  } catch (error) {
    console.error(
      `Error retrieving new purchases from store API since ${formatedDate}`,
      error
    );
    throw error;
  }
}
