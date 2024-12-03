import config from "../config/config.js";

export async function createTrip(trip) {
  console.log(
    `Creating trip with transportation API for purchase with id ${trip.purchaseId}`
  );
  try {
    const response = await fetch(`${config.TRANSPORTATION_API}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const transportationData = await response.json();

    console.log(
      `Trip created with id ${transportationData.id} for purchase with id ${transportationData.purchaseId}`
    );
    return transportationData;
  } catch (error) {
    console.error(
      `Error creating trip with transportation API for purchase with id ${trip.purchaseId}`,
      error
    );
    throw error;
  }
}
