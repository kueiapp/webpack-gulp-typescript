// ES6 TypeScript --> tsc --> ES5 JavaScript
// ES6 TypeScript --> webpack --> ES5
import hello from './hello.module'
import str from './string.module'
hello()
console.log("load from: " + str)

const hi:string = "Hi TypeScript"
let no:number = 100
console.log(`${hi}, Mr.${no}`);