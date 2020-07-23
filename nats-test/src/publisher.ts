import nats from "node-nats-streaming";
console.clear();

// stan is just a community convention of calling client
const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222"
});

stan.on("connect", () => {
  console.log("Publisher connected on nats");
  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event Published");
  });
});
