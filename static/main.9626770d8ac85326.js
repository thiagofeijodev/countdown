(()=>{"use strict";var e,t,r,n,a={1448:function(e,t,r){r.d(t,{A:()=>s});var n=r(3815),a=r.n(n),o=r(6717),i=r.n(o)()(a());i.push([e.id,`body {
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
  margin-bottom: 2rem;
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
`,""]);let s=i},8241:function(e,t,r){var n={};r.r(n),r.d(n,{default:()=>j});var a=r(8931),o=r(3431),i=r(5072),s=r.n(i),l=r(206),d=r.n(l),c=r(7659),m=r.n(c),u=r(5056),p=r.n(u),x=r(540),h=r.n(x),f=r(1113),b=r.n(f),g=r(1448),v={};v.styleTagTransform=b(),v.setAttributes=p(),v.insert=m().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=h(),s()(g.A,v);let j=g.A&&g.A.locals?g.A.locals:void 0,w=e=>{let{error:t}=e;return(0,a.jsx)("div",{className:n.container,children:(0,a.jsxs)("div",{className:n.errorBox,children:[(0,a.jsx)("h2",{className:n.errorTitle,children:"Error"}),(0,a.jsx)("p",{className:n.errorMessage,children:t}),(0,a.jsxs)("form",{className:n.formCountdowndate,onSubmit:e=>{e.preventDefault();let t=e.target.countdowndate.value;if(t){let e=new Date(t).toISOString();window.location.search=`?date=${e}`}},children:[(0,a.jsx)("label",{htmlFor:"countdowndate",children:"Countdown date (date and time):"}),(0,a.jsx)("input",{type:"datetime-local",id:"countdowndate",name:"countdowndate"}),(0,a.jsx)("input",{type:"submit"})]})]})})};var y=r(3587);let N=e=>{let{targetDateTime:t}=e,[r,o]=(0,y.useState)(new Date),i=(0,y.useMemo)(()=>{let e=(null==t?void 0:t.getTime())-r.getTime();if(e<=0)return null;let n=Math.floor(e/1e3),a=Math.trunc(e/864e5),o=Math.trunc((e-864e5*a)/36e5)%60;return{days:a,hours:o,minutes:Math.trunc(e/6e4)%60,seconds:n%60}},[t,r]);return((0,y.useEffect)(()=>{if(!i)return;let e=setInterval(()=>{o(new Date)},1e3);return()=>clearInterval(e)},[]),i)?(0,a.jsx)("div",{className:n.countdownBox,children:(0,a.jsxs)("div",{className:n.timeDisplay,children:[!!i.days&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:n.timeUnit,children:[(0,a.jsx)("span",{className:n.timeValue,children:i.days}),(0,a.jsx)("span",{className:n.timeLabel,children:"days"})]}),(0,a.jsx)("div",{className:n.separator,children:":"})]}),!!i.hours&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:n.timeUnit,children:[(0,a.jsx)("span",{className:n.timeValue,children:i.hours}),(0,a.jsx)("span",{className:n.timeLabel,children:"hours"})]}),(0,a.jsx)("div",{className:n.separator,children:":"})]}),(0,a.jsxs)("div",{className:n.timeUnit,children:[(0,a.jsx)("span",{className:n.timeValue,children:i.minutes}),(0,a.jsx)("span",{className:n.timeLabel,children:"minutes"})]}),(0,a.jsx)("div",{className:n.separator,children:":"}),(0,a.jsxs)("div",{className:n.timeUnit,children:[(0,a.jsx)("span",{className:n.timeValue,children:i.seconds.toString().padStart(2,"0")}),(0,a.jsx)("span",{className:n.timeLabel,children:"seconds"})]})]})}):(0,a.jsxs)("div",{className:n.expiredBox,children:[(0,a.jsx)("h2",{className:n.expiredTitle,children:"Time's Up! ⏰"}),(0,a.jsx)("p",{className:n.expiredMessage,children:"The countdown has reached zero."})]})},k=document.getElementById("root");(0,o.createRoot)(k).render((0,a.jsx)(()=>{let e,t,{error:r,targetDateTime:o,onCleanDate:i}=(t=new Date(e=new URLSearchParams(window.location.search).get("date")),{error:(0,y.useMemo)(()=>e?isNaN(t.getTime())?"Invalid date format. Please use YYYY-MM-DD format.":void 0:"No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.",[t,e]),onCleanDate:()=>{window.location.search=""},targetDateTime:t});return r?(0,a.jsx)(w,{error:r}):(0,a.jsxs)("div",{className:null==n?void 0:n.content,children:[(0,a.jsx)("h1",{className:n.title,children:"Countdown Timer"}),(0,a.jsx)(N,{targetDateTime:o}),(0,a.jsx)("div",{className:n.button,children:(0,a.jsx)("button",{onClick:i,children:"Reset"})})]})},{})),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js")}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.exports}i.m=a,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0,e=[],i.O=(t,r,n,a)=>{if(r){a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[r,n,a];return}for(var s=1/0,o=0;o<e.length;o++){for(var[r,n,a]=e[o],l=!0,d=0;d<r.length;d++)(!1&a||s>=a)&&Object.keys(i.O).every(e=>i.O[e](r[d]))?r.splice(d--,1):(l=!1,a<s&&(s=a));if(l){e.splice(o--,1);var c=n();void 0!==c&&(t=c)}}return t},i.rv=()=>"1.5.8",t={889:0},i.O.j=e=>0===t[e],r=(e,r)=>{var n,a,[o,s,l]=r,d=0;if(o.some(e=>0!==t[e])){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var c=l(i)}for(e&&e(r);d<o.length;d++)a=o[d],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(c)},(n=self.webpackChunkcountdown=self.webpackChunkcountdown||[]).forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n)),i.ruid="bundler=rspack@1.5.8";var s=i.O(void 0,["630"],function(){return i(8241)});s=i.O(s)})();