### PORT FORWARD NATS DEPLOYMENT

kubectl port-forward nats-depl-64675bd74b-wss2l 4222:4222
kubectl port-forward nats-depl-64675bd74b-wss2l 8222:8222

Go To localhost:8222/streaming for client health monitoring

Another Imp Url ---> localhost:8222/streaming/channelsz?subs=1

hb-> heart beat
