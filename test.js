const test = require('tape')
const cacheElement = require('./')

test('cache', function (t) {
  var render = cacheElement(function (el) {
    return el
  })

  t.same(render('alice'), 'alice')
  t.same(render('alice'), 'alice')
  t.same(render('bob'), 'bob')
})

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(cacheElement)
})
