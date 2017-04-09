var Nanocomponent = require('nanocomponent')
var assert = require('assert')

module.exports = CacheElement

function CacheElement (render) {
  if (!(this instanceof CacheElement)) return new CacheElement(render)
  Nanocomponent.call(this)
  assert.equal(typeof render, 'function', 'cache-element: render should be type function')
  this._handleRender = render
}
CacheElement.prototype = Object.create(Nanocomponent.prototype)

CacheElement.prototype._render = function () {
  return this._handleRender()
}

CacheElement.prototype._update = function () {
  return false
}
