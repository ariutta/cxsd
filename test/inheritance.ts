import * as Classes from './xmlns/inheritence';

const a = new Classes.A();
a.aaa='aaa';
const b = new Classes.B();
b.aaa='aaa';
b.bbb='bbb';
const c= new Classes.C();

// Assign base type, no probelm
c.a = a;

// Assign extension type,
c.a = b;
