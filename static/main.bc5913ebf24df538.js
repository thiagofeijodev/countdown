(()=>{"use strict";var e,t,r,a,n={1448:function(e,t,r){r.d(t,{A:()=>s});var a=r(3815),n=r.n(a),i=r(6717),o=r.n(i)()(n());o.push([e.id,`body {
  margin: 0px;
  font-family: 'Lato', sans-serif;
  background-color: #0f172a;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.countdownBox {
  background-color: #1e293b;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #334155;
}

.timeDisplay {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
}

.timeUnit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeValue {
  font-size: 10vw;
  font-weight: bold;
  color: #60a5fa;
  line-height: 1;
}

.timeLabel {
  font-size: 4vw;
  color: #94a3b8;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.separator {
  font-size: 3rem;
  color: #64748b;
  font-weight: bold;
}

.expiredBox {
  background-color: #dc2626;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.25);
}

.expiredTitle {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.expiredMessage {
  font-size: 1.2rem;
  opacity: 0.9;
}

.errorBox {
  background-color: #dc2626;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.25);
}

.errorTitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.errorMessage {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.example {
  font-size: 0.9rem;
  opacity: 0.8;
}

.info {
  color: #94a3b8;
  font-size: 0.9rem;
  text-align: center;
}

.formCountdowndate {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formCountdowndate > input[type='submit'] {
  cursor: pointer;
  background-color: #764ba2;
  border-radius: 4px;
  color: white;
  border: 0px solid;
  height: 30px;
}

.button {
  text-align: center;
}

.button > button {
  cursor: pointer;
  background-color: #764ba2;
  border-radius: 4px;
  color: white;
  border: 0px solid;
  height: 30px;
  margin: 0 auto;
}

.selectedDate {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #94a3b8;
}
`,""]);let s=o},1459:function(e,t,r){var a=r(8931),n=r(3431);let i=e=>{let{updateDate:t}=e;return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"countdownBox",children:[(0,a.jsx)("h1",{className:"title",children:"Welcome to Countdown"}),(0,a.jsx)("p",{className:"info",children:"A minimal, ad-free countdown. Pick a date and time below to start counting down — we'll handle the rest."}),(0,a.jsxs)("form",{className:"formCountdowndate",onSubmit:e=>{e.preventDefault();let r=e.target.countdowndate.value;r&&t(r)},children:[(0,a.jsx)("label",{htmlFor:"countdowndate",children:"Select target date and time"}),(0,a.jsx)("input",{type:"datetime-local",id:"countdowndate",name:"countdowndate"}),(0,a.jsx)("input",{type:"submit",value:"Start countdown"})]}),(0,a.jsx)("p",{className:"example",children:"Example: 2025-12-31 23:59 — perfect for New Year's or project deadlines."})]})})};var o=r(3587);let s=e=>{let{targetDateTime:t}=e,r=(e=>{let[t,r]=(0,o.useState)(new Date),a=(0,o.useMemo)(()=>{let r=(null==e?void 0:e.getTime())-t.getTime();if(r<=0)return null;let a=Math.floor(r/1e3),n=Math.trunc(r/864e5),i=Math.trunc((r-864e5*n)/36e5)%60;return{days:n,hours:i,minutes:Math.trunc(r/6e4)%60,seconds:a%60}},[e,t]);return(0,o.useEffect)(()=>{if(!a)return;let e=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(e)},[]),a})(t);return r?(0,a.jsx)("div",{className:"countdownBox",children:(0,a.jsxs)("div",{className:"timeDisplay",children:[!!r.days&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"timeUnit",children:[(0,a.jsx)("span",{className:"timeValue",children:r.days}),(0,a.jsx)("span",{className:"timeLabel",children:"days"})]}),(0,a.jsx)("div",{className:"separator",children:":"})]}),!!r.hours&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"timeUnit",children:[(0,a.jsx)("span",{className:"timeValue",children:r.hours.toString().padStart(2,"0")}),(0,a.jsx)("span",{className:"timeLabel",children:"hours"})]}),(0,a.jsx)("div",{className:"separator",children:":"})]}),(0,a.jsxs)("div",{className:"timeUnit",children:[(0,a.jsx)("span",{className:"timeValue",children:r.minutes.toString().padStart(2,"0")}),(0,a.jsx)("span",{className:"timeLabel",children:"minutes"})]}),(0,a.jsx)("div",{className:"separator",children:":"}),(0,a.jsxs)("div",{className:"timeUnit",children:[(0,a.jsx)("span",{className:"timeValue",children:r.seconds.toString().padStart(2,"0")}),(0,a.jsx)("span",{className:"timeLabel",children:"seconds"})]})]})}):(0,a.jsxs)("div",{className:"expiredBox",children:[(0,a.jsx)("h2",{className:"expiredTitle",children:"Time's Up! ⏰"}),(0,a.jsx)("p",{className:"expiredMessage",children:"The countdown has reached zero."})]})},l=e=>{let{targetDateTime:t}=e;return(0,a.jsx)("div",{className:"selectedDate",children:(0,a.jsx)("div",{className:"selectedValue",children:t.toLocaleString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZoneName:"short"})})})};var d=r(5072),c=r.n(d),m=r(206),u=r.n(m),p=r(7659),x=r.n(p),h=r(5056),f=r.n(h),g=r(540),b=r.n(g),v=r(1113),w=r.n(v),j=r(1448),y={};y.styleTagTransform=w(),y.setAttributes=f(),y.insert=x().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=b(),c()(j.A,y),j.A&&j.A.locals&&j.A.locals;let N=document.getElementById("root");(0,n.createRoot)(N).render((0,a.jsx)(()=>{let{error:e,targetDateTime:t,updateDate:r,onCleanDate:n}=(()=>{let e=new URLSearchParams(window.location.search).get("date"),[t,r]=(0,o.useState)(e),a=new Date(t),n=(0,o.useMemo)(()=>t?isNaN(a.getTime())?"Invalid date format. Please use YYYY-MM-DD format.":void 0:"No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.",[a,t]);return{error:n,onCleanDate:(0,o.useCallback)(()=>{r(""),window.history.replaceState({},"","?date=")},[]),updateDate:(0,o.useCallback)(e=>{r(e);let t=new Date(e).toISOString();window.history.replaceState({},"",`?date=${t}`)},[]),targetDateTime:a}})();return e?(0,a.jsx)(i,{updateDate:r}):(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{className:"title",children:"Countdown Timer"}),(0,a.jsx)(s,{targetDateTime:t}),(0,a.jsx)(l,{targetDateTime:t}),(0,a.jsx)("div",{className:"button",children:(0,a.jsx)("button",{onClick:n,children:"Reset"})})]})},{})),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js")}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,e=[],o.O=(t,r,a,n)=>{if(r){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[r,a,n];return}for(var s=1/0,i=0;i<e.length;i++){for(var[r,a,n]=e[i],l=!0,d=0;d<r.length;d++)(!1&n||s>=n)&&Object.keys(o.O).every(e=>o.O[e](r[d]))?r.splice(d--,1):(l=!1,n<s&&(s=n));if(l){e.splice(i--,1);var c=a();void 0!==c&&(t=c)}}return t},o.rv=()=>"1.5.8",t={889:0},o.O.j=e=>0===t[e],r=(e,r)=>{var a,n,[i,s,l]=r,d=0;if(i.some(e=>0!==t[e])){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var c=l(o)}for(e&&e(r);d<i.length;d++)n=i[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},(a=self.webpackChunkcountdown=self.webpackChunkcountdown||[]).forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a)),o.ruid="bundler=rspack@1.5.8";var s=o.O(void 0,["630"],function(){return o(1459)});s=o.O(s)})();