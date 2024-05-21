'use strict';

// Task: create Promise-returning adapter function `totalAsync`
// Do not change function `total` contract, just call `total` from
// `totalAsync` and convert contracts

// Should not be changed
const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      callback(new Error('Negative price is not allowed'));
      return;
    }
    result += item.price;
  }
  callback(null, result);
};

const totalAsync = (items) => {
  return new Promise((resolve, reject) => {
    (total(items, (error, money) => {
      if (error) return reject(error);
      else return resolve(money);
    }));
  });
};
// const totalAsync = (items) => new Promise...

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 }
];

// Also rewrite call, use .then instead of callback
// total(electronics, (error, money) => {
//   if (error) console.error({ error });
//   else console.log({ money });
// });

(async () => {
  const money = await totalAsync(electronics).catch(error => {
    console.error({ error });
    // throw error; // Re-throw the error if you need to propagate it further
  });
  console.log({ money });
})();



