export function createEvent(id, data) {
  return {
    specversion: "1.0",
    type: "com.store.purchase.completed",
    source: "https://intermediary-server.com/store-api",
    id,
    time: new Date().toISOString(),
    datacontenttype: "application/json",
    data, // Purchase data payload
  };
}
