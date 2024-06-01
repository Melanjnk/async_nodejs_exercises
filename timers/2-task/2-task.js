'use strict';

const { setTimeout: setTimeoutPromised } = require('node:timers/promises');
// Task: rewrite this synchronous code to asynchronous
// using `setTimeout` from 'node:timers/promises'

const sleepAsync = (msec) => {
  return setTimeoutPromised(msec);
};

console.log({ start: new Date().toISOString() });
console.log('Wait 3 sec...');

const DELAY = 3000;

sleepAsync(DELAY).then(() => {
  console.log({ finish: new Date().toISOString() });
});
