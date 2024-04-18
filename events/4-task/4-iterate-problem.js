'use strict';

// Task: use `on` and `AsyncIterator` to iterate all items
// in purchase emitted `into EventEmitter`

const { EventEmitter, on } = require('node:events');

const purchase = new EventEmitter();

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

const iterator = on(purchase, 'add');

// @todo Ask Timur
// AsyncIterator to iterate over items emitted into purchase
const asyncIterator = iterator[Symbol.asyncIterator]();

const consumeItems = async () => {
  while (true) {
    // const { value, done } = await iterator.next();
    const { value, done } = await asyncIterator.next();
    if (done) {
      break;
    }
    console.dir(value);
  }
};

consumeItems();

for (const item of electronics) {
  purchase.emit('add', item);
}
