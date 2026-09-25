const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/html-D2Ydc7zz.js","assets/editor.api-Db_DSTUw.js","assets/editor-Csy6Iug3.css","assets/cssMode-7z-2sQE4.js","assets/lspLanguageFeatures-MyuZ1pSZ.js","assets/wordOperations-BELP3elR.js","assets/wordOperations-BKi0aSyd.css","assets/lspLanguageFeatures-CHezP6gz.css","assets/htmlMode-Bd_aUKMp.js","assets/dash-C2__zJ0P.js","assets/define-C3HjobKj.js","assets/es2015-CRFqTb2z.js","assets/tiers-DFrYwLQ-.js","assets/dash-drm-c2vYSMDu.js","assets/dual-B5BZ_omN.js","assets/dual-drm-DryRoKoi.js","assets/dual-ts-CMqIeO67.js","assets/dual-ts-drm-TK244Vno.js","assets/full-CV3SED3h.js","assets/hls-BY4TCfbu.js","assets/hls-drm-CMPRCatU.js","assets/hls-ts-BS6I_zVE.js","assets/hls-ts-drm-E225Um1X.js","assets/kernel-bDbzjONJ.js"])))=>i.map(i=>d[i]);
import{_o as e,a as t,i as n,o as r,t as i}from"./editor.api-Db_DSTUw.js";import{it as a}from"./wordOperations-BELP3elR.js";import{t as o}from"./es2015-CRFqTb2z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20400'%20width='400'%20height='400'%20role='img'%20aria-labelledby='mattebox-logo-title'%3e%3ctitle%20id='mattebox-logo-title'%3eMattebox%3c/title%3e%3crect%20width='400'%20height='400'%20rx='48'%20fill='%23f3ede4'/%3e%3c!--%20light-facing%20panels%20--%3e%3cpolygon%20points='60,72%20340,72%20254,144%20146,144'%20fill='%232b2b30'/%3e%3cpolygon%20points='48,84%20134,156%20134,244%2048,316'%20fill='%232b2b30'/%3e%3c!--%20shadow-facing%20panels%20--%3e%3cpolygon%20points='60,328%20340,328%20254,256%20146,256'%20fill='%23e0543c'/%3e%3cpolygon%20points='352,84%20266,156%20266,244%20352,316'%20fill='%23e0543c'/%3e%3c/svg%3e`,c={},l={},u=class e{static getOrCreate(t){return l[t]||(l[t]=new e(t)),l[t]}constructor(e){this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise((e,t)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=t})}load(){return this._loadingTriggered||(this._loadingTriggered=!0,c[this._languageId].loader().then(e=>this._lazyLoadPromiseResolve(e),e=>this._lazyLoadPromiseReject(e))),this._lazyLoadPromise}};function d(e){let t=e.id;c[t]=e,r.register(e);let n=u.getOrCreate(t);r.registerTokensProviderFactory(t,{create:async()=>(await n.load()).language}),r.onLanguageEncountered(t,async()=>{let e=await n.load();r.setLanguageConfiguration(t,e.conf)})}d({id:`css`,extensions:[`.css`],aliases:[`CSS`,`css`],mimetypes:[`text/css`],loader:()=>e(()=>import(`./css-DIMkf-bt.js`),[])}),d({id:`html`,extensions:[`.html`,`.htm`,`.shtml`,`.xhtml`,`.mdoc`,`.jsp`,`.asp`,`.aspx`,`.jshtm`],aliases:[`HTML`,`htm`,`html`,`xhtml`],mimetypes:[`text/html`,`text/x-jshtm`,`text/template`,`text/ng-template`],loader:()=>e(()=>import(`./html-D2Ydc7zz.js`),__vite__mapDeps([0,1,2]))});var f=class{constructor(e,t,n){this._onDidChange=new i,this._languageId=e,this.setOptions(t),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},p={validate:!0,lint:{compatibleVendorPrefixes:`ignore`,vendorPrefix:`warning`,duplicateProperties:`warning`,emptyRules:`warning`,importStatement:`ignore`,boxModel:`ignore`,universalSelector:`ignore`,zeroUnits:`ignore`,fontFaceProperties:`warning`,hexColorLength:`error`,argumentsInColorFunction:`error`,unknownProperties:`warning`,ieHack:`ignore`,unknownVendorSpecificProperties:`ignore`,propertyIgnoredDueToDisplay:`warning`,important:`ignore`,float:`ignore`,idSelector:`ignore`},data:{useDefaultDataProvider:!0},format:{newlineBetweenSelectors:!0,newlineBetweenRules:!0,spaceAroundSelectorSeparator:!1,braceStyle:`collapse`,maxPreserveNewLines:void 0,preserveNewLines:!0}},m={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0,documentFormattingEdits:!0,documentRangeFormattingEdits:!0},h=new f(`css`,p,m),g=new f(`scss`,p,m),_=new f(`less`,p,m);function v(){return e(()=>import(`./cssMode-7z-2sQE4.js`),__vite__mapDeps([3,1,2,4,5,6,7]))}r.onLanguage(`less`,()=>{v().then(e=>e.setupMode(_))}),r.onLanguage(`scss`,()=>{v().then(e=>e.setupMode(g))}),r.onLanguage(`css`,()=>{v().then(e=>e.setupMode(h))});var y=class{constructor(e,t,n){this._onDidChange=new i,this._languageId=e,this.setOptions(t),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},b={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:`default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var`,contentUnformatted:`pre`,indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:`head, body, /html`,wrapAttributes:`auto`},suggest:{},data:{useDefaultDataProvider:!0}};function x(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===S,documentFormattingEdits:e===S,documentRangeFormattingEdits:e===S}}var S=`html`,ee=`handlebars`,te=`razor`;re(S,b,x(S)).defaults,re(ee,b,x(ee)).defaults,re(te,b,x(te)).defaults;function ne(){return e(()=>import(`./htmlMode-Bd_aUKMp.js`),__vite__mapDeps([8,1,2,4,5,6,7]))}function re(e,t=b,n=x(e)){let i=new y(e,t,n),a,o=r.onLanguage(e,async()=>{a=(await ne()).setupMode(i)});return{defaults:i,dispose(){o.dispose(),a?.dispose(),a=void 0}}}var ie=`__monacoFindWidgetTabIndexPatchApplied`,C=`__monacoFindWidgetOriginalTabIndex`;function ae(e,t){let n=e?._domNode;if(!n)return;let r=n.querySelectorAll(`input, textarea, [tabindex], [role="button"], [role="checkbox"]`);for(let e of r)if(e instanceof HTMLElement){if(t){if(!(C in e.dataset))continue;let t=e.dataset[C];t===``?e.removeAttribute(`tabindex`):e.tabIndex=Number(t),delete e.dataset[C]}else C in e.dataset||(e.dataset[C]=e.getAttribute(`tabindex`)??``),e.tabIndex=-1}}if(!a[ie]){let e=a.prototype._reveal,t=a.prototype._hide;a.prototype._reveal=function(...t){e.apply(this,t),ae(this,!0)},a.prototype._hide=function(...e){t.apply(this,e),ae(this,!1)},a[ie]=!0}function oe(e){return new Worker(`/mattebox-player-editor/pr-preview/pr-1/assets/editor.worker-DWPaKKV_.js`,{name:e?.name})}function se(e){return new Worker(`/mattebox-player-editor/pr-preview/pr-1/assets/css.worker-gLj4_ykt.js`,{name:e?.name})}function ce(e){return new Worker(`/mattebox-player-editor/pr-preview/pr-1/assets/html.worker-DBhNYEPj.js`,{name:e?.name})}var le={css:se,html:ce};self.MonacoEnvironment={getWorker:(e,t)=>new(le[t]??oe)};var ue=class e extends HTMLElement{static define(){customElements.get(`mbe-code-editor`)===void 0&&customElements.define(`mbe-code-editor`,e)}editor=null;opened=new Map;shown=null;dark=!1;writing=!1;connectedCallback(){this.editor===null&&(this.editor=t.create(this,{automaticLayout:!0,minimap:{enabled:!1},fixedOverflowWidgets:!0,scrollBeyondLastLine:!1,tabSize:2,fontSize:13,theme:this.dark?`vs-dark`:`vs`,model:null}),this.editor.onDidChangeModelContent(()=>{if(this.writing||this.shown===null)return;let e={id:this.shown,value:this.value(this.shown)};this.dispatchEvent(new CustomEvent(`document-change`,{detail:e}))}),this.shown!==null&&this.show(this.shown))}disconnectedCallback(){this.editor?.dispose(),this.editor=null}open(e,r,i){let a=this.opened.get(e);if(a!==void 0){this.write(a.model,i);return}let o=t.createModel(i,r,n.parse(`inmemory://mbe/${e}`));this.opened.set(e,{model:o,viewState:null}),this.shown===null&&this.show(e)}show(e){let t=this.opened.get(e);if(t===void 0)throw Error(`${e} is not open`);let n=this.editor;if(n===null||n.getModel()!==t.model){if(n!==null){let e=this.shown===null?void 0:this.opened.get(this.shown);e!==void 0&&e!==t&&(e.viewState=n.saveViewState()),n.setModel(t.model),t.viewState!==null&&n.restoreViewState(t.viewState)}this.shown=e}}get active(){return this.shown}value(e){let t=this.opened.get(e);if(t===void 0)throw Error(`${e} is not open`);return t.model.getValue()}set theme(e){this.dark=e,this.editor?.updateOptions({theme:e?`vs-dark`:`vs`})}focus(){this.editor?.focus()}write(e,t){if(e.getValue()!==t){this.writing=!0;try{e.setValue(t)}finally{this.writing=!1}}}};function de(e){return e}function fe(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function w(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){fe(a,r,i,o,s,`next`,e)}function s(e){fe(a,r,i,o,s,`throw`,e)}o(void 0)})}}var pe=[`eme-core`,`eme-cenc`,`eme-fairplay`],me={dash:()=>e(()=>import(`./dash-C2__zJ0P.js`),__vite__mapDeps([9,10,11,12])),"dash-drm":()=>e(()=>import(`./dash-drm-c2vYSMDu.js`),__vite__mapDeps([13,10,11,12])),dual:()=>e(()=>import(`./dual-B5BZ_omN.js`),__vite__mapDeps([14,10,11,12])),"dual-drm":()=>e(()=>import(`./dual-drm-DryRoKoi.js`),__vite__mapDeps([15,10,11,12])),"dual-ts":()=>e(()=>import(`./dual-ts-CMqIeO67.js`),__vite__mapDeps([16,10,11,12])),"dual-ts-drm":()=>e(()=>import(`./dual-ts-drm-TK244Vno.js`),__vite__mapDeps([17,10,11,12])),full:()=>e(()=>import(`./full-CV3SED3h.js`),__vite__mapDeps([18,11,10,12])),hls:()=>e(()=>import(`./hls-BY4TCfbu.js`),__vite__mapDeps([19,10,11,12])),"hls-drm":()=>e(()=>import(`./hls-drm-CMPRCatU.js`),__vite__mapDeps([20,10,11,12])),"hls-ts":()=>e(()=>import(`./hls-ts-BS6I_zVE.js`),__vite__mapDeps([21,10,11,12])),"hls-ts-drm":()=>e(()=>import(`./hls-ts-drm-E225Um1X.js`),__vite__mapDeps([22,10,11,12])),kernel:()=>e(()=>import(`./kernel-bDbzjONJ.js`),__vite__mapDeps([23,10,11]))};function he(e){return ge.apply(this,arguments)}function ge(){return ge=w(function*(e){let t=globalThis.mattebox;if(t?.preset!==void 0)return t.preset;let n=me[e];if(n===void 0)return null;try{return(yield n()).default}catch{return null}}),ge.apply(this,arguments)}function _e(){return`setMediaKeys`in HTMLMediaElement.prototype?{}:{without:pe}}var ve=`
:host {
  display: block;
  position: relative;
  outline: none;
  background: #000;
  --mbx-surface: #101114;
  --mbx-text: #f2f3f5;
  --mbx-muted: #9aa0a6;
  --mbx-accent: #5b8cff;
  --mbx-error: #ffb4ab;
  --mbx-live: #ff4d4d;
  --mbx-radius: 4px;
  --mbx-gap: 10px;
  --mbx-pad: 8px;
  --mbx-font: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
/* The stage is a column as tall as the host, so the picture is centred
   in whatever height the page gives. The height comes from the
   page, or from the browser in fullscreen, and not from a display on the
   host: a page's own "mattebox-player { display: block }" beats a :host()
   rule, so nothing here may depend on one. */
[part~="stage"] {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
/* 16:9 until the media says otherwise: a bare video measures 300 by 150 and
   would jump to its size on metadata. Auto first, so the natural ratio wins
   once it is known. Capped at the stage, and contained, so a box shorter
   than the picture letterboxes it and a narrower one pillarboxes it. */
::slotted(video) {
  display: block;
  width: 100%;
  min-height: 0;
  max-height: 100%;
  object-fit: contain;
  aspect-ratio: auto 16 / 9;
}
/* The casting attribute is set by @mattebox/player-cast while a receiver
   plays: its screen has the controls, and the bar and the start button
   would drive a paused video nobody watches. The attribute is the whole
   coupling. */
:host([casting]) ::slotted(mbx-control-bar), :host([casting]) ::slotted(mbx-start-button) { display: none; }
/* controls="none" hides every child but the video, so a page keeps its
   composition in place and turns it off with one attribute. A normal rule
   from the page still wins over this one, the way it does over any rule
   here. */
:host([controls="none"]) ::slotted(:not(video)) { display: none; }
:host(:focus-visible) [part~="stage"] { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
/* Fullscreen goes on the host, so every control the page placed inside
   comes along. The browser gives the host the whole screen with
   !important; the picture takes all of it. The error surface, which sits
   under the stage in the page, goes over its foot instead. */
:host(:fullscreen) ::slotted(video) { flex: 1; }
:host(:fullscreen) [part~="error"] { position: absolute; left: 0; right: 0; bottom: 0; }
:host(:-webkit-full-screen) ::slotted(video) { flex: 1; }
:host(:-webkit-full-screen) [part~="error"] { position: absolute; left: 0; right: 0; bottom: 0; }
[part~="error"] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--mbx-gap);
  padding: var(--mbx-pad);
  background: var(--mbx-surface);
  color: var(--mbx-error);
  font: 400 13px/1.4 var(--mbx-font);
}
[part~="value"] { color: var(--mbx-accent); }
[part~="button"] {
  font: inherit;
  color: inherit;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: var(--mbx-radius);
  padding: 2px 6px;
}
[hidden] { display: none; }
`;function T(e,t,n){let r=document.createElement(e);return r.setAttribute(`part`,t),n!==void 0&&(r.textContent=n),r}function ye(e,t,n){let r=[t];for(let e of Object.keys(n))n[e]===!0&&r.push(e);e.setAttribute(`part`,r.join(` `))}function be(e){let t=T(`div`,`error`),n=T(`span`,`value error-category`),r=T(`span`,`value error-code`),i=T(`button`,`button error-retry`,`Retry`);return i.type=`button`,i.addEventListener(`click`,e),t.append(n,r,i),t.hidden=!0,{root:t,show(e){n.textContent=e.category,r.textContent=e.code,t.hidden=!1},clear(){t.hidden=!0}}}var xe=`mattebox-player`,Se=`mbx-control-bar`,Ce=`mbx-spacer`,we=`mbx-play-button`,Te=`mbx-mute-button`,Ee=`mbx-volume-slider`,De=`mbx-skip-button`,Oe=`mbx-pip-button`,ke=`mbx-airplay-button`,Ae=`mbx-fullscreen-button`,je=`mbx-start-button`,Me=`mbx-error-screen`,Ne=`mbx-spinner`,Pe=`mbx-title`,Fe=`mbx-current-time`,Ie=`mbx-duration`,Le=`mbx-remaining-time`,Re=`mbx-seek-bar`,ze=`mbx-live-button`,Be=`mbx-speed-menu`,Ve=`mbx-quality-menu`,He=`mbx-audio-menu`,Ue=`mbx-subtitles-menu`,We=`mbx-drm-badge`,Ge=`mbx-volume`,Ke=`mbx-chapters-menu`;function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},qe(e)}function Je(e,t){if(qe(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(qe(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ye(e){var t=Je(e,`string`);return qe(t)==`symbol`?t:t+``}function Xe(e,t,n){return(t=Ye(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ze(Object(n),!0).forEach(function(t){Xe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $e(e){"@babel/helpers - typeof";return $e=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$e(e)}function et(e,t){if($e(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if($e(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function tt(e){var t=et(e,`string`);return $e(t)==`symbol`?t:t+``}function nt(e,t,n){return(t=tt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rt(Object(n),!0).forEach(function(t){nt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var at=class extends Error{},ot=[``,`MEDIA_ERR_ABORTED`,`MEDIA_ERR_NETWORK`,`MEDIA_ERR_DECODE`,`MEDIA_ERR_SRC_NOT_SUPPORTED`];function st(e,t){let n=e.error?.code??0;return n===0||n===1?null:{category:`media`,code:n===4?`MEDIA_CODEC_UNSUPPORTED`:`MEDIA_DECODE_ERROR`,fatal:!0,recoverable:!1,handler:t,context:{mediaError:ot[n]??n,message:e.error?.message??``}}}function ct(e,t){if(typeof e!=`object`||!e)return null;let n=e;return typeof n.code!=`string`||typeof n.category!=`string`?null:it({category:n.category,code:n.code,fatal:n.fatal===!0,recoverable:n.recoverable===!0,handler:t},n.context===void 0?{}:{context:n.context})}function lt(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function E(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){lt(a,r,i,o,s,`next`,e)}function s(e){lt(a,r,i,o,s,`throw`,e)}o(void 0)})}}var ut=`mattebox`;function dt(e,t){return e.type!==void 0&&t.canPlayType(e.type)!==``}function ft(e){let t={};return e.stages!==void 0&&(t.stages=e.stages),e.config!==void 0&&(t.config=e.config),e.transport!==void 0&&(t.transport=e.transport),e.without!==void 0&&(t.without=e.without),t}function pt(e={}){let t=null;function n(){if(t===null){let n=ft(e);t=e.preset===void 0?o(n):e.preset(n)}return t}function r(e,t){return t.mse?e.type===void 0?`maybe`:n().accepts(e.type)?`probably`:``:``}function i(e,t){return a.apply(this,arguments)}function a(){return a=E(function*(t,r){let i=n(),a=e.airplay!==!1&&dt(t,r);yield i.attach(r,a?{airplay:it({url:t.url},t.type===void 0?{}:{type:t.type})}:{});function o(){return s.apply(this,arguments)}function s(){return s=E(function*(){i.unload(),yield i.detach()}),s.apply(this,arguments)}let c={handler:ut,engine:i,dispose:o};return new Promise((e,n)=>{let r=!1,a=[];function s(e){if(!r){r=!0;for(let e of a)e();e()}}a.push(i.on(`error`,t=>{let r=t;if(r?.fatal===!0){if(r.code!==`MANIFEST_UNSUPPORTED`){s(()=>e(c));return}s(()=>{o().then(()=>n(new at(r.code)),()=>n(new at(r.code)))})}})),a.push(i.on(`tracks:changed`,()=>s(()=>e(c)))),i.load(t.url,t.type===void 0?{}:{mimeType:t.type}),i.stats.snapshot().lifecycle.phase===`ready`&&s(()=>e(c))})}),a.apply(this,arguments)}return{name:ut,canHandle:r,handle:i}}var mt=`native`;function ht(){function e(e,t){return e.type===void 0?`maybe`:t.video.canPlayType(e.type)}function t(e,t){return n.apply(this,arguments)}function n(){return n=E(function*(e,t){let n=o.from(t);n!==null&&(yield n.detach()),t.disableRemotePlayback=!1,t.src=e.url;function r(){return i.apply(this,arguments)}function i(){return i=E(function*(){t.removeAttribute(`src`),t.load()}),i.apply(this,arguments)}return{handler:mt,engine:null,dispose:r}}),n.apply(this,arguments)}return{name:mt,canHandle:e,handle:t}}var gt={m3u8:`application/vnd.apple.mpegurl`,mpd:`application/dash+xml`,mp4:`video/mp4`,m4v:`video/mp4`,webm:`video/webm`,mp3:`audio/mpeg`,m4a:`audio/mp4`,aac:`audio/aac`,ogg:`audio/ogg`,wav:`audio/wav`};function _t(e){let t=e;try{t=new URL(e,`http://localhost/`).pathname}catch{}let n=t.slice(t.lastIndexOf(`/`)+1),r=n.lastIndexOf(`.`);if(r!==-1)return gt[n.slice(r+1).toLowerCase()]}function vt(e){return{category:`manifest`,code:`MANIFEST_UNSUPPORTED`,fatal:!0,recoverable:!1,handler:null,context:e.type===void 0?{url:e.url}:{url:e.url,mimeType:e.type}}}function yt(e,t){let n={sourcechange:new Set,error:new Set},r=null,i=0,a=Promise.resolve(),o=null;function s(e,t){let r=n[e];for(let e of[...r])e(t)}function c(t){if(t.engine!==null)return t.engine.on(`error`,e=>{let n=ct(e,t.handler);n!==null&&s(`error`,n)});let n=()=>{let n=st(e,t.handler);n!==null&&s(`error`,n)};return e.addEventListener(`error`,n),()=>{e.removeEventListener(`error`,n)}}function l(){return u.apply(this,arguments)}function u(){return u=E(function*(){let e=r;r=null,o?.(),o=null,e!==null&&(yield e.dispose())}),u.apply(this,arguments)}function d(e,t){return f.apply(this,arguments)}function f(){return f=E(function*(n,a){yield l();let u=n.type??_t(n.url),d=u===void 0?{url:n.url}:{url:n.url,type:u},f={video:e,mse:`MediaSource`in globalThis||`ManagedMediaSource`in globalThis};for(let n of t.handlers){if(n.canHandle(d,f)===``)continue;let t;try{t=yield n.handle(d,e)}catch(e){if(e instanceof at)continue;throw e}let l=it(it({},t),{},{source:d});if(a!==i)return yield l.dispose(),l;r=l,o=c(l),s(`sourcechange`,l);let u=l.engine===null?null:ct(l.engine.error,l.handler);return u!==null&&s(`error`,u),l}throw a===i&&s(`error`,vt(d)),Error(`no handler for ${d.url}`)}),f.apply(this,arguments)}function p(e){let t=++i,n=a.then(()=>d(e,t),()=>d(e,t));return a=n.catch(()=>void 0),n}function m(){i+=1;let e=a.then(l,l).then(()=>{s(`sourcechange`,null)});return a=e.catch(()=>void 0),e}return{load:p,unload:m,get session(){return r},on(e,t){let r=n[e];return r.add(t),()=>{r.delete(t)}}}}var bt=[`autoplay`,`muted`,`poster`,`crossorigin`],xt=[`src`,`type`,`preset`,`license-url`,`thumbnails`],St=`chapters`,Ct=`controls`,D=`playsinline`,wt=[`play`,`pause`,`ended`,`emptied`,`volumechange`,`loadedmetadata`,`resize`,`playing`,`waiting`,`stalled`,`canplay`],Tt=`full`,Et={};(class e extends HTMLElement{static get observedAttributes(){return[...bt,...xt,Ct,St,D]}static define(t){t!==void 0&&(Et=t),customElements.get(`mattebox-player`)===void 0&&customElements.define(xe,e)}constructor(e){super(),this.options=e??Et,this.focusable=!1,this.track=null,this.core=null,this.current=null,this.failure=null,this.reflecting=!1,this.started=!1,this.waiting=!1,this.offs=[],this.queue=Promise.resolve(),this.pending=!1,this.media=document.createElement(`video`),this.media.controls=!0,this.media.setAttribute(D,``);for(let e of wt)this.media.addEventListener(e,()=>{this.note(e),this.reflect()});this.media.addEventListener(`playing`,()=>{this.failure=null}),this.stage=document.createElement(`div`),this.stage.setAttribute(`part`,`stage`),this.stage.append(document.createElement(`slot`)),this.surface=be(()=>{this.reload()});let t=this.attachShadow({mode:`open`}),n=document.createElement(`style`);n.textContent=ve,t.append(n,this.stage,this.surface.root)}get video(){return this.media}get player(){return this.core}get engine(){return this.current?.engine??null}get error(){return this.failure}connectedCallback(){this.media.parentNode!==this&&this.append(this.media);for(let e of bt)this.forward(e);this.reflect(),this.reload()}note(e){e===`playing`?(this.started=!0,this.waiting=!1):e===`waiting`||e===`stalled`?this.waiting=!0:e===`canplay`?this.waiting=!1:e===`emptied`&&(this.started=!1,this.waiting=!1)}reflect(){let e=this.media;this.reflecting=!0,this.toggleAttribute(`paused`,e.paused),this.toggleAttribute(`playing`,!e.paused),this.toggleAttribute(`ended`,e.ended),this.toggleAttribute(`muted`,e.muted),this.toggleAttribute(`audio`,this.audio()),this.toggleAttribute(`started`,this.started),this.toggleAttribute(`waiting`,this.waiting),this.reflecting=!1}audio(){let e=this.media;if(e.readyState>=HTMLMediaElement.HAVE_METADATA)return e.videoWidth===0&&e.videoHeight===0;let t=this.getAttribute(`src`);return(this.getAttribute(`type`)??(t===null?void 0:_t(t)))?.startsWith(`audio/`)===!0}disconnectedCallback(){this.enqueue(()=>this.teardown())}attributeChangedCallback(e){if(bt.includes(e)){this.reflecting||this.forward(e);return}if(e===Ct){this.mode();return}if(e===St){this.chapters();return}if(e===D){this.media.toggleAttribute(D,this.getAttribute(D)!==`false`);return}e===`preset`&&this.enqueue(()=>this.discard()),(e===`src`||e===`type`)&&this.toggleAttribute(`audio`,this.audio()),this.reload()}mode(){let e=this.getAttribute(Ct),t=e===`custom`;this.media.controls=!t&&e!==`none`,t&&this.surface.clear(),t?this.hasAttribute(`tabindex`)||(this.tabIndex=0,this.focusable=!0):(this.focusable&&this.removeAttribute(`tabindex`),this.focusable=!1)}chapters(){let e=this.getAttribute(St);if(e===null){var t;(t=this.track)==null||t.remove(),this.track=null;return}let n=this.track;if(n!==null&&n.parentNode===this.media&&n.getAttribute(`src`)===e)return;n?.remove();let r=document.createElement(`track`);r.kind=`chapters`,r.src=e,this.track=r,this.media.append(r),r.track.mode=`hidden`}forward(e){let t=this.getAttribute(e);t===null?this.media.removeAttribute(e):this.media.setAttribute(e,t),e===`muted`&&(this.media.muted=t!==null)}enqueue(e){this.queue=this.queue.then(e,e).catch(()=>void 0)}reload(){this.pending||(this.pending=!0,this.enqueue(()=>(this.pending=!1,this.run())))}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}report(e){e.fatal&&(this.failure=e,this.getAttribute(Ct)!==`custom`&&this.surface.show(e)),this.emit(`error`,e)}run(){var e=this;return w(function*(){if(e.unmount(),!e.isConnected)return;let t=e.getAttribute(`src`);if(t===null)return;let n=yield e.ensure(),r=e.getAttribute(`type`),i=r===null?{url:t}:{url:t,type:r};e.failure=null,e.surface.clear();let a;try{a=yield n.load(i)}catch{return}if(!e.isConnected){yield n.unload();return}e.current=a,e.configure(a),e.chapters()})()}ensure(){var e=this;return w(function*(){if(e.core!==null)return e.core;let t=yt(e.media,{handlers:yield e.chain()});return e.offs.push(t.on(`sourcechange`,t=>{e.current=t,e.emit(`sourcechange`,t)}),t.on(`error`,t=>{e.report(t)})),e.core=t,t})()}chain(){var e=this;return w(function*(){if(e.options.handlers!==void 0)return e.options.handlers;let t=e.options.config===void 0?{}:{config:e.options.config};if(e.options.stages!==void 0)return[pt(Qe({stages:e.options.stages},t)),ht()];let n=e.getAttribute(`preset`)??Tt,r=yield he(n);return r===null?(e.report({category:`config`,code:`CONFIG_INVALID`,fatal:!0,recoverable:!1,handler:null,context:{preset:n}}),[ht()]):[pt(Qe(Qe({preset:r},t),_e())),ht()]})()}configure(e){let t=e.engine;if(t===null)return;let n=de(t),r=this.getAttribute(`license-url`);r!==null&&n.drm!==void 0&&n.drm.setLicenseUrl(r);let i=this.getAttribute(`thumbnails`);i!==null&&n.thumbnails!==void 0&&n.thumbnails.load(i).catch(()=>void 0)}unmount(){this.current=null}teardown(){var e=this;return w(function*(){e.unmount(),e.core!==null&&(yield e.core.unload())})()}discard(){var e=this;return w(function*(){yield e.teardown();for(let t of e.offs)t();e.offs=[],e.core=null})()}}).define();var Dt=`webkitcurrentplaybacktargetiswirelesschanged`;function Ot(e){let t=e;return`WebKitPlaybackTargetAvailabilityEvent`in globalThis&&typeof t.webkitShowPlaybackTargetPicker==`function`?{supported:!0,offered:()=>e.disableRemotePlayback!==!0,active:()=>t.webkitCurrentPlaybackTargetIsWireless===!0,show(){var e;(e=t.webkitShowPlaybackTargetPicker)==null||e.call(t)},watch(t){return e.addEventListener(Dt,t),()=>{e.removeEventListener(Dt,t)}}}:{supported:!1,offered:()=>!1,active:()=>!1,show(){},watch:()=>()=>{}}}var kt={play:`M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z`,pause:`M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z`,replay:`M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z`,mute:`M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z`,"volume-low":`M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z`,"volume-high":`M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z`,fullscreen:`M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z`,"fullscreen-exit":`M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z`,settings:`M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z`,music:`M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z`,"closed-captions":`M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z`,"closed-captions-on":`M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z`,"lock-closed":`M16 4C19.6372 4 22.5941 6.91273 22.6653 10.5329C22.6668 10.6065 22.7264 10.6667 22.8 10.6667H24.6667C25.0348 10.6667 25.3333 10.9651 25.3333 11.3333V26C25.3333 26.3682 25.0348 26.6667 24.6667 26.6667H7.33332C6.96513 26.6667 6.66666 26.3682 6.66666 26V11.3333C6.66666 10.9651 6.96513 10.6667 7.33332 10.6667H9.19999C9.27363 10.6667 9.33319 10.6065 9.33464 10.5329C9.40591 6.91273 12.3628 4 16 4ZM12.0022 10.5331C11.9998 10.6067 12.0597 10.6667 12.1333 10.6667H19.8667C19.9403 10.6667 20.0002 10.6067 19.9978 10.5331C19.9273 8.38578 18.1644 6.66667 16 6.66667C13.8356 6.66667 12.0726 8.38578 12.0022 10.5331ZM9.33332 14C9.33332 13.6318 9.6318 13.3333 9.99999 13.3333H22C22.3682 13.3333 22.6667 13.6318 22.6667 14V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V14Z`,"seek-backward":`M15.6038 12.2148C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7015 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69758C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45207L11.0765 7.79738C10.7159 8.06387 10.7159 8.60327 11.0766 8.86974L15.6038 12.2148Z`,"seek-forward":`M16.4167 12.2148C15.9766 12.5399 15.3538 12.2257 15.3538 11.6786V10.1789C15.3538 10.1001 15.2854 10.0384 15.2072 10.0479C11.9089 10.4494 9.35384 13.2593 9.35384 16.6659C9.35384 20.3481 12.3389 23.3332 16.0211 23.3332C19.4785 23.3332 22.3212 20.7015 22.6554 17.332C22.6918 16.9655 22.9868 16.6662 23.355 16.6662L25.354 16.6666C25.7221 16.6666 26.0228 16.966 25.9986 17.3334C25.6556 22.5454 21.3193 26.6667 16.0205 26.6667C10.4977 26.6667 6.02051 22.1895 6.02051 16.6667C6.02051 11.4103 10.0761 7.10112 15.2289 6.69758C15.2989 6.69209 15.3538 6.63396 15.3538 6.56372V4.98824C15.3538 4.44106 15.9766 4.12689 16.4167 4.45207L20.944 7.79738C21.3046 8.06387 21.3046 8.60327 20.9439 8.86974L16.4167 12.2148Z`,"seek-backward-10":`M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z`,"seek-forward-10":`M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z`,"seek-backward-30":`M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.0949 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0786 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8771 15.6648C14.8771 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6536 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1271 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7744 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6333 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z`,"seek-forward-30":`M15.3334 10.3452C15.3334 10.8924 15.9561 11.2066 16.3962 10.8814L20.9235 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3334 3.10773 15.3334 3.6549V5.22682C15.3334 5.29746 15.2778 5.35579 15.2073 5.36066C9.31793 5.76757 4.66669 10.674 4.66669 16.6667C4.66669 22.9259 9.74079 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0349 16.6673 26.6667 16.6673H24.6666C24.2985 16.6673 24.0029 16.9668 23.9726 17.3337C23.6337 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8.00002 21.085 8.00002 16.6667C8.00002 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3334 8.76096 15.3334 8.83893V10.3452Z M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.095 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0787 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8772 15.6648C14.8772 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6537 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1272 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7745 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6334 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z`,"playback-speed":`M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z`,"picture-in-picture":`M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z`,"picture-in-picture-exit":`M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z`,airplay:`M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z`,"airplay-active":`M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z`,chapters:`M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z`},At=`http://www.w3.org/2000/svg`;function O(e){let t=document.createElementNS(At,`svg`);t.setAttribute(`viewBox`,`0 0 32 32`),t.setAttribute(`aria-hidden`,`true`),t.setAttribute(`part`,`icon`);let n=document.createElementNS(At,`path`);return n.setAttribute(`fill-rule`,`evenodd`),n.setAttribute(`d`,kt[e]),t.append(n),t}function jt(e){let t=e.parentNode;return t===null?e instanceof ShadowRoot?e.host:null:t}function Mt(e){let t=e;for(;t!==null;){if(t instanceof HTMLElement&&t.localName===`mattebox-player`)return t;t=jt(t)}return null}var k=class extends HTMLElement{constructor(){super(),this.player=null,this.offs=[],this.epoch=0}connectedCallback(){let e=Mt(this);if(e===null)return;this.epoch+=1;let t=this.epoch,n=()=>{t===this.epoch&&this.isConnected&&(customElements.upgrade(e),`video`in e&&(this.player=e,this.attach(this.player)))};`video`in e?n():customElements.whenDefined(xe).then(n)}disconnectedCallback(){this.epoch+=1;for(let e of this.offs)e();this.offs=[];let e=this.player;e!==null&&(this.player=null,this.detach(e))}attributeChangedCallback(){this.player!==null&&this.render()}listen(e,t,n){for(let r of t)e.addEventListener(r,n);this.offs.push(()=>{for(let r of t)e.removeEventListener(r,n)})}keep(e){this.offs.push(e)}follow(e,t){let n,r=()=>{n?.(),n=t(e.engine)};this.listen(e,[`sourcechange`],r),this.offs.push(()=>{n?.(),n=void 0}),r()}observe(e,t,n,r=!1){let i=new MutationObserver(n);i.observe(e,{attributes:!0,attributeFilter:[...t],subtree:r}),this.offs.push(()=>{i.disconnect()})}detach(e){}render(){}},A=`
:host { display: inline-flex; }
:host([hidden]) { display: none; }
[part~="button"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 40px;
  height: 40px;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: 0;
  border-radius: var(--mbx-radius);
  cursor: pointer;
  opacity: 0.9;
}
[part~="button"]:hover { opacity: 1; }
[part~="button"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="icon"], ::slotted(*) { width: 1.75em; height: 1.75em; fill: currentColor; }
slot[hidden] { display: none; }
`,Nt=`
:host { display: block; }
:host([hidden]) { display: none; }
[part~="slider"] {
  position: relative;
  height: 40px;
  border-radius: var(--mbx-radius);
  cursor: pointer;
  touch-action: none;
}
[part~="slider"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="rail"] { position: absolute; top: 0; bottom: 0; left: 8px; right: 8px; }
[part~="track"] {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  overflow: hidden;
}
[part~="fill"] { position: absolute; top: 0; bottom: 0; left: 0; background: var(--mbx-accent); }
[part~="thumb"] {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: var(--mbx-text);
  pointer-events: none;
}
`;function j(e,t,n){let r=e.getAttribute(t),i=r===null?NaN:Number(r);return Number.isFinite(i)&&i>=0?i:n}var Pt=`${A}
:host { position: relative; }
[part~="popup"] {
  position: absolute;
  right: 0;
  bottom: 100%;
  margin-bottom: 8px;
  min-width: 160px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: rgba(16, 17, 20, 0.95);
  border-radius: var(--mbx-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  font-size: 14px;
}
[part~="popup"][hidden] { display: none; }
[part~="section"] { display: flex; flex-direction: column; }
[part~="section"] + [part~="section"] { margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(255, 255, 255, 0.12); }
[part~="section-label"] { padding: 4px 12px 2px; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--mbx-muted); }
[part~="item"] {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px 8px 28px;
  font: inherit;
  color: inherit;
  text-align: left;
  white-space: nowrap;
  background: transparent;
  border: 0;
  border-radius: var(--mbx-radius);
  cursor: pointer;
}
[part~="item"]:hover { background: rgba(255, 255, 255, 0.12); }
[part~="item-detail"] { margin-left: auto; color: var(--mbx-muted); font-variant-numeric: tabular-nums; }
[part~="item"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="page-item"] { position: relative; padding-right: 28px; }
[part~="page-item"]::after { content: ""; position: absolute; right: 12px; top: 50%; width: 7px; height: 7px; margin-top: -4px; border: solid currentColor; border-width: 1.5px 1.5px 0 0; transform: rotate(45deg); opacity: 0.7; }
[part~="back-item"] { position: relative; font-weight: 600; border-bottom: 1px solid rgba(255, 255, 255, 0.12); border-radius: 0; margin-bottom: 6px; }
[part~="back-item"]::before { content: ""; position: absolute; left: 12px; top: 50%; width: 7px; height: 7px; margin-top: -4px; border: solid currentColor; border-width: 1.5px 0 0 1.5px; transform: rotate(-45deg); opacity: 0.7; }
[part~="checked"] { position: relative; }
[part~="checked"]::before { content: ""; position: absolute; left: 12px; top: 50%; width: 6px; height: 6px; margin-top: -3px; border-radius: 50%; background: var(--mbx-accent); }
`;function Ft(e){e.parentElement?.localName===`mbx-control-bar`&&!e.hasAttribute(`slot`)&&(e.slot=`seek`)}function M(e){let t=document.createElement(`style`);return t.textContent=e,t}function N(e,t){let n={};for(let r of e){let e=document.createElement(`slot`);e.name=`icon-${r}`,e.append(t(r)),e.hidden=!0,n[r]=e}return n}function P(e,t){for(let n of Object.keys(e))e[n].hidden=n!==t}var It=[`default`,`active`],Lt=class extends k{static get observedAttributes(){return[`label`,`label-active`]}constructor(){super(),this.api=null;let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(It,e=>O(e===`active`?`airplay-active`:`airplay`));for(let e of It)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{var e;(e=this.api)==null||e.show()}),e.append(M(A),this.button)}attach(e){let t=Ot(e.video);this.api=t,this.keep(t.watch(()=>{this.render()})),this.follow(e,()=>{this.render()})}detach(e){this.api=null,e.removeAttribute(`airplay`)}render(){let e=this.player;if(e===null||this.api===null)return;let t=this.api.active();this.hidden=!this.api.supported||!this.api.offered(),P(this.slots,t?`active`:`default`),this.button.setAttribute(`aria-label`,t?this.getAttribute(`label-active`)??`Stop AirPlay`:this.getAttribute(`label`)??`AirPlay`),e.toggleAttribute(`airplay`,t)}};customElements.get(`mbx-airplay-button`)===void 0&&customElements.define(ke,Lt);var Rt=8;function zt(e){return`entries`in e}function Bt(e){let{host:t}=e,n=T(`button`,`button`);n.type=`button`,n.setAttribute(`aria-haspopup`,`menu`),n.setAttribute(`aria-expanded`,`false`);let r=T(`div`,`popup`);r.setAttribute(`role`,`menu`),r.hidden=!0;let i=!1,a=``,o=[],s=[],c=new WeakMap;function l(){return[...r.querySelectorAll(`button`)]}function u(){return l().find(e=>e.getAttribute(`aria-checked`)===`true`)}function d(){return r.getRootNode().activeElement}function f(e){e.composedPath().includes(t)||_()}function p(){let t=e.ceiling();if(t===null)return;let i=n.getBoundingClientRect().top-t-Rt;r.style.maxHeight=`${Math.max(0,Math.floor(i))}px`}function m(){for(let e of l()){let t=c.get(e);t!==void 0&&e.removeEventListener(`click`,t)}r.replaceChildren()}function h(e,t,n){let r=T(`button`,e,t);return r.type=`button`,r.tabIndex=-1,c.set(r,n),r.addEventListener(`click`,n),r}function g(){m();let t=s[s.length-1];if(t===void 0)return;let i=!0;if(s.length>1){let n=h(`item back-item`,t.label,()=>{var e;s.pop(),g(),(e=l()[0])==null||e.focus()});n.setAttribute(`role`,`menuitem`),n.setAttribute(`aria-label`,e.back(t.label)),r.append(n)}for(let e of t.entries){if(zt(e)){let t=h(`item page-item ${e.name}-item`,e.label,()=>{var t;s.push(e),g(),(t=l()[0])==null||t.focus()});t.setAttribute(`role`,`menuitem`),t.setAttribute(`aria-haspopup`,`menu`),r.append(t);continue}let t=T(`div`,`section ${e.name}-section`);t.setAttribute(`role`,`group`),e.label!==void 0&&(t.setAttribute(`aria-label`,e.label),t.append(T(`div`,`section-label ${e.name}-label`,e.label)));for(let[r,a,o]of e.items){let s=h(`item ${e.name}-item`,a,()=>{_(),n.focus(),e.onSelect(r)});o!==void 0&&s.append(T(`span`,`item-detail`,o)),s.value=r,s.setAttribute(`role`,`menuitemradio`);let c=r===e.value;s.setAttribute(`aria-checked`,String(c)),ye(s,`item ${e.name}-item`,{checked:c}),c&&i&&(s.tabIndex=0,i=!1),t.append(s)}r.append(t)}p()}function _(){i&&(i=!1,r.hidden=!0,n.setAttribute(`aria-expanded`,`false`),t.removeAttribute(`open`),document.removeEventListener(`pointerdown`,f,!0),s.length>1&&(s=s.slice(0,1),g()))}function v(){var e;i||(i=!0,r.hidden=!1,n.setAttribute(`aria-expanded`,`true`),t.setAttribute(`open`,``),document.addEventListener(`pointerdown`,f,!0),p(),(e=u()??l()[0])==null||e.focus())}function y(){i?_():v()}function b(e){var t;let r=l(),i=r.indexOf(d()),a;switch(e.key){case`ArrowDown`:a=(i+1)%r.length;break;case`ArrowUp`:a=(i-1+r.length)%r.length;break;case`Home`:a=0;break;case`End`:a=r.length-1;break;case`Escape`:if(e.preventDefault(),s.length>1){var o;s.pop(),g(),(o=l()[0])==null||o.focus();return}_(),n.focus();return;default:return}e.preventDefault(),(t=r[a])==null||t.focus()}return n.addEventListener(`click`,y),r.addEventListener(`keydown`,b),{button:n,popup:r,label(e){a=e,n.setAttribute(`aria-label`,e),r.setAttribute(`aria-label`,e);let t=s[0];t!==void 0&&(s[0]=Qe(Qe({},t),{},{label:e}))},fill(e){o=e,s=[{name:`menu`,label:a,entries:o}],g()},close:_,dispose(){_(),m(),n.removeEventListener(`click`,y),r.removeEventListener(`keydown`,b)}}}function F(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>{let r=t[n];return r===void 0?e:String(r)})}var I=class extends k{constructor(e,t){super();let n=this.attachShadow({mode:`open`});this.menu=Bt({host:this,ceiling:()=>this.player?.video.getBoundingClientRect().top??null,back:e=>F(this.getAttribute(`label-back`)??`Back from {page}`,{page:e})}),this.slots=N(e,t);for(let t of e)this.menu.button.append(this.slots[t]);n.append(M(Pt),this.menu.button,this.menu.popup)}detach(){this.menu.close()}render(){this.menu.label(this.getAttribute(`label`)??this.name())}};function Vt(e){return[[`default`],()=>O(e)]}function Ht(e){let t=[e.lang,e.role].filter(e=>e!==void 0);return t.length===0?e.id:t.join(` · `)}function Ut(e,t){let n=e.tracks,r=n.available.filter(e=>e.contentType===t),i=[];for(let e of r)i.push([e.id,Ht(e)]);return[i,n.active(t)?.id??null]}function Wt(e,t){let n=[e.on(`tracks:changed`,t),e.on(`tracks:selected`,t)];return()=>{for(let e of n)e()}}var Gt=class extends I{static get observedAttributes(){return[`label`,`label-back`]}constructor(){super(...Vt(`music`)),this.engine=null,P(this.slots,`default`)}name(){return`Audio`}attach(e){this.follow(e,e=>{if(this.engine=e,this.render(),e!==null)return Wt(e,()=>{this.render()})})}render(){super.render();let e=this.engine;if(e===null){this.hidden=!0;return}let[t,n]=Ut(e,`audio`);this.menu.fill([{name:`track`,items:t,value:n??``,onSelect:t=>{e.tracks.select(t),this.render()}}]),this.hidden=t.length<2}};customElements.get(`mbx-audio-menu`)===void 0&&customElements.define(He,Gt);function Kt(e){for(let t of e.textTracks)if(t.kind===`chapters`)return t;return null}function qt(e){let t=Kt(e);if(t===null||t.cues===null)return[];let n=[];for(let e of t.cues){let t=e instanceof VTTCue?e.text:``;n.push({start:e.startTime,end:e.endTime,title:t.trim()})}return n.sort((e,t)=>e.start-t.start)}function Jt(e,t){let n=-1;for(let[r,i]of e.entries())i.start<=t&&(n=r);return n}function Yt(e,t){let n=(e,t,n)=>(e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}),r=[],i=()=>{for(let e of r)e();r=[];for(let i of e.textTracks)i.kind===`chapters`&&(i.mode===`disabled`&&(i.mode=`hidden`),r.push(n(i,`cuechange`,t)));for(let i of e.querySelectorAll(`track`))i.kind===`chapters`&&r.push(n(i,`load`,t));t()},a=[n(e.textTracks,`addtrack`,i),n(e.textTracks,`removetrack`,i)];return i(),()=>{for(let e of[...a,...r])e();r=[]}}function Xt(e){return e<10?`0${e}`:`${e}`}function L(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0,n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${Xt(r)}:${Xt(i)}`:`${r}:${Xt(i)}`}function Zt(e){return new Date(e*1e3).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})}var Qt=class extends I{static get observedAttributes(){return[`label`,`label-back`]}constructor(){super(...Vt(`chapters`)),this.drawn=``,P(this.slots,`default`)}name(){return`Chapters`}attach(e){let t=()=>{this.render()};this.keep(Yt(e.video,t)),this.listen(e.video,[`timeupdate`,`seeked`,`emptied`,`loadedmetadata`],t),this.listen(e,[`sourcechange`],t),this.render()}render(){super.render();let e=this.player?.video;if(e===void 0)return;let t=qt(e);this.hidden=t.length===0;let n=String(Jt(t,e.currentTime)),r=t.map((e,t)=>[String(t),e.title,L(e.start)]),i=`${n}|${r.map(([,e,t])=>`${t} ${e}`).join(`
`)}`;i!==this.drawn&&(this.drawn=i,this.menu.fill([{name:`chapter`,items:r,value:n,onSelect:n=>{let r=t[Number(n)];r!==void 0&&(e.currentTime=r.start)}}]))}};customElements.get(`mbx-chapters-menu`)===void 0&&customElements.define(Ke,Qt);var $t={small:.75,medium:1,large:1.5,xlarge:2},en=`video::-webkit-media-text-track-display-backdrop`,tn=`mattebox-player[subtitle-size="small"] > video::cue { font-size: 75%; }
mattebox-player[subtitle-size="large"] > video::cue { font-size: 150%; }
mattebox-player[subtitle-size="xlarge"] > video::cue { font-size: 200%; }
mattebox-player[subtitle-background="none"] > video::cue { background-color: transparent; }
mattebox-player[subtitle-background="solid"] > video::cue { background-color: #000; }
mattebox-player[subtitle-background="none"] > ${en} { background-color: transparent; }
mattebox-player[subtitle-background="solid"] > ${en} { background-color: #000; }`,nn=`data-mattebox-cue`,rn=.05,an=1.2,on=.96,sn=6;function cn(){if(document.head.querySelector(`style[${nn}]`)!==null)return;let e=document.createElement(`style`);e.setAttribute(nn,``),e.textContent=tn,document.head.append(e)}function ln(e,t,n){let r=new Map,i=!1,a;function o(){let t=[];for(let n of e.textTracks)n.mode===`showing`&&t.push(n);return t}function s(e){let n=$t[t.getAttribute(`subtitle-size`)??``]??1;return e*rn*n}function c(){return a===void 0&&(a=document.createElement(`canvas`).getContext(`2d`)),a}function l(e){let t=``,n=0;for(let r of e)r===`<`?n+=1:r===`>`?n=Math.max(0,n-1):n===0&&(t+=r);return t}function u(e,t,n){let r=c(),i=0;for(let a of l(e.text).split(`
`)){if(r===null){i+=1;continue}r.font=`${t}px sans-serif`,i+=Math.max(1,Math.ceil(r.measureText(a).width/(n*on)))}return i}function d(){let t=e.getBoundingClientRect(),a=t.height,c=n(),l=c.bottom-c.top,d=i&&a>0&&l>0&&l<a,f=s(a),p=f*an,m=Math.ceil((l+sn)/p);for(let e of o()){let n=[...e.activeCues??[]].filter(e=>e instanceof VTTCue).sort((e,t)=>e.startTime-t.startTime),i=null,a=!1;for(let e of n){let n=r.get(e);if(!d){if(n===void 0)continue;e.line=n.line,e.snapToLines=n.snapToLines,e.lineAlign=n.lineAlign,r.delete(e),a=!0;continue}if(n===void 0&&e.line!==`auto`)continue;n===void 0&&r.set(e,{line:e.line,snapToLines:e.snapToLines,lineAlign:e.lineAlign});let o=u(e,f,t.width),s=i===null?m+o:i.line+Math.max(o,i.height);(e.line!==-s||!e.snapToLines)&&(a=!0),e.snapToLines=!0,e.line=-s,i={line:s,height:o}}a&&(e.mode=`hidden`,e.mode=`showing`)}}function f(){for(let t of e.textTracks)t.removeEventListener(`cuechange`,d),t.addEventListener(`cuechange`,d);d()}return e.textTracks.addEventListener(`change`,f),e.textTracks.addEventListener(`addtrack`,f),f(),{lifted(e){i=e,d()},dispose(){i=!1,d(),e.textTracks.removeEventListener(`change`,f),e.textTracks.removeEventListener(`addtrack`,f);for(let t of e.textTracks)t.removeEventListener(`cuechange`,d)}}}function un(e,t){return n=>{for(let r of t)e.addEventListener(r,n);return()=>{for(let r of t)e.removeEventListener(r,n)}}}function dn(e,t){let n=document,r=e,i=t;if(typeof e.requestFullscreen==`function`){let t=()=>e.matches(`:fullscreen`);return{supported:!0,active:t,toggle(){(t()?document.exitFullscreen():e.requestFullscreen()).catch(()=>void 0)},watch:un(document,[`fullscreenchange`])}}if(typeof r.webkitRequestFullscreen==`function`){let t=()=>n.webkitFullscreenElement===e;return{supported:!0,active:t,toggle(){var e,i;t()?(e=n.webkitExitFullscreen)==null||e.call(n):(i=r.webkitRequestFullscreen)==null||i.call(r)},watch:un(document,[`webkitfullscreenchange`])}}return typeof i.webkitEnterFullscreen==`function`?{supported:!0,active:()=>i.webkitDisplayingFullscreen===!0,toggle(){var e,t;i.webkitDisplayingFullscreen===!0?(e=i.webkitExitFullscreen)==null||e.call(i):(t=i.webkitEnterFullscreen)==null||t.call(i)},watch:un(t,[`webkitbeginfullscreen`,`webkitendfullscreen`])}:{supported:!1,active:()=>!1,toggle(){},watch:()=>()=>{}}}var fn=3e3,pn=5,mn={[Ee]:5,"mbx-diagnostics":4,[We]:4,[Be]:4,[Ke]:4,[He]:3,[Ve]:3,[Oe]:3,[ke]:2,[De]:2,[Ue]:1,[Ge]:1,[Te]:1},hn=80,gn=8;function _n(e){return e.getClientRects().length>0}function vn(e){return e.localName===`mbx-volume`?e.querySelector(Ee):null}function yn(e){let t=e.getAttribute(`priority`);if(t!==null){let e=Number(t);return Number.isFinite(e)&&e>0?e:0}return mn[e.localName]??0}var bn=`
:host {
  position: absolute;
  inset: auto 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 40px 16px 12px;
  color: var(--mbx-text);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  font: 500 16px/1.2 var(--mbx-font);
  transition: opacity 0.2s;
}
:host([idle]) { opacity: 0; pointer-events: none; }
[part~="row"] { display: flex; align-items: center; gap: 8px; }
[part~="seek-row"] { gap: 16px; }
::slotted([collapsed]) { display: none; }
@media (prefers-reduced-motion: reduce) {
  :host { transition: none; }
}
`;function xn(e){if(Number.isFinite(e.duration))return e.duration;let t=e.seekable;return t.length>0?t.end(t.length-1):e.currentTime}function Sn(e){e.paused?e.play().catch(()=>void 0):e.pause()}var Cn=class extends k{static get observedAttributes(){return[`idle-ms`,`seek-step`]}constructor(){super(),this.timer=void 0,this.keyboard=!1,this.cues=null,this.screen=null,this.resizer=null;let e=this.attachShadow({mode:`open`});this.seekRow=document.createElement(`div`),this.seekRow.setAttribute(`part`,`row seek-row`);let t=document.createElement(`slot`);t.name=`seek`,this.seekRow.append(t),this.buttonsRow=document.createElement(`div`),this.buttonsRow.setAttribute(`part`,`row buttons-row`),this.buttons=document.createElement(`slot`),this.buttonsRow.append(this.buttons),e.append(M(bn),this.seekRow,this.buttonsRow)}needed(e){let t=Number.parseFloat(getComputedStyle(this.buttonsRow).columnGap)||0,n=0,r=0;for(let t of e){if(t.localName===`mbx-spacer`||!_n(t))continue;n+=t.getBoundingClientRect().width,r+=1;let e=vn(t);e!==null&&_n(e)&&(n+=Math.max(0,hn-e.getBoundingClientRect().width))}return n+t*Math.max(0,r-1)}collapse(){let e=this.buttons.assignedElements(),t=[];for(let[n,r]of e.entries()){r.removeAttribute(`collapsed`);let e=vn(r);e?.removeAttribute(`collapsed`),e!==null&&_n(e)&&t.push({node:e,index:n+.5,priority:yn(e)}),_n(r)&&t.push({node:r,index:n,priority:yn(r)})}t.sort((e,t)=>t.priority-e.priority||t.index-e.index);let n=this.buttonsRow.clientWidth-gn;for(let{node:r,priority:i}of t){if(i===0||this.needed(e)<=n)return;r.setAttribute(`collapsed`,``)}}covered(){return{top:this.seekRow.getBoundingClientRect().top,bottom:this.getBoundingClientRect().bottom}}held(e){if(e.video.paused||this.querySelector(`[open]`)!==null)return!0;if(!this.keyboard)return!1;let t=this.getRootNode().activeElement;return t!==null&&this.contains(t)}idle(e,t){var n;this.hasAttribute(`idle`)!==t&&(this.toggleAttribute(`idle`,t),e.toggleAttribute(`idle`,t),(n=this.cues)==null||n.lifted(!t))}sleep(e){if(this.timer=void 0,this.held(e)){this.timer=setTimeout(()=>this.sleep(e),j(this,`idle-ms`,fn));return}this.idle(e,!0)}wake(e){clearTimeout(this.timer),this.idle(e,!1),this.timer=setTimeout(()=>this.sleep(e),j(this,`idle-ms`,fn))}key(e,t){if(this.keyboard=!0,this.wake(e),t.defaultPrevented||t.altKey||t.ctrlKey||t.metaKey)return;let n=e.video,r=t.composedPath()[0]instanceof HTMLButtonElement;switch(t.key){case` `:if(r)return;Sn(n);break;case`k`:case`K`:Sn(n);break;case`m`:case`M`:n.muted=!n.muted;break;case`f`:case`F`:var i;(i=this.screen)==null||i.toggle();break;case`ArrowLeft`:n.currentTime=Math.max(0,n.currentTime-j(this,`seek-step`,pn));break;case`ArrowRight`:n.currentTime=Math.min(xn(n),n.currentTime+j(this,`seek-step`,pn));break;default:return}t.preventDefault()}attach(e){let t=e.video;cn(),this.cues=ln(t,e,()=>this.covered());let n=dn(e,t);this.screen=n;let r=()=>{e.toggleAttribute(`fullscreen`,n.active())};this.keep(n.watch(r)),r();let i=()=>{this.keyboard=!1,this.wake(e)},a=t=>{this.key(e,t)},o=e=>{e.composedPath()[0]===t&&Sn(t)};this.listen(e,[`pointermove`,`pointerdown`],i),e.addEventListener(`keydown`,a),e.addEventListener(`click`,o),this.keep(()=>{e.removeEventListener(`keydown`,a),e.removeEventListener(`click`,o)}),this.listen(t,[`play`,`pause`,`ended`],()=>{this.wake(e)}),this.wake(e),this.cues.lifted(!0);let s=()=>{this.collapse()};this.listen(this.buttons,[`slotchange`],s),this.observe(this,[`hidden`,`priority`,`slot`],s,!0),typeof ResizeObserver<`u`&&(this.resizer=new ResizeObserver(s),this.resizer.observe(this.buttonsRow)),s()}detach(e){var t,n;clearTimeout(this.timer),this.timer=void 0,(t=this.resizer)==null||t.disconnect(),this.resizer=null;for(let e of this.buttons.assignedElements()){var r;e.removeAttribute(`collapsed`),(r=vn(e))==null||r.removeAttribute(`collapsed`)}(n=this.cues)==null||n.dispose(),this.cues=null,this.screen=null,this.removeAttribute(`idle`),e.removeAttribute(`idle`),e.removeAttribute(`fullscreen`)}};customElements.get(`mbx-control-bar`)===void 0&&customElements.define(Se,Cn);var wn={start:0,end:0};function Tn(e){let t=[];for(let n=0;n<e.length;n+=1)t.push({start:e.start(n),end:e.end(n)});return t}function En(e,t,n){if(n){let e=t[t.length-1];if(e!==void 0&&e.end>e.start)return e}return Number.isFinite(e)&&e>0?{start:0,end:e}:wn}function Dn(e,t){let n=t.end-t.start;return n<=0?0:Math.min(1,Math.max(0,(e-t.start)/n))}function On(e,t){return t.start+Math.min(1,Math.max(0,e))*(t.end-t.start)}function kn(e,t){let n=[];for(let r of e){let e=Dn(r.start,t),i=Dn(r.end,t);i>e&&n.push([e,i])}return n}function An(e){return e===null?{}:de(e)}function R(e){let t=An(e).live;return t!==void 0&&t.edge!==null?t:void 0}function jn(e,t){var n;let r=R(t)!==void 0,i=r?(t==null||(n=t.stats.snapshot().live)==null?void 0:n.span)??null:null;return i!==null&&i.end>i.start?i:En(e.duration,Tn(e.seekable),r)}function Mn(e){return e?.stats.snapshot().scheduling.bufferGoal??null}function Nn(e,t){let n=An(e).pdt?.toWallClock(t)??null;return n===null?null:Zt(n)}var Pn=`
:host { display: inline-block; min-width: 3ch; white-space: nowrap; font-variant-numeric: tabular-nums; }
:host([hidden]) { display: none; }
`,Fn=[`timeupdate`,`durationchange`,`loadedmetadata`,`seeking`,`seeked`,`emptied`],In=class extends k{constructor(e=``){super();let t=this.attachShadow({mode:`open`});this.text=document.createTextNode(`0:00`),t.append(M(Pn+e),this.text)}connectedCallback(){Ft(this),super.connectedCallback()}attach(e){let t=()=>{this.render()};this.listen(e.video,Fn,t),this.listen(e,[`sourcechange`],t),this.observe(e,[`live`,`seekable`],t),this.render()}},Ln=class extends In{render(){let e=this.player;if(e===null)return;let t=e.video,n=e.engine,r=R(n)!==void 0,i=t.currentTime;this.text.data=r?Nn(n,i)??`-${L(jn(t,n).end-i)}`:L(i),this.hidden=r&&e.hasAttribute(`live`)&&!e.hasAttribute(`seekable`)}};customElements.get(`mbx-current-time`)===void 0&&customElements.define(Fe,Ln);var Rn=`
:host { position: relative; display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; color: var(--mbx-muted); border-radius: var(--mbx-radius); cursor: default; }
:host([hidden]) { display: none; }
:host(:focus-visible) { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="icon"], ::slotted(*) { width: 1.75em; height: 1.75em; fill: currentColor; }
[part~="tooltip"] {
  position: absolute;
  right: 0;
  bottom: 100%;
  margin-bottom: 8px;
  padding: 8px 10px;
  background: rgba(16, 17, 20, 0.95);
  border-radius: var(--mbx-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  color: var(--mbx-text);
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  white-space: nowrap;
  pointer-events: none;
}
[part~="tooltip"][hidden] { display: none; }
[part~="tooltip-title"] { font-weight: 600; }
[part~="tooltip-text"] { color: var(--mbx-muted); }
`;function zn(e){return e.startsWith(`com.widevine`)?`Widevine`:e.startsWith(`com.microsoft.playready`)?`PlayReady`:e.startsWith(`com.apple.fps`)?`FairPlay`:e}var Bn=class extends k{static get observedAttributes(){return[`label`,`label-key`,`label-keys`,`label-no-key`]}constructor(){super(),this.engine=null;let e=this.attachShadow({mode:`open`}),t=document.createElement(`slot`);t.name=`icon`,t.append(O(`lock-closed`)),this.tooltip=T(`div`,`tooltip`),this.tooltip.setAttribute(`role`,`tooltip`),this.system=T(`div`,`tooltip-title`),this.system_id=T(`div`,`tooltip-text`),this.keys=T(`div`,`tooltip-text`),this.tooltip.append(this.system,this.system_id,this.keys),this.tooltip.hidden=!0,e.append(M(Rn),t,this.tooltip);let n=()=>{this.tooltip.hidden=!1},r=()=>{this.tooltip.hidden=!0};this.addEventListener(`pointerenter`,n),this.addEventListener(`pointerleave`,r),this.addEventListener(`focus`,n),this.addEventListener(`blur`,r)}connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`img`),this.hasAttribute(`tabindex`)||(this.tabIndex=0),this.player===null&&(this.hidden=!0),super.connectedCallback()}sessionsText(e){if(e.length===0)return this.getAttribute(`label-no-key`)??`no key yet`;let t=new Map;for(let n of e)t.set(n.status,(t.get(n.status)??0)+1);let n=[];for(let[e,r]of t)n.push(r>1?`${e} ×${r}`:e);return F(e.length===1?this.getAttribute(`label-key`)??`{count} key: {statuses}`:this.getAttribute(`label-keys`)??`{count} keys: {statuses}`,{count:e.length,statuses:n.join(`, `)})}attach(e){this.follow(e,e=>{if(this.engine=e,this.render(),e===null||de(e).drm===void 0)return;let t=()=>{this.render()},n=[e.on(`drm:keysystem`,t),e.on(`drm:keystatus`,t),e.on(`drm:encrypted`,t)];return()=>{for(let e of n)e()}})}detach(){this.tooltip.hidden=!0}render(){let e=this.engine===null?void 0:de(this.engine).drm,t=e?.keySystem??null;if(this.hidden=t===null,e===void 0||t===null)return;let n=this.sessionsText(e.sessions),r=zn(t);this.system.textContent=r,this.system_id.textContent=t,this.keys.textContent=n,this.setAttribute(`aria-label`,F(this.getAttribute(`label`)??`Protected by {system}, {keys}`,{system:r,keys:n}))}};customElements.get(`mbx-drm-badge`)===void 0&&customElements.define(We,Bn);var Vn=class extends In{constructor(){super(`:host { text-align: right; }`)}render(){let e=this.player;if(e===null)return;let t=e.engine,n=R(t)!==void 0;this.hidden=n,n||(this.text.data=L(jn(e.video,t).end))}};customElements.get(`mbx-duration`)===void 0&&customElements.define(Ie,Vn);var Hn=`
:host {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.75);
  color: var(--mbx-text);
  font: 400 15px/1.4 var(--mbx-font);
  text-align: center;
}
:host([hidden]) { display: none; }
[part~="box"] { display: flex; flex-direction: column; align-items: center; gap: 8px; }
[part~="title"] { font-size: 18px; font-weight: 600; }
[part~="detail"] { font-family: monospace; font-size: 13px; color: var(--mbx-error); }
[part~="retry"] {
  height: 36px;
  padding: 0 16px;
  font: inherit;
  font-weight: 600;
  color: inherit;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: var(--mbx-radius);
  cursor: pointer;
}
[part~="retry"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
`,Un=class extends k{static get observedAttributes(){return[`label-title`,`label-retry`]}constructor(){super();let e=this.attachShadow({mode:`open`}),t=T(`div`,`box`);this.title_=T(`div`,`title`),this.category=T(`span`,`category`),this.code=T(`span`,`code`);let n=T(`div`,`detail`);n.append(this.category,T(`span`,`separator`,` · `),this.code),this.retry=T(`button`,`retry`),this.retry.type=`button`,this.retry.addEventListener(`click`,()=>{let e=this.player,t=e?.getAttribute(`src`);e!=null&&t!=null&&e.setAttribute(`src`,t)}),t.append(this.title_,n,this.retry),e.append(M(Hn),t)}connectedCallback(){this.player===null&&(this.hidden=!0),this.hasAttribute(`role`)||this.setAttribute(`role`,`alert`),super.connectedCallback()}show(e){this.category.textContent=e.category,this.code.textContent=e.code,this.hidden=!1}attach(e){let t=e=>{let t=e.detail;t.fatal&&this.show(t)};e.addEventListener(`error`,t),this.keep(()=>{e.removeEventListener(`error`,t)}),this.listen(e.video,[`playing`,`loadstart`],()=>{this.hidden=!0}),this.listen(e,[`sourcechange`],()=>{this.hidden=!0}),e.error!==null&&this.show(e.error),this.render()}detach(){this.hidden=!0}render(){this.title_.textContent=this.getAttribute(`label-title`)??`Playback failed`,this.retry.textContent=this.getAttribute(`label-retry`)??`Retry`}};customElements.get(`mbx-error-screen`)===void 0&&customElements.define(Me,Un);var Wn=[`enter`,`exit`],Gn=class extends k{static get observedAttributes(){return[`label-enter`,`label-exit`]}constructor(){super(),this.api=null;let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(Wn,e=>O(e===`enter`?`fullscreen`:`fullscreen-exit`));for(let e of Wn)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{var e;(e=this.api)==null||e.toggle()}),e.append(M(A),this.button)}attach(e){let t=dn(e,e.video);this.api=t,this.hidden=!t.supported,this.keep(t.watch(()=>{this.render()})),this.render()}detach(){this.api=null}render(){let e=this.player;if(e===null||this.api===null)return;let t=this.api.active();P(this.slots,t?`exit`:`enter`),this.button.setAttribute(`aria-label`,t?this.getAttribute(`label-exit`)??`Exit fullscreen`:this.getAttribute(`label-enter`)??`Enter fullscreen`),e.toggleAttribute(`fullscreen`,t)}};customElements.get(`mbx-fullscreen-button`)===void 0&&customElements.define(Ae,Gn);var Kn=`
:host { display: inline-flex; }
:host([hidden]) { display: none; }
[part~="button"] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 8px;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: inherit;
  background: transparent;
  border: 0;
  border-radius: var(--mbx-radius);
  cursor: pointer;
  opacity: 0.9;
}
[part~="button"]:hover { opacity: 1; }
[part~="button"]:disabled { cursor: default; opacity: 1; }
[part~="button"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="dot"] { width: 10px; height: 10px; border-radius: 50%; background: var(--mbx-muted); transition: background 0.2s; }
:host([at-edge]) [part~="dot"] { background: var(--mbx-live); box-shadow: 0 0 6px var(--mbx-live); }
@media (prefers-reduced-motion: reduce) {
  [part~="dot"] { transition: none; }
}
`,qn=class extends k{static get observedAttributes(){return[`text`,`label-live`,`label-at-edge`]}constructor(){super();let e=this.attachShadow({mode:`open`});this.button=T(`button`,`button`),this.button.type=`button`,this.text=T(`span`,`text`),this.button.append(T(`span`,`dot`),this.text),this.button.addEventListener(`click`,()=>{var e;(e=R(this.player?.engine??null))==null||e.seekToEdge()}),e.append(M(Kn),this.button)}connectedCallback(){Ft(this),super.connectedCallback()}attach(e){let t=()=>{this.render()};this.listen(e.video,[`timeupdate`,`emptied`],t),this.listen(e,[`sourcechange`],t),this.observe(e,[`live`,`seekable`],t),this.render()}render(){let e=this.player;if(e===null)return;let t=R(e.engine);if(this.hidden=t===void 0,this.text.textContent=this.getAttribute(`text`)??`LIVE`,t===void 0)return;let n=e.hasAttribute(`live`)&&!e.hasAttribute(`seekable`)||t.atEdge;this.button.disabled=n,this.toggleAttribute(`at-edge`,n),this.button.setAttribute(`aria-label`,n?this.getAttribute(`label-at-edge`)??`At the live edge`:this.getAttribute(`label-live`)??`Go to the live edge`)}};customElements.get(`mbx-live-button`)===void 0&&customElements.define(ze,qn);var Jn=[`mute`,`low`,`high`],Yn=class extends k{static get observedAttributes(){return[`label-mute`,`label-unmute`]}constructor(){super();let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(Jn,e=>O(e===`mute`?`mute`:e===`low`?`volume-low`:`volume-high`));for(let e of Jn)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{this.toggle()}),e.append(M(A),this.button)}toggle(){let e=this.player?.video;e!==void 0&&(e.muted?(e.muted=!1,e.volume===0&&(e.volume=1)):e.muted=!0)}attach(e){this.listen(e.video,[`volumechange`,`emptied`],()=>{this.render()}),this.render()}render(){let e=this.player?.video;if(e===void 0)return;let t=e.muted||e.volume===0;P(this.slots,t?`mute`:e.volume<=.5?`low`:`high`),this.button.setAttribute(`aria-label`,t?this.getAttribute(`label-unmute`)??`Unmute`:this.getAttribute(`label-mute`)??`Mute`),this.button.setAttribute(`aria-pressed`,String(e.muted))}};customElements.get(`mbx-mute-button`)===void 0&&customElements.define(Te,Yn);function Xn(e,t){return n=>{for(let r of t)e.addEventListener(r,n);return()=>{for(let r of t)e.removeEventListener(r,n)}}}function Zn(e){let t=e;return typeof e.requestPictureInPicture==`function`&&document.pictureInPictureEnabled?{supported:!0,active:()=>document.pictureInPictureElement===e,toggle(){(document.pictureInPictureElement===e?document.exitPictureInPicture():e.requestPictureInPicture()).catch(()=>void 0)},watch:Xn(e,[`enterpictureinpicture`,`leavepictureinpicture`])}:typeof t.webkitSetPresentationMode==`function`&&t.webkitSupportsPresentationMode?.call(t,`picture-in-picture`)===!0?{supported:!0,active:()=>t.webkitPresentationMode===`picture-in-picture`,toggle(){var e;let n=t.webkitPresentationMode===`picture-in-picture`?`inline`:`picture-in-picture`;(e=t.webkitSetPresentationMode)==null||e.call(t,n)},watch:Xn(e,[`webkitpresentationmodechanged`])}:{supported:!1,active:()=>!1,toggle(){},watch:()=>()=>{}}}var Qn=[`enter`,`exit`],$n=class extends k{static get observedAttributes(){return[`label-enter`,`label-exit`]}constructor(){super(),this.api=null;let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(Qn,e=>O(e===`enter`?`picture-in-picture`:`picture-in-picture-exit`));for(let e of Qn)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{var e;(e=this.api)==null||e.toggle()}),e.append(M(A),this.button)}attach(e){let t=Zn(e.video);this.api=t,this.hidden=!t.supported,this.keep(t.watch(()=>{this.render()})),this.render()}detach(e){this.api=null,e.removeAttribute(`pip`)}render(){let e=this.player;if(e===null||this.api===null)return;let t=this.api.active();P(this.slots,t?`exit`:`enter`),this.button.setAttribute(`aria-label`,t?this.getAttribute(`label-exit`)??`Leave picture in picture`:this.getAttribute(`label-enter`)??`Picture in picture`),e.toggleAttribute(`pip`,t)}};customElements.get(`mbx-pip-button`)===void 0&&customElements.define(Oe,$n);var er=[`play`,`pause`,`replay`],tr={play:`Play`,pause:`Pause`,replay:`Replay`},nr=class extends k{static get observedAttributes(){return er.map(e=>`label-${e}`)}constructor(){super();let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(er,O);for(let e of er)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{this.toggle()}),e.append(M(A),this.button)}toggle(){let e=this.player?.video;e!==void 0&&(e.paused?e.play().catch(()=>void 0):e.pause())}attach(e){this.listen(e.video,[`play`,`pause`,`ended`,`emptied`],()=>{this.render()}),this.render()}render(){let e=this.player?.video;if(e===void 0)return;let t=e.ended?`replay`:e.paused?`play`:`pause`;P(this.slots,t),this.button.setAttribute(`aria-label`,this.getAttribute(`label-${t}`)??tr[t])}};customElements.get(`mbx-play-button`)===void 0&&customElements.define(we,nr);var rr=`auto`;function ir(e){return e.height===void 0?`${Math.round(e.bitrate/1e3)} kbps`:`${e.height}p`}var ar=class extends I{static get observedAttributes(){return[`label`,`label-auto`,`label-back`]}constructor(){super(...Vt(`settings`)),this.engine=null,P(this.slots,`default`)}name(){return`Quality`}attach(e){this.follow(e,e=>{if(this.engine=e,this.render(),e===null)return;let t=()=>{this.render()},n=[e.on(`tracks:changed`,t),e.on(`quality:constraints-unsatisfiable`,t),e.on(`quality:pin-unsatisfiable`,t)];return()=>{for(let e of n)e()}})}render(){super.render();let e=this.engine;if(e===null){this.hidden=!0;return}let t=e.quality,n=[[rr,this.getAttribute(`label-auto`)??`Auto`]];for(let e of t.renditions)n.push([e.id,ir(e)]);this.menu.fill([{name:`rendition`,items:n,value:t.pinned??rr,onSelect:e=>{e===rr?t.auto():t.pin(e),this.render()}}]),this.hidden=t.renditions.length===0}};customElements.get(`mbx-quality-menu`)===void 0&&customElements.define(Ve,ar);var or=class extends In{constructor(){super(`:host { text-align: right; }`)}render(){let e=this.player;if(e===null)return;let t=e.video,n=e.engine,r=R(n)!==void 0;this.hidden=r,r||(this.text.data=`-${L(Math.max(0,jn(t,n).end-t.currentTime))}`)}};customElements.get(`mbx-remaining-time`)===void 0&&customElements.define(Le,or);function sr(e,t,n){return Math.min(n,Math.max(t,e))}function cr(e){let{onInput:t}=e,n=T(`div`,`slider`);n.setAttribute(`role`,`slider`),n.tabIndex=0;let r=T(`div`,`rail`),i=T(`div`,`track`),a=T(`div`,`fill`),o=T(`div`,`thumb`);i.append(a),r.append(i,o),n.append(r);let s=0,c=1,l=0,u=!1;function d(){let e=`${(c>s?(l-s)/(c-s):0)*100}%`;a.style.width=e,o.style.left=e}function f(e){let t=r.getBoundingClientRect();return t.width===0?s:s+sr((e-t.left)/t.width,0,1)*(c-s)}function p(t){u=t,e.onDrag(t)}function m(e){if(e.button===0){e.preventDefault(),p(!0);try{n.setPointerCapture(e.pointerId)}catch{}t(f(e.clientX))}}function h(e){if(u){if(e.buttons===0){g(e);return}t(f(e.clientX))}}function g(e){u&&(p(!1),t(f(e.clientX)))}function _(){u&&p(!1)}function v(n){let r;switch(n.key){case`ArrowRight`:case`ArrowUp`:r=l+e.step();break;case`ArrowLeft`:case`ArrowDown`:r=l-e.step();break;case`PageUp`:r=l+e.page();break;case`PageDown`:r=l-e.page();break;case`Home`:r=s;break;case`End`:r=c;break;default:return}n.preventDefault(),t(sr(r,s,c))}return n.addEventListener(`pointerdown`,m),n.addEventListener(`pointermove`,h),n.addEventListener(`pointerup`,g),n.addEventListener(`pointercancel`,_),n.addEventListener(`lostpointercapture`,_),n.addEventListener(`keydown`,v),{root:n,track:i,rail:r,label(e){n.setAttribute(`aria-label`,e)},dragging(){return u},range(e,t){s=e,c=t,n.setAttribute(`aria-valuemin`,String(e)),n.setAttribute(`aria-valuemax`,String(t)),d()},set(e,t){l=sr(e,s,c),n.setAttribute(`aria-valuenow`,String(l)),n.setAttribute(`aria-valuetext`,t),d()},dispose(){n.removeEventListener(`pointerdown`,m),n.removeEventListener(`pointermove`,h),n.removeEventListener(`pointerup`,g),n.removeEventListener(`pointercancel`,_),n.removeEventListener(`lostpointercapture`,_),n.removeEventListener(`keydown`,v)}}}var lr=5,ur=30,dr=3,fr=160,pr=30,mr=2,hr=[`timeupdate`,`progress`,`durationchange`,`loadedmetadata`,`seeking`,`seeked`,`emptied`],gr=`${Nt}
:host { flex: 1; }
[part~="slider"] { flex: 1; }
[part~="thumb"] { width: 16px; height: 16px; margin: -8px 0 0 -8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }
[part~="buffered"] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
[part~="buffered-range"] { position: absolute; top: 0; bottom: 0; background: rgba(255, 255, 255, 0.3); }
[part~="hover"] { position: absolute; top: 0; bottom: 0; width: 2px; margin-left: -1px; background: var(--mbx-text); }
[part~="edge"] { position: absolute; top: 0; bottom: 0; width: 2px; margin-left: -1px; background: var(--mbx-live); }
[part~="preview"] {
  position: absolute;
  bottom: 100%;
  margin-bottom: 4px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 2px;
  background: var(--mbx-surface);
  border-radius: var(--mbx-radius);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  pointer-events: none;
}
[part~="preview-image"] { position: relative; overflow: hidden; border-radius: 2px; }
[part~="preview-tile"] { position: absolute; top: 0; left: 0; transform-origin: top left; background-repeat: no-repeat; }
[part~="preview-time"] { padding: 0 4px; }
[part~="preview-title"] { max-width: 240px; padding: 0 4px; overflow: hidden; text-overflow: ellipsis; }
[hidden] { display: none; }
`;function z(e){return`${e*100}%`}function _r(e,t){let n=[`#000 0`];for(let r of e.slice(1)){let e=z(Dn(r.start,t)),i=`calc(${e} - ${mr/2}px)`,a=`calc(${e} + ${mr/2}px)`;n.push(`#000 ${i}`,`transparent ${i}`,`transparent ${a}`,`#000 ${a}`)}return n.push(`#000 100%`),`linear-gradient(to right, ${n.join(`, `)})`}var vr=class extends k{static get observedAttributes(){return[`label`,`label-of`,`label-behind`,`live-window`,`chapters`]}constructor(){super(),this.range=wn,this.pending=null,this.frame=0,this.divided=``,this.list=[];let e=this.attachShadow({mode:`open`});this.bar=cr({step:()=>j(this,`step`,lr),page:()=>j(this,`page`,ur),onInput:e=>{this.input(e)},onDrag:e=>{this.toggleAttribute(`dragging`,e)}}),this.buffered=T(`div`,`buffered`),this.hover=T(`div`,`hover`),this.edge=T(`div`,`edge`),this.hover.hidden=!0,this.edge.hidden=!0,this.bar.track.prepend(this.buffered),this.bar.track.append(this.hover,this.edge),this.preview=T(`div`,`preview`),this.image=T(`div`,`preview-image`),this.tile=T(`div`,`preview-tile`),this.time=T(`span`,`preview-time`),this.caption=T(`span`,`preview-title`),this.caption.hidden=!0,this.image.append(this.tile),this.image.hidden=!0,this.preview.append(this.image,this.caption,this.time),this.preview.hidden=!0,this.bar.root.append(this.preview),this.bar.root.addEventListener(`pointermove`,e=>{this.point(e)}),this.bar.root.addEventListener(`pointerleave`,()=>{this.leave()}),e.append(M(gr),this.bar.root)}connectedCallback(){Ft(this),super.connectedCallback()}isLive(){return R(this.player?.engine??null)!==void 0}chaptered(){return this.getAttribute(`chapters`)!==`none`&&this.list.length>0}paintChapters(){let e=this.chaptered()&&this.list.length>1?_r(this.list,this.range):``,t=`${e}|${this.range.start}|${this.range.end}`;if(t===this.divided)return;this.divided=t;let n=this.bar.track.style;n.setProperty(`mask-image`,e===``?``:e),n.setProperty(`-webkit-mask-image`,e===``?``:e)}say(e){let t=this.player?.engine??null;if(!this.isLive()){let t=this.getAttribute(`label-of`)??`{current} of {duration}`;return Number.isFinite(this.range.end)&&this.range.end>0?F(t,{current:L(e),duration:L(this.range.end)}):L(e)}let n=F(this.getAttribute(`label-behind`)??`{time} behind live`,{time:L(this.range.end-e)}),r=Nn(t,e);return r===null?n:`${r}, ${n}`}label(e){return this.isLive()?Nn(this.player?.engine??null,e)??`-${L(this.range.end-e)}`:L(e)}input(e){let t=this.player?.video;if(t!==void 0){if(this.bar.set(e,this.say(e)),!this.bar.dragging()){this.pending=null,t.currentTime=e;return}this.pending=e,this.frame===0&&(this.frame=requestAnimationFrame(()=>{this.flush()}))}}flush(){this.frame=0;let e=this.player?.video;this.pending!==null&&e!==void 0&&(e.currentTime=this.pending,this.pending=null)}previewWidth(){let e=Number.parseFloat(getComputedStyle(this.preview).getPropertyValue(`--mbx-preview-width`));return Number.isFinite(e)&&e>0?e:fr}paintTile(e){let t=An(this.player?.engine??null).thumbnails?.at(e)??null;if(this.image.hidden=t===null,t===null)return;let n=this.previewWidth()/t.width;this.image.style.width=`${t.width*n}px`,this.image.style.height=`${t.height*n}px`,this.tile.style.width=`${t.width}px`,this.tile.style.height=`${t.height}px`,this.tile.style.backgroundImage=`url("${t.url}")`,this.tile.style.backgroundPosition=`-${t.x}px -${t.y}px`,this.tile.style.transform=`scale(${n})`}paintBuffered(e){var t;let n=kn(Array.from({length:e.buffered.length},(t,n)=>({start:e.buffered.start(n),end:e.buffered.end(n)})),this.range),r=this.buffered;for(;r.childElementCount>n.length;)(t=r.lastElementChild)==null||t.remove();for(;r.childElementCount<n.length;)r.append(T(`div`,`buffered-range`));let i=0;for(let e of r.children){let t=n[i];if(i+=1,t===void 0)break;let r=e;r.style.left=z(t[0]),r.style.width=z(t[1]-t[0])}}worthSeeking(){let e=j(this,`live-window`,dr);if(e===0)return!0;let t=Mn(this.player?.engine??null)??pr;return this.range.end-this.range.start>=e*t}point(e){let t=this.bar.rail.getBoundingClientRect();if(t.width===0||this.range.end<=this.range.start)return;let n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width));this.hover.hidden=!1,this.hover.style.left=z(n),this.preview.hidden=!1;let r=On(n,this.range);this.time.textContent=this.label(r);let i=this.chaptered()?this.list[Jt(this.list,r)]:void 0;this.caption.hidden=i===void 0||i.title===``,this.caption.textContent=i?.title??``,this.paintTile(r);let a=this.bar.root.getBoundingClientRect(),o=this.preview.offsetWidth/2,s=t.left-a.left+n*t.width;this.preview.style.left=`${Math.min(a.width-o,Math.max(o,s))}px`}leave(){this.hover.hidden=!0,this.preview.hidden=!0}attach(e){let t=()=>{this.render()};this.listen(e.video,hr,t),this.keep(Yt(e.video,t)),this.listen(e,[`sourcechange`],()=>{this.leave(),this.render()}),this.render()}detach(e){cancelAnimationFrame(this.frame),this.frame=0,this.pending=null,this.leave(),e.removeAttribute(`live`),e.removeAttribute(`seekable`)}render(){let e=this.player;if(e===null)return;let t=e.video,n=e.engine,r=R(n),i=r!==void 0;this.range=jn(t,n),this.list=qt(t),this.bar.label(this.getAttribute(`label`)??`Seek`),this.bar.range(this.range.start,this.range.end),this.paintBuffered(t),this.paintChapters(),this.edge.hidden=!i,r!==void 0&&r.edge!==null&&(this.edge.style.left=z(Dn(r.edge,this.range)));let a=!i||this.worthSeeking();this.hidden=!a,e.toggleAttribute(`live`,i),e.toggleAttribute(`seekable`,a),this.bar.dragging()||this.bar.set(t.currentTime,this.say(t.currentTime))}};customElements.get(`mbx-seek-bar`)===void 0&&customElements.define(Re,vr);var yr=10;function br(e,t){let n=e?`seek-backward`:`seek-forward`;return t===10||t===30?`${n}-${t}`:n}var xr=class extends k{static get observedAttributes(){return[`seconds`,`label`]}constructor(){super();let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.glyph=document.createElement(`slot`),this.glyph.name=`icon`,this.button.append(this.glyph),this.button.addEventListener(`click`,()=>{this.skip()}),e.append(M(A),this.button)}seconds(){let e=Number(this.getAttribute(`seconds`)??yr);return Number.isFinite(e)?e:yr}skip(){let e=this.player?.video;if(e===void 0)return;let t=e.seekable,n=Number.isFinite(e.duration)?e.duration:t.length>0?t.end(t.length-1):e.currentTime;e.currentTime=Math.min(n,Math.max(0,e.currentTime+this.seconds()))}attach(e){this.render()}render(){let e=this.seconds(),t=e<0,n=Math.abs(e);this.glyph.replaceChildren(O(br(t,n)));let r=this.getAttribute(`label`)??(t?`Back {seconds} seconds`:`Forward {seconds} seconds`);this.button.setAttribute(`aria-label`,F(r,{seconds:n}))}};customElements.get(`mbx-skip-button`)===void 0&&customElements.define(De,xr);var Sr=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}).append(M(`:host { display: block; flex: 1 1 auto; }`))}};customElements.get(`mbx-spacer`)===void 0&&customElements.define(Ce,Sr);var Cr=[.5,.75,1,1.25,1.5,2],wr=class extends I{static get observedAttributes(){return[`rates`,`label`,`label-normal`,`label-back`]}constructor(){super(...Vt(`playback-speed`)),P(this.slots,`default`)}name(){return`Playback speed`}rates(){let e=this.getAttribute(`rates`);if(e===null)return Cr;let t=e.split(/\s+/).map(Number).filter(e=>Number.isFinite(e)&&e>0);return t.length===0?Cr:t}attach(e){this.listen(e.video,[`ratechange`],()=>{this.render()}),this.render()}render(){super.render();let e=this.player?.video;if(e===void 0)return;let t=this.getAttribute(`label-normal`)??`Normal`,n=this.rates().map(e=>[String(e),e===1?t:`${e}×`]),r=String(e.playbackRate);n.some(([e])=>e===r)||n.push([r,`${r}×`]),this.menu.fill([{name:`rate`,items:n,value:r,onSelect:t=>{e.playbackRate=Number(t)}}])}};customElements.get(`mbx-speed-menu`)===void 0&&customElements.define(Be,wr);var Tr=`
:host {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  margin: -22px 0 0 -22px;
  display: none;
  pointer-events: none;
  color: var(--mbx-text);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
}
:host([waiting]) { display: block; }
:host([hidden]) { display: none; }
[part~="ring"] {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(255, 255, 255, 0.22);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: mbx-turn 0.8s linear infinite;
}
[part~="ring"][hidden] { display: none; }
slot[hidden] { display: none; }
::slotted(*) { width: 100%; height: 100%; }
@keyframes mbx-turn { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  [part~="ring"] { animation: none; }
}
`,Er=[`waiting`,`stalled`,`playing`,`canplay`,`emptied`],Dr=class extends k{static get observedAttributes(){return[`label`]}constructor(){super();let e=this.attachShadow({mode:`open`});this.ring=document.createElement(`div`),this.ring.setAttribute(`part`,`ring`),this.slot_=document.createElement(`slot`),this.slot_.name=`icon`,this.slot_.addEventListener(`slotchange`,()=>{this.ring.hidden=this.slot_.assignedNodes().length>0}),e.append(M(Tr),this.ring,this.slot_)}connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`status`),super.connectedCallback()}attach(e){let t=e.video;this.listen(t,Er,()=>{this.render()}),this.render()}detach(){this.removeAttribute(`waiting`)}render(){let e=this.player;e!==null&&(this.setAttribute(`aria-label`,this.getAttribute(`label`)??`Loading`),this.toggleAttribute(`waiting`,e.hasAttribute(`waiting`)))}};customElements.get(`mbx-spinner`)===void 0&&customElements.define(Ne,Dr);var Or=[`play`,`replay`],kr=`${A}
:host {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -32px 0 0 -52px;
}
[part~="button"] {
  width: 104px;
  height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.45);
  color: var(--mbx-text);
  opacity: 0.9;
  transition: opacity 0.15s, background 0.15s;
}
[part~="button"]:hover { opacity: 1; background: rgba(0, 0, 0, 0.6); }
/* A box too short for the button above the bar: the bar's play does the job. */
:host([cramped]) { display: none; }
[part~="icon"], ::slotted(*) { width: 40px; height: 40px; margin-left: 2px; }
@media (prefers-reduced-motion: reduce) {
  [part~="button"] { transition: none; }
}
`,Ar=class extends k{static get observedAttributes(){return[`label-play`,`label-replay`]}constructor(){super(),this.failed=!1,this.resizer=null;let e=this.attachShadow({mode:`open`});this.button=document.createElement(`button`),this.button.type=`button`,this.button.setAttribute(`part`,`button`),this.slots=N(Or,O);for(let e of Or)this.button.append(this.slots[e]);this.button.addEventListener(`click`,()=>{var e;(e=this.player)==null||e.video.play().catch(()=>void 0)}),e.append(M(kr),this.button)}attach(e){let t=e.video;this.listen(t,[`play`,`pause`,`ended`,`waiting`,`stalled`,`canplay`],()=>{this.render()}),this.listen(t,[`playing`,`loadstart`],()=>{this.failed=!1,this.render()}),this.listen(e,[`sourcechange`],()=>{this.failed=!1,this.render()});let n=e=>{e.detail.fatal&&(this.failed=!0,this.render())};e.addEventListener(`error`,n),this.keep(()=>{e.removeEventListener(`error`,n)}),this.failed=e.error!==null,typeof ResizeObserver<`u`&&(this.resizer=new ResizeObserver(()=>{this.fit(e)}),this.resizer.observe(e)),this.fit(e),this.render()}detach(){var e;(e=this.resizer)==null||e.disconnect(),this.resizer=null,this.removeAttribute(`cramped`)}fit(e){let t=e.querySelector(`mbx-control-bar`);if(t===null){this.removeAttribute(`cramped`);return}let n=this.hidden,r=this.hasAttribute(`cramped`);this.hidden=!1,this.removeAttribute(`cramped`);let i=this.button.getBoundingClientRect().bottom>t.getBoundingClientRect().top;this.hidden=n,this.toggleAttribute(`cramped`,i),i!==r&&this.render()}render(){let e=this.player?.video;if(e===void 0)return;let t=e.ended?`replay`:`play`;P(this.slots,t),this.button.setAttribute(`aria-label`,this.getAttribute(`label-${t}`)??(t===`play`?`Play`:`Replay`)),this.hidden=this.failed||!e.paused||this.player?.hasAttribute(`waiting`)===!0}};customElements.get(`mbx-start-button`)===void 0&&customElements.define(je,Ar);var jr=`off`,Mr=`subtitle-size`,Nr=`subtitle-background`,Pr=[[`small`,`Small`],[`medium`,`Medium`],[`large`,`Large`],[`xlarge`,`Extra large`]],Fr=[[`none`,`None`],[`dark`,`Dark`],[`solid`,`Solid`]],Ir=[`off`,`on`],Lr=class extends I{static get observedAttributes(){return[`label`,`label-back`,`label-off`,`label-track`,`label-settings`,`label-size`,`label-background`,...Pr.map(([e])=>`label-${e}`),...Fr.map(([e])=>`label-${e}`)]}constructor(){super(Ir,e=>O(e===`on`?`closed-captions-on`:`closed-captions`)),this.engine=null,P(this.slots,`off`)}name(){return`Subtitles`}looks(e,t,n,r,i,a){let o=e.getAttribute(t),s=o!==null&&i.some(([e])=>e===o)?o:a;return{name:n,label:this.getAttribute(`label-${n}`)??r,items:i.map(([e,t])=>[e,this.getAttribute(`label-${e}`)??t]),value:s,onSelect:n=>{e.setAttribute(t,n),this.render()}}}attach(e){this.follow(e,e=>{if(this.engine=e,this.render(),e!==null)return Wt(e,()=>{this.render()})})}render(){super.render();let e=this.engine,t=this.player;if(e===null||t===null){this.hidden=!0;return}let[n,r]=Ut(e,`text`),i=[[jr,this.getAttribute(`label-off`)??`Off`],...n];this.menu.fill([{name:`track`,label:this.getAttribute(`label-track`)??`Track`,items:i,value:r??jr,onSelect:t=>{t===jr?e.tracks.deselect(`text`):e.tracks.select(t),this.render()}},{name:`settings`,label:this.getAttribute(`label-settings`)??`Settings`,entries:[this.looks(t,Mr,`size`,`Size`,Pr,`medium`),this.looks(t,Nr,`background`,`Background`,Fr,`dark`)]}]),P(this.slots,r===null?`off`:`on`),this.hidden=n.length===0}};customElements.get(`mbx-subtitles-menu`)===void 0&&customElements.define(Ue,Lr);var Rr=`
:host {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  gap: 14px;
  /* The band runs under the bar to the bottom edge, one ramp with the
     bar's own fade, so there is no seam where the bar begins; the text
     sits 12px above the bar's rows, inside the bar's fade. */
  padding: 72px calc(var(--mbx-pad) + 8px) calc(var(--mbx-bar-rows, 0px) + 12px);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0));
  color: var(--mbx-text);
  font: 400 14px/1.35 var(--mbx-font);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}
:host([playing]) { display: none; }
:host([empty]) { display: none; }
:host([hidden]) { display: none; }
[part~="artwork"] {
  flex: none;
  height: 72px;
  width: auto;
  max-width: 128px;
  border-radius: var(--mbx-radius);
  object-fit: cover;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
}
[part~="artwork"][hidden] { display: none; }
[part~="text"] { display: flex; flex-direction: column; gap: 2px; min-width: 0; max-width: 60ch; }
[part~="heading"] {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
[part~="subheading"] { color: rgba(255, 255, 255, 0.78); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
[part~="heading"]:empty, [part~="subheading"]:empty { display: none; }
`,zr=class extends k{static get observedAttributes(){return[`heading`,`subheading`,`artwork`]}constructor(){super(),this.resizer=null;let e=this.attachShadow({mode:`open`});this.artwork=T(`img`,`artwork`),this.artwork.alt=``,this.artwork.hidden=!0;let t=T(`div`,`text`);this.heading=T(`div`,`heading`),this.subheading=T(`div`,`subheading`),t.append(this.heading,this.subheading),e.append(M(Rr),this.artwork,t)}attach(e){this.listen(e.video,[`play`,`pause`,`ended`,`emptied`],()=>{this.state(e)}),typeof ResizeObserver<`u`&&(this.resizer=new ResizeObserver(()=>{this.fit(e)}),this.resizer.observe(e)),this.fit(e),this.state(e),this.render()}detach(){var e;(e=this.resizer)==null||e.disconnect(),this.resizer=null,this.removeAttribute(`playing`),this.style.removeProperty(`--mbx-bar-rows`)}state(e){this.toggleAttribute(`playing`,!e.video.paused)}fit(e){let t=e.querySelector(`mbx-control-bar`),n=0;if(t!==null){let e=Number.parseFloat(getComputedStyle(t).paddingTop)||0;n=Math.max(0,t.getBoundingClientRect().height-e)}this.style.setProperty(`--mbx-bar-rows`,`${n}px`)}render(){let e=this.getAttribute(`heading`)??``,t=this.getAttribute(`subheading`)??``,n=this.getAttribute(`artwork`);this.heading.textContent=e,this.subheading.textContent=t,n===null?(this.artwork.removeAttribute(`src`),this.artwork.hidden=!0):(this.artwork.src=n,this.artwork.hidden=!1),this.toggleAttribute(`empty`,e===``&&t===``&&n===null)}};customElements.get(`mbx-title`)===void 0&&customElements.define(Pe,zr);var Br=.05,Vr=.2,Hr=class extends k{static get observedAttributes(){return[`label`]}constructor(){super();let e=this.attachShadow({mode:`open`});this.bar=cr({step:()=>j(this,`step`,Br),page:()=>j(this,`page`,Vr),onInput:e=>{let t=this.player?.video;t!==void 0&&(t.volume=e,e>0&&(t.muted=!1))},onDrag:e=>{this.toggleAttribute(`dragging`,e)}}),this.bar.range(0,1),e.append(M(`${Nt}:host { width: 80px; flex: none; }`),this.bar.root)}attach(e){this.listen(e.video,[`volumechange`,`emptied`],()=>{this.render()}),this.render()}render(){let e=this.player?.video;if(e===void 0)return;this.bar.label(this.getAttribute(`label`)??`Volume`);let t=e.muted?0:e.volume;this.bar.set(t,`${Math.round(t*100)}%`)}};customElements.get(`mbx-volume-slider`)===void 0&&customElements.define(Ee,Hr);var Ur=`
:host { display: inline-flex; align-items: center; }
:host([hidden]) { display: none; }
::slotted(mbx-volume-slider) { width: 0; opacity: 0; overflow: hidden; transition: width 0.2s ease, opacity 0.2s ease; }
/* The bar collapses the slider on its own when the row is narrow; then the pointer unfolds nothing. */
::slotted(mbx-volume-slider[collapsed]) { display: none; }
:host(:hover) ::slotted(mbx-volume-slider), :host(:focus-within:not([pointer])) ::slotted(mbx-volume-slider) { width: 80px; opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  ::slotted(mbx-volume-slider) { transition: none; }
}
`,Wr=class extends k{constructor(){super(),this.attachShadow({mode:`open`}).append(M(Ur),document.createElement(`slot`))}connectedCallback(){this.childElementCount===0&&this.append(document.createElement(Te),document.createElement(Ee)),super.connectedCallback()}attach(){this.listen(this,[`pointerdown`],()=>{this.toggleAttribute(`pointer`,!0)}),this.listen(this,[`keydown`,`focusout`],()=>{this.removeAttribute(`pointer`)})}detach(){this.removeAttribute(`pointer`)}};customElements.get(`mbx-volume`)===void 0&&customElements.define(Ge,Wr);function Gr(e){"@babel/helpers - typeof";return Gr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Gr(e)}function Kr(e,t){if(Gr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Gr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qr(e){var t=Kr(e,`string`);return Gr(t)==`symbol`?t:t+``}function Jr(e,t,n){return(t=qr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Yr(Object(n),!0).forEach(function(t){Jr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Xr(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Zr(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Xr(a,r,i,o,s,`next`,e)}function s(e){Xr(a,r,i,o,s,`throw`,e)}o(void 0)})}}var Qr=[{label:`H.264 High 4.0`,codec:`avc1.640028`,kind:`video`,containers:[`mp4`]},{label:`H.264 Baseline`,codec:`avc1.42e01e`,kind:`video`,containers:[`mp4`]},{label:`H.265 / HEVC Main`,codec:`hvc1.1.6.L123.B0`,kind:`video`,containers:[`mp4`]},{label:`VP9 Profile 0`,codec:`vp09.00.40.08`,kind:`video`,containers:[`mp4`,`webm`]},{label:`AV1 Main`,codec:`av01.0.08M.08`,kind:`video`,containers:[`mp4`,`webm`]},{label:`AAC-LC`,codec:`mp4a.40.2`,kind:`audio`,containers:[`mp4`]},{label:`HE-AAC`,codec:`mp4a.40.5`,kind:`audio`,containers:[`mp4`]},{label:`Opus`,codec:`opus`,kind:`audio`,containers:[`mp4`,`webm`]},{label:`FLAC`,codec:`flac`,kind:`audio`,containers:[`mp4`]},{label:`AC-3`,codec:`ac-3`,kind:`audio`,containers:[`mp4`]},{label:`E-AC-3`,codec:`ec-3`,kind:`audio`,containers:[`mp4`]}],$r=[{label:`Widevine`,keySystems:[`com.widevine.alpha`],levels:[[`HW_SECURE_ALL`,`L1`],[`HW_SECURE_DECODE`,`L1`],[`HW_SECURE_CRYPTO`,`L2`],[`SW_SECURE_DECODE`,`L3`],[`SW_SECURE_CRYPTO`,`L3`]]},{label:`PlayReady`,keySystems:[`com.microsoft.playready.recommendation`,`com.microsoft.playready`],levels:[[`3000`,`SL3000`],[`2000`,`SL2000`],[`150`,`SL150`]]},{label:`FairPlay`,keySystems:[`com.apple.fps`,`com.apple.fps.1_0`],levels:[]},{label:`ClearKey`,keySystems:[`org.w3.clearkey`],levels:[]}],ei=[`1.0`,`1.1`,`1.2`,`1.3`,`1.4`,`2.0`,`2.1`,`2.2`,`2.3`],ti=`video/mp4; codecs="avc1.42e01e"`,ni=`video/mp4; codecs="vp09.00.10.08"`,ri=`audio/mp4; codecs="mp4a.40.2"`,ii=`audio/mp4; codecs="opus"`;function ai(e,t,n=4e3){return new Promise(r=>{let i=setTimeout(()=>r(t),n);e.then(e=>{clearTimeout(i),r(e)},()=>{clearTimeout(i),r(t)})})}function oi(e){return e in globalThis?`yes`:`no`}function si(){let e=`no`;try{typeof MediaSource<`u`&&`changeType`in SourceBuffer.prototype&&(e=`yes`)}catch{e=`no`}return[{label:`Secure context`,value:window.isSecureContext?`yes`:`no`},{label:`MediaSource`,value:oi(`MediaSource`)},{label:`ManagedMediaSource`,value:oi(`ManagedMediaSource`)},{label:`SourceBuffer.changeType`,value:e},{label:`Encrypted Media (EME)`,value:oi(`MediaKeys`)},{label:`MediaCapabilities`,value:navigator.mediaCapabilities===void 0?`no`:`yes`},{label:`WebCodecs`,value:oi(`VideoDecoder`)}]}function ci(e){try{return typeof MediaSource<`u`&&MediaSource.isTypeSupported(e)}catch{return!1}}function li(e){let t=document.createElement(`video`).canPlayType(e);return t===`probably`?`yes`:t===`maybe`?`maybe`:`no`}function ui(e){return di.apply(this,arguments)}function di(){return di=Zr(function*(e){let t=navigator.mediaCapabilities;if(t?.decodingInfo===void 0)return{smooth:`na`,efficient:`na`};let n=`${e.kind}/${e.containers[0]}; codecs="${e.codec}"`,r=e.kind===`video`?{type:`media-source`,video:{contentType:n,width:1920,height:1080,bitrate:6e6,framerate:30}}:{type:`media-source`,audio:{contentType:n,channels:`2`,bitrate:128e3}},i=yield ai(t.decodingInfo(r),null);return i===null?{smooth:`na`,efficient:`na`}:i.supported?{smooth:i.smooth?`yes`:`no`,efficient:i.powerEfficient?`yes`:`no`}:{smooth:`no`,efficient:`no`}}),di.apply(this,arguments)}function fi(e){return pi.apply(this,arguments)}function pi(){return pi=Zr(function*(e){let t=t=>e.containers.includes(t)?ci(`${e.kind}/${t}; codecs="${e.codec}"`)?`yes`:`no`:`na`,{smooth:n,efficient:r}=yield ui(e);return{label:e.label,codec:e.codec,kind:e.kind,mse:t(`mp4`),webm:t(`webm`),element:li(`${e.kind}/${e.containers[0]}; codecs="${e.codec}"`),smooth:n,efficient:r}}),pi.apply(this,arguments)}function mi(e={}){return[B({contentType:ti},e),B({contentType:ni},e)]}function hi(e={}){return B({initDataTypes:[`cenc`,`keyids`,`sinf`,`skd`],videoCapabilities:mi(),audioCapabilities:[{contentType:ri},{contentType:ii}]},e)}function gi(e,t){return typeof navigator.requestMediaKeySystemAccess==`function`?ai(navigator.requestMediaKeySystemAccess(e,[t]).then(e=>e,()=>null),null):Promise.resolve(null)}var _i=e=>({label:e,keySystem:null,level:`na`,schemes:`na`,persistent:`na`,identifier:`na`,hdcp:`na`});function vi(e){return yi.apply(this,arguments)}function yi(){return yi=Zr(function*(e){let t=null,n=null;for(let r of e.keySystems)if(n=yield gi(r,hi()),n!==null){t=r;break}if(t===null||n===null)return _i(e.label);let r=e.levels.length===0?`n/a for this system`:`none granted`;for(let[n,i]of e.levels)if((yield gi(t,hi({videoCapabilities:mi({robustness:n})})))!==null){r=`${i} (${n})`;break}let i=[],a=!1;for(let e of[`cenc`,`cbcs`]){var o;let n=yield gi(t,hi({videoCapabilities:mi({encryptionScheme:e})})),r=n==null||(o=n.getConfiguration().videoCapabilities)==null||(o=o.find(e=>e.contentType!==``))==null?void 0:o.encryptionScheme;r!=null&&(a=!0),r===e&&i.push(e)}let s=a?i.length===0?`none`:i.join(`, `):`unknown (no API)`,c=yield gi(t,hi({persistentState:`required`,sessionTypes:[`persistent-license`]})),l=yield gi(t,hi({distinctiveIdentifier:`required`})),u=`na`;try{let e=yield ai(n.createMediaKeys(),null);if(e!==null&&typeof e.getStatusForPolicy==`function`){let t=null;for(let n of ei){if((yield ai(e.getStatusForPolicy({minHdcpVersion:n}),`unknown`))!==`usable`)break;t=n}u=t===null?`no output protection`:`up to ${t}`}}catch{u=`na`}return{label:e.label,keySystem:t,level:r,schemes:s,persistent:c===null?`no`:`yes`,identifier:l===null?`no`:`yes`,hdcp:u}}),yi.apply(this,arguments)}var bi=null;function xi(){return bi===null&&(bi=Zr(function*(){return{userAgent:navigator.userAgent,platform:si(),codecs:yield Promise.all(Qr.map(fi)),drm:yield Promise.all($r.map(vi))}})()),bi}function V(e){return!Number.isFinite(e)||e<=0?`0 bps`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)} Mbps`:e>=1e3?`${Math.round(e/1e3)} kbps`:`${Math.round(e)} bps`}function H(e){if(!Number.isFinite(e))return`–`;let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>e<10?`0${e}`:`${e}`;return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`}function Si(e,t=1){return e==null||!Number.isFinite(e)?`–`:e.toFixed(t)}function Ci(e,t){return t>0?`${(e/t*100).toFixed(2)}%`:`0%`}function wi(e){return e.length===0?`none`:e.map(e=>`${e.start.toFixed(1)}–${e.end.toFixed(1)}`).join(`, `)}function Ti(e){return e===null?`–`:e.height===void 0?V(e.bitrate):`${e.height}p, ${V(e.bitrate)}`}var Ei=[`buffer`,`throughput`,`stalls`,`frames`,`switches`];function Di(e,t){let n=e/Math.max(t,1),r=10**Math.floor(Math.log10(Math.max(n,1e-9)));for(let e of[1,2,5,10])if(n<=e*r)return e*r;return 10*r}function U(e,t){let n=document.createElement(`canvas`).getContext(`2d`);if(n===null)return e;n.fillStyle=e;let r=n.fillStyle;return/^#[0-9a-f]{6}$/i.test(r)?`rgba(${Number.parseInt(r.slice(1,3),16)}, ${Number.parseInt(r.slice(3,5),16)}, ${Number.parseInt(r.slice(5,7),16)}, ${t})`:e}function Oi(e,t,n){function r(){let t=e.getContext(`2d`);if(t===null)return null;let n=window.devicePixelRatio||1,r=e.clientWidth,i=e.clientHeight;if(r===0||i===0)return null;let a=Math.round(r*n),o=Math.round(i*n);return(e.width!==a||e.height!==o)&&(e.width=a,e.height=o),t.setTransform(n,0,0,n,0,0),t.clearRect(0,0,r,i),t.font=`10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,{ctx:t,w:r,h:i,left:44,right:r-8,top:8,bottom:i-18}}function i(e,t,n,r){let i=r=>e.left+(r-t)/(n-t)*(e.right-e.left),a=(n-t)/1e3,o=Di(a,6);e.ctx.strokeStyle=U(r.muted,.25),e.ctx.fillStyle=r.muted,e.ctx.textAlign=`center`,e.ctx.textBaseline=`top`;for(let t=0;t<=a;t+=o){let r=i(n-t*1e3);e.ctx.beginPath(),e.ctx.moveTo(r,e.top),e.ctx.lineTo(r,e.bottom),e.ctx.stroke();let a=t===0?`now`:t<60?`-${t}s`:`-${H(t)}`;e.ctx.fillText(a,r,e.bottom+3)}return i}function a(e,t,n,r){let i=n=>e.bottom-n/t*(e.bottom-e.top),a=Di(t,4);e.ctx.strokeStyle=U(r.muted,.25),e.ctx.fillStyle=r.muted,e.ctx.textAlign=`right`,e.ctx.textBaseline=`middle`;for(let r=0;r<=t;r+=a){let t=i(r);e.ctx.beginPath(),e.ctx.moveTo(e.left,t),e.ctx.lineTo(e.right,t),e.ctx.stroke(),e.ctx.fillText(n(r),e.left-4,t)}return i}function o(e,t,n,r={}){if(t.length===0)return;e.ctx.save(),e.ctx.strokeStyle=n,e.ctx.lineWidth=r.width??2,e.ctx.setLineDash(r.dashed===!0?[4,4]:[]),e.ctx.beginPath();let i;for(let n of t)i===void 0?e.ctx.moveTo(n[0],n[1]):(r.step===!0&&e.ctx.lineTo(n[0],i[1]),e.ctx.lineTo(n[0],n[1])),i=n;e.ctx.stroke(),e.ctx.restore()}function s(e,t,n,r,i=2.5){e.ctx.fillStyle=r,e.ctx.beginPath(),e.ctx.arc(t,n,i,0,Math.PI*2),e.ctx.fill()}function c(e,t,n,r){e.ctx.save(),e.ctx.strokeStyle=n,e.ctx.lineWidth=1,e.ctx.setLineDash([2,3]),e.ctx.beginPath(),e.ctx.moveTo(t,e.top),e.ctx.lineTo(t,e.bottom),e.ctx.stroke(),e.ctx.restore(),e.ctx.fillStyle=n,e.ctx.textAlign=`center`,e.ctx.textBaseline=`top`,e.ctx.fillText(r,t,e.top)}function l(e){t.replaceChildren();for(let[n,r]of e){let e=document.createElement(`span`);e.setAttribute(`part`,`legend-item`);let i=document.createElement(`span`);i.setAttribute(`part`,`swatch`),i.style.background=r,e.append(i,n),t.append(e)}}function u(e,t){let n=e.findIndex(e=>e.t>=t);return n<0?e.length>0?[e[e.length-1]]:[]:e.slice(Math.max(0,n-1))}function d(e){return e?.quality.renditions??[]}function f(e,t){var r;let{video:i,engine:a,palette:o}=t,s=a?.stats.snapshot()??null,u=(s==null||(r=s.presentation)==null?void 0:r.duration)??i.duration,f=s?.live??null,p=i.currentTime,m=0,h=Number.isFinite(u)&&u>0?u:Math.max(p+10,10);f===null?h>600&&(m=Math.max(0,p-60),h=p+180):(m=f.span.start,h=Math.max(f.span.end,p+10));let g=t=>e.left+(t-m)/(h-m)*(e.right-e.left),_=s===null?[{label:`video`,ranges:Array.from({length:i.buffered.length},(e,t)=>({start:i.buffered.start(t),end:i.buffered.end(t)}))}]:[...s.buffers.entries()].map(([e,t])=>({label:e.replace(`sb:`,``),ranges:t.ranges}));_.length===0&&_.push({label:`video`,ranges:[]});let v=d(a),y=Math.min(34,(e.bottom-e.top-8*(_.length-1))/_.length);e.ctx.textAlign=`left`,e.ctx.textBaseline=`middle`,_.forEach((t,n)=>{let r=e.top+n*(y+8);if(e.ctx.fillStyle=U(o.muted,.15),e.ctx.fillRect(e.left,r,e.right-e.left,y),s!==null)for(let[t,n]of s.quality.appendLog){let i=v.findIndex(e=>e.id===n);e.ctx.fillStyle=U(o.series[Math.max(0,i)%o.series.length]??o.accent,.3),e.ctx.fillRect(g(t.start),r,Math.max(1,g(t.end)-g(t.start)),y)}e.ctx.fillStyle=o.ink;for(let n of t.ranges)e.ctx.fillRect(g(n.start),r+y-4,Math.max(1,g(n.end)-g(n.start)),3);e.ctx.fillStyle=o.muted,e.ctx.fillText(t.label,e.left+4,r+y/2)}),f!==null&&c(e,g(f.edge),o.warn,`edge`),e.ctx.fillStyle=o.accent,e.ctx.fillRect(g(p)-1,e.top,2,e.bottom-e.top),e.ctx.fillStyle=o.muted,e.ctx.textAlign=`left`,e.ctx.textBaseline=`top`,e.ctx.fillText(H(m),e.left,e.bottom+3),e.ctx.textAlign=`right`,e.ctx.fillText(H(h),e.right,e.bottom+3),l([...v.map((e,t)=>[e.height===void 0?V(e.bitrate):`${e.height}p`,o.series[t%o.series.length]??o.accent]),[`buffered`,o.ink],[`playhead`,o.accent]]);let b=t.samples[t.samples.length-1]?.ahead??0;n.textContent=`${H(p)} of ${H(h)}, ${b.toFixed(1)}s buffered ahead${f===null?``:`, window ${H(f.span.start)} to ${H(f.span.end)}`}`}function p(e,t,r,c){let d=t.palette,f=u(t.samples,r),p=t.marks.filter(e=>e.kind===`segment`&&e.t>=r),m=a(e,Math.max(1e6,...f.map(e=>Math.max(e.slow,e.fast,e.playingBitrate)),...p.map(e=>e.value))*1.15,e=>(e/1e6).toFixed(e>=1e7?0:1),d),h=i(e,r,c,d);for(let t of p){let n=t.trackId?.startsWith(`aud`)===!0||t.trackId?.includes(`audio`)===!0;s(e,h(t.t),m(t.value),(n?d.series[4]:d.series[0])??d.accent)}o(e,f.map(e=>[h(e.t),m(e.slow)]),d.series[1]??d.accent),o(e,f.map(e=>[h(e.t),m(e.fast)]),d.series[2]??d.accent,{dashed:!0}),o(e,f.map(e=>[h(e.t),m(e.playingBitrate)]),d.muted,{step:!0,width:1.5}),l([[`video segment`,d.series[0]??d.accent],[`audio segment`,d.series[4]??d.accent],[`slow estimate`,d.series[1]??d.accent],[`fast estimate`,d.series[2]??d.accent],[`playing bitrate`,d.muted]]);let g=f[f.length-1];n.textContent=g===void 0?`Mbps`:`Mbps. Now: slow ${V(g.slow)}, fast ${V(g.fast)}, playing ${V(g.playingBitrate)}`}function m(e,t,r,s){let d=t.palette,f=u(t.samples,r),p=a(e,Math.max(5,...f.map(e=>e.ahead))*1.15,e=>`${e.toFixed(0)}s`,d),m=i(e,r,s,d);e.ctx.fillStyle=U(d.series[3]??d.accent,.25);let h=null;for(let[t,n]of f.entries()){n.stalled&&h===null&&(h=n.t);let r=t===f.length-1;(!n.stalled||r)&&h!==null&&(e.ctx.fillRect(m(h),e.top,Math.max(2,m(n.t)-m(h)),e.bottom-e.top),h=null)}o(e,f.map(e=>[m(e.t),p(e.ahead)]),d.series[0]??d.accent);for(let n of t.marks)n.t<r||n.kind===`segment`||n.kind===`switch`||(n.kind===`stall`?c(e,m(n.t),d.accent,`!`):n.kind===`seek`?c(e,m(n.t),d.muted,`>`):c(e,m(n.t),d.warn,n.kind.charAt(0).toUpperCase()));l([[`buffered ahead`,d.series[0]??d.accent],[`stalled`,d.series[3]??d.accent],[`! stall`,d.accent],[`> seek`,d.muted],[`N F S G recovery`,d.warn]]);let g=t.counters,_=f[f.length-1]?.stalled===!0?`, stalled now`:``;n.textContent=`${g.stalls} stalls, ${g.stalledSeconds.toFixed(1)}s stalled in total${_}`}function h(e,t,r,s){let c=t.palette,d=u(t.samples,r),f=d.map((e,t)=>{let n=d[t-1],r=n===void 0?.5:Math.max((e.t-n.t)/1e3,.05);return e.decoded/r}),p=a(e,Math.max(30,...f)*1.15,e=>e.toFixed(0),c),m=i(e,r,s,c),h=Math.max(1,...d.map(e=>e.dropped));e.ctx.fillStyle=c.accent;for(let t of d){if(t.dropped===0)continue;let n=t.dropped/h*(e.bottom-e.top)*.6;e.ctx.fillRect(m(t.t)-1.5,e.bottom-n,3,n)}o(e,d.map((e,t)=>[m(e.t),p(f[t]??0)]),c.series[0]??c.accent),l([[`decoded per second`,c.series[0]??c.accent],[`dropped, relative`,c.accent]]);let g=t.counters,_=g.decoded>0?(g.dropped/g.decoded*100).toFixed(2):`0.00`;n.textContent=`${g.decoded} decoded, ${g.dropped} dropped (${_}%) this session`}function g(e,t,r,a){let s=t.palette,f=u(t.samples,r),p=d(t.engine),m=p.some(e=>e.height!==void 0),h=p.map(e=>m?e.height??0:e.bitrate),g=Math.max(1,...h,...f.map(e=>m?e.playingHeight:e.playingBitrate))*1.15,_=t=>e.bottom-t/g*(e.bottom-e.top);e.ctx.strokeStyle=U(s.muted,.25),e.ctx.fillStyle=s.muted,e.ctx.textAlign=`right`,e.ctx.textBaseline=`middle`;for(let t of h){let n=_(t);e.ctx.beginPath(),e.ctx.moveTo(e.left,n),e.ctx.lineTo(e.right,n),e.ctx.stroke(),e.ctx.fillText(m?`${t}p`:V(t),e.left-4,n)}let v=i(e,r,a,s);o(e,f.map(e=>[v(e.t),_(m?e.playingHeight:e.playingBitrate)]),s.series[0]??s.accent,{step:!0});for(let n of t.marks)n.kind===`switch`&&n.t>=r&&c(e,v(n.t),s.warn,`S`);l([[`playing`,s.series[0]??s.accent],[`S switch`,s.warn]]);let y=f[f.length-1],b=y===void 0||y.playingId===null?`–`:m?`${y.playingHeight}p`:V(y.playingBitrate);n.textContent=`${t.counters.switches} switches this session, now ${b}`}return{draw(e){let t=r();if(t===null)return;if(e.engine===null&&(e.tab===`throughput`||e.tab===`switches`)){l([]),n.textContent=`A native session: the browser holds this, and says nothing.`;return}let i=performance.now(),a=i-e.window*1e3;switch(e.tab){case`buffer`:f(t,e);break;case`throughput`:p(t,e,a,i);break;case`stalls`:m(t,e,a,i);break;case`frames`:h(t,e,a,i);break;case`switches`:g(t,e,a,i)}}}}var ki=`mattebox-player`;function Ai(e){let t=e.parentNode;return t===null?e instanceof ShadowRoot?e.host:null:t}function ji(e){let t=e;for(;t!==null;){if(t instanceof HTMLElement&&t.localName===`mattebox-player`)return t;t=Ai(t)}return null}function Mi(e,t){let n=!0,r=()=>{n&&(n=!1,customElements.upgrade(e),`video`in e&&t(e))};return`video`in e?r():customElements.whenDefined(ki).then(r),()=>{n=!1}}var Ni=`M17.534 10.6674C17.534 11.5143 16.8475 12.2008 16.0006 12.2008C15.1538 12.2008 14.4673 11.5143 14.4673 10.6674C14.4673 9.82061 15.1538 9.13411 16.0006 9.13411C16.8475 9.13411 17.534 9.82061 17.534 10.6674Z M14.6678 14.2005C14.6678 13.8323 14.9663 13.5339 15.3345 13.5339H16.6678C17.036 13.5339 17.3345 13.8323 17.3345 14.2005V22.2005C17.3345 22.5687 17.036 22.8672 16.6678 22.8672H15.3345C14.9663 22.8672 14.6678 22.5687 14.6678 22.2005V14.2005Z M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM24.9333 16C24.9333 20.9337 20.9337 24.9333 16 24.9333C11.0663 24.9333 7.06667 20.9337 7.06667 16C7.06667 11.0663 11.0663 7.06667 16 7.06667C20.9337 7.06667 24.9333 11.0663 24.9333 16Z`,Pi=`http://www.w3.org/2000/svg`;function Fi(){let e=document.createElementNS(Pi,`svg`);e.setAttribute(`viewBox`,`0 0 32 32`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`part`,`icon`);let t=document.createElementNS(Pi,`path`);return t.setAttribute(`fill-rule`,`evenodd`),t.setAttribute(`d`,Ni),e.append(t),e}function Ii(e){return Array.from({length:e.length},(t,n)=>({start:e.start(n),end:e.end(n)}))}function Li(e){let t=e.getVideoPlaybackQuality?.call(e);return{currentTime:e.currentTime,duration:e.duration,paused:e.paused,ended:e.ended,seeking:e.seeking,readyState:e.readyState,networkState:e.networkState,playbackRate:e.playbackRate,volume:e.volume,muted:e.muted,videoWidth:e.videoWidth,videoHeight:e.videoHeight,buffered:Ii(e.buffered),seekable:Ii(e.seekable),frames:t===void 0?null:{decoded:t.totalVideoFrames,dropped:t.droppedVideoFrames},mediaError:e.error===null?null:{code:e.error.code,message:e.error.message}}}function Ri(e){let t=e.stats.snapshot(),n=e,r=e.error;return{phase:t.lifecycle.phase,capabilities:[...e.capabilities()],throughput:{slow:t.stats.throughputEwma,fast:t.stats.throughputFastEwma},bufferGoal:t.scheduling.bufferGoal,buffers:[...t.buffers.entries()].map(([e,t])=>({id:e,codecs:t.codecs,ranges:t.ranges.map(e=>({start:e.start,end:e.end}))})),inflight:[...t.scheduling.inflight.values()].map(e=>({trackId:e.trackId,seq:e.seq,url:e.url})),live:t.live===null?null:{start:t.live.span.start,end:t.live.span.end,edge:t.live.edge,latency:n.live?.latency??null},tracks:{active:Object.fromEntries([`video`,`audio`,`text`].map(t=>[t,e.tracks.active(t)?.id??null])),available:e.tracks.available.map(e=>({id:e.id,contentType:e.contentType,mimeType:e.mimeType,lang:e.lang??null,role:e.role??null,renditions:e.renditions.length}))},quality:{playing:e.quality.playing?.id??null,active:e.quality.active?.id??null,pinned:e.quality.pinned,allowed:e.quality.allowed.map(e=>e.id),renditions:e.quality.renditions.map(e=>({id:e.id,bitrate:e.bitrate,width:e.width??null,height:e.height??null,frameRate:e.frameRate??null,codecs:e.codecs}))},drm:n.drm===void 0?null:{keySystem:n.drm.keySystem,sessions:[...n.drm.sessions]},error:r===null?null:{category:r.category,code:r.code,fatal:r.fatal,recoverable:r.recoverable,context:r.context??null}}}var zi=12e4;function Bi(e){var t;let{player:n}=e,r=n.engine,i=e.samples.slice(-240),a=performance.now()-zi;return{at:new Date().toISOString(),userAgent:navigator.userAgent,source:{url:n.getAttribute(`src`),type:n.getAttribute(`type`),handler:((t=n.player)==null||(t=t.session)==null?void 0:t.handler)??null},playback:Li(n.video),error:n.error,engine:r===null?null:Ri(r),counters:e.counters,samples:i,marks:e.marks.filter(e=>e.t>=a),support:e.support,trace:r===null?null:e.history}}function Vi(e){return Array.isArray(e)?e.length:typeof e==`object`&&e&&`kind`in e?String(e.kind):0}function Hi(e){return{id:e.id,isLive:e.isLive,duration:e.duration??null,live:e.live??null,periods:e.periods.map(e=>({id:e.id,start:e.start,duration:e.duration??null,tracks:e.tracks.map(e=>({id:e.id,contentType:e.contentType,mimeType:e.mimeType,lang:e.lang??null,role:e.role??null,protected:e.protection!==null&&e.protection.schemes.length>0,renditions:e.renditions.map(e=>({id:e.id,bitrate:e.bitrate,width:e.width??null,height:e.height??null,codecs:e.codecs,segments:Vi(e.segments)}))}))}))}}function Ui(e){switch(e.type){case`MANIFEST_LOADED`:return{type:e.type,presentation:Hi(e.presentation)};case`PLAYLIST_REFRESHED`:return B(B({},e),{},{segments:Vi(e.segments)});case`SEGMENT_LOADED`:return B(B({},e),{},{bytes:Wi(e.bytes)});default:return e}}function Wi(e){return e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:e}function Gi(e){if(e.kind===`emit`&&e.event===`tracks:changed`)return{kind:e.kind,event:e.event};if(e.kind===`schedule`)return B(B({},e),{},{then:Ui(e.then)});let t={};for(let[n,r]of Object.entries(e))t[n]=Wi(r);return t}function Ki(e,t){return t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:t instanceof Map?Object.fromEntries(t):t instanceof Set?[...t]:typeof t==`function`?`[function]`:typeof Node<`u`&&t instanceof Node?`[${t.nodeName}]`:t}function qi(e){let t={t:e.t,msg:Ui(e.msg),effects:e.effects.map(Gi),digest:e.digest};return JSON.parse(JSON.stringify(t,Ki))}var Ji=2400,Yi=500,Xi=new Set([`nudge`,`flush`,`skip`,`gap-jump`]);function Zi(e){return e.height===void 0?`${Math.round(e.bitrate/1e3)} kbps`:`${e.height}p`}function Qi(){let e=[],t=[],n=[],r=new WeakSet,i=null,a=null,o=0,s=null,c=null,l=null,u=0,d=0,f=0,p=0,m=0;function h(e){t.push(e),t.length>Ji*2&&t.splice(0,t.length-Ji*2)}function g(e){let t=e.stats.trace(),n=0;if(a!==null){let e=t.indexOf(a);n=e>=0?e+1:t.findIndex(e=>e.t>o),n<0&&(n=t.length)}let r=t[t.length-1];return r!==void 0&&(a=r,o=r.t),t.slice(n)}function _(e,t){if(!r.has(e)){r.add(e),n.push(qi(e)),n.length>Yi&&n.splice(0,n.length-Yi);{let n=e.msg;n.type===`SEGMENT_LOADED`&&n.trackId!==`manifest`&&n.size>0?h({t:e.t,kind:`segment`,value:n.size*8e3/Math.max(n.rtt,1),label:`${n.trackId} #${n.seq}`,trackId:n.trackId}):n.type===`STALLED`?h({t:e.t,kind:`stall`,value:n.at,label:`stalled at ${n.at.toFixed(1)}s`}):n.type===`SEEKING`&&h({t:e.t,kind:`seek`,value:n.to,label:`seek to ${n.to.toFixed(1)}s`});for(let n of e.effects){if(n.kind!==`emit`)continue;let r=n.event.replace(`recovery:`,``);Xi.has(r)&&h({t:e.t,kind:r,value:t.currentTime,label:`recovery ${r}`})}}}}function v(){e=[],t=[],n=[],r=new WeakSet,a=null,o=0,s=null,c=null,l=null,u=0,d=0,f=0,p=0,m=0}function y(){i?.(),i=null}return{attach(e,t){y(),v(),t!==null&&(i=t.on(`trace`,t=>{_(t,e)}))},release:y,poll(t,n){let r=performance.now();if(n!==null)for(let e of g(n))_(e,t);let i=n?.stats.snapshot()??null,a=n?.quality.playing??null,o=t.getVideoPlaybackQuality?.call(t);p=o?.totalVideoFrames??0,m=o?.droppedVideoFrames??0;let v=s===null?0:Math.max(0,m-s.dropped),y=s===null?0:Math.max(0,p-s.decoded);s={dropped:m,decoded:p};let b=0;for(let e=0;e<t.buffered.length;e+=1)t.buffered.start(e)<=t.currentTime+.25&&t.buffered.end(e)>t.currentTime&&(b=t.buffered.end(e)-t.currentTime);let x=!t.paused&&!t.ended&&!t.seeking&&t.readyState<3&&t.currentTime>0;x&&l===null?(l=r,u+=1):!x&&l!==null&&(d+=(r-l)/1e3,l=null),a!==null&&c!==null&&a.id!==c&&(f+=1,h({t:r,kind:`switch`,value:a.height??a.bitrate,label:`now ${Zi(a)}`})),a!==null&&(c=a.id),e.push({t:r,currentTime:t.currentTime,slow:i?.stats.throughputEwma??0,fast:i?.stats.throughputFastEwma??0,ahead:b,stalled:x,dropped:v,decoded:y,playingId:a?.id??null,playingBitrate:a?.bitrate??0,playingHeight:a?.height??0}),e.length>Ji&&e.splice(0,e.length-Ji)},get samples(){return e},get marks(){return t},get history(){return n},get counters(){let e=l===null?0:(performance.now()-l)/1e3;return{stalls:u,stalledSeconds:d+e,switches:f,decoded:p,dropped:m}}}}var $i=`
:host {
  display: inline-flex;
  position: relative;
  --mbx-chart-1: #5aa9e0;
  --mbx-chart-2: #6fbf8f;
  --mbx-chart-3: #d9a83f;
  --mbx-chart-4: #e05a6e;
  --mbx-chart-5: #a98fe0;
}
:host([hidden]) { display: none; }
:host([inline]) { display: block; }
[part~="button"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 40px;
  height: 40px;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: 0;
  border-radius: var(--mbx-radius);
  cursor: pointer;
  opacity: 0.9;
}
[part~="button"]:hover { opacity: 1; }
[part~="button"]:focus-visible { outline: 2px solid var(--mbx-accent); outline-offset: -2px; }
[part~="icon"], ::slotted(*) { width: 1.75em; height: 1.75em; fill: currentColor; }
:host([inline]) [part~="button"] { display: none; }
[part~="panel"] {
  position: absolute;
  right: 0;
  bottom: 100%;
  box-sizing: border-box;
  width: 560px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--mbx-text, #f2f3f5);
  background: rgba(16, 17, 20, 0.95);
  border-radius: var(--mbx-radius, 4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  font: 400 12px/1.5 var(--mbx-mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace);
  text-align: left;
  white-space: normal;
}
[part~="panel"][hidden] { display: none; }
:host([inline]) [part~="panel"] {
  position: static;
  width: auto;
  max-height: none;
  margin: 0;
  box-shadow: none;
  border-radius: 0;
}
[part~="head"] {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
[part~="tab"], [part~="chart-tab"] {
  font: inherit;
  color: var(--mbx-muted, #9aa0a6);
  background: transparent;
  border: 0;
  border-radius: var(--mbx-radius, 4px);
  padding: 3px 8px;
  cursor: pointer;
}
[part~="tab"][aria-selected="true"], [part~="chart-tab"][aria-selected="true"] {
  color: var(--mbx-text, #f2f3f5);
  background: rgba(255, 255, 255, 0.12);
}
[part~="copy"], [part~="close"], [part~="window"] {
  font: inherit;
  color: inherit;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--mbx-radius, 4px);
  padding: 2px 8px;
  cursor: pointer;
}
[part~="copy"] { margin-left: auto; }
[part~="window"] { margin-left: auto; }
[part~="window"] option { color: #000; }
[part~="tab"]:focus-visible, [part~="chart-tab"]:focus-visible, [part~="copy"]:focus-visible,
[part~="close"]:focus-visible, [part~="window"]:focus-visible {
  outline: 2px solid var(--mbx-accent, #5b8cff);
  outline-offset: -2px;
}
[part~="body"] { min-height: 0; overflow: auto; overscroll-behavior: contain; padding: 8px; }
[part~="page"][hidden] { display: none; }
[part~="rows"] { display: grid; grid-template-columns: max-content 1fr; gap: 2px 12px; margin: 0; }
[part~="key"] { color: var(--mbx-muted, #9aa0a6); white-space: nowrap; }
[part~="value"] { margin: 0; overflow-wrap: anywhere; }
[part~="heading"] {
  margin: 10px 0 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mbx-muted, #9aa0a6);
}
[part~="heading"]:first-child { margin-top: 0; }
[part~="note"] { margin: 0; color: var(--mbx-muted, #9aa0a6); }
[part~="chart-tabs"] { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-bottom: 6px; }
[part~="chart"] { display: block; width: 100%; height: 160px; }
[part~="legend"] { display: flex; flex-wrap: wrap; gap: 2px 12px; margin-top: 4px; color: var(--mbx-muted, #9aa0a6); }
[part~="swatch"] { display: inline-block; width: 10px; height: 10px; margin-right: 4px; border-radius: 2px; vertical-align: middle; }
[part~="readout"] { margin-top: 4px; }
[part~="table"] { width: 100%; border-collapse: collapse; margin-bottom: 4px; }
[part~="cell"] { padding: 2px 6px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.08); white-space: nowrap; font-weight: 400; }
[part~="label"] { color: var(--mbx-muted, #9aa0a6); }
[part~="ok"] { color: var(--mbx-chart-2); }
[part~="bad"] { color: var(--mbx-chart-4); }
[part~="na"] { color: var(--mbx-muted, #9aa0a6); }
[part~="ok"], [part~="bad"], [part~="na"], [part~="maybe"] { font-weight: 600; }
`,ea=500,ta=250,na=120,ra=[30,60,120,300,600],ia=560,aa=8,oa=[`playback`,`charts`,`engine`,`browser`],sa={playback:`Playback`,charts:`Charts`,engine:`Engine`,browser:`Browser`},ca=[`nothing`,`metadata`,`current data`,`future data`,`enough data`],la=[`empty`,`idle`,`loading`,`no source`];function W(e,t,n){let r=document.createElement(e);return r.setAttribute(`part`,t),n!==void 0&&(r.textContent=n),r}function ua(e,t){let n=W(`button`,e,t);return n.type=`button`,n}function da(e){switch(e){case`yes`:return[`✓`,`cell ok`];case`no`:return[`✕`,`cell bad`];case`na`:return[`–`,`cell na`];case`maybe`:return[`maybe`,`cell maybe`];default:return[e,`cell`]}}var fa=class extends HTMLElement{static get observedAttributes(){return[`label`,`label-copy`,`label-copied`,`window`]}constructor(){super(),this.player=null,this.cancel=null,this.offs=[],this.sampler=Qi(),this.timer=void 0,this.drawer=void 0,this.copied=void 0,this.tab=`playback`,this.chartTab=`buffer`,this.support=null,this.probing=!1;let e=this.attachShadow({mode:`open`}),t=document.createElement(`style`);t.textContent=$i,this.toggle=ua(`button`),this.toggle.setAttribute(`aria-haspopup`,`dialog`),this.toggle.setAttribute(`aria-expanded`,`false`);let n=document.createElement(`slot`);n.name=`icon`,n.append(Fi()),this.toggle.append(n),this.toggle.addEventListener(`click`,()=>{this.panel.hidden?this.show():this.hide()}),this.panel=W(`div`,`panel`),this.panel.setAttribute(`role`,`dialog`),this.panel.hidden=!0,this.panel.addEventListener(`keydown`,e=>{e.key!==`Escape`||this.hasAttribute(`inline`)||(e.preventDefault(),this.hide(),this.toggle.focus())});let r=W(`div`,`head`);r.setAttribute(`role`,`tablist`),this.tabs={},this.pages={},this.body=W(`div`,`body`);for(let e of oa){let t=ua(`tab tab-${e}`,sa[e]);t.setAttribute(`role`,`tab`),t.addEventListener(`click`,()=>{this.select(e)}),this.tabs[e]=t,r.append(t);let n=W(`div`,`page page-${e}`);n.setAttribute(`role`,`tabpanel`),n.hidden=!0,this.pages[e]=n,this.body.append(n)}this.copy=ua(`copy`),this.copy.addEventListener(`click`,()=>{this.copyReport()});let i=ua(`close`,`✕`);i.setAttribute(`aria-label`,`Close`),i.addEventListener(`click`,()=>{this.hide(),this.toggle.focus()}),r.append(this.copy,i);let a=W(`div`,`chart-tabs`);a.setAttribute(`role`,`tablist`),this.chartTabs={};for(let e of Ei){let t=ua(`chart-tab chart-tab-${e}`,e);t.setAttribute(`role`,`tab`),t.addEventListener(`click`,()=>{this.chartTab=e,this.markChartTab(),this.draw()}),this.chartTabs[e]=t,a.append(t)}this.windowSelect=W(`select`,`window`),this.windowSelect.setAttribute(`aria-label`,`Window`);for(let e of ra){let t=document.createElement(`option`);t.value=String(e),t.textContent=e<60?`${e} s`:`${e/60} min`,this.windowSelect.append(t)}this.windowSelect.addEventListener(`change`,()=>{this.draw()}),a.append(this.windowSelect),this.canvas=W(`canvas`,`chart`);let o=W(`div`,`legend`),s=W(`p`,`readout`);this.pages.charts.append(a,this.canvas,o,s),this.charts=Oi(this.canvas,o,s),this.outside=e=>{e.composedPath().includes(this)||this.hide()},this.refit=()=>{this.fit()},this.panel.append(r,this.body),e.append(t,this.toggle,this.panel),this.markTab(),this.markChartTab(),this.renderLabels()}connectedCallback(){var e;this.toggleAttribute(`inline`,this.parentElement?.localName!==`mbx-control-bar`);let t=ji(this);t!==null&&((e=this.cancel)==null||e.call(this),this.cancel=Mi(t,e=>{this.isConnected&&this.attach(e)}))}disconnectedCallback(){var e;(e=this.cancel)==null||e.call(this),this.cancel=null,this.detach()}attributeChangedCallback(){this.renderLabels()}attach(e){this.player=e,this.sampler.attach(e.video,e.engine);let t=(e,t,n)=>{e.addEventListener(t,n),this.offs.push(()=>{e.removeEventListener(t,n)})};t(e,`sourcechange`,()=>{this.sampler.attach(e.video,e.engine),this.poll()}),t(e,`error`,e=>{e.detail.fatal&&this.dispatchEvent(new CustomEvent(`report`,{detail:this.report(),bubbles:!0,composed:!0}))}),this.timer=setInterval(()=>{this.poll()},ea),this.poll(),this.hasAttribute(`inline`)&&this.show()}detach(){for(let e of this.offs)e();this.offs=[],clearInterval(this.timer),this.timer=void 0,this.sampler.release(),this.hide(),this.player=null}report(){let e=this.player;if(e===null)throw Error(`mbx-diagnostics is not inside a player`);return Bi({player:e,samples:this.sampler.samples,marks:this.sampler.marks,counters:this.sampler.counters,history:this.sampler.history,support:this.support})}poll(){let e=this.player;e!==null&&(this.sampler.poll(e.video,e.engine),this.panel.hidden||this.paint())}show(){this.panel.hidden&&(this.panel.hidden=!1,this.hasAttribute(`inline`)||(this.setAttribute(`open`,``),this.toggle.setAttribute(`aria-expanded`,`true`),document.addEventListener(`pointerdown`,this.outside,!0),window.addEventListener(`resize`,this.refit),this.fit()),this.paint(),this.drawer=setInterval(()=>{this.draw()},ta),this.hasAttribute(`inline`)||this.tabs[this.tab].focus())}hide(){clearInterval(this.drawer),this.drawer=void 0,!this.panel.hidden&&(this.panel.hidden=!0,this.removeAttribute(`open`),this.toggle.setAttribute(`aria-expanded`,`false`),document.removeEventListener(`pointerdown`,this.outside,!0),window.removeEventListener(`resize`,this.refit))}fit(){let e=this.player;if(e===null)return;let t=e.getBoundingClientRect(),n=this.getBoundingClientRect(),r=e.video.getBoundingClientRect().top,i=n.top-r-aa;this.panel.style.maxHeight=`${Math.max(120,Math.floor(i))}px`;let a=Math.min(ia,Math.max(200,t.width-16));this.panel.style.width=`${a}px`;let o=Math.max(t.left+aa,Math.min(n.right-a,t.right-aa-a));this.panel.style.right=`auto`,this.panel.style.left=`${o-n.left}px`}select(e){this.tab=e,this.markTab(),this.tabs[e].focus(),this.paint(),this.draw()}markTab(){for(let e of oa)this.tabs[e].setAttribute(`aria-selected`,String(e===this.tab)),this.tabs[e].tabIndex=e===this.tab?0:-1,this.pages[e].hidden=e!==this.tab}markChartTab(){for(let e of Ei)this.chartTabs[e].setAttribute(`aria-selected`,String(e===this.chartTab))}renderLabels(){this.toggle.setAttribute(`aria-label`,this.getAttribute(`label`)??`Diagnostics`),this.panel.setAttribute(`aria-label`,this.getAttribute(`label`)??`Diagnostics`),this.copied===void 0&&(this.copy.textContent=this.getAttribute(`label-copy`)??`Copy report`);let e=Number(this.getAttribute(`window`)),t=Number.isFinite(e)&&e>0?e:na;if(!ra.includes(t)){let e=document.createElement(`option`);e.value=String(t),e.textContent=`${t} s`,this.windowSelect.append(e)}this.windowSelect.value=String(t)}copyReport(){var e=this;return Zr(function*(){let t=JSON.stringify(e.report(),null,2);try{yield navigator.clipboard.writeText(t)}catch{return}e.copy.textContent=e.getAttribute(`label-copied`)??`Copied`,clearTimeout(e.copied),e.copied=setTimeout(()=>{e.copied=void 0,e.renderLabels()},1500)})()}palette(){let e=getComputedStyle(this),t=(t,n)=>e.getPropertyValue(t).trim()||n;return{ink:t(`--mbx-text`,`#f2f3f5`),muted:t(`--mbx-muted`,`#9aa0a6`),accent:t(`--mbx-accent`,`#5b8cff`),warn:t(`--mbx-chart-3`,`#d9a83f`),series:[1,2,3,4,5].map(e=>t(`--mbx-chart-${e}`,`#888`))}}draw(){let e=this.player;e===null||this.panel.hidden||this.tab!==`charts`||this.charts.draw({tab:this.chartTab,window:Number(this.windowSelect.value)||na,samples:this.sampler.samples,marks:this.sampler.marks,counters:this.sampler.counters,video:e.video,engine:e.engine,palette:this.palette()})}paint(){let e=this.player;if(!(e===null||this.panel.hidden))switch(this.tab){case`playback`:this.sections(this.pages.playback,this.playbackSections(e));break;case`engine`:this.sections(this.pages.engine,this.engineSections(e.engine));break;case`browser`:this.browser()}}playbackSections(e){var t;let n=e.video,r=e.engine,i=n.getVideoPlaybackQuality?.call(n),a=this.sampler.counters,o=this.sampler.samples[this.sampler.samples.length-1],s=n.paused?n.ended?`ended`:`paused`:`playing`,c=[[`source`,e.getAttribute(`src`)??`–`],[`type`,e.getAttribute(`type`)??`–`],[`handler`,((t=e.player)==null||(t=t.session)==null?void 0:t.handler)??`–`]];r!==null&&c.push([`phase`,r.stats.snapshot().lifecycle.phase]),e.error===null?n.error!==null&&c.push([`media error`,`${n.error.code} ${n.error.message}`]):c.push([`error`,`${e.error.category}: ${e.error.code}`]);let l=[[`time`,`${H(n.currentTime)} of ${H(n.duration)}`],[`state`,`${s}, ${ca[n.readyState]??n.readyState}, network ${la[n.networkState]??n.networkState}`],[`rate`,`${n.playbackRate}×`],[`picture`,n.videoWidth>0?`${n.videoWidth}×${n.videoHeight}`:`–`],[`frames`,i===void 0?`–`:`${i.totalVideoFrames} decoded, ${i.droppedVideoFrames} dropped (${Ci(i.droppedVideoFrames,i.totalVideoFrames)})`],[`buffered`,`${Si(o?.ahead??0)}s ahead: ${wi(pa(n))}`],[`stalls`,`${a.stalls}, ${a.stalledSeconds.toFixed(1)}s in total`]];if(r!==null){let e=r.stats.snapshot();l.push([`throughput`,`slow ${V(e.stats.throughputEwma)}, fast ${V(e.stats.throughputFastEwma)}`],[`playing`,Ti(r.quality.playing)],[`switches`,String(a.switches)])}return[{title:`Source`,rows:c},{title:`Playback`,rows:l}]}engineSections(e){if(e===null)return[{title:null,rows:[],note:`A native session: the browser plays this, and there is no engine to ask.`}];let t=e.stats.snapshot(),n=e,r=t.live,i=[[`capabilities`,[...e.capabilities()].join(`, `)||`none`],[`phase`,t.lifecycle.phase],[`buffer goal`,`${t.scheduling.bufferGoal}s`],[`throughput`,`slow ${V(t.stats.throughputEwma)}, fast ${V(t.stats.throughputFastEwma)}`],[`in flight`,[...t.scheduling.inflight.values()].map(e=>`${e.trackId} #${e.seq}`).join(`, `)||`none`],[`live`,r===null?`VOD`:`window ${H(r.span.start)} to ${H(r.span.end)}, edge ${H(r.edge)}${n.live?.latency===null||n.live?.latency===void 0?``:`, ${n.live.latency.toFixed(1)}s behind`}`],[`trace`,`${e.stats.trace().length} entries`]],a=e.error;a!==null&&i.push([`last error`,`${a.category}: ${a.code}`]);let o=[...t.buffers.entries()].map(([e,t])=>[e.replace(`sb:`,``),`${t.codecs}: ${wi(t.ranges)}${t.pendingAppends>0?`, ${t.pendingAppends} pending`:``}`]),s=e.tracks.available.map(t=>{let n=e.tracks.active(t.contentType)?.id===t.id,r=[t.lang,t.role].filter(e=>e!==void 0).join(` · `);return[`${t.contentType}${n?` ●`:``}`,`${t.id}${r===``?``:` (${r})`}, ${t.renditions.length} renditions`]}),c=e.quality.playing?.id??null,l=e.quality.active?.id??null,u=new Set(e.quality.allowed.map(e=>e.id)),d=e.quality.renditions.map(t=>{let n=[t.id===c?`playing`:``,t.id===l&&l!==c?`next`:``,t.id===e.quality.pinned?`pinned`:``,u.has(t.id)?``:`capped`].filter(e=>e!==``),r=[t.width!==void 0&&t.height!==void 0?`${t.width}×${t.height}`:``,V(t.bitrate),t.frameRate===void 0?``:`${t.frameRate} fps`,t.codecs??``].filter(e=>e!==``).join(`, `);return[t.id,`${r}${n.length>0?` [${n.join(`, `)}]`:``}`]}),f=n.drm===void 0?[]:[[`key system`,n.drm.keySystem??`none yet`],[`keys`,n.drm.sessions.length===0?`none yet`:n.drm.sessions.map(e=>`${e.keyId}: ${e.status}`).join(`, `)]];return[{title:`Engine`,rows:i},{title:`Source buffers`,rows:o,note:o.length===0?`none yet`:void 0},{title:`Tracks`,rows:s,note:s.length===0?`none yet`:void 0},{title:`Renditions`,rows:d,note:d.length===0?`none yet`:void 0},...n.drm===void 0?[]:[{title:`DRM`,rows:f}]]}sections(e,t){var n;let r=t.flatMap(e=>{let t=[];return e.title!==null&&t.push([`heading`,e.title]),e.note!==void 0&&e.rows.length===0?t.push([`note`,e.note]):t.push([`rows`,e.rows]),t});for(;e.childElementCount>r.length;)(n=e.lastElementChild)==null||n.remove();r.forEach(([t,n],r)=>{var i;let a=e.children[r],o=t===`heading`?`h3`:t===`note`?`p`:`dl`;if(a===void 0||a.localName!==o){let n=W(o,t);a===void 0?e.append(n):a.replaceWith(n),a=n}if(typeof n==`string`){a.textContent!==n&&(a.textContent=n);return}for(;a.childElementCount>n.length*2;)(i=a.lastElementChild)==null||i.remove();n.forEach(([e,t],n)=>{let r=a.children[n*2],i=a.children[n*2+1];(r===void 0||i===void 0)&&(r=W(`dt`,`key`),i=W(`dd`,`value`),a.append(r,i)),r.textContent!==e&&(r.textContent=e),i.textContent!==t&&(i.textContent=t)})})}browser(){let e=this.pages.browser;this.support!==null||this.probing||(this.probing=!0,e.replaceChildren(W(`p`,`note`,`Probing the browser…`)),xi().then(t=>{this.support=t,this.probing=!1,this.tables(e,t)}))}tables(e,t){e.replaceChildren(),e.append(W(`h3`,`heading`,`Platform`),W(`p`,`note`,t.userAgent));let n=W(`table`,`table`);for(let e of t.platform){let t=document.createElement(`tr`),[r,i]=da(e.value);t.append(W(`th`,`cell label`,e.label),W(`td`,i,r)),n.append(t)}e.append(n),e.append(W(`h3`,`heading`,`Codecs`));let r=W(`table`,`table`),i=document.createElement(`tr`);for(let e of[`Codec`,`MSE fMP4`,`MSE WebM`,`<video>`,`Smooth`,`Efficient`])i.append(W(`th`,`cell label`,e));r.append(i);for(let e of t.codecs){let t=document.createElement(`tr`),n=W(`th`,`cell label`,e.label);n.title=e.codec,t.append(n);for(let n of[e.mse,e.webm,e.element,e.smooth,e.efficient]){let[e,r]=da(n);t.append(W(`td`,r,e))}r.append(t)}e.append(r),e.append(W(`h3`,`heading`,`DRM`));let a=W(`table`,`table`),o=document.createElement(`tr`);for(let e of[`System`,`Available`,`Level`,`Schemes`,`Persistent`,`Identifier`,`HDCP`])o.append(W(`th`,`cell label`,e));a.append(o);for(let e of t.drm){let t=document.createElement(`tr`),n=W(`th`,`cell label`,e.label);e.keySystem!==null&&(n.title=e.keySystem),t.append(n);let r=[e.keySystem===null?`no`:`yes`,e.level,e.schemes,e.persistent,e.identifier,e.hdcp];for(let e of r){let[n,r]=da(e);t.append(W(`td`,r,n))}a.append(t)}e.append(a)}};function pa(e){return Array.from({length:e.buffered.length},(t,n)=>({start:e.buffered.start(n),end:e.buffered.end(n)}))}customElements.get(`mbx-diagnostics`)===void 0&&customElements.define(`mbx-diagnostics`,fa);var ma=/<mattebox-player(\s[^>]*)?>/i,ha=[`src`,`type`,`license-url`,`poster`,`chapters`,`crossorigin`];function ga(e){return RegExp(`\\s+${e}\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>]+)`,`gi`)}function G(e){return`"${e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`)}"`}function _a(e){return(e.startsWith(`"`)&&e.endsWith(`"`)||e.startsWith(`'`)&&e.endsWith(`'`)?e.slice(1,-1):e).replace(/&quot;/g,`"`).replace(/&amp;/g,`&`)}function va(e){let t=ma.exec(e);if(t===null)return null;let n=t[1]??``,r=e=>{let t=ga(e).exec(n);return t==null?void 0:_a(t[0].replace(/^\s+[\w-]+\s*=\s*/,``))},i=r(`src`);if(i===void 0)return null;let a=r(`type`),o=r(`license-url`),s=r(`poster`),c=r(`chapters`),l=r(`crossorigin`);return{url:i,...a===void 0?{}:{type:a},...o===void 0?{}:{licenseUrl:o},...s===void 0?{}:{poster:s},...c===void 0?{}:{chapters:c},...l===`anonymous`?{crossorigin:l}:{}}}function ya(e,t){let n=ma.exec(e),r=[` src=${G(t.url)}`];if(t.type!==void 0&&r.push(` type=${G(t.type)}`),t.licenseUrl!==void 0&&r.push(` license-url=${G(t.licenseUrl)}`),t.poster!==void 0&&r.push(` poster=${G(t.poster)}`),t.chapters!==void 0&&r.push(` chapters=${G(t.chapters)}`),t.crossorigin!==void 0&&r.push(` crossorigin=${G(t.crossorigin)}`),n===null)return`<mattebox-player${r.join(``)}></mattebox-player>\n${e}`;let i=n[1]??``;for(let e of ha)i=i.replace(ga(e),``);let a=i.trimEnd(),o=`<mattebox-player${r.join(``)}${a===``?``:` ${a.trimStart()}`}>`;return e.slice(0,n.index)+o+e.slice(n.index+n[0].length)}function ba(e){let t=document.createElement(`template`);t.innerHTML=e;let n=t.content;for(let e of n.querySelectorAll(`script`))e.remove();for(let e of n.querySelectorAll(`*`))for(let t of[...e.attributes]){let n=t.name.toLowerCase(),r=t.value.trim().toLowerCase();(n.startsWith(`on`)||n===`srcdoc`||r.startsWith(`javascript:`))&&e.removeAttribute(t.name)}return n}var xa=[`right`,`left`,`bottom`,`top`],Sa=[`fill`,`16:9`,`4:3`,`1:1`,`9:16`,`21:9`],Ca=`mattebox.editor.ui`,K={dock:`right`,split:50,ratio:`fill`,tab:`css`};function wa(e){return Number.isFinite(e)?Math.min(85,Math.max(15,Math.round(e))):K.split}function Ta(e){return xa.includes(e)}function Ea(e){return Sa.includes(e)}function Da(e){let t={};try{let n=e.getItem(Ca),r=n===null?null:JSON.parse(n);typeof r==`object`&&r&&(t=r)}catch{}return{dock:Ta(t.dock)?t.dock:K.dock,split:typeof t.split==`number`?wa(t.split):K.split,ratio:Ea(t.ratio)?t.ratio:K.ratio,tab:t.tab===`css`||t.tab===`html`?t.tab:K.tab}}function Oa(e,t){try{e.setItem(Ca,JSON.stringify(t))}catch{}}var ka=`
@layer preview {
  :host { display: flex; overflow: auto; }
  [part~="stage"] {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    container-type: size;
  }
  /* The player fills the pane, and the picture is centred and letterboxed
     in it by the player (its guide, chapter 03): what a page gets when it
     gives the element a height. Container units measure the stage. */
  mattebox-player { display: block; width: 100%; height: 100%; }
  /* A fixed ratio: the box takes it, as large as the pane allows, and the
     player letterboxes or pillarboxes the picture inside it the same way. */
  :host([ratio]) mattebox-player {
    height: auto;
    aspect-ratio: var(--mbe-ratio);
    width: min(100%, calc(100cqh * var(--mbe-ratio)));
  }
}
`,Aa=class e extends HTMLElement{static get observedAttributes(){return[`ratio`]}static define(){customElements.get(`mbe-preview`)===void 0&&customElements.define(`mbe-preview`,e)}theme;stage;cues=null;size=typeof ResizeObserver>`u`?null:new ResizeObserver(()=>this.measure());constructor(){super();let e=this.attachShadow({mode:`open`}),t=document.createElement(`style`);t.textContent=ka,this.theme=document.createElement(`style`),this.theme.setAttribute(`data-theme`,``),this.stage=document.createElement(`div`),this.stage.setAttribute(`part`,`stage`),e.append(t,this.theme,this.stage)}connectedCallback(){this.watchCues()}disconnectedCallback(){this.cues?.disconnect(),this.cues=null}attributeChangedCallback(){let e=this.ratio;e===`fill`?this.style.removeProperty(`--mbe-ratio`):this.style.setProperty(`--mbe-ratio`,e.replace(`:`,` / `))}get ratio(){let e=this.getAttribute(`ratio`);return Ea(e)?e:`fill`}set ratio(e){e===`fill`?this.removeAttribute(`ratio`):this.setAttribute(`ratio`,e)}get player(){return this.stage.querySelector(`mattebox-player`)}set css(e){this.theme.textContent!==e&&(this.theme.textContent=e)}get css(){return this.theme.textContent??``}set html(e){this.stage.replaceChildren(ba(e)),this.size?.disconnect();let t=this.player;t!==null&&this.size?.observe(t),this.measure()}measure(){let e=this.player,t=e===null?{width:0,height:0}:{width:Math.round(e.offsetWidth),height:Math.round(e.offsetHeight)};this.dispatchEvent(new CustomEvent(`player-size`,{detail:t}))}watchCues(){let e=()=>{let e=document.head.querySelector(`style[data-mattebox-cue]`);return e!==null&&(this.shadowRoot?.querySelector(`style[data-mattebox-cue]`)===null&&this.shadowRoot.insertBefore(e.cloneNode(!0),this.theme),!0)};e()||(this.cues=new MutationObserver(()=>{e()&&this.disconnectedCallback()}),this.cues.observe(document.head,{childList:!0}))}},ja=`
:host {
  display: flex;
  flex-direction: row;
  min-width: 0;
  min-height: 0;
  --mbe-split: 50%;
  --mbe-bar: 10px;
}
:host([dock="left"]) { flex-direction: row-reverse; }
:host([dock="bottom"]) { flex-direction: column; }
:host([dock="top"]) { flex-direction: column-reverse; }
::slotted([slot="primary"]) { flex: 1 1 0; min-width: 0; min-height: 0; }
::slotted([slot="secondary"]) { flex: 0 0 var(--mbe-split); min-width: 0; min-height: 0; }
/* The bar is a visible strip with a grip in the middle, so it reads as a
   handle and not a border. The hit area is wider than the strip. */
[part~="bar"] {
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mbe-bar-track, rgba(128, 128, 128, 0.18));
  border-radius: 3px;
  cursor: col-resize;
  touch-action: none;
  outline: none;
  transition: background 0.15s;
}
[part~="bar"]::before { content: ""; position: absolute; inset: 0 -4px; }
[part~="grip"] {
  width: 3px;
  height: 36px;
  border-radius: 2px;
  background: var(--mbe-bar-color, currentColor);
  opacity: 0.45;
  pointer-events: none;
  transition: opacity 0.15s;
}
[part~="bar"]:hover, [part~="bar"]:focus-visible, :host([dragging]) [part~="bar"] {
  background: var(--mbe-bar-hover, rgba(128, 128, 128, 0.35));
}
[part~="bar"]:hover [part~="grip"], [part~="bar"]:focus-visible [part~="grip"], :host([dragging]) [part~="grip"] {
  opacity: 1;
}
:host(:not([dock="bottom"]):not([dock="top"])) [part~="bar"] { width: var(--mbe-bar); }
:host([dock="bottom"]) [part~="bar"], :host([dock="top"]) [part~="bar"] {
  height: var(--mbe-bar);
  cursor: row-resize;
}
:host([dock="bottom"]) [part~="bar"]::before, :host([dock="top"]) [part~="bar"]::before { inset: -4px 0; }
:host([dock="bottom"]) [part~="grip"], :host([dock="top"]) [part~="grip"] { width: 36px; height: 3px; }
:host([dragging]) { user-select: none; }
`,Ma=5,Na=class e extends HTMLElement{static get observedAttributes(){return[`dock`,`split`]}static define(){customElements.get(`mbe-split-view`)===void 0&&customElements.define(`mbe-split-view`,e)}bar;constructor(){super();let e=this.attachShadow({mode:`open`}),t=document.createElement(`style`);t.textContent=ja;let n=document.createElement(`slot`);n.name=`primary`;let r=document.createElement(`slot`);r.name=`secondary`,this.bar=document.createElement(`div`),this.bar.setAttribute(`part`,`bar`),this.bar.setAttribute(`role`,`separator`),this.bar.setAttribute(`aria-label`,`Resize the preview`),this.bar.title=`Drag to resize the preview. Double-click for half and half.`,this.bar.tabIndex=0;let i=document.createElement(`div`);i.setAttribute(`part`,`grip`),this.bar.append(i),e.append(t,n,this.bar,r),this.bar.addEventListener(`pointerdown`,this.onPointerDown),this.bar.addEventListener(`keydown`,this.onKeyDown),this.bar.addEventListener(`dblclick`,()=>this.moveTo(K.split))}connectedCallback(){this.hasAttribute(`dock`)||this.setAttribute(`dock`,`right`),this.paint()}attributeChangedCallback(){this.paint()}get dock(){let e=this.getAttribute(`dock`);return Ta(e)?e:`right`}set dock(e){this.setAttribute(`dock`,e)}get split(){let e=this.getAttribute(`split`);return e===null?K.split:wa(Number(e))}set split(e){this.setAttribute(`split`,String(wa(e)))}get vertical(){let e=this.dock;return e===`bottom`||e===`top`}get reversed(){let e=this.dock;return e===`left`||e===`top`}paint(){this.style.setProperty(`--mbe-split`,`${this.split}%`),this.bar.setAttribute(`aria-orientation`,this.vertical?`horizontal`:`vertical`),this.bar.setAttribute(`aria-valuenow`,String(this.split))}splitAt(e,t){let n=this.getBoundingClientRect(),r=this.vertical?(t-n.top)/Math.max(n.height,1):(e-n.left)/Math.max(n.width,1);return(this.reversed?r:1-r)*100}moveTo(e){let t=wa(e);t!==this.split&&(this.split=t,this.dispatchEvent(new CustomEvent(`split-change`,{detail:{split:t}})))}onPointerDown=e=>{if(e.button!==0)return;e.preventDefault(),this.bar.setPointerCapture(e.pointerId),this.toggleAttribute(`dragging`,!0);let t=e=>{this.moveTo(this.splitAt(e.clientX,e.clientY))},n=()=>{this.bar.removeEventListener(`pointermove`,t),this.bar.removeEventListener(`pointerup`,n),this.bar.removeEventListener(`pointercancel`,n),this.removeAttribute(`dragging`)};this.bar.addEventListener(`pointermove`,t),this.bar.addEventListener(`pointerup`,n),this.bar.addEventListener(`pointercancel`,n)};onKeyDown=e=>{let t=this.vertical?`ArrowUp`:`ArrowLeft`,n=this.vertical?`ArrowDown`:`ArrowRight`,r=this.reversed?-1:1;if(e.key===t)this.moveTo(this.split+Ma*r);else if(e.key===n)this.moveTo(this.split-Ma*r);else return;e.preventDefault()}},Pa=`[role^="menuitem"]:not([disabled])`;function Fa(e,t){let n=()=>[...t.querySelectorAll(Pa)],r=()=>t.matches(`:popover-open`),i=()=>{let n=e.getBoundingClientRect();t.style.top=`${n.bottom+4}px`;let r=t.offsetWidth,i=n.right-r;t.style.left=`${Math.max(8,i<8?n.left:i)}px`};t.addEventListener(`toggle`,t=>{let a=t.newState,o=a===void 0?r():a===`open`;e.setAttribute(`aria-expanded`,String(o)),o&&(i(),n()[0]?.focus())}),t.addEventListener(`keydown`,e=>{let t=n(),r=t.indexOf(document.activeElement),i;e.key===`ArrowDown`?i=(r+1)%t.length:e.key===`ArrowUp`?i=(r-1+t.length)%t.length:e.key===`Home`?i=0:e.key===`End`&&(i=t.length-1),i!==void 0&&(e.preventDefault(),t[i]?.focus())}),t.addEventListener(`click`,n=>{let r=n.target.closest(Pa);r!==null&&t.contains(r)&&(typeof t.hidePopover==`function`&&t.hidePopover(),e.focus())}),e.setAttribute(`aria-haspopup`,`menu`),e.setAttribute(`aria-expanded`,`false`)}var Ia=[{id:`default`,name:`Default`,description:`The stock bar and every token at its default, as a starting point.`,css:`/*
 * The player's look is page CSS. The tokens below are set on the element
 * and inherited by every control; ::part() rules reach inside a control.
 * These are the defaults. Change one and the preview follows.
 */
mattebox-player {
  display: block;
  --mbx-surface: #101114;
  --mbx-text: #f2f3f5;
  --mbx-muted: #9aa0a6;
  --mbx-accent: #5b8cff;
  --mbx-error: #ffb4ab;
  --mbx-live: #ff4d4d;
  --mbx-radius: 4px;
  --mbx-gap: 10px;
  --mbx-pad: 8px;
  --mbx-font: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  /* The seek bar's thumbnail tile, in pixels. */
  --mbx-preview-width: 160px;
}

/* A control by its tag, its insides by their part. */
mbx-play-button::part(button) {
  border-radius: var(--mbx-radius);
}

/* State is an attribute on the element, so a selector reads it. */
mattebox-player[playing] mbx-play-button::part(icon) {
  fill: var(--mbx-text);
}
`,html:`<!-- The stock bar: what a page gets with controls="custom" and nothing inside. -->
<mattebox-player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" poster="https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png" chapters="https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt" crossorigin="anonymous" controls="custom">
  <mbx-start-button></mbx-start-button>
  <mbx-error-screen></mbx-error-screen>
  <mbx-control-bar>
    <mbx-current-time></mbx-current-time>
    <mbx-seek-bar></mbx-seek-bar>
    <mbx-duration></mbx-duration>
    <mbx-live-button></mbx-live-button>
    <mbx-skip-button seconds="-10"></mbx-skip-button>
    <mbx-play-button></mbx-play-button>
    <mbx-skip-button seconds="10"></mbx-skip-button>
    <mbx-volume></mbx-volume>
    <mbx-spacer></mbx-spacer>
    <mbx-speed-menu></mbx-speed-menu>
    <mbx-chapters-menu></mbx-chapters-menu>
    <mbx-subtitles-menu></mbx-subtitles-menu>
    <mbx-audio-menu></mbx-audio-menu>
    <mbx-quality-menu></mbx-quality-menu>
    <mbx-pip-button></mbx-pip-button>
    <mbx-fullscreen-button></mbx-fullscreen-button>
  </mbx-control-bar>
</mattebox-player>
`},{id:`round`,name:`Round`,description:`A floating pill bar, circular buttons, the play button drawn with the page’s own glyphs.`,css:`/*
 * Round: a pill bar floating over the picture, circular buttons, and an
 * accent that fills the play button. No start button: the play button is
 * large enough to be the one.
 */
mattebox-player {
  display: block;
  --mbx-surface: #1b1e22;
  --mbx-text: #ffffff;
  --mbx-muted: #a7adb3;
  --mbx-accent: #7fd0b4;
  --mbx-radius: 999px;
}

mbx-control-bar {
  inset: auto 16px 16px;
  padding: 6px 14px 10px;
  gap: 2px;
  border-radius: 28px;
  background: rgba(16, 17, 20, 0.82);
  backdrop-filter: blur(12px);
}

mbx-control-bar::part(buttons-row) {
  gap: 4px;
}

mbx-current-time,
mbx-duration {
  font-size: 13px;
}

mbx-play-button::part(button) {
  width: 44px;
  height: 44px;
  color: #101114;
  background: var(--mbx-accent);
}

mbx-seek-bar::part(track) {
  height: 6px;
  border-radius: 3px;
}

/* The border is part of the size, so the thumb stays centred on the track. */
mbx-seek-bar::part(thumb) {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border: 3px solid var(--mbx-text);
  background: var(--mbx-accent);
  box-shadow: none;
}

/* The page's own glyphs are slotted children, sized like the built-in ones. */
mbx-play-button svg {
  width: 26px;
  height: 26px;
  fill: currentColor;
}

/* The radius token is a pill, which a popup, its items and the seek bar's
   tooltip should not be: a chapter title in a pill runs into the curve. */
mbx-subtitles-menu::part(popup),
mbx-quality-menu::part(popup) {
  border-radius: 16px;
  padding: 8px;
}

mbx-seek-bar::part(preview) {
  padding: 6px 12px;
  border-radius: 14px;
}

mbx-subtitles-menu::part(item),
mbx-quality-menu::part(item) {
  border-radius: 10px;
}

mbx-error-screen::part(retry) {
  padding: 0 20px;
}
`,html:`<!-- A floating pill bar with the play button in the middle, drawn with the page's own glyphs, and no start button. -->
<mattebox-player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" poster="https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png" chapters="https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt" crossorigin="anonymous" controls="custom">
  <mbx-error-screen></mbx-error-screen>
  <mbx-control-bar>
    <mbx-current-time></mbx-current-time>
    <mbx-seek-bar></mbx-seek-bar>
    <mbx-duration></mbx-duration>
    <mbx-live-button></mbx-live-button>
    <mbx-volume></mbx-volume>
    <mbx-spacer></mbx-spacer>
    <mbx-skip-button seconds="-10"></mbx-skip-button>
    <mbx-play-button>
      <svg slot="icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
      <svg slot="icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
      <svg slot="icon-replay" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" /></svg>
    </mbx-play-button>
    <mbx-skip-button seconds="10"></mbx-skip-button>
    <mbx-spacer></mbx-spacer>
    <mbx-subtitles-menu></mbx-subtitles-menu>
    <mbx-quality-menu></mbx-quality-menu>
    <mbx-fullscreen-button></mbx-fullscreen-button>
  </mbx-control-bar>
</mattebox-player>
`},{id:`phone`,name:`Phone`,description:`Play and the skips in the middle of the picture, a thin bar with the seek bar over the time left, PiP and fullscreen. Try the 9:16 shape.`,css:`/*
 * Phone: the play button in the middle of the picture with a skip on
 * each side, and a thin bar at the bottom: the seek bar on its own row,
 * the time left, live, picture in picture and fullscreen on the row under it.
 * A very narrow box keeps the play button and drops the skips. The cluster comes and goes with the bar. Hold
 * the preview to 9:16 to see it as a phone would.
 */
mattebox-player {
  display: block;
  /* The skips below go by a container query on the player's width. */
  container-type: inline-size;
  --mbx-surface: #000000;
  --mbx-text: #ffffff;
  --mbx-muted: #b3b8bd;
  --mbx-accent: #ffffff;
  --mbx-radius: 999px;
}

/* The cluster is an element of the page's own inside the player, placed
   over the picture. It takes the player's text colour, since it inherits
   the page's and not the bar's. The bar sets \`idle\` on the player as well
   as on itself, so the cluster can follow it. */
.cluster {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 28px;
  transform: translate(-50%, -50%);
  color: var(--mbx-text);
  transition: opacity 0.2s;
}

mattebox-player[idle] .cluster {
  opacity: 0;
  pointer-events: none;
}

/* Below 250px the cluster would touch the edges, so the skips go and the
   play button stays alone in the middle. */
@container (width < 250px) {
  .cluster mbx-skip-button {
    display: none;
  }
}

/* The backdrops are heavy enough that the picture does not show through. */
.cluster mbx-play-button::part(button) {
  width: 76px;
  height: 76px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.cluster mbx-play-button::part(icon) {
  width: 40px;
  height: 40px;
}

.cluster mbx-skip-button::part(button) {
  width: 52px;
  height: 52px;
  background: rgba(0, 0, 0, 0.7);
}

.cluster mbx-skip-button::part(icon) {
  width: 28px;
  height: 28px;
}

/* A thin bar: the seek bar alone on its row, the time and live at the
   left of the row under it, two buttons at its right. */
mbx-control-bar {
  padding: 24px 12px 6px;
  gap: 0;
}

mbx-control-bar::part(seek-row) {
  gap: 10px;
}

/* The seek bar's rail sits 8px inside its slider, room for the thumb to
   overhang, so the time takes the same inset to start where the track
   starts. */
mbx-remaining-time {
  margin-left: 8px;
  font-size: 12px;
}

mbx-seek-bar::part(track) {
  height: 3px;
}

/* The radius token is a pill, which the seek bar's tooltip should not be:
   a chapter title in a pill runs into the curve. */
mbx-seek-bar::part(preview) {
  padding: 6px 12px;
  border-radius: 12px;
}

mbx-seek-bar::part(thumb) {
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
}

mbx-pip-button::part(button),
mbx-fullscreen-button::part(button) {
  width: 36px;
  height: 36px;
}
`,html:`<!-- Play and the skips in the middle of the picture, in a cluster of the page's own; a thin bar under them. The time left and live leave the seek row with slot="" and sit with the buttons. -->
<mattebox-player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" poster="https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png" chapters="https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt" crossorigin="anonymous" controls="custom">
  <mbx-error-screen></mbx-error-screen>
  <div class="cluster">
    <mbx-skip-button seconds="-10"></mbx-skip-button>
    <mbx-play-button></mbx-play-button>
    <mbx-skip-button seconds="10"></mbx-skip-button>
  </div>
  <mbx-control-bar>
    <mbx-seek-bar></mbx-seek-bar>
    <mbx-remaining-time slot=""></mbx-remaining-time>
    <mbx-live-button slot=""></mbx-live-button>
    <mbx-spacer></mbx-spacer>
    <mbx-pip-button></mbx-pip-button>
    <mbx-fullscreen-button></mbx-fullscreen-button>
  </mbx-control-bar>
</mattebox-player>
`},{id:`outline`,name:`Outline`,description:`Every glyph replaced by the page’s own, drawn in strokes: an SVG in the slot each control offers per state.`,css:`/*
 * Outline: every glyph replaced by the page's own, drawn in strokes. A
 * control offers a slot per state (icon-play, icon-pause, icon-mute and
 * so on), the page puts an SVG in each, and the control still chooses
 * which one shows. The markup document holds the glyphs; this sheet only
 * says how a stroke is drawn.
 */
mattebox-player {
  display: block;
  --mbx-surface: #14161a;
  --mbx-text: #eef0f2;
  --mbx-muted: #9ba3ad;
  --mbx-accent: #ffd166;
  --mbx-radius: 6px;
}

/* The player sizes a slotted glyph like its own and fills it; a stroke
   set turns the fill off and draws the lines in the text colour. */
mattebox-player svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* The play glyphs are solid, so they read at the start button's size. */
mattebox-player svg[slot="icon-play"] {
  fill: currentColor;
}

/* The number in the skip glyphs is text, not a stroke. */
mattebox-player svg text {
  fill: currentColor;
  stroke: none;
  font: 700 7px var(--mbx-font);
  text-anchor: middle;
}

mbx-start-button::part(button) {
  border-radius: 50%;
  width: 72px;
  height: 72px;
}

mbx-start-button {
  margin: -36px 0 0 -36px;
}
`,html:`<!-- Every glyph is the page's own: an SVG in the slot each control offers for it. The slots are named per state (icon-play, icon-mute, icon-default, icon-on), so the control still swaps them. -->
<mattebox-player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" poster="https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png" chapters="https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt" crossorigin="anonymous" controls="custom">
  <mbx-start-button>
    <svg slot="icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" /></svg>
    <svg slot="icon-replay" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 3v6h6" /></svg>
  </mbx-start-button>
  <mbx-error-screen></mbx-error-screen>
  <mbx-control-bar>
    <mbx-current-time></mbx-current-time>
    <mbx-seek-bar></mbx-seek-bar>
    <mbx-duration></mbx-duration>
    <mbx-live-button></mbx-live-button>
    <mbx-skip-button seconds="-10">
      <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 3v6h6" /><text x="12.5" y="15.5">10</text></svg>
    </mbx-skip-button>
    <mbx-play-button>
      <svg slot="icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" /></svg>
      <svg slot="icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14M17 5v14" /></svg>
      <svg slot="icon-replay" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 3v6h6" /></svg>
    </mbx-play-button>
    <mbx-skip-button seconds="10">
      <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v6h-6" /><text x="11.5" y="15.5">10</text></svg>
    </mbx-skip-button>
    <mbx-volume>
      <mbx-mute-button>
        <svg slot="icon-mute" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m23 9-6 6M17 9l6 6" /></svg>
        <svg slot="icon-low" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /></svg>
        <svg slot="icon-high" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></svg>
      </mbx-mute-button>
      <mbx-volume-slider></mbx-volume-slider>
    </mbx-volume>
    <mbx-spacer></mbx-spacer>
    <mbx-speed-menu>
      <svg slot="icon-default" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 16 4-6" /></svg>
    </mbx-speed-menu>
    <mbx-chapters-menu>
      <svg slot="icon-default" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h12M9 12h12M9 18h12" /><path d="M4 6h.01M4 12h.01M4 18h.01" /></svg>
    </mbx-chapters-menu>
    <mbx-subtitles-menu>
      <svg slot="icon-off" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 14h4M14 14h3" /></svg>
      <svg slot="icon-on" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 10h10M7 14h4M14 14h3" /><path d="M6 22h12" /></svg>
    </mbx-subtitles-menu>
    <mbx-audio-menu>
      <svg slot="icon-default" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
    </mbx-audio-menu>
    <mbx-quality-menu>
      <svg slot="icon-default" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" /><path d="M1 14h6M9 8h6M17 16h6" /></svg>
    </mbx-quality-menu>
    <mbx-pip-button>
      <svg slot="icon-enter" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><rect x="12" y="11" width="8" height="6" rx="1" /></svg>
      <svg slot="icon-exit" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><rect x="4" y="7" width="8" height="6" rx="1" /></svg>
    </mbx-pip-button>
    <mbx-fullscreen-button>
      <svg slot="icon-enter" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
      <svg slot="icon-exit" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M16 21v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
    </mbx-fullscreen-button>
  </mbx-control-bar>
</mattebox-player>
`},{id:`reel`,name:`Reel`,description:`The seek bar on the floor of the box, always shown, the buttons and the time left above it, fewer of them as the box narrows.`,css:`/*
 * Reel: the seek bar is the bottom edge of the box, always shown, and the
 * buttons sit on top of it and fade when the pointer rests. The time left
 * goes with the buttons, and the start button is a disc. A narrow box
 * keeps play, the time left and fullscreen, and drops the rest in tiers.
 */
mattebox-player {
  display: block;
  /* The tiers below are container queries on the player's width. */
  container-type: inline-size;
  --mbx-surface: #0b0c0e;
  --mbx-text: #f3ede4;
  --mbx-muted: #9aa09c;
  --mbx-accent: #e0543c;
  --mbx-radius: 3px;
}

/* The bar itself never fades: the seek bar is part of the picture's frame.
   The shade is the foot of the box, under both rows, and it goes with the
   buttons: a layer of the bar's own, behind its rows, faded when idle. */
mbx-control-bar {
  padding: 0;
  gap: 0;
  background: none;
  isolation: isolate;
}

mbx-control-bar::before {
  content: "";
  position: absolute;
  inset: -32px 0 0;
  z-index: -1;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  pointer-events: none;
  transition: opacity 0.2s;
}

mbx-control-bar[idle]::before {
  opacity: 0;
}

mbx-control-bar[idle] {
  opacity: 1;
  pointer-events: auto;
}

/* The rows swap: buttons first, the seek bar on the floor. The buttons
   are what goes when the pointer rests. */
mbx-control-bar::part(buttons-row) {
  order: 1;
  /* The inset is a margin, not a padding: the bar measures the room it has
     for its buttons with the row's clientWidth, which a padding is inside. */
  margin: 0 8px;
  padding: 32px 0 2px;
  transition: opacity 0.2s;
}

mbx-control-bar[idle]::part(buttons-row) {
  opacity: 0;
  pointer-events: none;
}

/* The seek row is later on screen but earlier in the DOM, so the buttons
   row would paint over the thumbnail tile that rises from it. A layer of
   its own puts the tile on top. */
mbx-control-bar::part(seek-row) {
  order: 2;
  gap: 0;
  position: relative;
  z-index: 1;
}

/* Edge to edge, a thin track that thickens under the pointer, the thumb only then. */
mbx-seek-bar::part(slider) {
  height: 16px;
  border-radius: 0;
}

mbx-seek-bar::part(rail) {
  left: 0;
  right: 0;
}

mbx-seek-bar::part(track) {
  top: auto;
  bottom: 0;
  height: 4px;
  transform: none;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.25);
  transition: height 0.15s;
}

mbx-seek-bar:hover::part(track),
mbx-seek-bar[dragging]::part(track) {
  height: 8px;
}

mbx-seek-bar::part(thumb) {
  top: auto;
  bottom: -2px;
  width: 12px;
  height: 12px;
  margin: 0 0 0 -6px;
  background: var(--mbx-accent);
  box-shadow: none;
  opacity: 0;
  transition: opacity 0.15s;
}

mbx-seek-bar:hover::part(thumb),
mbx-seek-bar[dragging]::part(thumb) {
  opacity: 1;
}

/* The thumbnail tile sits above the strip. */
mbx-seek-bar::part(preview) {
  margin-bottom: 12px;
}

/* The tiers. Below 520px the menus and picture in picture go; below 400px
   the volume and the subtitles go too. Play, the time left and fullscreen
   stay at any width. The bar's own collapse, by priority, is the safety
   net between the steps. */
@container (width < 520px) {
  mbx-speed-menu,
  mbx-chapters-menu,
  mbx-audio-menu,
  mbx-quality-menu,
  mbx-pip-button {
    display: none;
  }
}

@container (width < 400px) {
  mbx-volume,
  mbx-subtitles-menu {
    display: none;
  }
}

/* The time left, among the buttons. */
mbx-remaining-time {
  margin-right: 8px;
  color: var(--mbx-muted);
  font:
    500 13px / 1 ui-monospace,
    "JetBrains Mono",
    monospace;
}

/* The start button is a disc, on a backdrop heavy enough that the picture
   does not show through it. Its own margin centres a 104 by 64 box, so the
   margin follows the new size. */
mbx-start-button {
  margin: -36px 0 0 -36px;
}

mbx-start-button::part(button) {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(11, 12, 14, 0.75);
}

mbx-start-button::part(button):hover {
  background: rgba(11, 12, 14, 0.9);
}
`,html:`<!-- The seek bar on the floor of the box, the buttons above it, no skips. The time left leaves the seek row with slot="". -->
<mattebox-player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" poster="https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png" chapters="https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt" crossorigin="anonymous" controls="custom">
  <mbx-start-button></mbx-start-button>
  <mbx-error-screen></mbx-error-screen>
  <mbx-control-bar>
    <mbx-seek-bar></mbx-seek-bar>
    <mbx-play-button></mbx-play-button>
    <mbx-remaining-time slot=""></mbx-remaining-time>
    <mbx-live-button slot=""></mbx-live-button>
    <mbx-volume></mbx-volume>
    <mbx-spacer></mbx-spacer>
    <mbx-speed-menu></mbx-speed-menu>
    <mbx-chapters-menu></mbx-chapters-menu>
    <mbx-subtitles-menu></mbx-subtitles-menu>
    <mbx-audio-menu></mbx-audio-menu>
    <mbx-quality-menu></mbx-quality-menu>
    <mbx-pip-button></mbx-pip-button>
    <mbx-fullscreen-button></mbx-fullscreen-button>
  </mbx-control-bar>
</mattebox-player>
`}],La=Ia[0];function Ra(e){return Ia.find(t=>t.id===e)}var za=[`css`,`html`],q={css:`theme.css`,html:`player.html`},Ba=`mattebox.editor.workspace`;function Va(){return{css:La.css,html:La.html,preset:La.id}}function Ha(e){let t=Ra(e.preset);return t!==void 0&&t.css===e.css&&t.html===e.html}function Ua(e){if(typeof e!=`object`||!e)return null;let{css:t,html:n,preset:r}=e;return typeof t!=`string`||typeof n!=`string`||typeof r!=`string`?null:{css:t,html:n,preset:r}}function Wa(e){try{let t=e.getItem(Ba);return t===null?null:Ua(JSON.parse(t))}catch{return null}}function Ga(e,t){try{e.setItem(Ba,JSON.stringify(t))}catch{}}function Ka(e){try{e.removeItem(Ba)}catch{}}var qa=`#share=`;function Ja(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Ya(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(Math.ceil(e.length/4)*4,`=`);return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}async function Xa(e,t){let n=new ReadableStream({start(t){t.enqueue(e),t.close()}});return new Uint8Array(await new Response(n.pipeThrough(t)).arrayBuffer())}async function Za(e){return qa+Ja(await Xa(new TextEncoder().encode(JSON.stringify(e)),new CompressionStream(`deflate-raw`)))}async function Qa(e){if(!e.startsWith(`#share=`))return null;try{let t=await Xa(Ya(e.slice(7)),new DecompressionStream(`deflate-raw`));return Ua(JSON.parse(new TextDecoder().decode(t)))}catch{return null}}var $a=`https://storage.googleapis.com/shaka-asset-icons`,eo=[{label:`Video, with chapters`,url:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8`,poster:`${$a}/tears_of_steel.png`,chapters:`https://jboix.github.io/mattebox-player/chapters/tears-of-steel.vtt`,crossorigin:`anonymous`},{label:`Video with DRM`,url:`https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd`,licenseUrl:`https://cwip-shaka-proxy.appspot.com/no_auth`,poster:`${$a}/angel_one.png`},{label:`Audio only`,url:`https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/gear0/prog_index.m3u8`,poster:`${$a}/audio_only.png`},{label:`Live`,url:`https://livesim2.dashif.org/livesim2/testpic_2s/Manifest.mpd`},{label:`Live with DVR`,url:`https://rtsinfo-d.akamaized.net/out/v1/lsvs/rts-info/cmaf/hls-master.m3u8?dw=7201`}];function to(e){return eo.find(t=>t.url===e)}function no(e,t){let n=[...e.querySelectorAll(`[role="tab"][data-tab]`)];if(n.length===0)throw Error(`the tab list has no tabs`);let r=e=>e.dataset.tab??``,i=r(n[0]),a=()=>{for(let e of n){let t=r(e)===i;e.setAttribute(`aria-selected`,String(t)),e.tabIndex=t?0:-1}},o=(e,o)=>{if(!n.some(t=>r(t)===e))throw Error(`${e} is not a tab`);let s=e!==i;i=e,a(),s&&o&&t(e)};for(let[e,t]of n.entries())t.addEventListener(`click`,()=>o(r(t),!0)),t.addEventListener(`keydown`,t=>{let i=t.key===`ArrowRight`?1:t.key===`ArrowLeft`?-1:0;if(i===0)return;t.preventDefault();let a=n[(e+i+n.length)%n.length];o(r(a),!0),a.focus()});return a(),{select:e=>o(e,!1),get active(){return i}}}Na.define(),Aa.define(),ue.define();function J(e){let t=document.getElementById(e);if(t===null)throw Error(`#${e} is not on the page`);return t}J(`logo`).src=s;var Y=J(`editor`),X=J(`preview`),ro=J(`split`),io=J(`status`);function Z(e){io.textContent=e}var ao=J(`confirm`),oo=J(`confirm-text`);function so(e){return oo.textContent=e,ao.returnValue=``,ao.showModal(),new Promise(e=>{ao.addEventListener(`close`,()=>e(ao.returnValue===`ok`),{once:!0})})}Fa(J(`theme-menu-button`),J(`theme-menu`)),Fa(J(`view-menu-button`),J(`view-menu`));var co=`mattebox.editor.theme`,lo=J(`theme-toggle`),uo=window.matchMedia(`(prefers-color-scheme: dark)`);function fo(){let e=document.documentElement.dataset.theme;return e===`light`||e===`dark`?e:uo.matches?`dark`:`light`}function po(){let e=fo()===`dark`;lo.setAttribute(`aria-checked`,String(e)),Y.theme=e}lo.addEventListener(`click`,()=>{document.documentElement.dataset.theme=fo()===`dark`?`light`:`dark`;try{localStorage.setItem(co,fo())}catch{}po()}),uo.addEventListener(`change`,po);async function mo(){let e=await Qa(location.hash);return e===null?Wa(localStorage)??Va():(Z(`Opened a shared theme.`),e)}var Q=await mo(),ho=J(`preset`),go=J(`stream`);for(let e of Ia){let t=new Option(e.name,e.id);t.title=e.description,ho.append(t)}for(let[e,t]of eo.entries())go.append(new Option(t.label,String(e)));var _o=new Option(`Another URL, in the markup`,`other`);go.append(_o);function vo(){let e=Ra(Q.preset);ho.value=e===void 0?``:e.id;let t=va(Q.html),n=t===null?void 0:to(t.url);_o.hidden=n!==void 0,go.value=n===void 0?`other`:String(eo.indexOf(n))}function yo(){Y.open(`css`,`css`,Q.css),Y.open(`html`,`html`,Q.html),X.css=Q.css,X.html=Q.html,Ga(localStorage,Q),vo()}var bo={css:50,html:300},xo=new Map;function So(e){e===`css`?X.css=Q.css:X.html=Q.html}Y.addEventListener(`document-change`,e=>{let{id:t,value:n}=e.detail;(t===`css`||t===`html`)&&(Q={...Q,[t]:n},clearTimeout(xo.get(t)),xo.set(t,setTimeout(()=>{xo.delete(t),So(t)},bo[t])),Ga(localStorage,Q),vo())});function Co(e){for(let e of za)clearTimeout(xo.get(e));xo.clear(),Q=e,yo()}yo();var $=Da(localStorage);function wo(e){$={...$,...e},Oa(localStorage,$)}no(J(`tabs`),e=>{Y.show(e),Y.focus(),wo({tab:e})}).select($.tab),Y.show($.tab);var To=[...document.querySelectorAll(`[data-dock]`)];function Eo(){for(let e of To)e.setAttribute(`aria-checked`,String(e.dataset.dock===$.dock))}for(let e of To)e.addEventListener(`click`,()=>{let t=xa.find(t=>t===e.dataset.dock)??`right`;ro.dock=t,wo({dock:t}),Eo()});ro.dock=$.dock,ro.split=$.split,Eo(),ro.addEventListener(`split-change`,()=>{wo({split:ro.split})});var Do=J(`ratio`);for(let e of Sa)Do.append(new Option(e===`fill`?`Fill the pane`:e,e));Do.value=$.ratio,X.ratio=$.ratio,Do.addEventListener(`change`,()=>{let e=Ea(Do.value)?Do.value:`fill`;X.ratio=e,wo({ratio:e})});var Oo=J(`player-size`);X.addEventListener(`player-size`,e=>{let{width:t,height:n}=e.detail;Oo.textContent=t===0?``:`${t} × ${n}`}),po(),ho.addEventListener(`change`,async()=>{let e=Ra(ho.value);if(e===void 0)return;if(!(Ha(Q)||await so(`Replace both documents with the ${e.name} preset? Your edits will be lost.`))){vo();return}let t=va(Q.html),n=t===null?e.html:ya(e.html,t);Co({css:e.css,html:n,preset:e.id}),Z(`Applied the ${e.name} preset.`)}),go.addEventListener(`change`,()=>{let e=eo[Number(go.value)];if(e===void 0){vo();return}Co({...Q,html:ya(Q.html,e)}),Z(`The markup now plays ${e.label}.`)});async function ko(e,t){try{await navigator.clipboard.writeText(e),Z(`Copied ${t}.`)}catch{Z(`Could not copy ${t}: the browser refused the clipboard.`)}}J(`copy-css`).addEventListener(`click`,()=>ko(Q.css,q.css)),J(`copy-html`).addEventListener(`click`,()=>ko(Q.html,q.html));function Ao(e,t,n){let r=URL.createObjectURL(new Blob([t],{type:n})),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}J(`download`).addEventListener(`click`,()=>{Ao(q.css,Q.css,`text/css`),Ao(q.html,Q.html,`text/html`),Z(`Downloaded ${q.css} and ${q.html}.`)}),J(`share`).addEventListener(`click`,async()=>{let e=await Za(Q),t=new URL(location.href);t.hash=e,history.replaceState(history.state,``,t),await ko(t.href,`a link to this theme`)}),J(`reset`).addEventListener(`click`,async()=>{if(!await so(`Forget the documents and start again from the default preset?`))return;Ka(localStorage);let e=new URL(location.href);e.hash=``,history.replaceState(history.state,``,e),Co(Va()),Z(`Back to the default preset.`)});