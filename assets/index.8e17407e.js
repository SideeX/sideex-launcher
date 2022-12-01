(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const x={},Z=(e,t)=>e===t,ee=Symbol("solid-proxy"),F={equals:Z};let te=z;const p=1,O=2,j={owned:null,cleanups:null,context:null,owner:null};var A=null;let w=null,d=null,g=null,C=null,Q=0;function ne(e,t){const n=d,l=A,i=e.length===0,r=i?j:{owned:null,cleanups:null,context:null,owner:t||l},o=i?e:()=>e(()=>$(()=>I(r)));A=r,d=null;try{return E(o,!0)}finally{d=n,A=l}}function m(e,t,n){const l=q(e,t,!1,p);U(l)}function b(e,t,n){n=n?Object.assign({},F,n):F;const l=q(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,U(l),ie.bind(l)}function $(e){let t,n=d;return d=null,t=e(),d=n,t}function ie(){const e=w;if(this.sources&&(this.state||e))if(this.state===p||e)U(this);else{const t=g;g=null,E(()=>R(this),!1),g=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function se(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=w&&w.running;o&&w.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?g.push(r):C.push(r),r.observers&&G(r)),o||(r.state=p)}if(g.length>1e6)throw g=[],new Error},!1)),t}function U(e){if(!e.fn)return;I(e);const t=A,n=d,l=Q;d=A=e,le(e,e.value,l),d=n,A=t}function le(e,t,n){let l;try{l=e.fn(t)}catch(i){e.pure&&(e.state=p),H(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?se(e,l):e.value=l,e.updatedAt=n)}function q(e,t,n,l=p,i){const r={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:null,pure:n};return A===null||A!==j&&(A.owned?A.owned.push(r):A.owned=[r]),r}function K(e){const t=w;if(e.state===0||t)return;if(e.state===O||t)return R(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)(e.state||t)&&n.push(e);for(let l=n.length-1;l>=0;l--)if(e=n[l],e.state===p||t)U(e);else if(e.state===O||t){const i=g;g=null,E(()=>R(e,n[0]),!1),g=i}}function E(e,t){if(g)return e();let n=!1;t||(g=[]),C?n=!0:C=[],Q++;try{const l=e();return re(n),l}catch(l){g||(C=null),H(l)}}function re(e){if(g&&(z(g),g=null),e)return;const t=C;C=null,t.length&&E(()=>te(t),!1)}function z(e){for(let t=0;t<e.length;t++)K(e[t])}function R(e,t){const n=w;e.state=0;for(let l=0;l<e.sources.length;l+=1){const i=e.sources[l];i.sources&&(i.state===p||n?i!==t&&K(i):(i.state===O||n)&&R(i,t))}}function G(e){const t=w;for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n];(!l.state||t)&&(l.state=O,l.pure?g.push(l):C.push(l),l.observers&&G(l))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();l<i.length&&(r.sourceSlots[o]=l,i[l]=r,n.observerSlots[l]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function H(e){throw e=oe(e),e}function M(e,t){return $(()=>e(t||{}))}function N(){return!0}const fe={get(e,t,n){return t===ee?n:e.get(t)},has(e,t){return e.has(t)},set:N,deleteProperty:N,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:N,deleteProperty:N}},ownKeys(e){return e.keys()}};function P(e){return(e=typeof e=="function"?e():e)==null?{}:e}function ue(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const l=P(e[n])[t];if(l!==void 0)return l}},has(t){for(let n=e.length-1;n>=0;n--)if(t in P(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(P(e[n])));return[...new Set(t)]}},fe)}function ce(e){let t=!1;const n=e.keyed,l=b(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return b(()=>{const i=l();if(i){const r=e.children,o=typeof r=="function"&&r.length>0;return t=n||o,o?$(()=>r(i)):r}return e.fallback})}function ae(e,t,n){let l=n.length,i=t.length,r=l,o=0,s=0,f=t[i-1].nextSibling,u=null;for(;o<i||s<r;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const c=r<l?s?n[s-1].nextSibling:n[r-s]:f;for(;s<r;)e.insertBefore(n[s++],c)}else if(r===s)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[s]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!u){u=new Map;let a=s;for(;a<r;)u.set(n[a],a++)}const c=u.get(t[o]);if(c!=null)if(s<c&&c<r){let a=o,v=1,y;for(;++a<i&&a<r&&!((y=u.get(t[a]))==null||y!==c+v);)v++;if(v>c-s){const _=t[o];for(;s<c;)e.insertBefore(n[s++],_)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}function de(e,t,n){let l;return ne(i=>{l=i,t===document?e():J(t,e(),t.firstChild?null:void 0,n)}),()=>{l(),t.textContent=""}}function B(e,t,n){const l=document.createElement("template");l.innerHTML=e;let i=l.content.firstChild;return n&&(i=i.firstChild),i}function h(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function he(e,t,n={}){const l=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const s=i[r];!s||s==="undefined"||t[s]||(X(e,s,!1),delete n[s])}for(r=0,o=l.length;r<o;r++){const s=l[r],f=!!t[s];!s||s==="undefined"||n[s]===f||!f||(X(e,s,!0),n[s]=f)}return n}function ge(e,t,n={}){const l=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return l.cssText=t;i&&(l.cssText=void 0,n={}),t||(t={});let r,o;for(o in n)t[o]==null&&l.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(l.setProperty(o,r),n[o]=r);return n}function J(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return V(e,t,l,n);m(i=>V(e,t(),i,n),l)}function X(e,t,n){const l=t.trim().split(/\s+/);for(let i=0,r=l.length;i<r;i++)e.classList.toggle(l[i],n)}function V(e,t,n,l,i){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(x.context)return n;if(r==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=S(e,n,l,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(x.context)return n;n=S(e,n,l)}else{if(r==="function")return m(()=>{let s=t();for(;typeof s=="function";)s=s();n=V(e,s,n,l)}),()=>n;if(Array.isArray(t)){const s=[],f=n&&Array.isArray(n);if(T(s,t,n,i))return m(()=>n=V(e,s,n,l,!0)),()=>n;if(x.context){if(!s.length)return n;for(let u=0;u<s.length;u++)if(s[u].parentNode)return n=s}if(s.length===0){if(n=S(e,n,l),o)return n}else f?n.length===0?L(e,s,l):ae(e,n,s):(n&&S(e),L(e,s));n=s}else if(t instanceof Node){if(x.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=S(e,n,l,t);S(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function T(e,t,n,l){let i=!1;for(let r=0,o=t.length;r<o;r++){let s=t[r],f=n&&n[r];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))i=T(e,s,f)||i;else if(typeof s=="function")if(l){for(;typeof s=="function";)s=s();i=T(e,Array.isArray(s)?s:[s],f)||i}else e.push(s),i=!0;else{const u=String(s);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function L(e,t,n){for(let l=0,i=t.length;l<i;l++)e.insertBefore(t[l],n)}function S(e,t,n,l){if(n===void 0)return e.textContent="";const i=l||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(i!==s){const f=s.parentNode===e;!r&&!o?f?e.replaceChild(i,s):e.insertBefore(i,n):f&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var ve={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Ae=ve,k=parseFloat;function ye(e,t){t===void 0&&(t=";");var n;if(Array.isArray(e))n=e.filter(function(i){return i});else{n=[];for(var l in e)e[l]&&n.push(l+":"+e[l])}return n.join(t)}function me(e,t,n){var l,i,r="1em",o,s,f,u="-.125em",c="visible";return n&&(f="center",i="1.25em"),t&&(l=t),e&&(e==="lg"?(s="1.33333em",o=".75em",u="-.225em"):e==="xs"?s=".75em":e==="sm"?s=".875em":s=e.replace("x","em")),{float:l,width:i,height:r,"line-height":o,"font-size":s,"text-align":f,"vertical-align":u,"transform-origin":"center",overflow:c}}function we(e,t,n,l,i,r,o,s){r===void 0&&(r=1),o===void 0&&(o=""),s===void 0&&(s="");var f=1,u=1;return i&&(i==="horizontal"?f=-1:i==="vertical"?u=-1:f=u=-1),ye(["translate("+k(t)*r+o+","+k(n)*r+o+")","scale("+f*k(e)+","+u*k(e)+")",l&&"rotate("+l+s+")"]," ")}function W(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ce="._1yhTRa{animation:_1yhTRa 2s linear 0s infinite}._2dBo7A{animation:_1yhTRa 1s steps(8) infinite}@keyframes _1yhTRa{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",Y={spin:"_1yhTRa",pulse:"_2dBo7A"};W(Ce);const D=B("<svg><path></path></svg>",4,!0),pe=B('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g><g></g></g></svg>');function Se(e){e=ue({scale:1,translateX:0,translateY:0,primaryOpacity:1,secondaryOpacity:.4},e);var t=b(function(){var i;return((i=e.icon)==null?void 0:i.icon)||[0,0,"",[],""]}),n=b(function(){return me(e.size,e.pull,e.fw)}),l=b(function(){return we(e.scale,e.translateX,e.translateY,e.rotate,e.flip,512)});return function(){var i=pe.cloneNode(!0),r=i.firstChild,o=r.firstChild;return J(o,M(ce,{get when(){return typeof t()[4]=="string"},get fallback(){return[function(){var s=D.cloneNode(!0);return m(function(f){var u=t()[4][0],c=e.secondaryColor||e.color||"currentColor",a=e.swapOpacity!=!1?e.primaryOpacity:e.secondaryOpacity,v="translate("+t()[0]/-2+" "+t()[1]/-2+")";return u!==f._v$10&&h(s,"d",f._v$10=u),c!==f._v$11&&h(s,"fill",f._v$11=c),a!==f._v$12&&h(s,"fill-opacity",f._v$12=a),v!==f._v$13&&h(s,"transform",f._v$13=v),f},{_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),s}(),function(){var s=D.cloneNode(!0);return m(function(f){var u=t()[4][1],c=e.primaryColor||e.color||"currentColor",a=e.swapOpacity!=!1?e.secondaryOpacity:e.primaryOpacity,v="translate("+t()[0]/-2+" "+t()[1]/-2+")";return u!==f._v$14&&h(s,"d",f._v$14=u),c!==f._v$15&&h(s,"fill",f._v$15=c),a!==f._v$16&&h(s,"fill-opacity",f._v$16=a),v!==f._v$17&&h(s,"transform",f._v$17=v),f},{_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0}),s}()]},get children(){var s=D.cloneNode(!0);return m(function(f){var u=t()[4],c=e.color||e.primaryColor||"currentColor",a="translate("+t()[0]/-2+" "+t()[1]/-2+")";return u!==f._v$&&h(s,"d",f._v$=u),c!==f._v$2&&h(s,"fill",f._v$2=c),a!==f._v$3&&h(s,"transform",f._v$3=a),f},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s}})),m(function(s){var f,u=(f={fa:!0},f[Y.spin]=e.spin,f[Y.pulse]=e.pulse,f),c=n(),a="0 0 "+t()[0]+" "+t()[1],v="translate("+t()[0]/2+" "+t()[1]/2+")",y=t()[0]/4+" 0",_=l();return s._v$4=he(i,u,s._v$4),s._v$5=ge(i,c,s._v$5),a!==s._v$6&&h(i,"viewBox",s._v$6=a),v!==s._v$7&&h(r,"transform",s._v$7=v),y!==s._v$8&&h(r,"transform-origin",s._v$8=y),_!==s._v$9&&h(o,"transform",s._v$9=_),s},{_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),i}()}var xe="._2RIh6I{display:inline-block;position:relative}._2RIh6I .fa{position:absolute;bottom:0;left:0;right:0;top:0;margin:auto;text-align:center}._2RIh6I .layers-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._2RIh6I .layers-text span{display:inline-block}";W(xe);B("<span></span>");B('<span class="layers-text"><span></span></span>');const be="/sideex-launcher/assets/startTestingBird.f8b5a3e8.svg",Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVDhPY/wPBAxUBExQmmqA/gY+evQYjIkFeMPw8NHjDHPnLwKzkxPjGGytLcFsfACvC48ADYSBc+cvQFn4AYoLQV7btWc/w5u3b+H8b9+/g9lcnJwMcnKyYLaIsDCDm4sjnI8MUAycPW8hw9FjJ6A8/MDayoIhNSkeykMAFC+/eQNxGTEAl1qqJxuMMASF2c7dexnOX7gEFcUOYGFqA4x5G6D3YQBrsvn27RtDVl4xlEcYNNVVwSOIHl7+AUw6e4Hp7iJUFDvg5ORg0FBXYzAyNEBJ8CgGtnf1Mdy8dRvKww/U1VQZKsuKoDwEwOtlQwM9hgVzpoMxiE0MQDFQREQYyoIAd1dnKAuVDQLoamGABUqDgbuLE5iGJVpQ0oABEBvkTRAAGRYdEQpmowOsyYYSQPVkQ2UDGRgAg5R+7B58kT0AAAAASUVORK5CYII=",Be="data:image/png;base64,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";const _e=B('<div class="startTestingDiv flex-center"><img><div class="card step1"><h5>Step 1.</h5><p>Click on the Extension Manager <img> and select SideeX Recorder 3 <img>. </p></div><div class="card step2"><h5>Step 2.</h5><p>Navigate to your targeted website, and start recording. &nbsp;<a class="link-style" href="https://hackmd.io/@sideex/book/%2F%40sideex%2Fquickstart" target="_blank">More Info </a></p></div></div>'),Ne=()=>(()=>{const e=_e.cloneNode(!0),t=e.firstChild,n=t.nextSibling,l=n.firstChild,i=l.nextSibling,r=i.firstChild,o=r.nextSibling,s=o.nextSibling,f=s.nextSibling,u=n.nextSibling,c=u.firstChild,a=c.nextSibling,v=a.firstChild,y=v.nextSibling;return y.firstChild,h(t,"src",be),h(o,"src",Ee),h(f,"src",Be),J(y,M(Se,{icon:Ae}),null),e})();de(()=>M(Ne,{}),document.getElementById("root"));
