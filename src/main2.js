// ES6 JavaScript --> babel --> ES5 JavaScript
// ES6 JavaScript --> webpack --> ES5 and bundle
import hello from './hello.module.js'
import str from './string.module.js'
hello()
console.log("load from: " + str)

const hi = "Hi TypeScript"
let no = 100
console.log(`${hi}, Mr.${no}`);