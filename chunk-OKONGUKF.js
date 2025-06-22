import{Aa as F2,Ab as R1,Ba as Z2,Bb as e3,Ca as R,Da as q2,Ga as e1,Ia as j2,Ja as U2,Ka as T,Oa as _1,Pa as v1,Q as S,Qa as B2,R as M,S as d1,U as K,Va as W2,W as p,X as I1,Z as w2,a as z1,aa as p1,ab as G2,b as A2,cb as Y2,db as $2,ha as J,ia as O1,ka as E2,la as k2,ma as P1,na as T2,oa as Q,ob as X2,pa as D1,qa as I2,rb as b,sa as c1,sb as t1,ta as B,tb as K2,ua as W,ub as J2,va as O2,wa as P2,xa as D2,ya as _2,yb as Q2,za as R2,zb as c3}from"./chunk-APRCEBL4.js";var b1=new K(""),U1=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,a,i){return this._findPluginFor(n).addEventListener(e,n,a,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new S(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||c)(p(b1),p(J))};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),n1=class{_doc;constructor(t){this._doc=t}manager},C1="ng-app-id";function t3(c){for(let t of c)t.remove()}function n3(c,t){let e=t.createElement("style");return e.textContent=c,e}function x4(c,t,e,n){let a=c.head?.querySelectorAll(`style[${C1}="${t}"],link[${C1}="${t}"]`);if(a)for(let i of a)i.removeAttribute(C1),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function Z1(c,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",c),e}var B1=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,a,i={}){this.doc=e,this.appId=n,this.nonce=a,this.isServer=R1(i),x4(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let a of e)this.addUsage(a,this.inline,n3);n?.forEach(a=>this.addUsage(a,this.external,Z1))}removeStyles(e,n){for(let a of e)this.removeUsage(a,this.inline);n?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,n,a){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,n){let a=n.get(e);a&&(a.usage--,a.usage<=0&&(t3(a.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])t3(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(e,n3(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(e,Z1(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(C1,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||c)(p(b),p(P1),p(D1,8),p(Q))};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),F1={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},W1=/%COMP%/g;var i3="%COMP%",y4=`_nghost-${i3}`,V4=`_ngcontent-${i3}`,N4=!0,S4=new K("",{providedIn:"root",factory:()=>N4});function A4(c){return V4.replace(W1,c)}function w4(c){return y4.replace(W1,c)}function o3(c,t){return t.map(e=>e.replace(W1,c))}var G1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,a,i,o,s,m,l=null,f=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.platformId=s,this.ngZone=m,this.nonce=l,this.tracingService=f,this.platformIsServer=R1(s),this.defaultRenderer=new a1(e,o,m,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===c1.ShadowDom&&(n=A2(z1({},n),{encapsulation:c1.Emulated}));let a=this.getOrCreateRenderer(e,n);return a instanceof M1?a.applyToHost(e):a instanceof i1&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,i=a.get(n.id);if(!i){let o=this.doc,s=this.ngZone,m=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,z=this.platformIsServer,u=this.tracingService;switch(n.encapsulation){case c1.Emulated:i=new M1(m,l,n,this.appId,f,o,s,z,u);break;case c1.ShadowDom:return new q1(m,l,e,n,o,s,this.nonce,z,u);default:i=new i1(m,l,n,f,o,s,z,u);break}a.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||c)(p(U1),p(B1),p(P1),p(S4),p(b),p(Q),p(J),p(D1),p(I2,8))};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),a1=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,a,i){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=a,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(F1[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(a3(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(a3(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new S(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,a){if(a){e=a+":"+e;let i=F1[a];i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let a=F1[n];a?t.removeAttributeNS(a,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,a){a&(e1.DashCase|e1.Important)?t.style.setProperty(e,n,a&e1.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&e1.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,a){if(typeof t=="string"&&(t=t1().getGlobalEventTarget(this.doc,t),!t))throw new S(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,e,i)),this.eventManager.addEventListener(t,e,i,a)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function a3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var q1=class extends a1{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,a,i,o,s,m,l){super(t,i,o,m,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=a.styles;f=o3(a.id,f);for(let u of f){let v=document.createElement("style");s&&v.setAttribute("nonce",s),v.textContent=u,this.shadowRoot.appendChild(v)}let z=a.getExternalStyles?.();if(z)for(let u of z){let v=Z1(u,i);s&&v.setAttribute("nonce",s),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},i1=class extends a1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,a,i,o,s,m,l){super(t,i,o,s,m),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let f=n.styles;this.styles=l?o3(l,f):f,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},M1=class extends i1{contentAttr;hostAttr;constructor(t,e,n,a,i,o,s,m,l){let f=a+"-"+n.id;super(t,e,n,i,o,s,m,l,f),this.contentAttr=A4(f),this.hostAttr=w4(f)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var g1=class c extends J2{supportsDOMEvents=!0;static makeCurrent(){K2(new c)}onAndCancel(t,e,n,a){return t.addEventListener(e,n,a),()=>{t.removeEventListener(e,n,a)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=k4();return e==null?null:T4(e)}resetBaseElement(){o1=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Q2(document.cookie,t)}},o1=null;function k4(){return o1=o1||document.head.querySelector("base"),o1?o1.getAttribute("href"):null}function T4(c){return new URL(c,document.baseURI).pathname}var I4=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||c)};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),r3=(()=>{class c extends n1{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a,i){return e.addEventListener(n,a,i),()=>this.removeEventListener(e,n,a,i)}removeEventListener(e,n,a,i){return e.removeEventListener(n,a,i)}static \u0275fac=function(n){return new(n||c)(p(b))};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),s3=["alt","control","meta","shift"],O4={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},P4={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},l3=(()=>{class c extends n1{constructor(e){super(e)}supports(e){return c.parseEventName(e)!=null}addEventListener(e,n,a,i){let o=c.parseEventName(n),s=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>t1().onAndCancel(e,o.domEventName,s,i))}static parseEventName(e){let n=e.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let i=c._normalizeKey(n.pop()),o="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),o="code."),s3.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),o+=l+".")}),o+=i,n.length!=0||i.length===0)return null;let m={};return m.domEventName=a,m.fullKey=o,m}static matchEventFullKeyCode(e,n){let a=O4[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(a=e.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),s3.forEach(o=>{if(o!==a){let s=P4[o];s(e)&&(i+=o+".")}}),i+=a,i===n)}static eventCallback(e,n,a){return i=>{c.matchEventFullKeyCode(i,e)&&a.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||c)(p(b))};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();function D4(c,t){return X2(z1({rootComponent:c},_4(t)))}function _4(c){return{appProviders:[...j4,...c?.providers??[]],platformProviders:q4}}function R4(){g1.makeCurrent()}function F4(){return new O1}function Z4(){return k2(document),document}var q4=[{provide:Q,useValue:c3},{provide:T2,useValue:R4,multi:!0},{provide:b,useFactory:Z4}];var j4=[{provide:w2,useValue:"root"},{provide:O1,useFactory:F4},{provide:b1,useClass:r3,multi:!0,deps:[b]},{provide:b1,useClass:l3,multi:!0,deps:[b]},G1,B1,U1,{provide:j2,useExisting:G1},{provide:e3,useClass:I4},[]];var c7=(()=>{class c{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||c)(p(b))};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var Y1=(()=>{class c{static \u0275fac=function(n){return new(n||c)};static \u0275prov=M({token:c,factory:function(n){let a=null;return n?a=new(n||c):a=p(B4),a},providedIn:"root"})}return c})(),B4=(()=>{class c extends Y1{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case R.NONE:return n;case R.HTML:return W(n,"HTML")?B(n):Z2(this._doc,String(n)).toString();case R.STYLE:return W(n,"Style")?B(n):n;case R.SCRIPT:if(W(n,"Script"))return B(n);throw new S(5200,!1);case R.URL:return W(n,"URL")?B(n):F2(String(n));case R.RESOURCE_URL:if(W(n,"ResourceURL"))return B(n);throw new S(5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return O2(e)}bypassSecurityTrustStyle(e){return P2(e)}bypassSecurityTrustScript(e){return D2(e)}bypassSecurityTrustUrl(e){return _2(e)}bypassSecurityTrustResourceUrl(e){return R2(e)}static \u0275fac=function(n){return new(n||c)(p(b))};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function G4(c,t,e){return(t=$4(t))in c?Object.defineProperty(c,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[t]=e,c}function f3(c,t){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),e.push.apply(e,n)}return e}function r(c){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?f3(Object(e),!0).forEach(function(n){G4(c,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):f3(Object(e)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(e,n))})}return c}function Y4(c,t){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var n=e.call(c,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(c)}function $4(c){var t=Y4(c,"string");return typeof t=="symbol"?t:t+""}var m3=()=>{},v2={},D3={},_3=null,R3={mark:m3,measure:m3};try{typeof window<"u"&&(v2=window),typeof document<"u"&&(D3=document),typeof MutationObserver<"u"&&(_3=MutationObserver),typeof performance<"u"&&(R3=performance)}catch{}var{userAgent:h3=""}=v2.navigator||{},O=v2,d=D3,u3=_3,H1=R3,t7=!!O.document,E=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",F3=~h3.indexOf("MSIE")||~h3.indexOf("Trident/"),X4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,K4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Z3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},J4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",S1="duotone",Q4="sharp",c5="sharp-duotone",j3=[C,S1,Q4,c5],e5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},t5={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},n5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),a5={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},i5=["fak","fa-kit","fakd","fa-kit-duotone"],z3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},o5=["kit"],s5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},r5=["fak","fakd"],l5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},d3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},L1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],m5=["fak","fa-kit","fakd","fa-kit-duotone"],h5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},u5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},z5={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},c2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},d5=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],e2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...f5,...d5],p5=["solid","regular","light","thin","duotone","brands"],U3=[1,2,3,4,5,6,7,8,9,10],v5=U3.concat([11,12,13,14,15,16,17,18,19,20]),C5=[...Object.keys(z5),...p5,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L1.GROUP,L1.SWAP_OPACITY,L1.PRIMARY,L1.SECONDARY].concat(U3.map(c=>"".concat(c,"x"))).concat(v5.map(c=>"w-".concat(c))),M5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},A="___FONT_AWESOME___",t2=16,B3="fa",W3="svg-inline--fa",Z="data-fa-i2svg",n2="data-fa-pseudo-element",b5="data-fa-pseudo-element-pending",C2="data-prefix",M2="data-icon",p3="fontawesome-i2svg",g5="async",H5=["HTML","HEAD","STYLE","SCRIPT"],G3=(()=>{try{return!0}catch{return!1}})();function h1(c){return new Proxy(c,{get(t,e){return e in t?t[e]:t[C]}})}var Y3=r({},Z3);Y3[C]=r(r(r(r({},{"fa-duotone":"duotone"}),Z3[C]),z3.kit),z3["kit-duotone"]);var L5=h1(Y3),a2=r({},a5);a2[C]=r(r(r(r({},{duotone:"fad"}),a2[C]),d3.kit),d3["kit-duotone"]);var v3=h1(a2),i2=r({},c2);i2[C]=r(r({},i2[C]),l5.kit);var b2=h1(i2),o2=r({},u5);o2[C]=r(r({},o2[C]),s5.kit);var n7=h1(o2),x5=X4,$3="fa-layers-text",y5=K4,V5=r({},e5),a7=h1(V5),N5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$1=J4,S5=[...o5,...C5],r1=O.FontAwesomeConfig||{};function A5(c){var t=d.querySelector("script["+c+"]");if(t)return t.getAttribute(c)}function w5(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,n]=t,a=w5(A5(e));a!=null&&(r1[n]=a)});var X3={styleDefault:"solid",familyDefault:C,cssPrefix:B3,replacementClass:W3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r1.familyPrefix&&(r1.cssPrefix=r1.familyPrefix);var $=r(r({},X3),r1);$.autoReplaceSvg||($.observeMutations=!1);var h={};Object.keys(X3).forEach(c=>{Object.defineProperty(h,c,{enumerable:!0,set:function(t){$[c]=t,l1.forEach(e=>e(h))},get:function(){return $[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){$.cssPrefix=c,l1.forEach(t=>t(h))},get:function(){return $.cssPrefix}});O.FontAwesomeConfig=h;var l1=[];function E5(c){return l1.push(c),()=>{l1.splice(l1.indexOf(c),1)}}var I=t2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k5(c){if(!c||!E)return;let t=d.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=c;let e=d.head.childNodes,n=null;for(let a=e.length-1;a>-1;a--){let i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return d.head.insertBefore(t,n),c}var T5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f1(){let c=12,t="";for(;c-- >0;)t+=T5[Math.random()*62|0];return t}function X(c){let t=[];for(let e=(c||[]).length>>>0;e--;)t[e]=c[e];return t}function g2(c){return c.classList?X(c.classList):(c.getAttribute("class")||"").split(" ").filter(t=>t)}function K3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I5(c){return Object.keys(c||{}).reduce((t,e)=>t+"".concat(e,'="').concat(K3(c[e]),'" '),"").trim()}function A1(c){return Object.keys(c||{}).reduce((t,e)=>t+"".concat(e,": ").concat(c[e].trim(),";"),"")}function H2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function O5(c){let{transform:t,containerWidth:e,iconWidth:n}=c,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),m={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:m,path:l}}function P5(c){let{transform:t,width:e=t2,height:n=t2,startCentered:a=!1}=c,i="";return a&&F3?i+="translate(".concat(t.x/I-e/2,"em, ").concat(t.y/I-n/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/I,"em), calc(-50% + ").concat(t.y/I,"em)) "):i+="translate(".concat(t.x/I,"em, ").concat(t.y/I,"em) "),i+="scale(".concat(t.size/I*(t.flipX?-1:1),", ").concat(t.size/I*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var D5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function J3(){let c=B3,t=W3,e=h.cssPrefix,n=h.replacementClass,a=D5;if(e!==c||n!==t){let i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return a}var C3=!1;function X1(){h.autoAddCss&&!C3&&(k5(J3()),C3=!0)}var _5={mixout(){return{dom:{css:J3,insertCss:X1}}},hooks(){return{beforeDOMElementCreation(){X1()},beforeI2svg(){X1()}}}},w=O||{};w[A]||(w[A]={});w[A].styles||(w[A].styles={});w[A].hooks||(w[A].hooks={});w[A].shims||(w[A].shims=[]);var V=w[A],Q3=[],c4=function(){d.removeEventListener("DOMContentLoaded",c4),V1=1,Q3.map(c=>c())},V1=!1;E&&(V1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),V1||d.addEventListener("DOMContentLoaded",c4));function R5(c){E&&(V1?setTimeout(c,0):Q3.push(c))}function u1(c){let{tag:t,attributes:e={},children:n=[]}=c;return typeof c=="string"?K3(c):"<".concat(t," ").concat(I5(e),">").concat(n.map(u1).join(""),"</").concat(t,">")}function M3(c,t,e){if(c&&c[t]&&c[t][e])return{prefix:t,iconName:e,icon:c[t][e]}}var F5=function(t,e){return function(n,a,i,o){return t.call(e,n,a,i,o)}},K1=function(t,e,n,a){var i=Object.keys(t),o=i.length,s=a!==void 0?F5(e,a):e,m,l,f;for(n===void 0?(m=1,f=t[i[0]]):(m=0,f=n);m<o;m++)l=i[m],f=s(f,t[l],l,t);return f};function Z5(c){let t=[],e=0,n=c.length;for(;e<n;){let a=c.charCodeAt(e++);if(a>=55296&&a<=56319&&e<n){let i=c.charCodeAt(e++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),e--)}else t.push(a)}return t}function s2(c){let t=Z5(c);return t.length===1?t[0].toString(16):null}function q5(c,t){let e=c.length,n=c.charCodeAt(t),a;return n>=55296&&n<=56319&&e>t+1&&(a=c.charCodeAt(t+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function b3(c){return Object.keys(c).reduce((t,e)=>{let n=c[e];return!!n.icon?t[n.iconName]=n.icon:t[e]=n,t},{})}function r2(c,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=e,a=b3(t);typeof V.hooks.addPack=="function"&&!n?V.hooks.addPack(c,b3(t)):V.styles[c]=r(r({},V.styles[c]||{}),a),c==="fas"&&r2("fa",t)}var{styles:m1,shims:j5}=V,e4=Object.keys(b2),U5=e4.reduce((c,t)=>(c[t]=Object.keys(b2[t]),c),{}),L2=null,t4={},n4={},a4={},i4={},o4={};function B5(c){return~S5.indexOf(c)}function W5(c,t){let e=t.split("-"),n=e[0],a=e.slice(1).join("-");return n===c&&a!==""&&!B5(a)?a:null}var s4=()=>{let c=n=>K1(m1,(a,i,o)=>(a[o]=K1(i,n,{}),a),{});t4=c((n,a,i)=>(a[3]&&(n[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{n[s.toString(16)]=i}),n)),n4=c((n,a,i)=>(n[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{n[s]=i}),n)),o4=c((n,a,i)=>{let o=a[2];return n[i]=i,o.forEach(s=>{n[s]=i}),n});let t="far"in m1||h.autoFetchSvg,e=K1(j5,(n,a)=>{let i=a[0],o=a[1],s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:s}),n},{names:{},unicodes:{}});a4=e.names,i4=e.unicodes,L2=w1(h.styleDefault,{family:h.familyDefault})};E5(c=>{L2=w1(c.styleDefault,{family:h.familyDefault})});s4();function x2(c,t){return(t4[c]||{})[t]}function G5(c,t){return(n4[c]||{})[t]}function F(c,t){return(o4[c]||{})[t]}function r4(c){return a4[c]||{prefix:null,iconName:null}}function Y5(c){let t=i4[c],e=x2("fas",c);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function P(){return L2}var l4=()=>({prefix:null,iconName:null,rest:[]});function $5(c){let t=C,e=e4.reduce((n,a)=>(n[a]="".concat(h.cssPrefix,"-").concat(a),n),{});return j3.forEach(n=>{(c.includes(e[n])||c.some(a=>U5[n].includes(a)))&&(t=n)}),t}function w1(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=C}=t,n=L5[e][c];if(e===S1&&!c)return"fad";let a=v3[e][c]||v3[e][n],i=c in V.styles?c:null;return a||i||null}function X5(c){let t=[],e=null;return c.forEach(n=>{let a=W5(h.cssPrefix,n);a?e=a:n&&t.push(n)}),{iconName:e,rest:t}}function g3(c){return c.sort().filter((t,e,n)=>n.indexOf(t)===e)}function E1(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=t,n=null,a=e2.concat(m5),i=g3(c.filter(z=>a.includes(z))),o=g3(c.filter(z=>!e2.includes(z))),s=i.filter(z=>(n=z,!q3.includes(z))),[m=null]=s,l=$5(i),f=r(r({},X5(o)),{},{prefix:w1(m,{family:l})});return r(r(r({},f),c6({values:c,family:l,styles:m1,config:h,canonical:f,givenPrefix:n})),K5(e,n,f))}function K5(c,t,e){let{prefix:n,iconName:a}=e;if(c||!n||!a)return{prefix:n,iconName:a};let i=t==="fa"?r4(a):{},o=F(n,a);return a=i.iconName||o||a,n=i.prefix||n,n==="far"&&!m1.far&&m1.fas&&!h.autoFetchSvg&&(n="fas"),{prefix:n,iconName:a}}var J5=j3.filter(c=>c!==C||c!==S1),Q5=Object.keys(c2).filter(c=>c!==C).map(c=>Object.keys(c2[c])).flat();function c6(c){let{values:t,family:e,canonical:n,givenPrefix:a="",styles:i={},config:o={}}=c,s=e===S1,m=t.includes("fa-duotone")||t.includes("fad"),l=o.familyDefault==="duotone",f=n.prefix==="fad"||n.prefix==="fa-duotone";if(!s&&(m||l||f)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&J5.includes(e)&&(Object.keys(i).find(u=>Q5.includes(u))||o.autoFetchSvg)){let u=n5.get(e).defaultShortPrefixId;n.prefix=u,n.iconName=F(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||a==="fa")&&(n.prefix=P()||"fas"),n}var l2=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=r(r({},this.definitions[i]||{}),a[i]),r2(i,a[i]);let o=b2[C][i];o&&r2(o,a[i]),s4()})}reset(){this.definitions={}}_pullDefinitions(t,e){let n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(a=>{let{prefix:i,iconName:o,icon:s}=n[a],m=s[2];t[i]||(t[i]={}),m.length>0&&m.forEach(l=>{typeof l=="string"&&(t[i][l]=s)}),t[i][o]=s}),t}},H3=[],G={},Y={},e6=Object.keys(Y);function t6(c,t){let{mixoutsTo:e}=t;return H3=c,G={},Object.keys(Y).forEach(n=>{e6.indexOf(n)===-1&&delete Y[n]}),H3.forEach(n=>{let a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(e[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{e[i]||(e[i]={}),e[i][o]=a[i][o]})}),n.hooks){let i=n.hooks();Object.keys(i).forEach(o=>{G[o]||(G[o]=[]),G[o].push(i[o])})}n.provides&&n.provides(Y)}),e}function f2(c,t){for(var e=arguments.length,n=new Array(e>2?e-2:0),a=2;a<e;a++)n[a-2]=arguments[a];return(G[c]||[]).forEach(o=>{t=o.apply(null,[t,...n])}),t}function q(c){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];(G[c]||[]).forEach(i=>{i.apply(null,e)})}function D(){let c=arguments[0],t=Array.prototype.slice.call(arguments,1);return Y[c]?Y[c].apply(null,t):void 0}function m2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:t}=c,e=c.prefix||P();if(t)return t=F(e,t)||t,M3(f4.definitions,e,t)||M3(V.styles,e,t)}var f4=new l2,n6=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,q("noAuto")},a6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(q("beforeI2svg",c),D("pseudoElements2svg",c),D("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=c;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,R5(()=>{o6({autoReplaceSvgRoot:t}),q("watch",c)})}},i6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:F(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let t=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=w1(c[0]);return{prefix:e,iconName:F(e,t)||t}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(x5))){let t=E1(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||P(),iconName:F(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){let t=P();return{prefix:t,iconName:F(t,c)||c}}}},H={noAuto:n6,config:h,dom:a6,parse:i6,library:f4,findIconDefinition:m2,toHtml:u1},o6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=d}=c;(Object.keys(V.styles).length>0||h.autoFetchSvg)&&E&&h.autoReplaceSvg&&H.dom.i2svg({node:t})};function k1(c,t){return Object.defineProperty(c,"abstract",{get:t}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>u1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!E)return;let e=d.createElement("div");return e.innerHTML=c.html,e.children}}),c}function s6(c){let{children:t,main:e,mask:n,attributes:a,styles:i,transform:o}=c;if(H2(o)&&e.found&&!n.found){let{width:s,height:m}=e,l={x:s/m/2,y:.5};a.style=A1(r(r({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function r6(c){let{prefix:t,iconName:e,children:n,attributes:a,symbol:i}=c,o=i===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},a),{},{id:o}),children:n}]}]}function y2(c){let{icons:{main:t,mask:e},prefix:n,iconName:a,transform:i,symbol:o,title:s,maskId:m,titleId:l,extra:f,watchable:z=!1}=c,{width:u,height:v}=e.found?e:t,k=r5.includes(n),_=[h.replacementClass,a?"".concat(h.cssPrefix,"-").concat(a):""].filter(U=>f.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(f.classes).join(" "),L={children:[],attributes:r(r({},f.attributes),{},{"data-prefix":n,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(v)})},N=k&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/v*16*.0625,"em")}:{};z&&(L.attributes[Z]=""),s&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||f1())},children:[s]}),delete L.attributes.title);let g=r(r({},L),{},{prefix:n,iconName:a,main:t,mask:e,maskId:m,transform:i,symbol:o,styles:r(r({},N),f.styles)}),{children:x,attributes:j}=e.found&&t.found?D("generateAbstractMask",g)||{children:[],attributes:{}}:D("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=x,g.attributes=j,o?r6(g):s6(g)}function L3(c){let{content:t,width:e,height:n,transform:a,title:i,extra:o,watchable:s=!1}=c,m=r(r(r({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(m[Z]="");let l=r({},o.styles);H2(a)&&(l.transform=P5({transform:a,startCentered:!0,width:e,height:n}),l["-webkit-transform"]=l.transform);let f=A1(l);f.length>0&&(m.style=f);let z=[];return z.push({tag:"span",attributes:m,children:[t]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function l6(c){let{content:t,title:e,extra:n}=c,a=r(r(r({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),i=A1(n.styles);i.length>0&&(a.style=i);let o=[];return o.push({tag:"span",attributes:a,children:[t]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var{styles:J1}=V;function h2(c){let t=c[0],e=c[1],[n]=c.slice(4),a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat($1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat($1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat($1.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:t,height:e,icon:a}}var f6={found:!1,width:512,height:512};function m6(c,t){!G3&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(t,'" is missing.'))}function u2(c,t){let e=t;return t==="fa"&&h.styleDefault!==null&&(t=P()),new Promise((n,a)=>{if(e==="fa"){let i=r4(c)||{};c=i.iconName||c,t=i.prefix||t}if(c&&t&&J1[t]&&J1[t][c]){let i=J1[t][c];return n(h2(i))}m6(c,t),n(r(r({},f6),{},{icon:h.showMissingIcons&&c?D("missingIconAbstract")||{}:{}}))})}var x3=()=>{},z2=h.measurePerformance&&H1&&H1.mark&&H1.measure?H1:{mark:x3,measure:x3},s1='FA "6.7.2"',h6=c=>(z2.mark("".concat(s1," ").concat(c," begins")),()=>m4(c)),m4=c=>{z2.mark("".concat(s1," ").concat(c," ends")),z2.measure("".concat(s1," ").concat(c),"".concat(s1," ").concat(c," begins"),"".concat(s1," ").concat(c," ends"))},V2={begin:h6,end:m4},x1=()=>{};function y3(c){return typeof(c.getAttribute?c.getAttribute(Z):null)=="string"}function u6(c){let t=c.getAttribute?c.getAttribute(C2):null,e=c.getAttribute?c.getAttribute(M2):null;return t&&e}function z6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function d6(){return h.autoReplaceSvg===!0?y1.replace:y1[h.autoReplaceSvg]||y1.replace}function p6(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function v6(c){return d.createElement(c)}function h4(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?p6:v6}=t;if(typeof c=="string")return d.createTextNode(c);let n=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){n.appendChild(h4(i,{ceFn:e}))}),n}function C6(c){let t=" ".concat(c.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var y1={replace:function(c){let t=c[0];if(t.parentNode)if(c[1].forEach(e=>{t.parentNode.insertBefore(h4(e),t)}),t.getAttribute(Z)===null&&h.keepOriginalSource){let e=d.createComment(C6(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(c){let t=c[0],e=c[1];if(~g2(t).indexOf(h.replacementClass))return y1.replace(c);let n=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((o,s)=>(s===h.replacementClass||s.match(n)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}let a=e.map(i=>u1(i)).join(`
`);t.setAttribute(Z,""),t.innerHTML=a}};function V3(c){c()}function u4(c,t){let e=typeof t=="function"?t:x1;if(c.length===0)e();else{let n=V3;h.mutateApproach===g5&&(n=O.requestAnimationFrame||V3),n(()=>{let a=d6(),i=V2.begin("mutate");c.map(a),i(),e()})}}var N2=!1;function z4(){N2=!0}function d2(){N2=!1}var N1=null;function N3(c){if(!u3||!h.observeMutations)return;let{treeCallback:t=x1,nodeCallback:e=x1,pseudoElementsCallback:n=x1,observeMutationsRoot:a=d}=c;N1=new u3(i=>{if(N2)return;let o=P();X(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!y3(s.addedNodes[0])&&(h.searchPseudoElements&&n(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&h.searchPseudoElements&&n(s.target.parentNode),s.type==="attributes"&&y3(s.target)&&~N5.indexOf(s.attributeName))if(s.attributeName==="class"&&u6(s.target)){let{prefix:m,iconName:l}=E1(g2(s.target));s.target.setAttribute(C2,m||o),l&&s.target.setAttribute(M2,l)}else z6(s.target)&&e(s.target)})}),E&&N1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function M6(){N1&&N1.disconnect()}function b6(c){let t=c.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce((n,a)=>{let i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function g6(c){let t=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",a=E1(g2(c));return a.prefix||(a.prefix=P()),t&&e&&(a.prefix=t,a.iconName=e),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=G5(a.prefix,c.innerText)||x2(a.prefix,s2(c.innerText))),!a.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function H6(c){let t=X(c.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),e=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return h.autoA11y&&(e?t["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(n||f1()):(t["aria-hidden"]="true",t.focusable="false")),t}function L6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S3(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:n,rest:a}=g6(c),i=H6(c),o=f2("parseNodeAttributes",{},c),s=t.styleParser?b6(c):[];return r({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var{styles:x6}=V;function d4(c){let t=h.autoReplaceSvg==="nest"?S3(c,{styleParser:!1}):S3(c);return~t.extra.classes.indexOf($3)?D("generateLayersText",c,t):D("generateSvgReplacementMutation",c,t)}function y6(){return[...i5,...e2]}function A3(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();let e=d.documentElement.classList,n=f=>e.add("".concat(p3,"-").concat(f)),a=f=>e.remove("".concat(p3,"-").concat(f)),i=h.autoFetchSvg?y6():q3.concat(Object.keys(x6));i.includes("fa")||i.push("fa");let o=[".".concat($3,":not([").concat(Z,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=X(c.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();let m=V2.begin("onTree"),l=s.reduce((f,z)=>{try{let u=d4(z);u&&f.push(u)}catch(u){G3||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,z)=>{Promise.all(l).then(u=>{u4(u,()=>{n("active"),n("complete"),a("pending"),typeof t=="function"&&t(),m(),f()})}).catch(u=>{m(),z(u)})})}function V6(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d4(c).then(e=>{e&&u4([e],t)})}function N6(c){return function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:m2(t||{}),{mask:a}=e;return a&&(a=(a||{}).icon?a:m2(a||{})),c(n,r(r({},e),{},{mask:a}))}}var S6=function(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=y,symbol:n=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:m=[],attributes:l={},styles:f={}}=t;if(!c)return;let{prefix:z,iconName:u,icon:v}=c;return k1(r({type:"icon"},c),()=>(q("beforeDOMElementCreation",{iconDefinition:c,params:t}),h.autoA11y&&(o?l["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(s||f1()):(l["aria-hidden"]="true",l.focusable="false")),y2({icons:{main:h2(v),mask:a?h2(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:u,transform:r(r({},y),e),symbol:n,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:m}})))},A6={mixout(){return{icon:N6(S6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=A3,c.nodeCallback=V6,c}}},provides(c){c.i2svg=function(t){let{node:e=d,callback:n=()=>{}}=t;return A3(e,n)},c.generateSvgReplacementMutation=function(t,e){let{iconName:n,title:a,titleId:i,prefix:o,transform:s,symbol:m,mask:l,maskId:f,extra:z}=e;return new Promise((u,v)=>{Promise.all([u2(n,o),l.iconName?u2(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[_,L]=k;u([t,y2({icons:{main:_,mask:L},prefix:o,iconName:n,transform:s,symbol:m,maskId:f,title:a,titleId:i,extra:z,watchable:!0})])}).catch(v)})},c.generateAbstractIcon=function(t){let{children:e,attributes:n,main:a,transform:i,styles:o}=t,s=A1(o);s.length>0&&(n.style=s);let m;return H2(i)&&(m=D("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),e.push(m||a.icon),{children:e,attributes:n}}}},w6={mixout(){return{layer(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=t;return k1({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:c,params:t});let n=[];return c(a=>{Array.isArray(a)?a.map(i=>{n=n.concat(i.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...e].join(" ")},children:n}]})}}}},E6={mixout(){return{counter(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:n=[],attributes:a={},styles:i={}}=t;return k1({type:"counter",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:t}),l6({content:c.toString(),title:e,extra:{attributes:a,styles:i,classes:["".concat(h.cssPrefix,"-layers-counter"),...n]}})))}}}},k6={mixout(){return{text(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=y,title:n=null,classes:a=[],attributes:i={},styles:o={}}=t;return k1({type:"text",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:t}),L3({content:c,transform:r(r({},y),e),title:n,extra:{attributes:i,styles:o,classes:["".concat(h.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(t,e){let{title:n,transform:a,extra:i}=e,o=null,s=null;if(F3){let m=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/m,s=l.height/m}return h.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,L3({content:t.innerHTML,width:o,height:s,transform:a,title:n,extra:i,watchable:!0})])}}},T6=new RegExp('"',"ug"),w3=[1105920,1112319],E3=r(r(r(r({},{FontAwesome:{normal:"fas",400:"fas"}}),t5),M5),h5),p2=Object.keys(E3).reduce((c,t)=>(c[t.toLowerCase()]=E3[t],c),{}),I6=Object.keys(p2).reduce((c,t)=>{let e=p2[t];return c[t]=e[900]||[...Object.entries(e)][0][1],c},{});function O6(c){let t=c.replace(T6,""),e=q5(t,0),n=e>=w3[0]&&e<=w3[1],a=t.length===2?t[0]===t[1]:!1;return{value:s2(a?t[0]:t),isSecondary:n||a}}function P6(c,t){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),a=isNaN(n)?"normal":n;return(p2[e]||{})[a]||I6[e]}function k3(c,t){let e="".concat(b5).concat(t.replace(":","-"));return new Promise((n,a)=>{if(c.getAttribute(e)!==null)return n();let o=X(c.children).filter(u=>u.getAttribute(n2)===t)[0],s=O.getComputedStyle(c,t),m=s.getPropertyValue("font-family"),l=m.match(y5),f=s.getPropertyValue("font-weight"),z=s.getPropertyValue("content");if(o&&!l)return c.removeChild(o),n();if(l&&z!=="none"&&z!==""){let u=s.getPropertyValue("content"),v=P6(m,f),{value:k,isSecondary:_}=O6(u),L=l[0].startsWith("FontAwesome"),N=x2(v,k),g=N;if(L){let x=Y5(k);x.iconName&&x.prefix&&(N=x.iconName,v=x.prefix)}if(N&&!_&&(!o||o.getAttribute(C2)!==v||o.getAttribute(M2)!==g)){c.setAttribute(e,g),o&&c.removeChild(o);let x=L6(),{extra:j}=x;j.attributes[n2]=t,u2(N,v).then(U=>{let H4=y2(r(r({},x),{},{icons:{main:U,mask:l4()},prefix:v,iconName:g,extra:j,watchable:!0})),T1=d.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?c.insertBefore(T1,c.firstChild):c.appendChild(T1),T1.outerHTML=H4.map(L4=>u1(L4)).join(`
`),c.removeAttribute(e),n()}).catch(a)}else n()}else n()})}function D6(c){return Promise.all([k3(c,"::before"),k3(c,"::after")])}function _6(c){return c.parentNode!==document.head&&!~H5.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(n2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function T3(c){if(E)return new Promise((t,e)=>{let n=X(c.querySelectorAll("*")).filter(_6).map(D6),a=V2.begin("searchPseudoElements");z4(),Promise.all(n).then(()=>{a(),d2(),t()}).catch(()=>{a(),d2(),e()})})}var R6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=T3,c}}},provides(c){c.pseudoElements2svg=function(t){let{node:e=d}=t;h.searchPseudoElements&&T3(e)}}},I3=!1,F6={mixout(){return{dom:{unwatch(){z4(),I3=!0}}}},hooks(){return{bootstrap(){N3(f2("mutationObserverCallbacks",{}))},noAuto(){M6()},watch(c){let{observeMutationsRoot:t}=c;I3?d2():N3(f2("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},O3=c=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,n)=>{let a=n.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},t)},Z6={mixout(){return{parse:{transform:c=>O3(c)}}},hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-transform");return e&&(c.transform=O3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(t){let{main:e,transform:n,containerWidth:a,iconWidth:i}=t,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),m="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(s," ").concat(m," ").concat(l)},z={transform:"translate(".concat(i/2*-1," -256)")},u={outer:o,inner:f,path:z};return{tag:"g",attributes:r({},u.outer),children:[{tag:"g",attributes:r({},u.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:r(r({},e.icon.attributes),u.path)}]}]}}}},Q1={x:0,y:0,width:"100%",height:"100%"};function P3(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||t)&&(c.attributes.fill="black"),c}function q6(c){return c.tag==="g"?c.children:[c]}var j6={hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-mask"),n=e?E1(e.split(" ").map(a=>a.trim())):l4();return n.prefix||(n.prefix=P()),c.mask=n,c.maskId=t.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(t){let{children:e,attributes:n,main:a,mask:i,maskId:o,transform:s}=t,{width:m,icon:l}=a,{width:f,icon:z}=i,u=O5({transform:s,containerWidth:f,iconWidth:m}),v={tag:"rect",attributes:r(r({},Q1),{},{fill:"white"})},k=l.children?{children:l.children.map(P3)}:{},_={tag:"g",attributes:r({},u.inner),children:[P3(r({tag:l.tag,attributes:r(r({},l.attributes),u.path)},k))]},L={tag:"g",attributes:r({},u.outer),children:[_]},N="mask-".concat(o||f1()),g="clip-".concat(o||f1()),x={tag:"mask",attributes:r(r({},Q1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,L]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:q6(z)},x]};return e.push(j,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(N,")")},Q1)}),{children:e,attributes:n}}}},U6={provides(c){let t=!1;O.matchMedia&&(t=O.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:r(r({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=r(r({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:r(r({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:r(r({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:r(r({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:r(r({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:r(r({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},B6={hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-symbol"),n=e===null?!1:e===""?!0:e;return c.symbol=n,c}}}},W6=[_5,A6,w6,E6,k6,R6,F6,Z6,j6,U6,B6];t6(W6,{mixoutsTo:H});var i7=H.noAuto,p4=H.config,o7=H.library,v4=H.dom,C4=H.parse,s7=H.findIconDefinition,r7=H.toHtml,M4=H.icon,l7=H.layer,G6=H.text,Y6=H.counter;var $6=["*"],X6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},K6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},g4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),J6=c=>{let t=g4(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:t,"fa-rotate-by":c.rotate!=null&&!t,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},S2=new WeakSet,b4="fa-auto-css";function Q6(c,t){if(!t.autoAddCss||S2.has(c))return;if(c.getElementById(b4)!=null){t.autoAddCss=!1,S2.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",b4),e.innerHTML=v4.css();let n=c.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let o=n[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}c.head.insertBefore(e,a),t.autoAddCss=!1,S2.add(c)}var c8=c=>c.prefix!==void 0&&c.iconName!==void 0,e8=(c,t)=>c8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:t,iconName:c},t8=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){p4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),n8=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let a of n.icon[2])typeof a=="string"&&(this.definitions[n.prefix][a]=n)}}addIconPacks(...e){for(let n of e){let a=Object.keys(n).map(i=>n[i]);this.addIcons(...a)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),a8=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275dir=B2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[p1]})}}return c})(),i8=(()=>{class c{constructor(e,n){this.renderer=e,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||c)(T(U2),T(E2))}}static{this.\u0275cmp=_1({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[p1],ngContentSelectors:$6,decls:1,vars:0,template:function(n,a){n&1&&(Y2(),$2(0))},encapsulation:2})}}return c})(),x7=(()=>{class c{constructor(e,n,a,i,o){this.sanitizer=e,this.config=n,this.iconLibrary=a,this.stackItem=i,this.document=I1(b),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){K6();return}if(e){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let a=this.buildParams();Q6(this.document,this.config);let i=M4(n,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let n=e8(e,this.config.defaultPrefix);if("icon"in n)return n;let a=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return a??(X6(n),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?C4.transform(this.transform):this.transform,a={};return e.rotate!=null&&!g4(e.rotate)&&(a["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:n,classes:J6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:a}}static{this.\u0275fac=function(n){return new(n||c)(T(Y1),T(t8),T(n8),T(a8,8),T(i8,8))}}static{this.\u0275cmp=_1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,a){n&2&&(G2("innerHTML",a.renderedIconHTML,q2),W2("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[p1],decls:0,vars:0,template:function(n,a){},encapsulation:2})}}return c})();var y7=(()=>{class c{static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275mod=v1({type:c})}static{this.\u0275inj=d1({})}}return c})();var N7={prefix:"fab",iconName:"confluence",icon:[512,512,[],"f78d","M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z"]};var S7={prefix:"fab",iconName:"amazon",icon:[448,512,[],"f270","M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"]};var A7={prefix:"fab",iconName:"font-awesome",icon:[512,512,[62501,62694,"font-awesome-flag","font-awesome-logo-full"],"f2b4","M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z"]};var w7={prefix:"fab",iconName:"angular",icon:[448,512,[],"f420","M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]};var E7={prefix:"fab",iconName:"bootstrap",icon:[576,512,[],"f836","M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"]};var k7={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]};var T7={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var I7={prefix:"fab",iconName:"bitbucket",icon:[512,512,[61810],"f171","M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"]};var O7={prefix:"fab",iconName:"jira",icon:[496,512,[],"f7b1","M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z"]};var P7={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};export{D4 as a,c7 as b,x7 as c,y7 as d,N7 as e,S7 as f,A7 as g,w7 as h,E7 as i,k7 as j,T7 as k,I7 as l,O7 as m,P7 as n};
