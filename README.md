# genoset-216

Use this to determine if you have two copies of the ApoE-ε4 allele, which carries an increased risk of Alzheimer's disease and cardiovascular (heart disease), but is protective against Hepatitis C-induced liver damage, as per [gs216](http://www.snpedia.com/index.php/Gs216)

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var increasedRisk = require('genoset-216');
var dna = require('./dna.json');

console.log(increasedRisk(dna));
// → `true` or `false`
```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request

## License

_genoset-216_ is available under the [MIT](https://mths.be/mit) license.
