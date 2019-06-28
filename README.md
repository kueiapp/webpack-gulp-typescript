To implement of bulding TypeScript code and compile to ES5 JavaScript then
============
## setup by the commands below #
1. Compile all TypeScript codes to ES5 Node.js codes with tsconfig.json file
> tsc
2. Compile and bundle all TypeScript or JavaScript codes and output one file seperately on one step
> npm run build
3. Transpile ES5 JavaScript codes and bundle for browser version with Browserify
> gulp browserify
4. or you can transpile ES5 JavaScript code to browser version
* please do "npm i browserify -g" for installation first
> browserify ./dist/js/main2.bundle.js > ./dist/js/main2.browserify.js
