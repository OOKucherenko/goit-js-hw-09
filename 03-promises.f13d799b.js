var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");function i(e,t){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const{elements:{delay:t,step:o,amount:r}}=e.currentTarget;l(Number(t.value),Number(o.value),Number(r.value)),e.currentTarget.reset()}));const l=(e,t,o)=>{for(let r=1,l=e;r<=o;r+=1,l+=t)i(r,l).then((({position:e,delay:t})=>{n.Notify.success(` Fulfilled promise ${e} in ${t}ms`,{timeout:2500})})).catch((({position:e,delay:t})=>{n.Notify.failure(`Rejected promise ${e} in ${t}ms`,{timeout:2500})}))};
//# sourceMappingURL=03-promises.f13d799b.js.map