var cacheElement = require('./')
var widget = require('./widget')
var test = require('tape')
var html = require('bel')

test('cache', (t) => {
  t.test('should validate input types', (t) => {
    t.plan(2)
    t.throws(cacheElement.bind(null, 123), /function/)
    t.throws(cacheElement.bind(null, () => {}, 123), /function/)
  })

  t.test('should render elements', (t) => {
    t.plan(3)

    var render = cacheElement((name) => html`<div>${name}</div>`)

    var el1 = render('mittens')
    t.equal(String(el1), '<div>mittens</div>', 'init render success')

    var el2 = render('mittens', 'mittens')
    var same1 = el2.isSameNode(el1)
    t.equal(same1, true, 'proxy success')

    var el3 = render('scruffles', 'mittens')
    t.equal(String(el3), '<div>scruffles</div>', 're-render success')
  })

  t.test('should accept a custom compare function', (t) => {
    t.plan(2)
    var create = (name) => html`<div>${name}</div>`
    var compare = (el) => (el === 'humans!')
    var render = cacheElement(create, compare)

    var el1 = render('mittens')
    t.equal(String(el1), '<div>mittens</div>', 'init render success')

    var el2 = render('humans!')
    var same1 = el2.isSameNode(el1)
    t.equal(same1, true, 'proxy success')
  })
})

test('widget', (t) => {
  t.test('should validate input types', (t) => {
    t.plan(1)
    t.throws(widget.bind(null, 123), /object/)
  })

  t.test('should render elements', (t) => {
    t.plan(3)
    var render = createNode()

    var el1 = render('mittens')
    t.equal(String(el1.childNodes[0].data), 'mittens', 'init render success')

    var el2 = render('snowball')
    var same1 = el2.isSameNode(el1)
    t.equal(same1, true, 'proxy success')

    var el3 = render('scruffles')
    var same2 = el3.isSameNode(el1)
    t.equal(same2, true, 'proxy success')

    function createNode () {
      return widget({
        onupdate: function (el, newName) {
          el.innerText = newName
        },
        render: function (name) {
          return html`<div>${name}</div>`
        }
      })
    }
  })
})
