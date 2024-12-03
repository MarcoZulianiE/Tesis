export function createEvent(id, data) {
  return {
    specversion: "1.0",
    type: "com.transportation.trip.created",
    source: "https://intermediary-server.com/transportation-api",
    id,
    time: new Date().toISOString(),
    datacontenttype: "application/json",
    data, // Trip data payload
  };
}
