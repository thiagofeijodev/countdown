(()=>{"use strict";var e,t,r,n,a={1448:function(e,t,r){r.d(t,{A:()=>s});var n=r(3815),a=r.n(n),i=r(6717),o=r.n(i)()(a());o.push([e.id,`body {
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
`,""]);let s=o},1459:function(e,t,r){var n=r(8931),a=r(3431);let i=()=>(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"countdownBox",children:[(0,n.jsx)("h1",{className:"title",children:"Welcome to Countdown"}),(0,n.jsx)("p",{className:"info",children:"A minimal, ad-free countdown. Pick a date and time below to start counting down — we'll handle the rest."}),(0,n.jsxs)("form",{className:"formCountdowndate",onSubmit:e=>{e.preventDefault();let t=e.target.countdowndate.value;if(t){let e=new Date(t).toISOString();window.location.search=`?date=${e}`}},children:[(0,n.jsx)("label",{htmlFor:"countdowndate",children:"Select target date and time"}),(0,n.jsx)("input",{type:"datetime-local",id:"countdowndate",name:"countdowndate"}),(0,n.jsx)("input",{type:"submit",value:"Start countdown"})]}),(0,n.jsx)("p",{className:"example",children:"Example: 2025-12-31 23:59 — perfect for New Year's or project deadlines."})]})});var o=r(3587);let s=e=>{let{targetDateTime:t}=e,r=(e=>{let[t,r]=(0,o.useState)(new Date),n=(0,o.useMemo)(()=>{let r=(null==e?void 0:e.getTime())-t.getTime();if(r<=0)return null;let n=Math.floor(r/1e3),a=Math.trunc(r/864e5),i=Math.trunc((r-864e5*a)/36e5)%60;return{days:a,hours:i,minutes:Math.trunc(r/6e4)%60,seconds:n%60}},[e,t]);return(0,o.useEffect)(()=>{if(!n)return;let e=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(e)},[]),n})(t);return r?(0,n.jsx)("div",{className:"countdownBox",children:(0,n.jsxs)("div",{className:"timeDisplay",children:[!!r.days&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:r.days}),(0,n.jsx)("span",{className:"timeLabel",children:"days"})]}),(0,n.jsx)("div",{className:"separator",children:":"})]}),!!r.hours&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:r.hours}),(0,n.jsx)("span",{className:"timeLabel",children:"hours"})]}),(0,n.jsx)("div",{className:"separator",children:":"})]}),(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:r.minutes}),(0,n.jsx)("span",{className:"timeLabel",children:"minutes"})]}),(0,n.jsx)("div",{className:"separator",children:":"}),(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:r.seconds.toString().padStart(2,"0")}),(0,n.jsx)("span",{className:"timeLabel",children:"seconds"})]})]})}):(0,n.jsxs)("div",{className:"expiredBox",children:[(0,n.jsx)("h2",{className:"expiredTitle",children:"Time's Up! ⏰"}),(0,n.jsx)("p",{className:"expiredMessage",children:"The countdown has reached zero."})]})},l=e=>{let{targetDateTime:t}=e;return(0,n.jsx)("div",{className:"selectedDate",children:(0,n.jsx)("div",{className:"selectedValue",children:t.toLocaleString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZoneName:"short"})})})};var d=r(5072),c=r.n(d),m=r(206),u=r.n(m),p=r(7659),x=r.n(p),h=r(5056),f=r.n(h),g=r(540),b=r.n(g),v=r(1113),w=r.n(v),j=r(1448),y={};y.styleTagTransform=w(),y.setAttributes=f(),y.insert=x().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=b(),c()(j.A,y),j.A&&j.A.locals&&j.A.locals;let N=document.getElementById("root");(0,a.createRoot)(N).render((0,n.jsx)(()=>{let e,t,{error:r,targetDateTime:a,onCleanDate:d}=(t=new Date(e=new URLSearchParams(window.location.search).get("date")),{error:(0,o.useMemo)(()=>e?isNaN(t.getTime())?"Invalid date format. Please use YYYY-MM-DD format.":void 0:"No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.",[t,e]),onCleanDate:()=>{window.location.search=""},targetDateTime:t});return r?(0,n.jsx)(i,{}):(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"title",children:"Countdown Timer"}),(0,n.jsx)(s,{targetDateTime:a}),(0,n.jsx)(l,{targetDateTime:a}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)("button",{onClick:d,children:"Reset"})})]})},{})),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js")}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return a[e].call(r.exports,r,r.exports,o),r.exports}o.m=a,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,e=[],o.O=(t,r,n,a)=>{if(r){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,n,a];return}for(var s=1/0,i=0;i<e.length;i++){for(var[r,n,a]=e[i],l=!0,d=0;d<r.length;d++)(!1&a||s>=a)&&Object.keys(o.O).every(e=>o.O[e](r[d]))?r.splice(d--,1):(l=!1,a<s&&(s=a));if(l){e.splice(i--,1);var c=n();void 0!==c&&(t=c)}}return t},o.rv=()=>"1.5.8",t={889:0},o.O.j=e=>0===t[e],r=(e,r)=>{var n,a,[i,s,l]=r,d=0;if(i.some(e=>0!==t[e])){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(e&&e(r);d<i.length;d++)a=i[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},(n=self.webpackChunkcountdown=self.webpackChunkcountdown||[]).forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n)),o.ruid="bundler=rspack@1.5.8";var s=o.O(void 0,["630"],function(){return o(1459)});s=o.O(s)})();