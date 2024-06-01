'use strict'

// Task: return an error for items with negative price
// Hint: use callback-last-error-first contract

const total = (items, callback) => {
  let result = 0
  try {
    for (const item of items) {
      if (item.price <= 0) {
        throw new Error(
          `Price ${item.name} should be grater than 0 , now its ${item.price}€`,
        )
      }
      result += item.price
    }
    callback(null, result)
  } catch (e) {
    callback(e, result)
  }
}

const electronics = [
  { name: 'Laptop', price: -1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
]

total(electronics, (error, money) => {
  if (error) {
    return console.error(error)
  }
  console.log({ money })
})
