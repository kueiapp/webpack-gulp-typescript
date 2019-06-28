"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_module_1 = require("./hello.module");
var string_module_1 = require("./string.module");
hello_module_1.default();
console.log("load from: " + string_module_1.default);
var hi = "Hi TypeScript";
var no = 100;
console.log(hi + ", Mr." + no);
//# sourceMappingURL=main.js.map