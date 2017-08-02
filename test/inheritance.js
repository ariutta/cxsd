"use strict";
exports.__esModule = true;
var Classes = require("./xmlns/inheritence");
var a = new Classes.A();
a.aaa = 'aaa';
var b = new Classes.B();
b.aaa = 'aaa';
b.bbb = 'bbb';
var c = new Classes.C();
// Assign base type, no probelm
c.a = a;
// Assign extension type,
c.a = b;
