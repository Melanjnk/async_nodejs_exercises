'use strict';

// Task: rewrite this synchronous code to asynchronous
// Promise-returning function with `setTimeout`

const sleepAsync = (msec) =>
  new Promise((cb) => {
    setTimeout(() => {
      console.log('prepare cb');
      cb();
      console.log('after cb');
    }, msec);
  });

console.log({ start: new Date().toISOString() });
console.log('Wait 3 sec...');
const DELAY = 3000;
sleepAsync(DELAY).then(() => {
  console.log({ finish: new Date().toISOString() });
});
