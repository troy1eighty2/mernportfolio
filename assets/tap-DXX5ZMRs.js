import{g as u}from"./index-8bdvDzg8.js";import{r as l}from"./yaml-pHjxJgpq.js";function f(r,t){for(var e=0;e<t.length;e++){const a=t[e];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in r)){const n=Object.getOwnPropertyDescriptor(a,o);n&&Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,s;function g(){if(s)return i;s=1;var r=l();i=t,t.displayName="tap",t.aliases=[];function t(e){e.register(r),e.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:e.languages.yaml,alias:"language-yaml"}}}return i}var p=g();const c=u(p),b=f({__proto__:null,default:c},[p]);export{b as t};
