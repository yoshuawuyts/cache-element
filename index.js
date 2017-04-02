var Nanocomponent = require('nanocomponent')

module.exports = CacheElement

function CacheElement (render) {
  if (!(this instanceof CacheElement)) return new CacheElement(render)
  this._handleRender = render
}
CacheElement.prototype = Object.create(Nanocomponent.prototype)

CacheElement.prototype._render = function () {
  return this._handleRender()
}

CacheElement.prototype._update = function () {
  return false
}
