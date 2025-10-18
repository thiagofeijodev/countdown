(()=>{"use strict";var e,r,t,n,a={1448:function(e,r,t){t.d(r,{A:()=>s});var n=t(3815),a=t.n(n),o=t(6717),i=t.n(o)()(a());i.push([e.id,`body {
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
`,""]);let s=i},8241:function(e,r,t){var n=t(8931),a=t(3431);let o=e=>{let{error:r}=e;return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"errorBox",children:[(0,n.jsx)("h2",{className:"errorTitle",children:"Error"}),(0,n.jsx)("p",{className:"errorMessage",children:r}),(0,n.jsxs)("form",{className:"formCountdowndate",onSubmit:e=>{e.preventDefault();let r=e.target.countdowndate.value;if(r){let e=new Date(r).toISOString();window.location.search=`?date=${e}`}},children:[(0,n.jsx)("label",{htmlFor:"countdowndate",children:"Countdown date (date and time):"}),(0,n.jsx)("input",{type:"datetime-local",id:"countdowndate",name:"countdowndate"}),(0,n.jsx)("input",{type:"submit"})]})]})})};var i=t(3587);let s=e=>{let{targetDateTime:r}=e,[t,a]=(0,i.useState)(new Date),o=(0,i.useMemo)(()=>{let e=(null==r?void 0:r.getTime())-t.getTime();if(e<=0)return null;let n=Math.floor(e/1e3),a=Math.trunc(e/864e5),o=Math.trunc((e-864e5*a)/36e5)%60;return{days:a,hours:o,minutes:Math.trunc(e/6e4)%60,seconds:n%60}},[r,t]);return((0,i.useEffect)(()=>{if(!o)return;let e=setInterval(()=>{a(new Date)},1e3);return()=>clearInterval(e)},[]),o)?(0,n.jsx)("div",{className:"countdownBox",children:(0,n.jsxs)("div",{className:"timeDisplay",children:[!!o.days&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:o.days}),(0,n.jsx)("span",{className:"timeLabel",children:"days"})]}),(0,n.jsx)("div",{className:"separator",children:":"})]}),!!o.hours&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:o.hours}),(0,n.jsx)("span",{className:"timeLabel",children:"hours"})]}),(0,n.jsx)("div",{className:"separator",children:":"})]}),(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:o.minutes}),(0,n.jsx)("span",{className:"timeLabel",children:"minutes"})]}),(0,n.jsx)("div",{className:"separator",children:":"}),(0,n.jsxs)("div",{className:"timeUnit",children:[(0,n.jsx)("span",{className:"timeValue",children:o.seconds.toString().padStart(2,"0")}),(0,n.jsx)("span",{className:"timeLabel",children:"seconds"})]})]})}):(0,n.jsxs)("div",{className:"expiredBox",children:[(0,n.jsx)("h2",{className:"expiredTitle",children:"Time's Up! ⏰"}),(0,n.jsx)("p",{className:"expiredMessage",children:"The countdown has reached zero."})]})};var l=t(5072),d=t.n(l),c=t(206),m=t.n(c),u=t(7659),p=t.n(u),x=t(5056),h=t.n(x),f=t(540),b=t.n(f),g=t(1113),v=t.n(g),w=t(1448),j={};j.styleTagTransform=v(),j.setAttributes=h(),j.insert=p().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=b(),d()(w.A,j),w.A&&w.A.locals&&w.A.locals;let y=document.getElementById("root");(0,a.createRoot)(y).render((0,n.jsx)(()=>{let e,r,{error:t,targetDateTime:a,onCleanDate:l}=(r=new Date(e=new URLSearchParams(window.location.search).get("date")),{error:(0,i.useMemo)(()=>e?isNaN(r.getTime())?"Invalid date format. Please use YYYY-MM-DD format.":void 0:"No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.",[r,e]),onCleanDate:()=>{window.location.search=""},targetDateTime:r});return t?(0,n.jsx)(o,{error:t}):(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"title",children:"Countdown Timer"}),(0,n.jsx)(s,{targetDateTime:a}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)("button",{onClick:l,children:"Reset"})})]})},{})),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js")}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.nc=void 0,e=[],i.O=(r,t,n,a)=>{if(t){a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[t,n,a];return}for(var s=1/0,o=0;o<e.length;o++){for(var[t,n,a]=e[o],l=!0,d=0;d<t.length;d++)(!1&a||s>=a)&&Object.keys(i.O).every(e=>i.O[e](t[d]))?t.splice(d--,1):(l=!1,a<s&&(s=a));if(l){e.splice(o--,1);var c=n();void 0!==c&&(r=c)}}return r},i.rv=()=>"1.5.8",r={889:0},i.O.j=e=>0===r[e],t=(e,t)=>{var n,a,[o,s,l]=t,d=0;if(o.some(e=>0!==r[e])){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var c=l(i)}for(e&&e(t);d<o.length;d++)a=o[d],i.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return i.O(c)},(n=self.webpackChunkcountdown=self.webpackChunkcountdown||[]).forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n)),i.ruid="bundler=rspack@1.5.8";var s=i.O(void 0,["630"],function(){return i(8241)});s=i.O(s)})();