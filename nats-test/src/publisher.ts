import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';
console.clear();

// stan is just a community convention of calling client
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
});

stan.on('connect', () => {
  console.log('Publisher connected on nats');

  const publisher = new TicketCreatedPublisher(stan);
  try {
    publisher.publish({ id: '123', title: 'concert', price: 20 });
  } catch (err) {
    console.error(err);
  }
  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20
  // });

  // stan.publish('ticket:created', data, () => {
  //   console.log('Event Published');
  // });
});
