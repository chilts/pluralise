# pluralise #

This package does one thing simply. It does not try to be clever.

This package is considered STABLE therefore may not be updated frequently. It works really well, is small, and there
are no open issues. It is used in a number of projects (hence the download count). Please use with all your might but
let me know if you find any bugs. Bugs will be fixed and published quickly. :) Thanks,
[@andychilton](https://twitter.com/andychilton).

## Install ##

```sh
npm install --save pluralise
```

## Synopsis ##

Firstly, require the library:

```js
const pluralise = require('pluralise')
```

There are two functions for two general cases. The first case is when you just want the plural of a word:

```js
pluralise(0, 'book') // -> 'books'
pluralise(1, 'book') // -> 'book'
pluralise(2, 'book') // -> 'books'
```

Just passing the `count` and the `singular` version of the word will result in just the word (if count is 1)
or the word plus an `s` when count is !== 1. ie. for zero or 2 and above.

Other times you want to be specific about what the plural actually is. Since this package contains no logic related to
sheep, wolves or lorries then you need to pass it yourself:

```js
pluralise(0, 'wolf', 'wolves') // -> 'wolves'
pluralise(1, 'wolf', 'wolves') // -> 'wolf'
pluralise(2, 'wolf', 'wolves') // -> 'wolves'
```

The second case is when you want to include the number with the singular/plural. This also has the case where you might
want to say something different when you have no things. For example you might say 'no wolves', '1 wolf' or '2
wolves'. Just use the `%` symbol for where you would like the number to appear:

```js
pluralise.withCount(0, '% wolf', '% wolves', 'no wolves') // -> 'no wolves'
pluralise.withCount(1, '% wolf', '% wolves', 'no wolves') // -> '1 wolf'
pluralise.withCount(2, '% wolf', '% wolves', 'no wolves') // -> '2 wolves'
```

If you have a regular plural such as 'item' and 'items', then you just miss the `plural` out. It will take on the
singular form with an added 's' (or just pass the singular form twice):

```js
pluralise.withCount(0, '% horse', null, 'no horses') // -> 'no horses'
pluralise.withCount(1, '% horse', null, 'no horses') // -> '1 horse'
pluralise.withCount(2, '% horse', null, 'no horses') // -> '2 horses'

pluralise.withCount(0, '% horse', '% horse', 'no horses') // -> 'no horses'
pluralise.withCount(1, '% horse', '% horse', 'no horses') // -> '1 horse'
pluralise.withCount(2, '% horse', '% horse', 'no horses') // -> '2 horses'
```

That's all `pluralise(Infinity, 'folk')`.

## Lodash ##

With [lodash](https://www.npmjs.com/package/lodash), you can `.partialRight()` so that you could create a module such
as this:

```js
const lodash = require('lodash')
const pluralise = require('pluralise')

module.exports = {
  cow   : lodash.partialRight(pluralise, 'cow'),
  sheep : lodash.partialRight(pluralise, 'sheep', 'sheep'),
  wolf  : lodash.partialRight(pluralise, 'wolf', 'wolves'),
}
```

Which you can then use as follows:

```js
const plurals = require('path/to/above-file.js')

const cows = 3

console.log('Farmer Brown has %d %s', cows, plurals.cow(cows))
// -> 'Farmer Brown has 3 cows'
```

The same can be done `withCount`:

```
module.exports = {
  cow   : lodash.partialRight(pluralise.withCount, '% cow', null, 'no cows'),
  sheep : lodash.partialRight(pluralise.withCount, '% sheep', '% sheep', 'no sheep'),
  wolf  : lodash.partialRight(pluralise.withCount, '% wolf', '% wolves', 'no wolves'),
}
```

## Author ##

```
$ npx chilts

   ╒════════════════════════════════════════════════════╕
   │                                                    │
   │   Andrew Chilton (Personal)                        │
   │   -------------------------                        │
   │                                                    │
   │          Email : andychilton@gmail.com             │
   │            Web : https://chilts.org                │
   │        Twitter : https://twitter.com/andychilton   │
   │         GitHub : https://github.com/chilts         │
   │         GitLab : https://gitlab.org/chilts         │
   │                                                    │
   │   Apps Attic Ltd (My Company)                      │
   │   ---------------------------                      │
   │                                                    │
   │          Email : chilts@appsattic.com              │
   │            Web : https://appsattic.com             │
   │        Twitter : https://twitter.com/AppsAttic     │
   │         GitLab : https://gitlab.com/appsattic      │
   │                                                    │
   │   Node.js / npm                                    │
   │   -------------                                    │
   │                                                    │
   │        Profile : https://www.npmjs.com/~chilts     │
   │           Card : $ npx chilts                      │
   │                                                    │
   ╘════════════════════════════════════════════════════╛
```

## License ##

MIT - http://chilts.mit-license.org/2015/

(Ends)
