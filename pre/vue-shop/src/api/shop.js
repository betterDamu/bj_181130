/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "iPad 5 Mini", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "iPad 6 Mini", "price": 19.99, "inventory": 5}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 1000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Date.now()%2===0)
        ? cb()
        : errorCb()
    }, 1000)
  }
}
