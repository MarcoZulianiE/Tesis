import Trip from "../models/trip.js";
import tripDestinations from "../data/trip-destinations.js";

export async function createTrip(req, res) {
  const randomIndex = Math.floor(Math.random() * tripDestinations.length);
  try {
    const trip = req.body;
    trip.destination = tripDestinations[randomIndex];

    const createdTrip = await Trip.create(req.body);
    res.status(201).json(createdTrip);
  } catch (error) {
    res.status(400).json({ error: "Error creating trip" });
  }
}

export async function getTrips(req, res) {
  try {
    const trips = await Trip.findAll();
    res.status(200).json(trips);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving trips" });
  }
}

export async function cleanTrips(req, res) {
  try {
    Trip.destroy({
      where: {},
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error cleaning trips" });
  }
}
