var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l={firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),delayAmount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")},i={firstDelay:0,delayStep:0,delayAmount:0};function u(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>{setTimeout((()=>n?o(r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)):l(r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))),t)}))}l.form.addEventListener("submit",(function(e){if(e.preventDefault(),function(){i.firstDelay=Number(l.firstDelay.value),i.delayStep=Number(l.delayStep.value),i.delayAmount=Number(l.delayAmount.value)}(),i.firstDelay<0||i.delayStep<0||i.delayAmount<=0)return r.Notify.info("Введите данные больше нуля");!function({firstDelay:e,delayStep:t,delayAmount:n}){let o=e;for(let e=1;e<=n;e++){u(e,o).then((e=>e)).catch((e=>e)),o+=t}}(i)}));
//# sourceMappingURL=03-promises.8861d2f9.js.map
