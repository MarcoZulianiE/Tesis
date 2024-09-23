export function createEvent(id, data) {
  return {
    specversion: "1.0",
    type: "com.uber.trip.created",
    source: "https://intermediary-server.com/uber-api",
    id,
    time: new Date().toISOString(),
    datacontenttype: "application/json",
    data, // Trip data payload
  };
}
