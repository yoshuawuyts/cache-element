# cache-element [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Cache an HTML element that's used in DOM diffing algorithms that respect
`element.isSameNode()`.

## Usage
```js
var cache = require('cache-element')
var html = require('bel')

var nav = cache(function () {
  return html`
    <nav>
      <div>All content</div>
      <div>In here</div>
      <div>Is static</div>
      <div>And doesn't need to be diffed</div>
      <div>On every render</div>
    </nav>
  `
})

document.body.appendChild(nav.render())
```

## API
### `element = cache(render)`
Create a new instance of cache-element. Takes a render function that is called
when `element.render()` is called and a prior call doesn't have a node mounted
on the DOM.

### `element.render()`
Render the element to append it on the DOM. As long as the Node is on the DOM,
subsequent calls to `element.render()` will return an empty node that has a
`.isSameNode()` method on it so diffing algorithms that respect this property
will skip diffing this node.

## Installation
```sh
$ npm install cache-element
```

## See Also
- [yoshuawuyts/nanomorph](https://github.com/yoshuawuyts/nanomorph)
- [yoshuawuyts/nanocomponent](https://github.com/yoshuawuyts/nanocomponent)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/cache-element.svg?style=flat-square
[3]: https://npmjs.org/package/cache-element
[4]: https://img.shields.io/travis/yoshuawuyts/cache-element/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/cache-element
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/cache-element/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/cache-element
[8]: http://img.shields.io/npm/dm/cache-element.svg?style=flat-square
[9]: https://npmjs.org/package/cache-element
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[bel]: https://github.com/shama/bel
[md]: https://github.com/patrick-steele-idem/morphdom
[210]: https://github.com/patrick-steele-idem/morphdom/pull/81
