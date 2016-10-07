module.exports = cacheElement

function cacheElement (fn) {
  const store = {}

  return function render () {
    const args = Array.from(arguments)
    const argsAreTheSame = JSON.stringify(store.prev) === JSON.stringify(args)

    if (argsAreTheSame) return store.el

    store.prev = args
    store.el = fn.apply(this, args)
    return store.el
  }
}

