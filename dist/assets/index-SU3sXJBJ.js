function ph(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D1={exports:{}},Ll={},B1={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),mh=Symbol.for("react.portal"),gh=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),kh=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),kc=Symbol.iterator;function Eh(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var H1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U1=Object.assign,V1={};function kr(e,t,n){this.props=e,this.context=t,this.refs=V1,this.updater=n||H1}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W1(){}W1.prototype=kr.prototype;function yu(e,t,n){this.props=e,this.context=t,this.refs=V1,this.updater=n||H1}var wu=yu.prototype=new W1;wu.constructor=yu;U1(wu,kr.prototype);wu.isPureReactComponent=!0;var Cc=Array.isArray,Q1=Object.prototype.hasOwnProperty,Su={current:null},K1={key:!0,ref:!0,__self:!0,__source:!0};function G1(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Q1.call(t,r)&&!K1.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:No,type:e,key:i,ref:l,props:o,_owner:Su.current}}function _h(e,t){return{$$typeof:No,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function zh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zh(""+e.key):t.toString(36)}function Oi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case No:case mh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ds(l,0):r,Cc(o)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),Oi(o,t,n,"",function(c){return c})):o!=null&&(ju(o)&&(o=_h(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ec,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Cc(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ds(i,a);l+=Oi(i,t,n,u,o)}else if(u=Eh(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ds(i,a++),l+=Oi(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Uo(e,t,n){if(e==null)return e;var r=[],o=0;return Oi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ph(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ai={transition:null},Th={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Su};function Y1(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:Uo,forEach:function(e,t,n){Uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=kr;b.Fragment=gh;b.Profiler=xh;b.PureComponent=yu;b.StrictMode=vh;b.Suspense=jh;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Th;b.act=Y1;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=U1({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Su.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Q1.call(t,u)&&!K1.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:No,type:e.type,key:o,ref:i,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:wh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};b.createElement=G1;b.createFactory=function(e){var t=G1.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Sh,render:e}};b.isValidElement=ju;b.lazy=function(e){return{$$typeof:Ch,_payload:{_status:-1,_result:e},_init:Ph}};b.memo=function(e,t){return{$$typeof:kh,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};b.unstable_act=Y1;b.useCallback=function(e,t){return _e.current.useCallback(e,t)};b.useContext=function(e){return _e.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};b.useEffect=function(e,t){return _e.current.useEffect(e,t)};b.useId=function(){return _e.current.useId()};b.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return _e.current.useMemo(e,t)};b.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};b.useRef=function(e){return _e.current.useRef(e)};b.useState=function(e){return _e.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return _e.current.useTransition()};b.version="18.3.1";B1.exports=b;var _=B1.exports;const Ne=hh(_),Rh=ph({__proto__:null,default:Ne},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=_,Oh=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Lh=Object.prototype.hasOwnProperty,Fh=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mh={key:!0,ref:!0,__self:!0,__source:!0};function q1(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Lh.call(t,r)&&!Mh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Oh,type:e,key:i,ref:l,props:o,_owner:Fh.current}}Ll.Fragment=Ah;Ll.jsx=q1;Ll.jsxs=q1;D1.exports=Ll;var s=D1.exports,ca={},J1={exports:{}},Ue={},X1={exports:{}},Z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var M=R.length;R.push(L);e:for(;0<M;){var U=M-1>>>1,V=R[U];if(0<o(V,L))R[U]=L,R[M]=V,M=U;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],M=R.pop();if(M!==L){R[0]=M;e:for(var U=0,V=R.length,un=V>>>1;U<un;){var Ze=2*(U+1)-1,Rt=R[Ze],Me=Ze+1,vt=R[Me];if(0>o(Rt,M))Me<V&&0>o(vt,Rt)?(R[U]=vt,R[Me]=M,U=Me):(R[U]=Rt,R[Ze]=M,U=Ze);else if(Me<V&&0>o(vt,M))R[U]=vt,R[Me]=M,U=Me;else break e}}return L}function o(R,L){var M=R.sortIndex-L.sortIndex;return M!==0?M:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],p=1,d=null,g=3,w=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=R)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function j(R){if(y=!1,m(R),!v)if(n(u)!==null)v=!0,Rr(C);else{var L=n(c);L!==null&&an(j,L.startTime-R)}}function C(R,L){v=!1,y&&(y=!1,h(T),T=-1),w=!0;var M=g;try{for(m(L),d=n(u);d!==null&&(!(d.expirationTime>L)||R&&!ve());){var U=d.callback;if(typeof U=="function"){d.callback=null,g=d.priorityLevel;var V=U(d.expirationTime<=L);L=e.unstable_now(),typeof V=="function"?d.callback=V:d===n(u)&&r(u),m(L)}else r(u);d=n(u)}if(d!==null)var un=!0;else{var Ze=n(c);Ze!==null&&an(j,Ze.startTime-L),un=!1}return un}finally{d=null,g=M,w=!1}}var z=!1,S=null,T=-1,F=5,O=-1;function ve(){return!(e.unstable_now()-O<F)}function ln(){if(S!==null){var R=e.unstable_now();O=R;var L=!0;try{L=S(!0,R)}finally{L?sn():(z=!1,S=null)}}else z=!1}var sn;if(typeof f=="function")sn=function(){f(ln)};else if(typeof MessageChannel<"u"){var Bo=new MessageChannel,us=Bo.port2;Bo.port1.onmessage=ln,sn=function(){us.postMessage(null)}}else sn=function(){k(ln,0)};function Rr(R){S=R,z||(z=!0,sn())}function an(R,L){T=k(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Rr(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var M=g;g=L;try{return R()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=g;g=R;try{return L()}finally{g=M}},e.unstable_scheduleCallback=function(R,L,M){var U=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?U+M:U):M=U,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=M+V,R={id:p++,callback:L,priorityLevel:R,startTime:M,expirationTime:V,sortIndex:-1},M>U?(R.sortIndex=M,t(c,R),n(u)===null&&R===n(c)&&(y?(h(T),T=-1):y=!0,an(j,M-U))):(R.sortIndex=V,t(u,R),v||w||(v=!0,Rr(C))),R},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(R){var L=g;return function(){var M=g;g=L;try{return R.apply(this,arguments)}finally{g=M}}}})(Z1);X1.exports=Z1;var Ih=X1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=_,He=Ih;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,uo={};function On(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(uo[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_c={},zc={};function Dh(e){return da.call(zc,e)?!0:da.call(_c,e)?!1:bh.test(e)?zc[e]=!0:(_c[e]=!0,!1)}function Bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hh(e,t,n,r){if(t===null||typeof t>"u"||Bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ku,Cu);ge[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ku,Cu);ge[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ku,Cu);ge[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eu(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hh(t,n,o,r)&&(n=null),r||o===null?Dh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Pu=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,fs;function Gr(e){if(fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||""}return`
`+fs+e}var ps=!1;function hs(e,t){if(!e||ps)return"";ps=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{ps=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Uh(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case fa:return"Profiler";case _u:return"StrictMode";case pa:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pu:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function Vh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wh(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wo(e){e._valueTracker||(e._valueTracker=Wh(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sf(e,t){t=t.checked,t!=null&&Eu(e,"checked",t,!1)}function va(e,t){sf(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&xa(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xa(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Yr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function af(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qh=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){Qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function df(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=df(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(Kh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ka=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ca=null,lr=null,sr=null;function Ac(e){if(e=Lo(e)){if(typeof Ca!="function")throw Error(P(280));var t=e.stateNode;t&&(t=bl(t),Ca(e.stateNode,e.type,t))}}function pf(e){lr?sr?sr.push(e):sr=[e]:lr=e}function hf(){if(lr){var e=lr,t=sr;if(sr=lr=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function mf(e,t){return e(t)}function gf(){}var ms=!1;function vf(e,t,n){if(ms)return e(t,n);ms=!0;try{return mf(e,t,n)}finally{ms=!1,(lr!==null||sr!==null)&&(gf(),hf())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ea=!1;if(Et)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Ea=!1}function Gh(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var eo=!1,rl=null,ol=!1,_a=null,Yh={onError:function(e){eo=!0,rl=e}};function qh(e,t,n,r,o,i,l,a,u){eo=!1,rl=null,Gh.apply(Yh,arguments)}function Jh(e,t,n,r,o,i,l,a,u){if(qh.apply(this,arguments),eo){if(eo){var c=rl;eo=!1,rl=null}else throw Error(P(198));ol||(ol=!0,_a=c)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lc(e){if(An(e)!==e)throw Error(P(188))}function Xh(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Lc(o),e;if(i===r)return Lc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function yf(e){return e=Xh(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var Sf=He.unstable_scheduleCallback,Fc=He.unstable_cancelCallback,Zh=He.unstable_shouldYield,e2=He.unstable_requestPaint,ee=He.unstable_now,t2=He.unstable_getCurrentPriorityLevel,Ru=He.unstable_ImmediatePriority,jf=He.unstable_UserBlockingPriority,il=He.unstable_NormalPriority,n2=He.unstable_LowPriority,kf=He.unstable_IdlePriority,Fl=null,ht=null;function r2(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:l2,o2=Math.log,i2=Math.LN2;function l2(e){return e>>>=0,e===0?32:31-(o2(e)/i2|0)|0}var Ko=64,Go=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=qr(a):(i&=l,i!==0&&(r=qr(i)))}else l=n&~o,l!==0?r=qr(l):i!==0&&(r=qr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function s2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ot(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=s2(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cf(){var e=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),e}function gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function u2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _f,Ou,zf,Pf,Tf,Pa=!1,Yo=[],Vt=null,Wt=null,Qt=null,po=new Map,ho=new Map,bt=[],c2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&Ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function d2(e,t,n,r,o){switch(t){case"focusin":return Vt=Lr(Vt,e,t,n,r,o),!0;case"dragenter":return Wt=Lr(Wt,e,t,n,r,o),!0;case"mouseover":return Qt=Lr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return po.set(i,Lr(po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ho.set(i,Lr(ho.get(i)||null,e,t,n,r,o)),!0}return!1}function Rf(e){var t=gn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=xf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ka=r,n.target.dispatchEvent(r),ka=null}else return t=Lo(n),t!==null&&Ou(t),e.blockedOn=n,!1;t.shift()}return!0}function Ic(e,t,n){Li(e)&&n.delete(t)}function f2(){Pa=!1,Vt!==null&&Li(Vt)&&(Vt=null),Wt!==null&&Li(Wt)&&(Wt=null),Qt!==null&&Li(Qt)&&(Qt=null),po.forEach(Ic),ho.forEach(Ic)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,f2)))}function mo(e){function t(o){return Fr(o,e)}if(0<Yo.length){Fr(Yo[0],e);for(var n=1;n<Yo.length;n++){var r=Yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&Fr(Vt,e),Wt!==null&&Fr(Wt,e),Qt!==null&&Fr(Qt,e),po.forEach(t),ho.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Rf(n),n.blockedOn===null&&bt.shift()}var ar=Tt.ReactCurrentBatchConfig,sl=!0;function p2(e,t,n,r){var o=H,i=ar.transition;ar.transition=null;try{H=1,Au(e,t,n,r)}finally{H=o,ar.transition=i}}function h2(e,t,n,r){var o=H,i=ar.transition;ar.transition=null;try{H=4,Au(e,t,n,r)}finally{H=o,ar.transition=i}}function Au(e,t,n,r){if(sl){var o=Ta(e,t,n,r);if(o===null)_s(e,t,r,al,n),Mc(e,r);else if(d2(o,e,t,n,r))r.stopPropagation();else if(Mc(e,r),t&4&&-1<c2.indexOf(e)){for(;o!==null;){var i=Lo(o);if(i!==null&&_f(i),i=Ta(e,t,n,r),i===null&&_s(e,t,r,al,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else _s(e,t,r,null,n)}}var al=null;function Ta(e,t,n,r){if(al=null,e=Tu(r),e=gn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t2()){case Ru:return 1;case jf:return 4;case il:case n2:return 16;case kf:return 536870912;default:return 16}default:return 16}}var Bt=null,Lu=null,Fi=null;function Of(){if(Fi)return Fi;var e,t=Lu,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Fi=o.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function $c(){return!1}function Ve(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qo:$c,this.isPropagationStopped=$c,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Ve(Cr),Ao=X({},Cr,{view:0,detail:0}),m2=Ve(Ao),vs,xs,Mr,Ml=X({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(vs=e.screenX-Mr.screenX,xs=e.screenY-Mr.screenY):xs=vs=0,Mr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),bc=Ve(Ml),g2=X({},Ml,{dataTransfer:0}),v2=Ve(g2),x2=X({},Ao,{relatedTarget:0}),ys=Ve(x2),y2=X({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),w2=Ve(y2),S2=X({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j2=Ve(S2),k2=X({},Cr,{data:0}),Dc=Ve(k2),C2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_2[e])?!!t[e]:!1}function Mu(){return z2}var P2=X({},Ao,{key:function(e){if(e.key){var t=C2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T2=Ve(P2),R2=X({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bc=Ve(R2),N2=X({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),O2=Ve(N2),A2=X({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L2=Ve(A2),F2=X({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),M2=Ve(F2),I2=[9,13,27,32],Iu=Et&&"CompositionEvent"in window,to=null;Et&&"documentMode"in document&&(to=document.documentMode);var $2=Et&&"TextEvent"in window&&!to,Af=Et&&(!Iu||to&&8<to&&11>=to),Hc=" ",Uc=!1;function Lf(e,t){switch(e){case"keyup":return I2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function b2(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(Uc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Uc?null:e;default:return null}}function D2(e,t){if(Gn)return e==="compositionend"||!Iu&&Lf(e,t)?(e=Of(),Fi=Lu=Bt=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var B2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B2[e.type]:t==="textarea"}function Mf(e,t,n,r){pf(r),t=ul(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var no=null,go=null;function H2(e){Kf(e,0)}function Il(e){var t=Jn(e);if(lf(t))return e}function U2(e,t){if(e==="change")return t}var If=!1;if(Et){var ws;if(Et){var Ss="oninput"in document;if(!Ss){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),Ss=typeof Wc.oninput=="function"}ws=Ss}else ws=!1;If=ws&&(!document.documentMode||9<document.documentMode)}function Qc(){no&&(no.detachEvent("onpropertychange",$f),go=no=null)}function $f(e){if(e.propertyName==="value"&&Il(go)){var t=[];Mf(t,go,e,Tu(e)),vf(H2,t)}}function V2(e,t,n){e==="focusin"?(Qc(),no=t,go=n,no.attachEvent("onpropertychange",$f)):e==="focusout"&&Qc()}function W2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(go)}function Q2(e,t){if(e==="click")return Il(t)}function K2(e,t){if(e==="input"||e==="change")return Il(t)}function G2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:G2;function vo(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!da.call(t,o)||!st(e[o],t[o]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y2(e){var t=Df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bf(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Gc(n,i);var l=Gc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q2=Et&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ra=null,ro=null,Na=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||Yn==null||Yn!==nl(r)||(r=Yn,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&vo(ro,r)||(ro=r,r=ul(Ra,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},js={},Bf={};Et&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function $l(e){if(js[e])return js[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return js[e]=t[n];return e}var Hf=$l("animationend"),Uf=$l("animationiteration"),Vf=$l("animationstart"),Wf=$l("transitionend"),Qf=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Qf.set(e,t),On(t,[e])}for(var ks=0;ks<qc.length;ks++){var Cs=qc[ks],J2=Cs.toLowerCase(),X2=Cs[0].toUpperCase()+Cs.slice(1);nn(J2,"on"+X2)}nn(Hf,"onAnimationEnd");nn(Uf,"onAnimationIteration");nn(Vf,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Wf,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jh(r,t,void 0,e),e.currentTarget=null}function Kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Jc(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Jc(o,a,c),i=u}}}if(ol)throw e=_a,ol=!1,_a=null,e}function Q(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var r=e+"__bubble";n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Es(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[Xo]){e[Xo]=!0,ef.forEach(function(n){n!=="selectionchange"&&(Z2.has(n)||Es(n,!1,e),Es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,Es("selectionchange",!1,t))}}function Gf(e,t,n,r){switch(Nf(t)){case 1:var o=p2;break;case 4:o=h2;break;default:o=Au}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function _s(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=gn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}vf(function(){var c=i,p=Tu(n),d=[];e:{var g=Qf.get(e);if(g!==void 0){var w=Fu,v=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":w=T2;break;case"focusin":v="focus",w=ys;break;case"focusout":v="blur",w=ys;break;case"beforeblur":case"afterblur":w=ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=v2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=O2;break;case Hf:case Uf:case Vf:w=w2;break;case Wf:w=L2;break;case"scroll":w=m2;break;case"wheel":w=M2;break;case"copy":case"cut":case"paste":w=j2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Bc}var y=(t&4)!==0,k=!y&&e==="scroll",h=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,m;f!==null;){m=f;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,h!==null&&(j=fo(f,h),j!=null&&y.push(yo(f,j,m)))),k)break;f=f.return}0<y.length&&(g=new w(g,v,null,n,p),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==ka&&(v=n.relatedTarget||n.fromElement)&&(gn(v)||v[_t]))break e;if((w||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?gn(v):null,v!==null&&(k=An(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(y=bc,j="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Bc,j="onPointerLeave",h="onPointerEnter",f="pointer"),k=w==null?g:Jn(w),m=v==null?g:Jn(v),g=new y(j,f+"leave",w,n,p),g.target=k,g.relatedTarget=m,j=null,gn(p)===c&&(y=new y(h,f+"enter",v,n,p),y.target=m,y.relatedTarget=k,j=y),k=j,w&&v)t:{for(y=w,h=v,f=0,m=y;m;m=Mn(m))f++;for(m=0,j=h;j;j=Mn(j))m++;for(;0<f-m;)y=Mn(y),f--;for(;0<m-f;)h=Mn(h),m--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=Mn(y),h=Mn(h)}y=null}else y=null;w!==null&&Xc(d,g,w,y,!1),v!==null&&k!==null&&Xc(d,k,v,y,!0)}}e:{if(g=c?Jn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var C=U2;else if(Vc(g))if(If)C=K2;else{C=W2;var z=V2}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Q2);if(C&&(C=C(e,c))){Mf(d,C,n,p);break e}z&&z(e,g,c),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&xa(g,"number",g.value)}switch(z=c?Jn(c):window,e){case"focusin":(Vc(z)||z.contentEditable==="true")&&(Yn=z,Ra=c,ro=null);break;case"focusout":ro=Ra=Yn=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Yc(d,n,p);break;case"selectionchange":if(q2)break;case"keydown":case"keyup":Yc(d,n,p)}var S;if(Iu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Gn?Lf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Af&&n.locale!=="ko"&&(Gn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Gn&&(S=Of()):(Bt=p,Lu="value"in Bt?Bt.value:Bt.textContent,Gn=!0)),z=ul(c,T),0<z.length&&(T=new Dc(T,e,null,n,p),d.push({event:T,listeners:z}),S?T.data=S:(S=Ff(n),S!==null&&(T.data=S)))),(S=$2?b2(e,n):D2(e,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(p=new Dc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=S))}Kf(d,t)})}function yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fo(e,n),i!=null&&r.unshift(yo(e,i,o)),i=fo(e,t),i!=null&&r.push(yo(e,i,o))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=fo(n,i),u!=null&&l.unshift(yo(n,u,a))):o||(u=fo(n,i),u!=null&&l.push(yo(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Zc(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Zo(e,t,n){if(t=Zc(t),Zc(e)!==t&&n)throw Error(P(425))}function cl(){}var Oa=null,Aa=null;function La(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(om)}:Fa;function om(e){setTimeout(function(){throw e})}function zs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mo(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),pt="__reactFiber$"+Er,wo="__reactProps$"+Er,_t="__reactContainer$"+Er,Ma="__reactEvents$"+Er,im="__reactListeners$"+Er,lm="__reactHandles$"+Er;function gn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=td(e);e!==null;){if(n=e[pt])return n;e=td(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[pt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function bl(e){return e[wo]||null}var Ia=[],Xn=-1;function rn(e){return{current:e}}function G(e){0>Xn||(e.current=Ia[Xn],Ia[Xn]=null,Xn--)}function W(e,t){Xn++,Ia[Xn]=e.current,e.current=t}var tn={},ke=rn(tn),Oe=rn(!1),_n=tn;function fr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function dl(){G(Oe),G(ke)}function nd(e,t,n){if(ke.current!==tn)throw Error(P(168));W(ke,t),W(Oe,n)}function Yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Vh(e)||"Unknown",o));return X({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,_n=ke.current,W(ke,e),W(Oe,Oe.current),!0}function rd(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Yf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,G(Oe),G(ke),W(ke,e)):G(Oe),W(Oe,n)}var St=null,Dl=!1,Ps=!1;function qf(e){St===null?St=[e]:St.push(e)}function sm(e){Dl=!0,qf(e)}function on(){if(!Ps&&St!==null){Ps=!0;var e=0,t=H;try{var n=St;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Dl=!1}catch(o){throw St!==null&&(St=St.slice(e+1)),Sf(Ru,on),o}finally{H=t,Ps=!1}}return null}var Zn=[],er=0,pl=null,hl=0,Qe=[],Ke=0,zn=null,jt=1,kt="";function fn(e,t){Zn[er++]=hl,Zn[er++]=pl,pl=e,hl=t}function Jf(e,t,n){Qe[Ke++]=jt,Qe[Ke++]=kt,Qe[Ke++]=zn,zn=e;var r=jt;e=kt;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,jt=1<<32-ot(t)+o|n<<o|r,kt=i+e}else jt=1<<i|n<<o|r,kt=e}function bu(e){e.return!==null&&(fn(e,1),Jf(e,1,0))}function Du(e){for(;e===pl;)pl=Zn[--er],Zn[er]=null,hl=Zn[--er],Zn[er]=null;for(;e===zn;)zn=Qe[--Ke],Qe[Ke]=null,kt=Qe[--Ke],Qe[Ke]=null,jt=Qe[--Ke],Qe[Ke]=null}var De=null,be=null,Y=!1,rt=null;function Xf(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,be=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:jt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,be=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ba(e){if(Y){var t=be;if(t){var n=t;if(!od(e,t)){if($a(e))throw Error(P(418));t=Kt(n.nextSibling);var r=De;t&&od(e,t)?Xf(r,n):(e.flags=e.flags&-4097|2,Y=!1,De=e)}}else{if($a(e))throw Error(P(418));e.flags=e.flags&-4097|2,Y=!1,De=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function ei(e){if(e!==De)return!1;if(!Y)return id(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!La(e.type,e.memoizedProps)),t&&(t=be)){if($a(e))throw Zf(),Error(P(418));for(;t;)Xf(e,t),t=Kt(t.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=De?Kt(e.stateNode.nextSibling):null;return!0}function Zf(){for(var e=be;e;)e=Kt(e.nextSibling)}function pr(){be=De=null,Y=!1}function Bu(e){rt===null?rt=[e]:rt.push(e)}var am=Tt.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ld(e){var t=e._init;return t(e._payload)}function e0(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Jt(h,f),h.index=0,h.sibling=null,h}function i(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,j){return f===null||f.tag!==6?(f=Fs(m,h.mode,j),f.return=h,f):(f=o(f,m),f.return=h,f)}function u(h,f,m,j){var C=m.type;return C===Kn?p(h,f,m.props.children,j,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===It&&ld(C)===f.type)?(j=o(f,m.props),j.ref=Ir(h,f,m),j.return=h,j):(j=Ui(m.type,m.key,m.props,null,h.mode,j),j.ref=Ir(h,f,m),j.return=h,j)}function c(h,f,m,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ms(m,h.mode,j),f.return=h,f):(f=o(f,m.children||[]),f.return=h,f)}function p(h,f,m,j,C){return f===null||f.tag!==7?(f=jn(m,h.mode,j,C),f.return=h,f):(f=o(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Fs(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vo:return m=Ui(f.type,f.key,f.props,null,h.mode,m),m.ref=Ir(h,null,f),m.return=h,m;case Qn:return f=Ms(f,h.mode,m),f.return=h,f;case It:var j=f._init;return d(h,j(f._payload),m)}if(Yr(f)||Or(f))return f=jn(f,h.mode,m,null),f.return=h,f;ti(h,f)}return null}function g(h,f,m,j){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(h,f,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:return m.key===C?u(h,f,m,j):null;case Qn:return m.key===C?c(h,f,m,j):null;case It:return C=m._init,g(h,f,C(m._payload),j)}if(Yr(m)||Or(m))return C!==null?null:p(h,f,m,j,null);ti(h,m)}return null}function w(h,f,m,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(m)||null,a(f,h,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Vo:return h=h.get(j.key===null?m:j.key)||null,u(f,h,j,C);case Qn:return h=h.get(j.key===null?m:j.key)||null,c(f,h,j,C);case It:var z=j._init;return w(h,f,m,z(j._payload),C)}if(Yr(j)||Or(j))return h=h.get(m)||null,p(f,h,j,C,null);ti(f,j)}return null}function v(h,f,m,j){for(var C=null,z=null,S=f,T=f=0,F=null;S!==null&&T<m.length;T++){S.index>T?(F=S,S=null):F=S.sibling;var O=g(h,S,m[T],j);if(O===null){S===null&&(S=F);break}e&&S&&O.alternate===null&&t(h,S),f=i(O,f,T),z===null?C=O:z.sibling=O,z=O,S=F}if(T===m.length)return n(h,S),Y&&fn(h,T),C;if(S===null){for(;T<m.length;T++)S=d(h,m[T],j),S!==null&&(f=i(S,f,T),z===null?C=S:z.sibling=S,z=S);return Y&&fn(h,T),C}for(S=r(h,S);T<m.length;T++)F=w(S,h,T,m[T],j),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?T:F.key),f=i(F,f,T),z===null?C=F:z.sibling=F,z=F);return e&&S.forEach(function(ve){return t(h,ve)}),Y&&fn(h,T),C}function y(h,f,m,j){var C=Or(m);if(typeof C!="function")throw Error(P(150));if(m=C.call(m),m==null)throw Error(P(151));for(var z=C=null,S=f,T=f=0,F=null,O=m.next();S!==null&&!O.done;T++,O=m.next()){S.index>T?(F=S,S=null):F=S.sibling;var ve=g(h,S,O.value,j);if(ve===null){S===null&&(S=F);break}e&&S&&ve.alternate===null&&t(h,S),f=i(ve,f,T),z===null?C=ve:z.sibling=ve,z=ve,S=F}if(O.done)return n(h,S),Y&&fn(h,T),C;if(S===null){for(;!O.done;T++,O=m.next())O=d(h,O.value,j),O!==null&&(f=i(O,f,T),z===null?C=O:z.sibling=O,z=O);return Y&&fn(h,T),C}for(S=r(h,S);!O.done;T++,O=m.next())O=w(S,h,T,O.value,j),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?T:O.key),f=i(O,f,T),z===null?C=O:z.sibling=O,z=O);return e&&S.forEach(function(ln){return t(h,ln)}),Y&&fn(h,T),C}function k(h,f,m,j){if(typeof m=="object"&&m!==null&&m.type===Kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:e:{for(var C=m.key,z=f;z!==null;){if(z.key===C){if(C=m.type,C===Kn){if(z.tag===7){n(h,z.sibling),f=o(z,m.props.children),f.return=h,h=f;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===It&&ld(C)===z.type){n(h,z.sibling),f=o(z,m.props),f.ref=Ir(h,z,m),f.return=h,h=f;break e}n(h,z);break}else t(h,z);z=z.sibling}m.type===Kn?(f=jn(m.props.children,h.mode,j,m.key),f.return=h,h=f):(j=Ui(m.type,m.key,m.props,null,h.mode,j),j.ref=Ir(h,f,m),j.return=h,h=j)}return l(h);case Qn:e:{for(z=m.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=o(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ms(m,h.mode,j),f.return=h,h=f}return l(h);case It:return z=m._init,k(h,f,z(m._payload),j)}if(Yr(m))return v(h,f,m,j);if(Or(m))return y(h,f,m,j);ti(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,m),f.return=h,h=f):(n(h,f),f=Fs(m,h.mode,j),f.return=h,h=f),l(h)):n(h,f)}return k}var hr=e0(!0),t0=e0(!1),ml=rn(null),gl=null,tr=null,Hu=null;function Uu(){Hu=tr=gl=null}function Vu(e){var t=ml.current;G(ml),e._currentValue=t}function Da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){gl=e,Hu=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Hu!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(gl===null)throw Error(P(308));tr=e,gl.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var vn=null;function Wu(e){vn===null?vn=[e]:vn.push(e)}function n0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wu(t)):(n.next=o.next,o.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zt(e,n)}return o=r.interleaved,o===null?(t.next=t,Wu(r)):(t.next=o.next,o.next=t),r.interleaved=t,zt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}function sd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;l=0,p=c=u=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(g=t,w=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(w,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(w,d,g):v,g==null)break e;d=X({},d,g);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,u=d):p=p.next=w,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(u=d),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=d}}function ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Fo={},mt=rn(Fo),So=rn(Fo),jo=rn(Fo);function xn(e){if(e===Fo)throw Error(P(174));return e}function Ku(e,t){switch(W(jo,t),W(So,e),W(mt,Fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}G(mt),W(mt,t)}function mr(){G(mt),G(So),G(jo)}function o0(e){xn(jo.current);var t=xn(mt.current),n=wa(t,e.type);t!==n&&(W(So,e),W(mt,n))}function Gu(e){So.current===e&&(G(mt),G(So))}var q=rn(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function Yu(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var $i=Tt.ReactCurrentDispatcher,Rs=Tt.ReactCurrentBatchConfig,Pn=0,J=null,ue=null,de=null,yl=!1,oo=!1,ko=0,um=0;function xe(){throw Error(P(321))}function qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,o,i){if(Pn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?pm:hm,e=n(r,o),oo){i=0;do{if(oo=!1,ko=0,25<=i)throw Error(P(301));i+=1,de=ue=null,t.updateQueue=null,$i.current=mm,e=n(r,o)}while(oo)}if($i.current=wl,t=ue!==null&&ue.next!==null,Pn=0,de=ue=J=null,yl=!1,t)throw Error(P(300));return e}function Xu(){var e=ko!==0;return ko=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=e:de=de.next=e,de}function Je(){if(ue===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?J.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(P(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?J.memoizedState=de=e:de=de.next=e}return de}function Co(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var p=c.lane;if((Pn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,l=r):u=u.next=d,J.lanes|=p,Tn|=p}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,st(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,Tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);st(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function i0(){}function l0(e,t){var n=J,r=Je(),o=t(),i=!st(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Zu(u0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Eo(9,a0.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(P(349));Pn&30||s0(n,t,o)}return o}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function a0(e,t,n,r){t.value=n,t.getSnapshot=r,c0(t)&&d0(e)}function u0(e,t,n){return n(function(){c0(t)&&d0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function d0(e){var t=zt(e,1);t!==null&&it(t,e,1,-1)}function ud(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,J,e),[t.memoizedState,e]}function Eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f0(){return Je().memoizedState}function bi(e,t,n,r){var o=dt();J.flags|=e,o.memoizedState=Eo(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&qu(r,l.deps)){o.memoizedState=Eo(t,n,i,r);return}}J.flags|=e,o.memoizedState=Eo(1|t,n,i,r)}function cd(e,t){return bi(8390656,8,e,t)}function Zu(e,t){return Bl(2048,8,e,t)}function p0(e,t){return Bl(4,2,e,t)}function h0(e,t){return Bl(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g0(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,m0.bind(null,t,e),n)}function ec(){}function v0(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function x0(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y0(e,t,n){return Pn&21?(st(n,t)||(n=Cf(),J.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function cm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{H=n,Rs.transition=r}}function w0(){return Je().memoizedState}function dm(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S0(e))j0(t,n);else if(n=n0(e,t,n,r),n!==null){var o=Ee();it(n,e,r,o),k0(n,t,r)}}function fm(e,t,n){var r=qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(e))j0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,st(a,l)){var u=t.interleaved;u===null?(o.next=o,Wu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=n0(e,t,o,r),n!==null&&(o=Ee(),it(n,e,r,o),k0(n,t,r))}}function S0(e){var t=e.alternate;return e===J||t!==null&&t===J}function j0(e,t){oo=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}var wl={readContext:qe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},pm={readContext:qe,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:ud,useDebugValue:ec,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=ud(!1),t=e[0];return e=cm.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=dt();if(Y){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),pe===null)throw Error(P(349));Pn&30||s0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cd(u0.bind(null,r,i,e),[e]),r.flags|=2048,Eo(9,a0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=dt(),t=pe.identifierPrefix;if(Y){var n=kt,r=jt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hm={readContext:qe,useCallback:v0,useContext:qe,useEffect:Zu,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:x0,useReducer:Ns,useRef:f0,useState:function(){return Ns(Co)},useDebugValue:ec,useDeferredValue:function(e){var t=Je();return y0(t,ue.memoizedState,e)},useTransition:function(){var e=Ns(Co)[0],t=Je().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1},mm={readContext:qe,useCallback:v0,useContext:qe,useEffect:Zu,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:x0,useReducer:Os,useRef:f0,useState:function(){return Os(Co)},useDebugValue:ec,useDeferredValue:function(e){var t=Je();return ue===null?t.memoizedState=e:y0(t,ue.memoizedState,e)},useTransition:function(){var e=Os(Co)[0],t=Je().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=qt(e),i=Ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(it(t,e,o,r),Ii(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=qt(e),i=Ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(it(t,e,o,r),Ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=qt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(it(t,e,r,n),Ii(t,e,r))}};function dd(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!vo(n,r)||!vo(o,i):!0}function C0(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(o=Ae(t)?_n:ke.current,r=t.contextTypes,i=(r=r!=null)?fr(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function Ha(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Qu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=qe(i):(i=Ae(t)?_n:ke.current,o.context=fr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ba(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Hl.enqueueReplaceState(o,o.state,null),vl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=Uh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function E0(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jl||(jl=!0,Za=r),Ua(e,t)},n}function _0(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ua(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var vm=Tt.ReactCurrentOwner,Te=!1;function Ce(e,t,n,r){t.child=e===null?t0(t,null,n,r):hr(t,e.child,n,r)}function gd(e,t,n,r,o){n=n.render;var i=t.ref;return ur(t,o),r=Ju(e,t,n,r,i,o),n=Xu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(Y&&n&&bu(t),t.flags|=1,Ce(e,t,r,o),t.child)}function vd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ac(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,z0(e,t,i,r,o)):(e=Ui(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(l,r)&&e.ref===t.ref)return Pt(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function z0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vo(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Pt(e,t,o)}return Va(e,t,n,r,o)}function P0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(rr,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(rr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(rr,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(rr,$e),$e|=r;return Ce(e,t,o,n),t.child}function T0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,n,r,o){var i=Ae(n)?_n:ke.current;return i=fr(t,i),ur(t,o),n=Ju(e,t,n,r,i,o),r=Xu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(Y&&r&&bu(t),t.flags|=1,Ce(e,t,n,o),t.child)}function xd(e,t,n,r,o){if(Ae(n)){var i=!0;fl(t)}else i=!1;if(ur(t,o),t.stateNode===null)Di(e,t),C0(t,n,r),Ha(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Ae(n)?_n:ke.current,c=fr(t,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&fd(t,l,r,c),$t=!1;var g=t.memoizedState;l.state=g,vl(t,r,l,o),u=t.memoizedState,a!==r||g!==u||Oe.current||$t?(typeof p=="function"&&(Ba(t,n,p,r),u=t.memoizedState),(a=$t||dd(t,n,a,r,g,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,r0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:tt(t.type,a),l.props=c,d=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=Ae(n)?_n:ke.current,u=fr(t,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==u)&&fd(t,l,r,u),$t=!1,g=t.memoizedState,l.state=g,vl(t,r,l,o);var v=t.memoizedState;a!==d||g!==v||Oe.current||$t?(typeof w=="function"&&(Ba(t,n,w,r),v=t.memoizedState),(c=$t||dd(t,n,c,r,g,v,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Wa(e,t,n,r,i,o)}function Wa(e,t,n,r,o,i){T0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&rd(t,n,!1),Pt(e,t,i);r=t.stateNode,vm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hr(t,e.child,null,i),t.child=hr(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&rd(t,n,!0),t.child}function R0(e){var t=e.stateNode;t.pendingContext?nd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nd(e,t.context,!1),Ku(e,t.containerInfo)}function yd(e,t,n,r,o){return pr(),Bu(o),t.flags|=256,Ce(e,t,n,r),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function N0(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(q,o&1),e===null)return ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Wl(l,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ka(n),t.memoizedState=Qa,e):tc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return xm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Jt(a,i):(i=jn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ka(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Qa,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,n,r){return r!==null&&Bu(r),hr(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(P(422))),ni(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Wl({mode:"visible",children:r.children},o,0,null),i=jn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hr(t,e.child,null,l),t.child.memoizedState=Ka(l),t.memoizedState=Qa,i);if(!(t.mode&1))return ni(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=As(i,r,void 0),ni(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=pe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,zt(e,o),it(r,e,o,-1))}return sc(),r=As(Error(P(421))),ni(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,be=Kt(o.nextSibling),De=t,Y=!0,rt=null,e!==null&&(Qe[Ke++]=jt,Qe[Ke++]=kt,Qe[Ke++]=zn,jt=e.id,kt=e.overflow,zn=t),t=tc(t,r.children),t.flags|=4096,t)}function wd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Da(e.return,t,n)}function Ls(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function O0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,t);else if(e.tag===19)wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ls(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ls(t,!0,n,null,i);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ym(e,t,n){switch(t.tag){case 3:R0(t),pr();break;case 5:o0(t);break;case 1:Ae(t.type)&&fl(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(ml,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?N0(e,t,n):(W(q,q.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return O0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,P0(e,t,n)}return Pt(e,t,n)}var A0,Ga,L0,F0;A0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};L0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(mt.current);var i=null;switch(n){case"input":o=ga(e,o),r=ga(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=ya(e,o),r=ya(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Sa(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};F0=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch(Du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ae(t.type)&&dl(),ye(t),null;case 3:return r=t.stateNode,mr(),G(Oe),G(ke),Yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(nu(rt),rt=null))),Ga(e,t),ye(t),null;case 5:Gu(t);var o=xn(jo.current);if(n=t.type,e!==null&&t.stateNode!=null)L0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=xn(mt.current),ei(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[wo]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Jr.length;o++)Q(Jr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Tc(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Nc(r,i),Q("invalid",r)}Sa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zo(r.textContent,a,e),o=["children",""+a]):uo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Wo(r),Rc(r,i,!0);break;case"textarea":Wo(r),Oc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[wo]=r,A0(e,t,!1,!1),t.stateNode=e;e:{switch(l=ja(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jr.length;o++)Q(Jr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Tc(e,r),o=ga(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Nc(e,r),o=ya(e,r),Q("invalid",e);break;default:o=r}Sa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ff(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cf(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(e,u):typeof u=="number"&&co(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&Eu(e,i,u,l))}switch(n){case"input":Wo(e),Rc(e,r,!1);break;case"textarea":Wo(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ir(e,!!r.multiple,i,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)F0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=xn(jo.current),xn(mt.current),ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ye(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&be!==null&&t.mode&1&&!(t.flags&128))Zf(),pr(),t.flags|=98560,i=!1;else if(i=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[pt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else rt!==null&&(nu(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ce===0&&(ce=3):sc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return mr(),Ga(e,t),e===null&&xo(t.stateNode.containerInfo),ye(t),null;case 10:return Vu(t.type._context),ye(t),null;case 17:return Ae(t.type)&&dl(),ye(t),null;case 19:if(G(q),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)$r(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=xl(e),l!==null){for(t.flags|=128,$r(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>vr&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304)}else{if(!r)if(e=xl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ye(t),null}else 2*ee()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Sm(e,t){switch(Du(t),t.tag){case 1:return Ae(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),G(Oe),G(ke),Yu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gu(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return mr(),null;case 10:return Vu(t.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var ri=!1,Se=!1,jm=typeof WeakSet=="function"?WeakSet:Set,N=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Ya(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Sd=!1;function km(e,t){if(Oa=sl,e=Df(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,p=0,d=e,g=null;t:for(;;){for(var w;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(w=d.firstChild)!==null;)g=d,d=w;for(;;){if(d===e)break t;if(g===n&&++c===o&&(a=l),g===i&&++p===r&&(u=l),(w=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:e,selectionRange:n},sl=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:tt(t.type,y),k);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){Z(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Sd,Sd=!1,v}function io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ya(t,n,i)}o=o.next}while(o!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function M0(e){var t=e.alternate;t!==null&&(e.alternate=null,M0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[wo],delete t[Ma],delete t[im],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function I0(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||I0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var he=null,nt=!1;function Ot(e,t,n){for(n=n.child;n!==null;)$0(e,t,n),n=n.sibling}function $0(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Se||nr(n,t);case 6:var r=he,o=nt;he=null,Ot(e,t,n),he=r,nt=o,he!==null&&(nt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(nt?(e=he,n=n.stateNode,e.nodeType===8?zs(e.parentNode,n):e.nodeType===1&&zs(e,n),mo(e)):zs(he,n.stateNode));break;case 4:r=he,o=nt,he=n.stateNode.containerInfo,nt=!0,Ot(e,t,n),he=r,nt=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ya(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!Se&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ot(e,t,n),Se=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jm),t.forEach(function(r){var o=Om.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,nt=!1;break e;case 3:he=a.stateNode.containerInfo,nt=!0;break e;case 4:he=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(he===null)throw Error(P(160));$0(i,l,o),he=null,nt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){Z(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)b0(t,e),t=t.sibling}function b0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ut(e),r&4){try{io(3,e,e.return),Ul(3,e)}catch(y){Z(e,e.return,y)}try{io(5,e,e.return)}catch(y){Z(e,e.return,y)}}break;case 1:et(t,e),ut(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(et(t,e),ut(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var o=e.stateNode;try{co(o,"")}catch(y){Z(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&sf(o,i),ja(a,l);var c=ja(a,i);for(l=0;l<u.length;l+=2){var p=u[l],d=u[l+1];p==="style"?ff(o,d):p==="dangerouslySetInnerHTML"?cf(o,d):p==="children"?co(o,d):Eu(o,p,d,c)}switch(a){case"input":va(o,i);break;case"textarea":af(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?ir(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?ir(o,!!i.multiple,i.defaultValue,!0):ir(o,!!i.multiple,i.multiple?[]:"",!1))}o[wo]=i}catch(y){Z(e,e.return,y)}}break;case 6:if(et(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Z(e,e.return,y)}}break;case 3:if(et(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(y){Z(e,e.return,y)}break;case 4:et(t,e),ut(e);break;case 13:et(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(oc=ee())),r&4&&kd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(c=Se)||p,et(t,e),Se=c):et(t,e),ut(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(d=N=p;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:io(4,g,g.return);break;case 1:nr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Z(r,n,y)}}break;case 5:nr(g,g.return);break;case 22:if(g.memoizedState!==null){Ed(d);continue}}w!==null?(w.return=g,N=w):Ed(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=df("display",l))}catch(y){Z(e,e.return,y)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Z(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(t,e),ut(e),r&4&&kd(e);break;case 21:break;default:et(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(I0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(co(o,""),r.flags&=-33);var i=jd(e);Xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=jd(e);Ja(e,a,l);break;default:throw Error(P(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){N=e,D0(e)}function D0(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ri;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Se;a=ri;var c=Se;if(ri=l,(Se=u)&&!c)for(N=o;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?_d(o):u!==null?(u.return=l,N=u):_d(o);for(;i!==null;)N=i,D0(i),i=i.sibling;N=o,ri=a,Se=c}Cd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Cd(e)}}function Cd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ad(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ad(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Se||t.flags&512&&qa(t)}catch(g){Z(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ed(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function _d(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Z(t,o,u)}}var i=t.return;try{qa(t)}catch(u){Z(t,i,u)}break;case 5:var l=t.return;try{qa(t)}catch(u){Z(t,l,u)}}}catch(u){Z(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Em=Math.ceil,Sl=Tt.ReactCurrentDispatcher,nc=Tt.ReactCurrentOwner,Ye=Tt.ReactCurrentBatchConfig,D=0,pe=null,re=null,me=0,$e=0,rr=rn(0),ce=0,_o=null,Tn=0,Vl=0,rc=0,lo=null,Pe=null,oc=0,vr=1/0,yt=null,jl=!1,Za=null,Yt=null,oi=!1,Ht=null,kl=0,so=0,eu=null,Bi=-1,Hi=0;function Ee(){return D&6?ee():Bi!==-1?Bi:Bi=ee()}function qt(e){return e.mode&1?D&2&&me!==0?me&-me:am.transition!==null?(Hi===0&&(Hi=Cf()),Hi):(e=H,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function it(e,t,n,r){if(50<so)throw so=0,eu=null,Error(P(185));Oo(e,n,r),(!(D&2)||e!==pe)&&(e===pe&&(!(D&2)&&(Vl|=n),ce===4&&Dt(e,me)),Le(e,r),n===1&&D===0&&!(t.mode&1)&&(vr=ee()+500,Dl&&on()))}function Le(e,t){var n=e.callbackNode;a2(e,t);var r=ll(e,e===pe?me:0);if(r===0)n!==null&&Fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fc(n),t===1)e.tag===0?sm(zd.bind(null,e)):qf(zd.bind(null,e)),rm(function(){!(D&6)&&on()}),n=null;else{switch(Ef(r)){case 1:n=Ru;break;case 4:n=jf;break;case 16:n=il;break;case 536870912:n=kf;break;default:n=il}n=G0(n,B0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B0(e,t){if(Bi=-1,Hi=0,D&6)throw Error(P(327));var n=e.callbackNode;if(cr()&&e.callbackNode!==n)return null;var r=ll(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var o=D;D|=2;var i=U0();(pe!==e||me!==t)&&(yt=null,vr=ee()+500,Sn(e,t));do try{Pm();break}catch(a){H0(e,a)}while(!0);Uu(),Sl.current=i,D=o,re!==null?t=0:(pe=null,me=0,t=ce)}if(t!==0){if(t===2&&(o=za(e),o!==0&&(r=o,t=tu(e,o))),t===1)throw n=_o,Sn(e,0),Dt(e,r),Le(e,ee()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!_m(o)&&(t=Cl(e,r),t===2&&(i=za(e),i!==0&&(r=i,t=tu(e,i))),t===1))throw n=_o,Sn(e,0),Dt(e,r),Le(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:pn(e,Pe,yt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=oc+500-ee(),10<t)){if(ll(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fa(pn.bind(null,e,Pe,yt),t);break}pn(e,Pe,yt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ot(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Em(r/1960))-r,10<r){e.timeoutHandle=Fa(pn.bind(null,e,Pe,yt),r);break}pn(e,Pe,yt);break;case 5:pn(e,Pe,yt);break;default:throw Error(P(329))}}}return Le(e,ee()),e.callbackNode===n?B0.bind(null,e):null}function tu(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&nu(t)),e}function nu(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~rc,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function zd(e){if(D&6)throw Error(P(327));cr();var t=ll(e,0);if(!(t&1))return Le(e,ee()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=za(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=_o,Sn(e,0),Dt(e,t),Le(e,ee()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Pe,yt),Le(e,ee()),null}function ic(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(vr=ee()+500,Dl&&on())}}function Rn(e){Ht!==null&&Ht.tag===0&&!(D&6)&&cr();var t=D;D|=1;var n=Ye.transition,r=H;try{if(Ye.transition=null,H=1,e)return e()}finally{H=r,Ye.transition=n,D=t,!(D&6)&&on()}}function lc(){$e=rr.current,G(rr)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:mr(),G(Oe),G(ke),Yu();break;case 5:Gu(r);break;case 4:mr();break;case 13:G(q);break;case 19:G(q);break;case 10:Vu(r.type._context);break;case 22:case 23:lc()}n=n.return}if(pe=e,re=e=Jt(e.current,null),me=$e=t,ce=0,_o=null,rc=Vl=Tn=0,Pe=lo=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}vn=null}return e}function H0(e,t){do{var n=re;try{if(Uu(),$i.current=wl,yl){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}yl=!1}if(Pn=0,de=ue=J=null,oo=!1,ko=0,nc.current=null,n===null||n.return===null){ce=1,_o=t,re=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=me,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=hd(l);if(w!==null){w.flags&=-257,md(w,l,a,i,t),w.mode&1&&pd(i,c,t),t=w,u=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){pd(i,c,t),sc();break e}u=Error(P(426))}}else if(Y&&a.mode&1){var k=hd(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),md(k,l,a,i,t),Bu(gr(u,a));break e}}i=u=gr(u,a),ce!==4&&(ce=2),lo===null?lo=[i]:lo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=E0(i,u,t);sd(i,h);break e;case 1:a=u;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yt===null||!Yt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=_0(i,a,t);sd(i,j);break e}}i=i.return}while(i!==null)}W0(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function U0(){var e=Sl.current;return Sl.current=wl,e===null?wl:e}function sc(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Tn&268435455)&&!(Vl&268435455)||Dt(pe,me)}function Cl(e,t){var n=D;D|=2;var r=U0();(pe!==e||me!==t)&&(yt=null,Sn(e,t));do try{zm();break}catch(o){H0(e,o)}while(!0);if(Uu(),D=n,Sl.current=r,re!==null)throw Error(P(261));return pe=null,me=0,ce}function zm(){for(;re!==null;)V0(re)}function Pm(){for(;re!==null&&!Zh();)V0(re)}function V0(e){var t=K0(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?W0(e):re=t,nc.current=null}function W0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,re=null;return}}else if(n=wm(n,t,$e),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ce===0&&(ce=5)}function pn(e,t,n){var r=H,o=Ye.transition;try{Ye.transition=null,H=1,Tm(e,t,n,r)}finally{Ye.transition=o,H=r}return null}function Tm(e,t,n,r){do cr();while(Ht!==null);if(D&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(u2(e,i),e===pe&&(re=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,G0(il,function(){return cr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var l=H;H=1;var a=D;D|=4,nc.current=null,km(e,n),b0(n,e),Y2(Aa),sl=!!Oa,Aa=Oa=null,e.current=n,Cm(n),e2(),D=a,H=l,Ye.transition=i}else e.current=n;if(oi&&(oi=!1,Ht=e,kl=o),i=e.pendingLanes,i===0&&(Yt=null),r2(n.stateNode),Le(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(jl)throw jl=!1,e=Za,Za=null,e;return kl&1&&e.tag!==0&&cr(),i=e.pendingLanes,i&1?e===eu?so++:(so=0,eu=e):so=0,on(),null}function cr(){if(Ht!==null){var e=Ef(kl),t=Ye.transition,n=H;try{if(Ye.transition=null,H=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,kl=0,D&6)throw Error(P(331));var o=D;for(D|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(N=c;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:io(8,p,i)}var d=p.child;if(d!==null)d.return=p,N=d;else for(;N!==null;){p=N;var g=p.sibling,w=p.return;if(M0(p),p===c){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:io(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,N=h;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){l=N;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,N=m;else e:for(l=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(C){Z(a,a.return,C)}if(a===l){N=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,N=j;break e}N=a.return}}if(D=o,on(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{H=n,Ye.transition=t}}return!1}function Pd(e,t,n){t=gr(n,t),t=E0(e,t,1),e=Gt(e,t,1),t=Ee(),e!==null&&(Oo(e,1,t),Le(e,t))}function Z(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=gr(n,e),e=_0(t,e,1),t=Gt(t,e,1),e=Ee(),t!==null&&(Oo(t,1,e),Le(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>ee()-oc?Sn(e,0):rc|=n),Le(e,t)}function Q0(e,t){t===0&&(e.mode&1?(t=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):t=1);var n=Ee();e=zt(e,t),e!==null&&(Oo(e,t,n),Le(e,n))}function Nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q0(e,n)}function Om(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Q0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,ym(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Y&&t.flags&1048576&&Jf(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Di(e,t),e=t.pendingProps;var o=fr(t,ke.current);ur(t,n),o=Ju(null,t,r,e,o,n);var i=Xu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,fl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Qu(t),o.updater=Hl,t.stateNode=o,o._reactInternals=t,Ha(t,r,e,n),t=Wa(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&bu(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Lm(r),e=tt(r,e),o){case 0:t=Va(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=gd(null,t,r,e,n);break e;case 14:t=vd(null,t,r,tt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Va(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),xd(e,t,r,o,n);case 3:e:{if(R0(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,r0(e,t),vl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error(P(423)),t),t=yd(e,t,r,n,o);break e}else if(r!==o){o=gr(Error(P(424)),t),t=yd(e,t,r,n,o);break e}else for(be=Kt(t.stateNode.containerInfo.firstChild),De=t,Y=!0,rt=null,n=t0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===o){t=Pt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return o0(t),e===null&&ba(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,La(r,o)?l=null:i!==null&&La(r,i)&&(t.flags|=32),T0(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&ba(t),null;case 13:return N0(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),gd(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(ml,r._currentValue),r._currentValue=l,i!==null)if(st(i.value,l)){if(i.children===o.children&&!Oe.current){t=Pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ct(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Da(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Da(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ur(t,n),o=qe(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),vd(e,t,r,o,n);case 15:return z0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Di(e,t),t.tag=1,Ae(r)?(e=!0,fl(t)):e=!1,ur(t,n),C0(t,r,o),Ha(t,r,o,n),Wa(null,t,r,!0,e,n);case 19:return O0(e,t,n);case 22:return P0(e,t,n)}throw Error(P(156,t.tag))};function G0(e,t){return Sf(e,t)}function Am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Am(e,t,n,r)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zu)return 11;if(e===Pu)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ac(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return jn(n.children,o,i,t);case _u:l=8,o|=8;break;case fa:return e=Ge(12,n,t,o|2),e.elementType=fa,e.lanes=i,e;case pa:return e=Ge(13,n,t,o),e.elementType=pa,e.lanes=i,e;case ha:return e=Ge(19,n,t,o),e.elementType=ha,e.lanes=i,e;case rf:return Wl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:l=10;break e;case nf:l=9;break e;case zu:l=11;break e;case Pu:l=14;break e;case It:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function Fs(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gs(0),this.expirationTimes=gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function uc(e,t,n,r,o,i,l,a,u){return e=new Fm(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(i),e}function Mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Y0(e){if(!e)return tn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Yf(e,n,t)}return t}function q0(e,t,n,r,o,i,l,a,u){return e=uc(n,r,!0,e,o,i,l,a,u),e.context=Y0(null),n=e.current,r=Ee(),o=qt(n),i=Ct(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,Oo(e,o,r),Le(e,r),e}function Ql(e,t,n,r){var o=t.current,i=Ee(),l=qt(o);return n=Y0(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,l),e!==null&&(it(e,o,l,i),Ii(e,o,l)),l}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function Im(){return null}var J0=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}Kl.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ql(e,t,null,null)};Kl.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){Ql(null,e,null,null)}),t[_t]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Rf(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function $m(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=El(l);i.call(c)}}var l=q0(t,r,e,0,null,!1,!1,"",Rd);return e._reactRootContainer=l,e[_t]=l.current,xo(e.nodeType===8?e.parentNode:e),Rn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=El(u);a.call(c)}}var u=uc(e,0,!1,null,null,!1,!1,"",Rd);return e._reactRootContainer=u,e[_t]=u.current,xo(e.nodeType===8?e.parentNode:e),Rn(function(){Ql(t,u,n,r)}),u}function Yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=El(l);a.call(u)}}Ql(t,l,e,o)}else l=$m(n,t,e,o,r);return El(l)}_f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Nu(t,n|1),Le(t,ee()),!(D&6)&&(vr=ee()+500,on()))}break;case 13:Rn(function(){var r=zt(e,1);if(r!==null){var o=Ee();it(r,e,1,o)}}),cc(e,1)}};Ou=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ee();it(t,e,134217728,n)}cc(e,134217728)}};zf=function(e){if(e.tag===13){var t=qt(e),n=zt(e,t);if(n!==null){var r=Ee();it(n,e,t,r)}cc(e,t)}};Pf=function(){return H};Tf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ca=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bl(r);if(!o)throw Error(P(90));lf(r),va(r,o)}}}break;case"textarea":af(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};mf=ic;gf=Rn;var bm={usingClientEntryPoint:!1,Events:[Lo,Jn,bl,pf,hf,ic]},br={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dm={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yf(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{Fl=ii.inject(Dm),ht=ii}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(P(200));return Mm(e,t,null,n)};Ue.createRoot=function(e,t){if(!fc(e))throw Error(P(299));var n=!1,r="",o=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uc(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,xo(e.nodeType===8?e.parentNode:e),new dc(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=yf(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return Rn(e)};Ue.hydrate=function(e,t,n){if(!Gl(t))throw Error(P(200));return Yl(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!fc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=J0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=q0(t,null,e,1,n??null,o,!1,i,l),e[_t]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Kl(t)};Ue.render=function(e,t,n){if(!Gl(t))throw Error(P(200));return Yl(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(P(40));return e._reactRootContainer?(Rn(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ue.unstable_batchedUpdates=ic;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Yl(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(e){console.error(e)}}X0(),J1.exports=Ue;var Bm=J1.exports,Nd=Bm;ca.createRoot=Nd.createRoot,ca.hydrateRoot=Nd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Od="popstate";function Hm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ru("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_l(o)}return Vm(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Z0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Um(){return Math.random().toString(36).substr(2,8)}function Ad(e,t){return{usr:e.state,key:e.key,idx:t}}function ru(e,t,n,r){return n===void 0&&(n=null),zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:n,key:t&&t.key||r||Um()})}function _l(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Ut.Pop,u=null,c=p();c==null&&(c=0,l.replaceState(zo({},l.state,{idx:c}),""));function p(){return(l.state||{idx:null}).idx}function d(){a=Ut.Pop;let k=p(),h=k==null?null:k-c;c=k,u&&u({action:a,location:y.location,delta:h})}function g(k,h){a=Ut.Push;let f=ru(y.location,k,h);c=p()+1;let m=Ad(f,c),j=y.createHref(f);try{l.pushState(m,"",j)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(j)}i&&u&&u({action:a,location:y.location,delta:1})}function w(k,h){a=Ut.Replace;let f=ru(y.location,k,h);c=p();let m=Ad(f,c),j=y.createHref(f);l.replaceState(m,"",j),i&&u&&u({action:a,location:y.location,delta:0})}function v(k){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof k=="string"?k:_l(k);return f=f.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return a},get location(){return e(o,l)},listen(k){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Od,d),u=k,()=>{o.removeEventListener(Od,d),u=null}},createHref(k){return t(o,k)},createURL:v,encodeLocation(k){let h=v(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(k){return l.go(k)}};return y}var Ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ld||(Ld={}));function Wm(e,t,n){return n===void 0&&(n="/"),Qm(e,t,n)}function Qm(e,t,n,r){let o=typeof t=="string"?_r(t):t,i=pc(o.pathname||"/",n);if(i==null)return null;let l=ep(e);Km(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=i6(i);a=n6(l[u],c)}return a}function ep(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Xt([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ep(i.children,t,p,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:e6(c,i.index),routesMeta:p})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of tp(i.path))o(i,l,u)}),t}function tp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=tp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Km(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gm=/^:[\w-]+$/,Ym=3,qm=2,Jm=1,Xm=10,Zm=-2,Fd=e=>e==="*";function e6(e,t){let n=e.split("/"),r=n.length;return n.some(Fd)&&(r+=Zm),t&&(r+=qm),n.filter(o=>!Fd(o)).reduce((o,i)=>o+(Gm.test(i)?Ym:i===""?Jm:Xm),r)}function t6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function n6(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",d=r6({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!d)return null;Object.assign(o,d.params),l.push({params:o,pathname:Xt([i,d.pathname]),pathnameBase:u6(Xt([i,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(i=Xt([i,d.pathnameBase]))}return l}function r6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=o6(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,p,d)=>{let{paramName:g,isOptional:w}=p;if(g==="*"){let y=a[d]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return w&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function o6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Z0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function i6(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Z0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function l6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_r(e):e;return{pathname:n?n.startsWith("/")?n:s6(n,t):t,search:c6(r),hash:d6(o)}}function s6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a6(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function np(e,t){let n=a6(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_r(e):(o=zo({},e),oe(!o.pathname||!o.pathname.includes("?"),Is("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),Is("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),Is("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;o.pathname=g.join("/")}a=d>=0?t[d]:"/"}let u=l6(o,a),c=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),u6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,d6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const op=["post","put","patch","delete"];new Set(op);const p6=["get",...op];new Set(p6);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}const hc=_.createContext(null),h6=_.createContext(null),Ln=_.createContext(null),ql=_.createContext(null),Fn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=_.createContext(null);function m6(e,t){let{relative:n}=t===void 0?{}:t;Mo()||oe(!1);let{basename:r,navigator:o}=_.useContext(Ln),{hash:i,pathname:l,search:a}=sp(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Xt([r,l])),o.createHref({pathname:u,search:a,hash:i})}function Mo(){return _.useContext(ql)!=null}function Io(){return Mo()||oe(!1),_.useContext(ql).location}function lp(e){_.useContext(Ln).static||_.useLayoutEffect(e)}function g6(){let{isDataRoute:e}=_.useContext(Fn);return e?T6():v6()}function v6(){Mo()||oe(!1);let e=_.useContext(hc),{basename:t,future:n,navigator:r}=_.useContext(Ln),{matches:o}=_.useContext(Fn),{pathname:i}=Io(),l=JSON.stringify(np(o,n.v7_relativeSplatPath)),a=_.useRef(!1);return lp(()=>{a.current=!0}),_.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=rp(c,JSON.parse(l),i,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Xt([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,l,i,e])}function sp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Ln),{matches:o}=_.useContext(Fn),{pathname:i}=Io(),l=JSON.stringify(np(o,r.v7_relativeSplatPath));return _.useMemo(()=>rp(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function x6(e,t){return y6(e,t)}function y6(e,t,n,r){Mo()||oe(!1);let{navigator:o,static:i}=_.useContext(Ln),{matches:l}=_.useContext(Fn),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let p=Io(),d;if(t){var g;let h=typeof t=="string"?_r(t):t;c==="/"||(g=h.pathname)!=null&&g.startsWith(c)||oe(!1),d=h}else d=p;let w=d.pathname||"/",v=w;if(c!=="/"){let h=c.replace(/^\//,"").split("/");v="/"+w.replace(/^\//,"").split("/").slice(h.length).join("/")}let y=Wm(e,{pathname:v}),k=C6(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},u,h.params),pathname:Xt([c,o.encodeLocation?o.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:Xt([c,o.encodeLocation?o.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),l,n,r);return t&&k?_.createElement(ql.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ut.Pop}},k):k}function w6(){let e=P6(),t=f6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:o},n):null,null)}const S6=_.createElement(w6,null);class j6 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Fn.Provider,{value:this.props.routeContext},_.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k6(e){let{routeContext:t,match:n,children:r}=e,o=_.useContext(hc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Fn.Provider,{value:t},r)}function C6(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||oe(!1),l=l.slice(0,Math.min(l.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let d=l[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:g,errors:w}=n,v=d.route.loader&&g[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((p,d,g)=>{let w,v=!1,y=null,k=null;n&&(w=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||S6,u&&(c<0&&g===0?(R6("route-fallback"),v=!0,k=null):c===g&&(v=!0,k=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,g+1)),f=()=>{let m;return w?m=y:v?m=k:d.route.Component?m=_.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=p,_.createElement(k6,{match:d,routeContext:{outlet:p,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?_.createElement(j6,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var ap=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ap||{}),up=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(up||{});function E6(e){let t=_.useContext(hc);return t||oe(!1),t}function _6(e){let t=_.useContext(h6);return t||oe(!1),t}function z6(e){let t=_.useContext(Fn);return t||oe(!1),t}function cp(e){let t=z6(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function P6(){var e;let t=_.useContext(ip),n=_6(up.UseRouteError),r=cp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function T6(){let{router:e}=E6(ap.UseNavigateStable),t=cp(),n=_.useRef(!1);return lp(()=>{n.current=!0}),_.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Po({fromRouteId:t},i)))},[e,t])}const Md={};function R6(e,t,n){Md[e]||(Md[e]=!0)}function N6(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function At(e){oe(!1)}function O6(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ut.Pop,navigator:i,static:l=!1,future:a}=e;Mo()&&oe(!1);let u=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:u,navigator:i,static:l,future:Po({v7_relativeSplatPath:!1},a)}),[u,a,i,l]);typeof r=="string"&&(r=_r(r));let{pathname:p="/",search:d="",hash:g="",state:w=null,key:v="default"}=r,y=_.useMemo(()=>{let k=pc(p,u);return k==null?null:{location:{pathname:k,search:d,hash:g,state:w,key:v},navigationType:o}},[u,p,d,g,w,v,o]);return y==null?null:_.createElement(Ln.Provider,{value:c},_.createElement(ql.Provider,{children:n,value:y}))}function A6(e){let{children:t,location:n}=e;return x6(ou(t),n)}new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,o)=>{if(!_.isValidElement(r))return;let i=[...t,o];if(r.type===_.Fragment){n.push.apply(n,ou(r.props.children,i));return}r.type!==At&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ou(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function L6(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function F6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function M6(e,t){return e.button===0&&(!t||t==="_self")&&!F6(e)}const I6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$6="6";try{window.__reactRouterVersion=$6}catch{}const b6="startTransition",Id=Rh[b6];function D6(e){let{basename:t,children:n,future:r,window:o}=e,i=_.useRef();i.current==null&&(i.current=Hm({window:o,v5Compat:!0}));let l=i.current,[a,u]=_.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},p=_.useCallback(d=>{c&&Id?Id(()=>u(d)):u(d)},[u,c]);return _.useLayoutEffect(()=>l.listen(p),[l,p]),_.useEffect(()=>N6(r),[r]),_.createElement(O6,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const B6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=_.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:p,viewTransition:d}=t,g=L6(t,I6),{basename:w}=_.useContext(Ln),v,y=!1;if(typeof c=="string"&&H6.test(c)&&(v=c,B6))try{let m=new URL(window.location.href),j=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=pc(j.pathname,w);j.origin===m.origin&&C!=null?c=C+j.search+j.hash:y=!0}catch{}let k=m6(c,{relative:o}),h=U6(c,{replace:l,state:a,target:u,preventScrollReset:p,relative:o,viewTransition:d});function f(m){r&&r(m),m.defaultPrevented||h(m)}return _.createElement("a",iu({},g,{href:v||k,onClick:y||i?r:f,ref:n,target:u}))});var $d;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($d||($d={}));var bd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bd||(bd={}));function U6(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=t===void 0?{}:t,u=g6(),c=Io(),p=sp(e,{relative:l});return _.useCallback(d=>{if(M6(d,n)){d.preventDefault();let g=r!==void 0?r:_l(c)===_l(p);u(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[c,u,p,r,o,n,e,i,l,a])}var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Re.apply(this,arguments)};function zl(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",ao="-moz-",B="-webkit-",dp="comm",Jl="rule",mc="decl",V6="@import",fp="@keyframes",W6="@layer",pp=Math.abs,gc=String.fromCharCode,lu=Object.assign;function Q6(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function hp(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Vi(e,t,n){return e.indexOf(t,n)}function fe(e,t){return e.charCodeAt(t)|0}function xr(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function mp(e){return e.length}function Xr(e,t){return t.push(e),e}function K6(e,t){return e.map(t).join("")}function Dd(e,t){return e.filter(function(n){return!wt(n,t)})}var Xl=1,yr=1,gp=0,Xe=0,ne=0,zr="";function Zl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Xl,column:yr,length:l,return:"",siblings:a}}function Lt(e,t){return lu(Zl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=Lt(e.root,{children:[e]});Xr(e,e.siblings)}function G6(){return ne}function Y6(){return ne=Xe>0?fe(zr,--Xe):0,yr--,ne===10&&(yr=1,Xl--),ne}function lt(){return ne=Xe<gp?fe(zr,Xe++):0,yr++,ne===10&&(yr=1,Xl++),ne}function kn(){return fe(zr,Xe)}function Wi(){return Xe}function es(e,t){return xr(zr,e,t)}function su(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q6(e){return Xl=yr=1,gp=ft(zr=e),Xe=0,[]}function J6(e){return zr="",e}function $s(e){return hp(es(Xe-1,au(e===91?e+2:e===40?e+1:e)))}function X6(e){for(;(ne=kn())&&ne<33;)lt();return su(e)>2||su(ne)>3?"":" "}function Z6(e,t){for(;--t&&lt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return es(e,Wi()+(t<6&&kn()==32&&lt()==32))}function au(e){for(;lt();)switch(ne){case e:return Xe;case 34:case 39:e!==34&&e!==39&&au(ne);break;case 40:e===41&&au(e);break;case 92:lt();break}return Xe}function e4(e,t){for(;lt()&&e+ne!==57;)if(e+ne===84&&kn()===47)break;return"/*"+es(t,Xe-1)+"*"+gc(e===47?e:lt())}function t4(e){for(;!su(kn());)lt();return es(e,Xe)}function n4(e){return J6(Qi("",null,null,null,[""],e=q6(e),0,[0],e))}function Qi(e,t,n,r,o,i,l,a,u){for(var c=0,p=0,d=l,g=0,w=0,v=0,y=1,k=1,h=1,f=0,m="",j=o,C=i,z=r,S=m;k;)switch(v=f,f=lt()){case 40:if(v!=108&&fe(S,d-1)==58){Vi(S+=$($s(f),"&","&\f"),"&\f",pp(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=$s(f);break;case 9:case 10:case 13:case 32:S+=X6(v);break;case 92:S+=Z6(Wi()-1,7);continue;case 47:switch(kn()){case 42:case 47:Xr(r4(e4(lt(),Wi()),t,n,u),u);break;default:S+="/"}break;case 123*y:a[c++]=ft(S)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+p:h==-1&&(S=$(S,/\f/g,"")),w>0&&ft(S)-d&&Xr(w>32?Hd(S+";",r,n,d-1,u):Hd($(S," ","")+";",r,n,d-2,u),u);break;case 59:S+=";";default:if(Xr(z=Bd(S,t,n,c,p,o,a,m,j=[],C=[],d,i),i),f===123)if(p===0)Qi(S,t,z,z,j,i,d,a,C);else switch(g===99&&fe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Qi(e,z,z,r&&Xr(Bd(e,z,z,0,0,o,a,m,o,j=[],d,C),C),o,C,d,a,r?j:C);break;default:Qi(S,z,z,z,[""],C,0,a,C)}}c=p=w=0,y=h=1,m=S="",d=l;break;case 58:d=1+ft(S),w=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Y6()==125)continue}switch(S+=gc(f),f*y){case 38:h=p>0?1:(S+="\f",-1);break;case 44:a[c++]=(ft(S)-1)*h,h=1;break;case 64:kn()===45&&(S+=$s(lt())),g=kn(),p=d=ft(m=S+=t4(Wi())),f++;break;case 45:v===45&&ft(S)==2&&(y=0)}}return i}function Bd(e,t,n,r,o,i,l,a,u,c,p,d){for(var g=o-1,w=o===0?i:[""],v=mp(w),y=0,k=0,h=0;y<r;++y)for(var f=0,m=xr(e,g+1,g=pp(k=l[y])),j=e;f<v;++f)(j=hp(k>0?w[f]+" "+m:$(m,/&\f/g,w[f])))&&(u[h++]=j);return Zl(e,t,n,o===0?Jl:a,u,c,p,d)}function r4(e,t,n,r){return Zl(e,t,n,dp,gc(G6()),xr(e,2,-2),0,r)}function Hd(e,t,n,r,o){return Zl(e,t,n,mc,xr(e,0,r),xr(e,r+1,-1),r,o)}function vp(e,t,n){switch(Q6(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 4789:return ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+ao+e+K+e+e;case 5936:switch(fe(e,t+11)){case 114:return B+e+K+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+K+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+K+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+K+e+e;case 6165:return B+e+K+"flex-"+e+e;case 5187:return B+e+$(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return B+e+K+"flex-item-"+$(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":K+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return B+e+K+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+K+$(e,"shrink","negative")+e;case 5292:return B+e+K+$(e,"basis","preferred-size")+e;case 6060:return B+"box-"+$(e,"-grow","")+B+e+K+$(e,"grow","positive")+e;case 4554:return B+$(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4200:if(!wt(e,/flex-|baseline/))return K+"grid-column-align"+xr(e,t)+e;break;case 2592:case 3360:return K+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,wt(r.props,/grid-\w+-end/)})?~Vi(e+(n=n[t].value),"span",0)?e:K+$(e,"-start","")+e+K+"grid-row-span:"+(~Vi(n,"span",0)?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":K+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:K+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+ao+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Vi(e,"stretch",0)?vp($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,u,c){return K+o+":"+i+c+(l?K+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(fe(e,t+6)===121)return $(e,":",":"+B)+e;break;case 6444:switch(fe(e,fe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(fe(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+K+"$2box$3")+e;case 100:return $(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Pl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function o4(e,t,n,r){switch(e.type){case W6:if(e.children.length)break;case V6:case mc:return e.return=e.return||e.value;case dp:return"";case fp:return e.return=e.value+"{"+Pl(e.children,r)+"}";case Jl:if(!ft(e.value=e.props.join(",")))return""}return ft(n=Pl(e.children,r))?e.return=e.value+"{"+n+"}":""}function i4(e){var t=mp(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function l4(e){return function(t){t.root||(t=t.return)&&e(t)}}function s4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mc:e.return=vp(e.value,e.length,n);return;case fp:return Pl([Lt(e,{value:$(e.value,"@","@"+B)})],r);case Jl:if(e.length)return K6(n=e.props,function(o){switch(wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(Lt(e,{props:[$(o,/:(read-\w+)/,":"+ao+"$1")]})),In(Lt(e,{props:[o]})),lu(e,{props:Dd(n,r)});break;case"::placeholder":In(Lt(e,{props:[$(o,/:(plac\w+)/,":"+B+"input-$1")]})),In(Lt(e,{props:[$(o,/:(plac\w+)/,":"+ao+"$1")]})),In(Lt(e,{props:[$(o,/:(plac\w+)/,K+"input-$1")]})),In(Lt(e,{props:[o]})),lu(e,{props:Dd(n,r)});break}return""})}}var a4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie={},wr=typeof process<"u"&&Ie!==void 0&&(Ie.REACT_APP_SC_ATTR||Ie.SC_ATTR)||"data-styled",xp="active",yp="data-styled-version",ts="6.1.16",vc=`/*!sc*/
`,Tl=typeof window<"u"&&"HTMLElement"in window,u4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==""?Ie.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ie.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.SC_DISABLE_SPEEDY!==void 0&&Ie.SC_DISABLE_SPEEDY!==""&&Ie.SC_DISABLE_SPEEDY!=="false"&&Ie.SC_DISABLE_SPEEDY),ns=Object.freeze([]),Sr=Object.freeze({});function c4(e,t,n){return n===void 0&&(n=Sr),e.theme!==n.theme&&e.theme||t||n.theme}var wp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),d4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,f4=/(^-|-$)/g;function Ud(e){return e.replace(d4,"-").replace(f4,"")}var p4=/(a)(d)/gi,li=52,Vd=function(e){return String.fromCharCode(e+(e>25?39:97))};function uu(e){var t,n="";for(t=Math.abs(e);t>li;t=t/li|0)n=Vd(t%li)+n;return(Vd(t%li)+n).replace(p4,"$1-$2")}var bs,Sp=5381,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jp=function(e){return or(Sp,e)};function h4(e){return uu(jp(e)>>>0)}function m4(e){return e.displayName||e.name||"Component"}function Ds(e){return typeof e=="string"&&!0}var kp=typeof Symbol=="function"&&Symbol.for,Cp=kp?Symbol.for("react.memo"):60115,g4=kp?Symbol.for("react.forward_ref"):60112,v4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ep={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y4=((bs={})[g4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bs[Cp]=Ep,bs);function Wd(e){return("type"in(t=e)&&t.type.$$typeof)===Cp?Ep:"$$typeof"in e?y4[e.$$typeof]:v4;var t}var w4=Object.defineProperty,S4=Object.getOwnPropertyNames,Qd=Object.getOwnPropertySymbols,j4=Object.getOwnPropertyDescriptor,k4=Object.getPrototypeOf,Kd=Object.prototype;function _p(e,t,n){if(typeof t!="string"){if(Kd){var r=k4(t);r&&r!==Kd&&_p(e,r,n)}var o=S4(t);Qd&&(o=o.concat(Qd(t)));for(var i=Wd(e),l=Wd(t),a=0;a<o.length;++a){var u=o[a];if(!(u in x4||n&&n[u]||l&&u in l||i&&u in i)){var c=j4(t,u);try{w4(e,u,c)}catch{}}}}return e}function jr(e){return typeof e=="function"}function xc(e){return typeof e=="object"&&"styledComponentId"in e}function yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function To(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cu(e,t,n){if(n===void 0&&(n=!1),!n&&!To(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cu(e[r],t[r]);else if(To(t))for(var r in t)e[r]=cu(e[r],t[r]);return e}function yc(e,t){Object.defineProperty(e,"toString",{value:t})}function $o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var C4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw $o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(vc);return n},e}(),Ki=new Map,Rl=new Map,Gi=1,si=function(e){if(Ki.has(e))return Ki.get(e);for(;Rl.has(Gi);)Gi++;var t=Gi++;return Ki.set(e,t),Rl.set(t,e),t},E4=function(e,t){Gi=t+1,Ki.set(e,t),Rl.set(t,e)},_4="style[".concat(wr,"][").concat(yp,'="').concat(ts,'"]'),z4=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),P4=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},T4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vc),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var u=a.match(z4);if(u){var c=0|parseInt(u[1],10),p=u[2];c!==0&&(E4(p,c),P4(e,p,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Yd=function(e){for(var t=document.querySelectorAll(_4),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==xp&&(T4(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function R4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var zp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(wr,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(wr,xp),r.setAttribute(yp,ts);var l=R4();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},N4=function(){function e(t){this.element=zp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw $o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),O4=function(){function e(t){this.element=zp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),A4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qd=Tl,L4={isServer:!Tl,useCSSOMInjection:!u4},Pp=function(){function e(t,n,r){t===void 0&&(t=Sr),n===void 0&&(n={});var o=this;this.options=Re(Re({},L4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tl&&qd&&(qd=!1,Yd(this)),yc(this,function(){return function(i){for(var l=i.getTag(),a=l.length,u="",c=function(d){var g=function(h){return Rl.get(h)}(d);if(g===void 0)return"continue";var w=i.names.get(g),v=l.getGroup(d);if(w===void 0||!w.size||v.length===0)return"continue";var y="".concat(wr,".g").concat(d,'[id="').concat(g,'"]'),k="";w!==void 0&&w.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),u+="".concat(v).concat(y,'{content:"').concat(k,'"}').concat(vc)},p=0;p<a;p++)c(p);return u}(o)})}return e.registerId=function(t){return si(t)},e.prototype.rehydrate=function(){!this.server&&Tl&&Yd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new A4(o):r?new N4(o):new O4(o)}(this.options),new C4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(si(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),F4=/&/g,M4=/^\s*\/\/.*$/gm;function Tp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Tp(n.children,t)),n})}function I4(e){var t,n,r,o=Sr,i=o.options,l=i===void 0?Sr:i,a=o.plugins,u=a===void 0?ns:a,c=function(g,w,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},p=u.slice();p.push(function(g){g.type===Jl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(F4,n).replace(r,c))}),l.prefix&&p.push(s4),p.push(o4);var d=function(g,w,v,y){w===void 0&&(w=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(M4,""),h=n4(v||w?"".concat(v," ").concat(w," { ").concat(k," }"):k);l.namespace&&(h=Tp(h,l.namespace));var f=[];return Pl(h,i4(p.concat(l4(function(m){return f.push(m)})))),f};return d.hash=u.length?u.reduce(function(g,w){return w.name||$o(15),or(g,w.name)},Sp).toString():"",d}var $4=new Pp,du=I4(),Rp=Ne.createContext({shouldForwardProp:void 0,styleSheet:$4,stylis:du});Rp.Consumer;Ne.createContext(void 0);function Jd(){return _.useContext(Rp)}var b4=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=du);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yc(this,function(){throw $o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=du),this.name+t.hash},e}(),D4=function(e){return e>="A"&&e<="Z"};function Xd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;D4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Np=function(e){return e==null||e===!1||e===""},Op=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Np(i)&&(Array.isArray(i)&&i.isCss||jr(i)?r.push("".concat(Xd(o),":"),i,";"):To(i)?r.push.apply(r,zl(zl(["".concat(o," {")],Op(i),!1),["}"],!1)):r.push("".concat(Xd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in a4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cn(e,t,n,r){if(Np(e))return[];if(xc(e))return[".".concat(e.styledComponentId)];if(jr(e)){if(!jr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Cn(o,t,n,r)}var i;return e instanceof b4?n?(e.inject(n,r),[e.getName(r)]):[e]:To(e)?Op(e):Array.isArray(e)?Array.prototype.concat.apply(ns,e.map(function(l){return Cn(l,t,n,r)})):[e.toString()]}function B4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!xc(n))return!1}return!0}var H4=jp(ts),U4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&B4(t),this.componentId=n,this.baseHash=or(H4,n),this.baseStyle=r,Pp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=yn(o,this.staticRulesId);else{var i=Gd(Cn(this.rules,t,n,r)),l=uu(or(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=yn(o,l),this.staticRulesId=l}else{for(var u=or(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")c+=d;else if(d){var g=Gd(Cn(d,t,n,r));u=or(u,g+p),c+=g}}if(c){var w=uu(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),o=yn(o,w)}}return o},e}(),Ap=Ne.createContext(void 0);Ap.Consumer;var Bs={};function V4(e,t,n){var r=xc(e),o=e,i=!Ds(e),l=t.attrs,a=l===void 0?ns:l,u=t.componentId,c=u===void 0?function(j,C){var z=typeof j!="string"?"sc":Ud(j);Bs[z]=(Bs[z]||0)+1;var S="".concat(z,"-").concat(h4(ts+z+Bs[z]));return C?"".concat(C,"-").concat(S):S}(t.displayName,t.parentComponentId):u,p=t.displayName,d=p===void 0?function(j){return Ds(j)?"styled.".concat(j):"Styled(".concat(m4(j),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Ud(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(j,C){return y(j,C)&&k(j,C)}}else v=y}var h=new U4(n,g,r?o.componentStyle:void 0);function f(j,C){return function(z,S,T){var F=z.attrs,O=z.componentStyle,ve=z.defaultProps,ln=z.foldedComponentIds,sn=z.styledComponentId,Bo=z.target,us=Ne.useContext(Ap),Rr=Jd(),an=z.shouldForwardProp||Rr.shouldForwardProp,R=c4(S,us,ve)||Sr,L=function(Rt,Me,vt){for(var Nr,cn=Re(Re({},Me),{className:void 0,theme:vt}),cs=0;cs<Rt.length;cs+=1){var Ho=jr(Nr=Rt[cs])?Nr(cn):Nr;for(var Nt in Ho)cn[Nt]=Nt==="className"?yn(cn[Nt],Ho[Nt]):Nt==="style"?Re(Re({},cn[Nt]),Ho[Nt]):Ho[Nt]}return Me.className&&(cn.className=yn(cn.className,Me.className)),cn}(F,S,R),M=L.as||Bo,U={};for(var V in L)L[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&L.theme===R||(V==="forwardedAs"?U.as=L.forwardedAs:an&&!an(V,M)||(U[V]=L[V]));var un=function(Rt,Me){var vt=Jd(),Nr=Rt.generateAndInjectStyles(Me,vt.styleSheet,vt.stylis);return Nr}(O,L),Ze=yn(ln,sn);return un&&(Ze+=" "+un),L.className&&(Ze+=" "+L.className),U[Ds(M)&&!wp.has(M)?"class":"className"]=Ze,T&&(U.ref=T),_.createElement(M,U)}(m,j,C)}f.displayName=d;var m=Ne.forwardRef(f);return m.attrs=w,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?yn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=g,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(C){for(var z=[],S=1;S<arguments.length;S++)z[S-1]=arguments[S];for(var T=0,F=z;T<F.length;T++)cu(C,F[T],!0);return C}({},o.defaultProps,j):j}}),yc(m,function(){return".".concat(m.styledComponentId)}),i&&_p(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Zd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var e1=function(e){return Object.assign(e,{isCss:!0})};function Ft(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jr(e)||To(e))return e1(Cn(Zd(ns,zl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Cn(r):e1(Cn(Zd(r,t)))}function fu(e,t,n){if(n===void 0&&(n=Sr),!t)throw $o(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Ft.apply(void 0,zl([o],i,!1)))};return r.attrs=function(o){return fu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return fu(e,t,Re(Re({},n),o))},r}var Lp=function(e){return fu(V4,e)},x=Lp;wp.forEach(function(e){x[e]=Lp(e)});var Fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t1=Ne.createContext&&Ne.createContext(Fp),Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Zt.apply(this,arguments)},W4=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Mp(e){return e&&e.map(function(t,n){return Ne.createElement(t.tag,Zt({key:n},t.attr),Mp(t.child))})}function A(e){return function(t){return Ne.createElement(Q4,Zt({attr:Zt({},e.attr)},t),Mp(e.child))}}function Q4(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=W4(e,["attr","size","title"]),a=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Ne.createElement("svg",Zt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Zt(Zt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Ne.createElement("title",null,i),e.children)};return t1!==void 0?Ne.createElement(t1.Consumer,null,function(n){return t(n)}):t(Fp)}function K4(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"}}]})(e)}function G4(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"}}]})(e)}function Ip(e){return A({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Y4(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"}}]})(e)}function $p(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"}}]})(e)}function bp(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"}}]})(e)}function q4(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"}}]})(e)}function J4(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96zm231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z"}}]})(e)}function X4(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}}]})(e)}function n1(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function Z4(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"}}]})(e)}function eg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"}}]})(e)}function tg(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function ng(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function rg(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"}}]})(e)}function Yi(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"}}]})(e)}function og(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function ig(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function lg(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"}}]})(e)}function sg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function Hs(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}}]})(e)}function Us(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function Vs(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}}]})(e)}function ag(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(e)}function r1(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(e)}function ug(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"}}]})(e)}function cg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"}}]})(e)}function dg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"}}]})(e)}function fg(e){return A({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"}}]})(e)}function pg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(e)}function hg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"}}]})(e)}function mg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function Ws(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function gg(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function qi(e){return A({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}}]})(e)}function o1(e){return A({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"}}]})(e)}function vg(e){return A({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function i1(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function Ji(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"}}]})(e)}function xg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function l1(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function yg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"}}]})(e)}function wg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function Sg(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(e)}function s1(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function jg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"}}]})(e)}function kg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function ai(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}}]})(e)}function Qs(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}}]})(e)}function a1(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"}}]})(e)}function u1(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function Cg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"}}]})(e)}function c1(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}}]})(e)}function Eg(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"}}]})(e)}function _g(e){return A({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function zg(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function Pg(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function Tg(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"}}]})(e)}function Nl(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function Xi(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}function Rg(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"}}]})(e)}function Dp(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ng}=Object.prototype,{getPrototypeOf:wc}=Object,rs=(e=>t=>{const n=Ng.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),at=e=>(e=e.toLowerCase(),t=>rs(t)===e),os=e=>t=>typeof t===e,{isArray:Pr}=Array,Ro=os("undefined");function Og(e){return e!==null&&!Ro(e)&&e.constructor!==null&&!Ro(e.constructor)&&Be(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Bp=at("ArrayBuffer");function Ag(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Bp(e.buffer),t}const Lg=os("string"),Be=os("function"),Hp=os("number"),is=e=>e!==null&&typeof e=="object",Fg=e=>e===!0||e===!1,Zi=e=>{if(rs(e)!=="object")return!1;const t=wc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Mg=at("Date"),Ig=at("File"),$g=at("Blob"),bg=at("FileList"),Dg=e=>is(e)&&Be(e.pipe),Bg=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Be(e.append)&&((t=rs(e))==="formdata"||t==="object"&&Be(e.toString)&&e.toString()==="[object FormData]"))},Hg=at("URLSearchParams"),[Ug,Vg,Wg,Qg]=["ReadableStream","Request","Response","Headers"].map(at),Kg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Pr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let a;for(r=0;r<l;r++)a=i[r],t.call(null,e[a],a,e)}}function Up(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vp=e=>!Ro(e)&&e!==wn;function pu(){const{caseless:e}=Vp(this)&&this||{},t={},n=(r,o)=>{const i=e&&Up(t,o)||o;Zi(t[i])&&Zi(r)?t[i]=pu(t[i],r):Zi(r)?t[i]=pu({},r):Pr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&bo(arguments[r],n);return t}const Gg=(e,t,n,{allOwnKeys:r}={})=>(bo(t,(o,i)=>{n&&Be(o)?e[i]=Dp(o,n):e[i]=o},{allOwnKeys:r}),e),Yg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Jg=(e,t,n,r)=>{let o,i,l;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&wc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zg=e=>{if(!e)return null;if(Pr(e))return e;let t=e.length;if(!Hp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},e3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wc(Uint8Array)),t3=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},n3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},r3=at("HTMLFormElement"),o3=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),d1=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),i3=at("RegExp"),Wp=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bo(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},l3=e=>{Wp(e,(t,n)=>{if(Be(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Be(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},s3=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Pr(e)?r(e):r(String(e).split(t)),n},a3=()=>{},u3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function c3(e){return!!(e&&Be(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const d3=e=>{const t=new Array(10),n=(r,o)=>{if(is(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Pr(r)?[]:{};return bo(r,(l,a)=>{const u=n(l,o+1);!Ro(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},f3=at("AsyncFunction"),p3=e=>e&&(is(e)||Be(e))&&Be(e.then)&&Be(e.catch),Qp=((e,t)=>e?setImmediate:t?((n,r)=>(wn.addEventListener("message",({source:o,data:i})=>{o===wn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),wn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Be(wn.postMessage)),h3=typeof queueMicrotask<"u"?queueMicrotask.bind(wn):typeof process<"u"&&process.nextTick||Qp,E={isArray:Pr,isArrayBuffer:Bp,isBuffer:Og,isFormData:Bg,isArrayBufferView:Ag,isString:Lg,isNumber:Hp,isBoolean:Fg,isObject:is,isPlainObject:Zi,isReadableStream:Ug,isRequest:Vg,isResponse:Wg,isHeaders:Qg,isUndefined:Ro,isDate:Mg,isFile:Ig,isBlob:$g,isRegExp:i3,isFunction:Be,isStream:Dg,isURLSearchParams:Hg,isTypedArray:e3,isFileList:bg,forEach:bo,merge:pu,extend:Gg,trim:Kg,stripBOM:Yg,inherits:qg,toFlatObject:Jg,kindOf:rs,kindOfTest:at,endsWith:Xg,toArray:Zg,forEachEntry:t3,matchAll:n3,isHTMLForm:r3,hasOwnProperty:d1,hasOwnProp:d1,reduceDescriptors:Wp,freezeMethods:l3,toObjectSet:s3,toCamelCase:o3,noop:a3,toFiniteNumber:u3,findKey:Up,global:wn,isContextDefined:Vp,isSpecCompliantForm:c3,toJSONObject:d3,isAsyncFn:f3,isThenable:p3,setImmediate:Qp,asap:h3};function I(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}E.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const Kp=I.prototype,Gp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Gp[e]={value:e}});Object.defineProperties(I,Gp);Object.defineProperty(Kp,"isAxiosError",{value:!0});I.from=(e,t,n,r,o,i)=>{const l=Object.create(Kp);return E.toFlatObject(e,l,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),I.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const m3=null;function hu(e){return E.isPlainObject(e)||E.isArray(e)}function Yp(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function f1(e,t,n){return e?e.concat(t).map(function(o,i){return o=Yp(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function g3(e){return E.isArray(e)&&!e.some(hu)}const v3=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function ls(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!E.isUndefined(k[y])});const r=n.metaTokens,o=n.visitor||p,i=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(o))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(E.isDate(v))return v.toISOString();if(!u&&E.isBlob(v))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(v)||E.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,y,k){let h=v;if(v&&!k&&typeof v=="object"){if(E.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(E.isArray(v)&&g3(v)||(E.isFileList(v)||E.endsWith(y,"[]"))&&(h=E.toArray(v)))return y=Yp(y),h.forEach(function(m,j){!(E.isUndefined(m)||m===null)&&t.append(l===!0?f1([y],j,i):l===null?y:y+"[]",c(m))}),!1}return hu(v)?!0:(t.append(f1(k,y,i),c(v)),!1)}const d=[],g=Object.assign(v3,{defaultVisitor:p,convertValue:c,isVisitable:hu});function w(v,y){if(!E.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(v),E.forEach(v,function(h,f){(!(E.isUndefined(h)||h===null)&&o.call(t,h,E.isString(f)?f.trim():f,y,g))===!0&&w(h,y?y.concat(f):[f])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function p1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Sc(e,t){this._pairs=[],e&&ls(e,this,t)}const qp=Sc.prototype;qp.append=function(t,n){this._pairs.push([t,n])};qp.toString=function(t){const n=t?function(r){return t.call(this,r,p1)}:p1;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function x3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jp(e,t,n){if(!t)return e;const r=n&&n.encode||x3;E.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=E.isURLSearchParams(t)?t.toString():new Sc(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class h1{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},y3=typeof URLSearchParams<"u"?URLSearchParams:Sc,w3=typeof FormData<"u"?FormData:null,S3=typeof Blob<"u"?Blob:null,j3={isBrowser:!0,classes:{URLSearchParams:y3,FormData:w3,Blob:S3},protocols:["http","https","file","blob","url","data"]},jc=typeof window<"u"&&typeof document<"u",mu=typeof navigator=="object"&&navigator||void 0,k3=jc&&(!mu||["ReactNative","NativeScript","NS"].indexOf(mu.product)<0),C3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",E3=jc&&window.location.href||"http://localhost",_3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jc,hasStandardBrowserEnv:k3,hasStandardBrowserWebWorkerEnv:C3,navigator:mu,origin:E3},Symbol.toStringTag,{value:"Module"})),je={..._3,...j3};function z3(e,t){return ls(e,new je.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return je.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function P3(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function T3(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Zp(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const a=Number.isFinite(+l),u=i>=n.length;return l=!l&&E.isArray(o)?o.length:l,u?(E.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!a):((!o[l]||!E.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&E.isArray(o[l])&&(o[l]=T3(o[l])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,o)=>{t(P3(r),o,n,0)}),n}return null}function R3(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Do={transitional:Xp,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=E.isObject(t);if(i&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return o?JSON.stringify(Zp(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t)||E.isReadableStream(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return z3(t,this.formSerializer).toString();if((a=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ls(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),R3(t)):t}],transformResponse:[function(t){const n=this.transitional||Do.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(E.isResponse(t)||E.isReadableStream(t))return t;if(t&&E.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?I.from(a,I.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:je.classes.FormData,Blob:je.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Do.headers[e]={}});const N3=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),O3=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&N3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},m1=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function el(e){return e===!1||e==null?e:E.isArray(e)?e.map(el):String(e)}function A3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const L3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ks(e,t,n,r,o){if(E.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function F3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function M3(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}let Fe=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const p=Dr(u);if(!p)throw new Error("header name must be a non-empty string");const d=E.findKey(o,p);(!d||o[d]===void 0||c===!0||c===void 0&&o[d]!==!1)&&(o[d||u]=el(a))}const l=(a,u)=>E.forEach(a,(c,p)=>i(c,p,u));if(E.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(E.isString(t)&&(t=t.trim())&&!L3(t))l(O3(t),n);else if(E.isHeaders(t))for(const[a,u]of t.entries())i(u,a,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Dr(t),t){const r=E.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return A3(o);if(E.isFunction(n))return n.call(this,o,r);if(E.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Dr(l),l){const a=E.findKey(r,l);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],o=!0)}}return E.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ks(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return E.forEach(this,(o,i)=>{const l=E.findKey(r,i);if(l){n[l]=el(o),delete n[i];return}const a=t?F3(i):String(i).trim();a!==i&&delete n[i],n[a]=el(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[m1]=this[m1]={accessors:{}}).accessors,o=this.prototype;function i(l){const a=Dr(l);r[a]||(M3(o,l),r[a]=!0)}return E.isArray(t)?t.forEach(i):i(t),this}};Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(Fe);function Gs(e,t){const n=this||Do,r=t||n,o=Fe.from(r.headers);let i=r.data;return E.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function eh(e){return!!(e&&e.__CANCEL__)}function Tr(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(Tr,I,{__CANCEL__:!0});function th(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function I3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),p=r[i];l||(l=c),n[o]=u,r[o]=c;let d=i,g=0;for(;d!==o;)g+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-l<t)return;const w=p&&c-p;return w?Math.round(g*1e3/w):void 0}}function b3(e,t){let n=0,r=1e3/t,o,i;const l=(c,p=Date.now())=>{n=p,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const p=Date.now(),d=p-n;d>=r?l(c,p):(o=c,i||(i=setTimeout(()=>{i=null,l(o)},r-d)))},()=>o&&l(o)]}const Ol=(e,t,n=3)=>{let r=0;const o=$3(50,250);return b3(i=>{const l=i.loaded,a=i.lengthComputable?i.total:void 0,u=l-r,c=o(u),p=l<=a;r=l;const d={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&p?(a-l)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(d)},n)},g1=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},v1=e=>(...t)=>E.asap(()=>e(...t)),D3=je.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,je.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(je.origin),je.navigator&&/(msie|trident)/i.test(je.navigator.userAgent)):()=>!0,B3=je.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const l=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),E.isString(r)&&l.push("path="+r),E.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function H3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function U3(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function nh(e,t,n){let r=!H3(t);return e&&(r||n==!1)?U3(e,t):t}const x1=e=>e instanceof Fe?{...e}:e;function Nn(e,t){t=t||{};const n={};function r(c,p,d,g){return E.isPlainObject(c)&&E.isPlainObject(p)?E.merge.call({caseless:g},c,p):E.isPlainObject(p)?E.merge({},p):E.isArray(p)?p.slice():p}function o(c,p,d,g){if(E.isUndefined(p)){if(!E.isUndefined(c))return r(void 0,c,d,g)}else return r(c,p,d,g)}function i(c,p){if(!E.isUndefined(p))return r(void 0,p)}function l(c,p){if(E.isUndefined(p)){if(!E.isUndefined(c))return r(void 0,c)}else return r(void 0,p)}function a(c,p,d){if(d in t)return r(c,p);if(d in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(c,p,d)=>o(x1(c),x1(p),d,!0)};return E.forEach(Object.keys(Object.assign({},e,t)),function(p){const d=u[p]||o,g=d(e[p],t[p],p);E.isUndefined(g)&&d!==a||(n[p]=g)}),n}const rh=e=>{const t=Nn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:a}=t;t.headers=l=Fe.from(l),t.url=Jp(nh(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&l.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(E.isFormData(n)){if(je.hasStandardBrowserEnv||je.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((u=l.getContentType())!==!1){const[c,...p]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];l.setContentType([c||"multipart/form-data",...p].join("; "))}}if(je.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(t)),r||r!==!1&&D3(t.url))){const c=o&&i&&B3.read(i);c&&l.set(o,c)}return t},V3=typeof XMLHttpRequest<"u",W3=V3&&function(e){return new Promise(function(n,r){const o=rh(e);let i=o.data;const l=Fe.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,p,d,g,w,v;function y(){w&&w(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let k=new XMLHttpRequest;k.open(o.method.toUpperCase(),o.url,!0),k.timeout=o.timeout;function h(){if(!k)return;const m=Fe.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:m,config:e,request:k};th(function(S){n(S),y()},function(S){r(S),y()},C),k=null}"onloadend"in k?k.onloadend=h:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(h)},k.onabort=function(){k&&(r(new I("Request aborted",I.ECONNABORTED,e,k)),k=null)},k.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){let j=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||Xp;o.timeoutErrorMessage&&(j=o.timeoutErrorMessage),r(new I(j,C.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,k)),k=null},i===void 0&&l.setContentType(null),"setRequestHeader"in k&&E.forEach(l.toJSON(),function(j,C){k.setRequestHeader(C,j)}),E.isUndefined(o.withCredentials)||(k.withCredentials=!!o.withCredentials),a&&a!=="json"&&(k.responseType=o.responseType),c&&([g,v]=Ol(c,!0),k.addEventListener("progress",g)),u&&k.upload&&([d,w]=Ol(u),k.upload.addEventListener("progress",d),k.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(p=m=>{k&&(r(!m||m.type?new Tr(null,e,k):m),k.abort(),k=null)},o.cancelToken&&o.cancelToken.subscribe(p),o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p)));const f=I3(o.url);if(f&&je.protocols.indexOf(f)===-1){r(new I("Unsupported protocol "+f+":",I.ERR_BAD_REQUEST,e));return}k.send(i||null)})},Q3=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const p=c instanceof Error?c:this.reason;r.abort(p instanceof I?p:new Tr(p instanceof Error?p.message:p))}};let l=t&&setTimeout(()=>{l=null,i(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const a=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>E.asap(a),u}},K3=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},G3=async function*(e,t){for await(const n of Y3(e))yield*K3(n,t)},Y3=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},y1=(e,t,n,r)=>{const o=G3(e,t);let i=0,l,a=u=>{l||(l=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:p}=await o.next();if(c){a(),u.close();return}let d=p.byteLength;if(n){let g=i+=d;n(g)}u.enqueue(new Uint8Array(p))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},ss=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",oh=ss&&typeof ReadableStream=="function",q3=ss&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ih=(e,...t)=>{try{return!!e(...t)}catch{return!1}},J3=oh&&ih(()=>{let e=!1;const t=new Request(je.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),w1=64*1024,gu=oh&&ih(()=>E.isReadableStream(new Response("").body)),Al={stream:gu&&(e=>e.body)};ss&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Al[t]&&(Al[t]=E.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const X3=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(je.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await q3(e)).byteLength},Z3=async(e,t)=>{const n=E.toFiniteNumber(e.getContentLength());return n??X3(t)},ev=ss&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:p,withCredentials:d="same-origin",fetchOptions:g}=rh(e);c=c?(c+"").toLowerCase():"text";let w=Q3([o,i&&i.toAbortSignal()],l),v;const y=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let k;try{if(u&&J3&&n!=="get"&&n!=="head"&&(k=await Z3(p,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),z;if(E.isFormData(r)&&(z=C.headers.get("content-type"))&&p.setContentType(z),C.body){const[S,T]=g1(k,Ol(v1(u)));r=y1(C.body,w1,S,T)}}E.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...g,signal:w,method:n.toUpperCase(),headers:p.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let f=await fetch(v);const m=gu&&(c==="stream"||c==="response");if(gu&&(a||m&&y)){const C={};["status","statusText","headers"].forEach(F=>{C[F]=f[F]});const z=E.toFiniteNumber(f.headers.get("content-length")),[S,T]=a&&g1(z,Ol(v1(a),!0))||[];f=new Response(y1(f.body,w1,S,()=>{T&&T(),y&&y()}),C)}c=c||"text";let j=await Al[E.findKey(Al,c)||"text"](f,e);return!m&&y&&y(),await new Promise((C,z)=>{th(C,z,{data:j,headers:Fe.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:v})})}catch(h){throw y&&y(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,v),{cause:h.cause||h}):I.from(h,h&&h.code,e,v)}}),vu={http:m3,xhr:W3,fetch:ev};E.forEach(vu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const S1=e=>`- ${e}`,tv=e=>E.isFunction(e)||e===null||e===!1,lh={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!tv(n)&&(r=vu[(l=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(S1).join(`
`):" "+S1(i[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:vu};function Ys(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Tr(null,e)}function j1(e){return Ys(e),e.headers=Fe.from(e.headers),e.data=Gs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lh.getAdapter(e.adapter||Do.adapter)(e).then(function(r){return Ys(e),r.data=Gs.call(e,e.transformResponse,r),r.headers=Fe.from(r.headers),r},function(r){return eh(r)||(Ys(e),r&&r.response&&(r.response.data=Gs.call(e,e.transformResponse,r.response),r.response.headers=Fe.from(r.response.headers))),Promise.reject(r)})}const sh="1.8.4",as={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{as[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const k1={};as.transitional=function(t,n,r){function o(i,l){return"[Axios v"+sh+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,a)=>{if(t===!1)throw new I(o(l," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!k1[l]&&(k1[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,a):!0}};as.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function nv(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const a=e[i],u=a===void 0||l(a,i,e);if(u!==!0)throw new I("option "+i+" must be "+u,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const tl={assertOptions:nv,validators:as},ct=tl.validators;let En=class{constructor(t){this.defaults=t,this.interceptors={request:new h1,response:new h1}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Nn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&tl.assertOptions(r,{silentJSONParsing:ct.transitional(ct.boolean),forcedJSONParsing:ct.transitional(ct.boolean),clarifyTimeoutError:ct.transitional(ct.boolean)},!1),o!=null&&(E.isFunction(o)?n.paramsSerializer={serialize:o}:tl.assertOptions(o,{encode:ct.function,serialize:ct.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),tl.assertOptions(n,{baseUrl:ct.spelling("baseURL"),withXsrfToken:ct.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=Fe.concat(l,i);const a=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let p,d=0,g;if(!u){const v=[j1.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),g=v.length,p=Promise.resolve(n);d<g;)p=p.then(v[d++],v[d++]);return p}g=a.length;let w=n;for(d=0;d<g;){const v=a[d++],y=a[d++];try{w=v(w)}catch(k){y.call(this,k);break}}try{p=j1.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,g=c.length;d<g;)p=p.then(c[d++],c[d++]);return p}getUri(t){t=Nn(this.defaults,t);const n=nh(t.baseURL,t.url,t.allowAbsoluteUrls);return Jp(n,t.params,t.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(t){En.prototype[t]=function(n,r){return this.request(Nn(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,a){return this.request(Nn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}En.prototype[t]=n(),En.prototype[t+"Form"]=n(!0)});let rv=class ah{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(a=>{r.subscribe(a),i=a}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,a){r.reason||(r.reason=new Tr(i,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ah(function(o){t=o}),cancel:t}}};function ov(e){return function(n){return e.apply(null,n)}}function iv(e){return E.isObject(e)&&e.isAxiosError===!0}const xu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xu).forEach(([e,t])=>{xu[t]=e});function uh(e){const t=new En(e),n=Dp(En.prototype.request,t);return E.extend(n,En.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return uh(Nn(e,o))},n}const te=uh(Do);te.Axios=En;te.CanceledError=Tr;te.CancelToken=rv;te.isCancel=eh;te.VERSION=sh;te.toFormData=ls;te.AxiosError=I;te.Cancel=te.CanceledError;te.all=function(t){return Promise.all(t)};te.spread=ov;te.isAxiosError=iv;te.mergeConfig=Nn;te.AxiosHeaders=Fe;te.formToJSON=e=>Zp(E.isHTMLForm(e)?new FormData(e):e);te.getAdapter=lh.getAdapter;te.HttpStatusCode=xu;te.default=te;const{Axios:P5,AxiosError:T5,CanceledError:R5,isCancel:N5,CancelToken:O5,VERSION:A5,all:L5,Cancel:F5,isAxiosError:M5,spread:I5,toFormData:$5,AxiosHeaders:b5,HttpStatusCode:D5,formToJSON:B5,getAdapter:H5,mergeConfig:U5}=te,hn=te.create({baseURL:"http://localhost:8000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});hn.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));hn.interceptors.response.use(e=>e.data,e=>(e.response&&e.response.status===401&&(localStorage.removeItem("token"),window.location.href="/auth"),Promise.reject(e)));const ch=_.createContext(null),lv=({children:e})=>{const[t,n]=_.useState(null),[r,o]=_.useState(!0),[i,l]=_.useState(null);_.useEffect(()=>{(async()=>{if(!localStorage.getItem("token")){o(!1);return}try{const w=await hn.authAPI.getCurrentUser();n(w),l(null)}catch(w){console.error("获取用户信息失败:",w),l("获取用户信息失败"),localStorage.removeItem("token")}finally{o(!1)}})()},[]);const p={currentUser:t,loading:r,error:i,login:async d=>{var g,w;o(!0);try{const v=await hn.authAPI.login(d);localStorage.setItem("token",v.access),localStorage.setItem("refreshToken",v.refresh);const y=await hn.authAPI.getCurrentUser();return n(y),l(null),y}catch(v){throw console.error("登录失败:",v),l(((w=(g=v.response)==null?void 0:g.data)==null?void 0:w.detail)||"登录失败，请检查用户名和密码"),v}finally{o(!1)}},register:async d=>{var g,w;o(!0);try{const v=await hn.authAPI.register(d);localStorage.setItem("token",v.access),localStorage.setItem("refreshToken",v.refresh);const y=await hn.authAPI.getCurrentUser();return n(y),l(null),y}catch(v){throw console.error("注册失败:",v),l(((w=(g=v.response)==null?void 0:g.data)==null?void 0:w.detail)||"注册失败，请稍后再试"),v}finally{o(!1)}},logout:()=>{localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),n(null)},isAuthenticated:!!t};return s.jsx(ch.Provider,{value:p,children:e})},sv=()=>{const e=_.useContext(ch);if(!e)throw new Error("useAuth必须在AuthProvider内部使用");return e},dh=_.createContext(null),mn={LIGHT:"light",DARK:"dark"},av={[mn.LIGHT]:{"--background-color":"#ffffff","--light-background":"#f8f9fa","--text-color":"#2d3436","--primary-color":"#3498db","--secondary-color":"#6c5ce7","--border-color":"#dfe6e9","--shadow":"0 2px 10px rgba(0, 0, 0, 0.05)","--transition":"all 0.3s ease"},[mn.DARK]:{"--background-color":"#1e1e1e","--light-background":"#2d3436","--text-color":"#f1f2f6","--primary-color":"#74b9ff","--secondary-color":"#a29bfe","--border-color":"#636e72","--shadow":"0 2px 10px rgba(0, 0, 0, 0.2)","--transition":"all 0.3s ease"}},uv=({children:e})=>{const[t,n]=_.useState(()=>localStorage.getItem("theme")||mn.LIGHT),r=()=>{const i=t===mn.LIGHT?mn.DARK:mn.LIGHT;n(i),localStorage.setItem("theme",i)};_.useEffect(()=>{const i=document.documentElement,l=av[t];Object.entries(l).forEach(([a,u])=>{i.style.setProperty(a,u)}),document.body.setAttribute("data-theme",t)},[t]);const o={theme:t,toggleTheme:r,isDarkMode:t===mn.DARK};return s.jsx(dh.Provider,{value:o,children:e})},cv=()=>{const e=_.useContext(dh);if(!e)throw new Error("useTheme必须在ThemeProvider内部使用");return e},dv=x.header`
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition);
`,fv=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,pv=x(gt)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 40px;
  }
`,hv=x.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({isOpen:e})=>e?"0":"-100%"};
    width: 70%;
    height: 100vh;
    background-color: var(--background-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    box-shadow: ${({isOpen:e})=>e?"-5px 0 15px rgba(0, 0, 0, 0.1)":"none"};
    z-index: 1000;
  }
`,Br=x(gt)`
  color: var(--text-color);
  font-weight: ${({active:e})=>e?"600":"400"};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({active:e})=>e?"100%":"0"};
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 100%;
  }
`,mv=x.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;x(gt)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;const gv=x(gt)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    text-align: center;
  }
`,C1=x.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    margin: 1rem auto 0;
  }
`,vv=x.div`
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
`,xv=x.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    opacity: 0.9;
  }
`,yv=x.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: var(--background-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  width: 200px;
  z-index: 1001;
  overflow: hidden;
  transition: var(--transition);
  opacity: ${({isOpen:e})=>e?"1":"0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-10px)"};
  
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
    box-shadow: none;
    border: 1px solid var(--border-color);
  }
`,qs=x(gt)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  transition: var(--transition);
  
  svg {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: var(--light-background);
    color: var(--primary-color);
  }
`,wv=x.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  background: none;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  
  svg {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: var(--light-background);
    color: var(--primary-color);
  }
`,Sv=x.span`
  margin-left: 0.5rem;
  font-weight: 500;
  display: none;
  
  @media (min-width: 992px) {
    display: inline;
  }
`,jv=()=>{const[e,t]=_.useState(!1),[n,r]=_.useState(!1),[o,i]=_.useState(!1),l=Io(),{currentUser:a,isAuthenticated:u,logout:c}=sv(),{isDarkMode:p,toggleTheme:d}=cv(),g=_.useRef(null),w=()=>{t(!e)},v=()=>{i(!o)},y=()=>{t(!1)},k=()=>{c(),i(!1),y()};_.useEffect(()=>{const f=m=>{g.current&&!g.current.contains(m.target)&&i(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]),_.useEffect(()=>{y()},[l]),_.useEffect(()=>{const f=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const h=()=>a!=null&&a.avatar?s.jsx("img",{src:a.avatar,alt:a.username}):s.jsx(Nl,{});return s.jsx(dv,{style:{backgroundColor:n?"var(--background-color)":"transparent",boxShadow:n?"var(--shadow)":"none"},children:s.jsxs(fv,{children:[s.jsxs(pv,{to:"/",children:[s.jsx("img",{src:"/favicon.png",alt:"零屿笔记"}),"零屿笔记"]}),s.jsxs(hv,{isOpen:e,children:[s.jsx(Br,{to:"/",active:l.pathname==="/",onClick:y,children:"首页"}),s.jsx(Br,{to:"/features",active:l.pathname==="/features",onClick:y,children:"功能"}),s.jsxs(Br,{to:"/notes",active:l.pathname==="/notes",onClick:y,children:[s.jsx(a1,{style:{marginRight:"5px"}}),"笔记"]}),s.jsx(Br,{to:"/download",active:l.pathname==="/download",onClick:y,children:"下载"}),s.jsx(Br,{to:"/about",active:l.pathname==="/about",onClick:y,children:"关于"}),u?s.jsxs(vv,{ref:g,children:[s.jsx(xv,{onClick:v,children:h()}),s.jsx(Sv,{children:a==null?void 0:a.username}),s.jsxs(yv,{isOpen:o,children:[s.jsxs(qs,{to:"/profile",onClick:()=>i(!1),children:[s.jsx(Nl,{}),"个人中心"]}),s.jsxs(qs,{to:"/notes",onClick:()=>i(!1),children:[s.jsx(a1,{}),"我的笔记"]}),s.jsxs(qs,{to:"/settings",onClick:()=>i(!1),children:[s.jsx(ig,{}),"设置"]}),s.jsxs(wv,{onClick:k,children:[s.jsx(kg,{}),"退出登录"]})]})]}):s.jsx(gv,{to:"/auth",onClick:y,children:"登录/注册"}),s.jsx(C1,{onClick:d,children:p?s.jsx(u1,{}):s.jsx(i1,{})})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[!e&&s.jsx(C1,{onClick:d,style:{marginRight:"1rem"},children:p?s.jsx(u1,{}):s.jsx(i1,{})}),s.jsx(mv,{onClick:w,children:e?s.jsx(_g,{}):s.jsx(ng,{})})]})]})})},kv=x.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0 1.5rem;
`,Cv=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ui=x.div`
  display: flex;
  flex-direction: column;
`,ci=x.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary-color);
  }
`,We=x(gt)`
  color: #bdc3c7;
  margin-bottom: 0.8rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateX(5px);
  }
`,Ev=x.p`
  color: #bdc3c7;
  margin-bottom: 1rem;
  line-height: 1.6;
`,_v=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Js=x.a`
  color: #bdc3c7;
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`,zv=x.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
  font-size: 0.9rem;
`,Pv=()=>s.jsxs(kv,{children:[s.jsxs(Cv,{children:[s.jsxs(ui,{children:[s.jsx(ci,{children:"零屿笔记"}),s.jsx(Ev,{children:"AI驱动，从零开始构建您的知识岛屿。我们致力于提供最智能、最便捷的笔记应用，帮助您高效管理知识。"}),s.jsxs(_v,{children:[s.jsx(Js,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:s.jsx(Ip,{})}),s.jsx(Js,{href:"#",title:"微信公众号：零屿笔记",children:s.jsx(bp,{})}),s.jsx(Js,{href:"#",title:"QQ群：123456789",children:s.jsx($p,{})})]})]}),s.jsxs(ui,{children:[s.jsx(ci,{children:"功能"}),s.jsx(We,{to:"/features#handwriting",children:"手写体识别"}),s.jsx(We,{to:"/features#knowledge-graph",children:"知识图谱"}),s.jsx(We,{to:"/features#speech",children:"语音功能"}),s.jsx(We,{to:"/features#community",children:"社群功能"})]}),s.jsxs(ui,{children:[s.jsx(ci,{children:"下载"}),s.jsx(We,{to:"/download#windows",children:"Windows版"}),s.jsx(We,{to:"/download#macos",children:"macOS版"}),s.jsx(We,{to:"/download#android",children:"Android版"}),s.jsx(We,{to:"/download#ios",children:"iOS版"})]}),s.jsxs(ui,{children:[s.jsx(ci,{children:"关于我们"}),s.jsx(We,{to:"/about#team",children:"团队介绍"}),s.jsx(We,{to:"/about#contact",children:"联系我们"}),s.jsx(We,{to:"/about#privacy",children:"隐私政策"}),s.jsx(We,{to:"/about#terms",children:"使用条款"})]})]}),s.jsx(zv,{children:s.jsxs("p",{children:["© ",new Date().getFullYear()," 零屿笔记. 保留所有权利。"]})})]}),Tv=x.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    height: auto;
    padding: 120px 0 80px;
  }
`,Rv=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`,Nv=x.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-bottom: 3rem;
  }
`,Ov=x.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Av=x.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`,Lv=x.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,Fv=x.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Mv=x(gt)`
  background-color: white;
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Iv=x(gt)`
  background-color: transparent;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid white;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,$v=x.section`
  padding: 100px 0;
  background-color: var(--light-background);
`,bv=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,di=x.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,fi=x.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,pi=x.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,hi=x.p`
  color: #666;
  line-height: 1.6;
`,Dv=x.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
`,Bv=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Hv=x.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Uv=x.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`,Vv=x(gt)`
  background-color: white;
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Wv=()=>s.jsxs(s.Fragment,{children:[s.jsx(Tv,{children:s.jsxs(Rv,{children:[s.jsxs(Nv,{children:[s.jsx(Ov,{children:"AI驱动，从零开始构建您的知识岛屿"}),s.jsx(Av,{children:"零屿笔记是一款智能笔记应用，集成手写识别、知识图谱、语音功能和社群分享， 让您的笔记更智能、更有条理、更易于分享。"}),s.jsxs(Fv,{children:[s.jsx(Mv,{to:"/download",children:"立即下载"}),s.jsx(Iv,{to:"/features",children:"了解更多"})]})]}),s.jsx(Lv,{children:s.jsx("img",{src:"/images/hero-app.png",alt:"零屿笔记应用界面"})})]})}),s.jsx($v,{children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"强大功能，智能体验"}),s.jsx("p",{className:"section-subtitle",children:"探索零屿笔记的核心功能，体验AI驱动的笔记新方式"}),s.jsxs(bv,{children:[s.jsxs(di,{children:[s.jsx(fi,{children:s.jsx(Ji,{})}),s.jsx(pi,{children:"手写体识别"}),s.jsx(hi,{children:"基于百度飞桨OCR模型，实现高精度的中英文手写识别，将您的手写内容实时转换为可编辑的数字文本。 支持多种书写风格和语言，让记录更自然、更高效。"})]}),s.jsxs(di,{children:[s.jsx(fi,{children:s.jsx(Yi,{})}),s.jsx(pi,{children:"知识图谱构建"}),s.jsx(hi,{children:"分析笔记内容之间的关联，自动构建个人知识图谱，帮助您理解知识结构，发现知识间的联系， 让学习和复习更有效率。"})]}),s.jsxs(di,{children:[s.jsx(fi,{children:s.jsx(qi,{})}),s.jsx(pi,{children:"语音功能"}),s.jsx(hi,{children:"基于Whisper框架实现高精度的语音识别，支持语音检索、语音输入和语音提醒功能， 实现免手动操作的便捷体验，让记录和查找更加轻松。"})]}),s.jsxs(di,{children:[s.jsx(fi,{children:s.jsx(Xi,{})}),s.jsx(pi,{children:"社群功能"}),s.jsx(hi,{children:"提供笔记分享、社交互动功能，建立用户社区，促进知识交流和分享。 您可以选择性地分享笔记内容，与志同道合的朋友一起学习和成长。"})]})]})]})}),s.jsx(Dv,{children:s.jsxs(Bv,{children:[s.jsx(Hv,{children:"开始您的智能笔记之旅"}),s.jsx(Uv,{children:"立即下载零屿笔记，体验AI驱动的全新笔记方式，让知识管理更高效、更智能。"}),s.jsx(Vv,{to:"/download",children:"免费下载"})]})})]}),Qv=x.div`
  padding-top: 80px;
`,Kv=x.section`
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
`,Gv=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Yv=x.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,qv=x.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`,$n=x.section`
  padding: 100px 0;
  
  &:nth-child(odd) {
    background-color: var(--light-background);
  }
`,Hr=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: ${e=>e.reverse?"column-reverse":"column"};
    gap: 2rem;
  }
`,Ur=x.div`
  flex: 1;
`,Vr=x.div`
  flex: 1;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: var(--shadow);
  }
`,Wr=x.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Qr=x.p`
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,Kr=x.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`,ie=x.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
  }
`,le=x.div`
  flex: 1;
`,se=x.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,ae=x.p`
  color: #666;
  line-height: 1.6;
`,Jv=()=>s.jsxs(Qv,{children:[s.jsx(Kv,{children:s.jsxs(Gv,{children:[s.jsx(Yv,{children:"强大功能，智能体验"}),s.jsx(qv,{children:"探索零屿笔记的核心功能，体验AI驱动的笔记新方式，让知识管理更高效、更智能。"})]})}),s.jsx($n,{id:"handwriting",children:s.jsxs(Hr,{children:[s.jsxs(Ur,{children:[s.jsx(Wr,{children:"手写体识别"}),s.jsx(Qr,{children:"零屿笔记的手写体识别模块能够将用户的手写内容实时转换为可编辑的数字文本，支持多种书写风格和语言。 基于百度飞桨OCR模型，实现高精度的中英文手写识别，并支持在PDF、Word等文档上进行手写标记和识别。"}),s.jsxs(Kr,{children:[s.jsxs(ie,{children:[s.jsx(Ji,{}),s.jsxs(le,{children:[s.jsx(se,{children:"多样化输入支持"}),s.jsx(ae,{children:"支持手写笔、触控笔、手指触控等多种输入方式，适配平板、手机和电子纸设备。"})]})]}),s.jsxs(ie,{children:[s.jsx(Ji,{}),s.jsxs(le,{children:[s.jsx(se,{children:"高精度识别"}),s.jsx(ae,{children:"常见汉字识别准确率>95%，英文和数字>98%，支持中英文混合识别。"})]})]}),s.jsxs(ie,{children:[s.jsx(Ji,{}),s.jsxs(le,{children:[s.jsx(se,{children:"离线识别能力"}),s.jsx(ae,{children:"支持最常用3000汉字、基本英文字母和数字的离线识别，无网络环境下也能正常使用。"})]})]})]})]}),s.jsx(Vr,{children:s.jsx("img",{src:"/images/handwriting-recognition.png",alt:"手写体识别功能"})})]})}),s.jsx($n,{id:"file-processing",children:s.jsxs(Hr,{reverse:!0,children:[s.jsx(Vr,{children:s.jsx("img",{src:"/images/file-processing.png",alt:"文件处理与转换功能"})}),s.jsxs(Ur,{children:[s.jsx(Wr,{children:"文件处理与转换"}),s.jsx(Qr,{children:"零屿笔记支持用户上传、预览和编辑PDF、Word等多种格式文件，并提供拍照扫描功能， 将图片转换为标准文档和可编辑文本，让文档管理更加便捷。"}),s.jsxs(Kr,{children:[s.jsxs(ie,{children:[s.jsx(Vs,{}),s.jsxs(le,{children:[s.jsx(se,{children:"多格式支持"}),s.jsx(ae,{children:"支持PDF、Word、TXT、Markdown等文档格式，以及JPG、PNG等图片格式。"})]})]}),s.jsxs(ie,{children:[s.jsx(Vs,{}),s.jsxs(le,{children:[s.jsx(se,{children:"拍照扫描"}),s.jsx(ae,{children:"支持拍照扫描文档，自动进行透视校正、增强处理和OCR文本识别。"})]})]}),s.jsxs(ie,{children:[s.jsx(Vs,{}),s.jsxs(le,{children:[s.jsx(se,{children:"文档标记与编辑"}),s.jsx(ae,{children:"提供手写笔、荧光笔、文本注释等多种标记工具，支持在文档上直接进行批注。"})]})]})]})]})]})}),s.jsx($n,{id:"knowledge-graph",children:s.jsxs(Hr,{children:[s.jsxs(Ur,{children:[s.jsx(Wr,{children:"知识图谱构建"}),s.jsx(Qr,{children:"零屿笔记能够分析笔记内容之间的关联，构建个人知识图谱，帮助用户理解知识结构， 发现知识间的联系，让学习和复习更有效率。"}),s.jsxs(Kr,{children:[s.jsxs(ie,{children:[s.jsx(Yi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"自动知识点提取"}),s.jsx(ae,{children:"自动从笔记中提取概念、关系和事实，构建结构化的知识表示。"})]})]}),s.jsxs(ie,{children:[s.jsx(Yi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"可视化知识网络"}),s.jsx(ae,{children:"以直观的图形方式展示知识点之间的关联，支持缩放、平移和节点展开/折叠。"})]})]}),s.jsxs(ie,{children:[s.jsx(Yi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"学习路径规划"}),s.jsx(ae,{children:"基于知识依赖关系，提供个性化的学习路径建议，识别知识体系中的空白。"})]})]})]})]}),s.jsx(Vr,{children:s.jsx("img",{src:"/images/knowledge-graph.png",alt:"知识图谱构建功能"})})]})}),s.jsx($n,{id:"speech",children:s.jsxs(Hr,{reverse:!0,children:[s.jsx(Vr,{children:s.jsx("img",{src:"/images/speech-features.png",alt:"语音功能"})}),s.jsxs(Ur,{children:[s.jsx(Wr,{children:"语音功能"}),s.jsx(Qr,{children:"零屿笔记提供语音检索、语音输入和语音提醒功能，实现免手动操作的便捷体验。 基于OpenAI Whisper模型，支持高精度的语音识别和转写。"}),s.jsxs(Kr,{children:[s.jsxs(ie,{children:[s.jsx(qi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"语音转文字"}),s.jsx(ae,{children:"支持实时语音转写和长时间录音识别，适用于会议记录、讲座笔记等场景。"})]})]}),s.jsxs(ie,{children:[s.jsx(qi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"语音检索"}),s.jsx(ae,{children:"通过语音命令快速查找笔记内容，支持多轮对话和上下文理解。"})]})]}),s.jsxs(ie,{children:[s.jsx(qi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"语音提醒"}),s.jsx(ae,{children:"支持通过语音设置提醒，智能解析自然语言时间表达，定期播报重要事项。"})]})]})]})]})]})}),s.jsx($n,{id:"community",children:s.jsxs(Hr,{children:[s.jsxs(Ur,{children:[s.jsx(Wr,{children:"社群功能"}),s.jsx(Qr,{children:"零屿笔记提供笔记分享、社交互动功能，建立用户社区，促进知识交流和分享， 让学习变得更加社交化和有趣。"}),s.jsxs(Kr,{children:[s.jsxs(ie,{children:[s.jsx(Xi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"内容分享"}),s.jsx(ae,{children:"支持选择性分享笔记内容，设置不同的权限级别，通过链接或二维码分享。"})]})]}),s.jsxs(ie,{children:[s.jsx(Xi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"社交互动"}),s.jsx(ae,{children:"提供点赞、收藏、评论等互动功能，支持关注感兴趣的创作者。"})]})]}),s.jsxs(ie,{children:[s.jsx(Xi,{}),s.jsxs(le,{children:[s.jsx(se,{children:"协作笔记"}),s.jsx(ae,{children:"支持多人编辑同一份笔记，实时同步变更，适合团队协作和学习小组使用。"})]})]})]})]}),s.jsx(Vr,{children:s.jsx("img",{src:"/images/community-features.png",alt:"社群功能"})})]})}),s.jsx($n,{id:"other-features",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"更多强大功能"}),s.jsx("p",{className:"section-subtitle",children:"零屿笔记还提供多种实用功能，满足您的各种需求"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem",marginTop:"3rem"},children:[s.jsxs(ie,{children:[s.jsx(Cg,{}),s.jsxs(le,{children:[s.jsx(se,{children:"第三方平台集成"}),s.jsx(ae,{children:"与印象笔记、Muses-缪思记等第三方笔记平台集成，实现数据同步和无缝迁移。"})]})]}),s.jsxs(ie,{children:[s.jsx(jg,{}),s.jsxs(le,{children:[s.jsx(se,{children:"用户认证系统"}),s.jsx(ae,{children:"提供手机验证码、密码登录以及微信、QQ等第三方登录，确保安全便捷的用户认证。"})]})]}),s.jsxs(ie,{children:[s.jsx(lg,{}),s.jsxs(le,{children:[s.jsx(se,{children:"数据同步与备份"}),s.jsx(ae,{children:"确保用户数据在多设备间同步，并提供可靠的备份恢复机制，保障数据安全。"})]})]}),s.jsxs(ie,{children:[s.jsx(Rg,{}),s.jsxs(le,{children:[s.jsx(se,{children:"离线功能支持"}),s.jsx(ae,{children:"在无网络环境下保证应用的基本功能可用，并在网络恢复后自动同步数据。"})]})]})]})]})})]}),Xv=x.div`
  padding-top: 80px;
`,Zv=x.section`
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
`,e8=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,t8=x.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,n8=x.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`,r8=x.section`
  padding: 100px 0;
  background-color: var(--light-background);
`,o8=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,mi=x.div`
  background-color: white;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,gi=x.div`
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,vi=x.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,xi=x.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`,yi=x.a`
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #2980b9;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,wi=x.div`
  margin-top: 2rem;
  text-align: left;
`,Si=x.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`,ji=x.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #666;
  
  li {
    margin-bottom: 0.5rem;
  }
`,i8=x.section`
  padding: 100px 0;
`,l8=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,ki=x.div`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Ci=x.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-right: 2rem;
  min-width: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,Ei=x.div`
  flex: 1;
`,_i=x.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,zi=x.p`
  color: #666;
  line-height: 1.6;
`,s8=x.section`
  padding: 100px 0;
  background-color: var(--light-background);
`,a8=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Pi=x.div`
  margin-bottom: 2rem;
`,Ti=x.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`,Ri=x.p`
  color: #666;
  line-height: 1.6;
`,u8=()=>s.jsxs(Xv,{children:[s.jsx(Zv,{children:s.jsxs(e8,{children:[s.jsx(t8,{children:"下载零屿笔记"}),s.jsx(n8,{children:"选择适合您设备的版本，开始智能笔记之旅。所有平台均提供免费下载，支持云端同步。"})]})}),s.jsx(r8,{children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"选择您的平台"}),s.jsx("p",{className:"section-subtitle",children:"零屿笔记支持多种设备，随时随地记录灵感"}),s.jsxs(o8,{children:[s.jsxs(mi,{id:"windows",children:[s.jsx(gi,{children:s.jsx(q4,{})}),s.jsx(vi,{children:"Windows版"}),s.jsx(xi,{children:"适用于Windows 10/11系统，提供完整的桌面体验，支持手写笔输入和全功能编辑。"}),s.jsx(yi,{href:"#",children:"下载Windows版 v1.0.0"}),s.jsxs(wi,{children:[s.jsx(Si,{children:"系统要求"}),s.jsxs(ji,{children:[s.jsx("li",{children:"Windows 10/11 64位操作系统"}),s.jsx("li",{children:"4GB RAM以上"}),s.jsx("li",{children:"500MB可用存储空间"}),s.jsx("li",{children:"支持触控的设备（推荐）"})]})]})]}),s.jsxs(mi,{id:"macos",children:[s.jsx(gi,{children:s.jsx(G4,{})}),s.jsx(vi,{children:"macOS版"}),s.jsx(xi,{children:"适用于macOS 11.0及以上系统，针对Mac优化，支持触控板和Apple Pencil输入。"}),s.jsx(yi,{href:"#",children:"下载macOS版 v1.0.0"}),s.jsxs(wi,{children:[s.jsx(Si,{children:"系统要求"}),s.jsxs(ji,{children:[s.jsx("li",{children:"macOS 11.0 Big Sur及以上版本"}),s.jsx("li",{children:"4GB RAM以上"}),s.jsx("li",{children:"500MB可用存储空间"}),s.jsx("li",{children:"支持Apple Silicon和Intel处理器"})]})]})]}),s.jsxs(mi,{id:"android",children:[s.jsx(gi,{children:s.jsx(K4,{})}),s.jsx(vi,{children:"Android版"}),s.jsx(xi,{children:"适用于Android 8.0及以上系统，针对平板和手机优化，支持手写笔和触控输入。"}),s.jsx(yi,{href:"#",children:"下载Android版 v1.0.0"}),s.jsxs(wi,{children:[s.jsx(Si,{children:"系统要求"}),s.jsxs(ji,{children:[s.jsx("li",{children:"Android 8.0及以上版本"}),s.jsx("li",{children:"3GB RAM以上"}),s.jsx("li",{children:"200MB可用存储空间"}),s.jsx("li",{children:"支持手写笔的设备（推荐）"})]})]})]}),s.jsxs(mi,{id:"ios",children:[s.jsx(gi,{children:s.jsx(vg,{})}),s.jsx(vi,{children:"iOS/iPadOS版"}),s.jsx(xi,{children:"适用于iOS 14及以上系统，针对iPad和iPhone优化，完美支持Apple Pencil。"}),s.jsx(yi,{href:"#",children:"App Store下载"}),s.jsxs(wi,{children:[s.jsx(Si,{children:"系统要求"}),s.jsxs(ji,{children:[s.jsx("li",{children:"iOS/iPadOS 14及以上版本"}),s.jsx("li",{children:"iPhone 8及以上机型"}),s.jsx("li",{children:"iPad 6代及以上机型"}),s.jsx("li",{children:"200MB可用存储空间"})]})]})]})]})]})}),s.jsx(i8,{children:s.jsxs(l8,{children:[s.jsx("h2",{className:"section-title",children:"安装指南"}),s.jsx("p",{className:"section-subtitle",children:"简单几步，开始使用零屿笔记"}),s.jsxs(ki,{children:[s.jsx(Ci,{children:"1"}),s.jsxs(Ei,{children:[s.jsx(_i,{children:"下载安装包"}),s.jsx(zi,{children:"选择适合您设备的版本，点击下载按钮获取最新版本的安装包。 移动设备可以直接从应用商店下载，桌面设备请保存安装文件到本地。"})]})]}),s.jsxs(ki,{children:[s.jsx(Ci,{children:"2"}),s.jsxs(Ei,{children:[s.jsx(_i,{children:"安装应用"}),s.jsx(zi,{children:"Windows用户：双击安装包，按照向导完成安装。 macOS用户：打开dmg文件，将应用拖到Applications文件夹。 Android用户：打开APK文件，允许来自未知来源的应用安装。 iOS用户：通过App Store安装，无需额外步骤。"})]})]}),s.jsxs(ki,{children:[s.jsx(Ci,{children:"3"}),s.jsxs(Ei,{children:[s.jsx(_i,{children:"创建账号或登录"}),s.jsx(zi,{children:"首次使用时，您需要创建一个账号或使用第三方账号登录。 这将启用云同步功能，让您的笔记在多设备间无缝同步。"})]})]}),s.jsxs(ki,{children:[s.jsx(Ci,{children:"4"}),s.jsxs(Ei,{children:[s.jsx(_i,{children:"开始使用"}),s.jsx(zi,{children:"完成登录后，您可以立即开始创建笔记、导入文档或尝试手写识别功能。 查看应用内的教程了解更多高级功能的使用方法。"})]})]})]})}),s.jsx(s8,{children:s.jsxs(a8,{children:[s.jsx("h2",{className:"section-title",children:"常见问题"}),s.jsx("p",{className:"section-subtitle",children:"关于下载和安装的常见疑问解答"}),s.jsxs(Pi,{children:[s.jsx(Ti,{children:"零屿笔记是免费软件吗？"}),s.jsx(Ri,{children:"零屿笔记提供基础版和专业版两种选择。基础版完全免费，提供核心功能； 专业版需要订阅，提供更多高级功能，如高级AI分析、无限云存储等。 目前处于推广阶段，所有功能均可免费试用。"})]}),s.jsxs(Pi,{children:[s.jsx(Ti,{children:"我的数据安全吗？"}),s.jsx(Ri,{children:"零屿笔记非常重视用户数据安全。所有数据传输采用TLS/SSL加密， 存储采用AES-256加密。您可以选择仅本地存储或启用云同步， 我们不会未经您的许可访问或分析您的笔记内容。"})]}),s.jsxs(Pi,{children:[s.jsx(Ti,{children:"如何在多设备间同步笔记？"}),s.jsx(Ri,{children:"只需在所有设备上使用相同的账号登录零屿笔记，您的笔记将自动同步。 支持实时同步和离线编辑，当网络恢复时自动上传更改。 您也可以选择特定笔记本进行同步，保持其他内容仅在本地存储。"})]}),s.jsxs(Pi,{children:[s.jsx(Ti,{children:"遇到安装问题怎么办？"}),s.jsx(Ri,{children:"如果您在安装过程中遇到问题，请尝试以下步骤： 1. 确保您的设备满足系统要求 2. 下载最新版本的安装包 3. 暂时关闭杀毒软件 4. 以管理员身份运行安装程序 如果问题仍然存在，请联系我们的技术支持团队获取帮助。"})]})]})})]}),c8=x.div`
  padding-top: 80px;
`,d8=x.section`
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
`,f8=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,p8=x.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,h8=x.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`,Xs=x.section`
  padding: 100px 0;
  
  &:nth-child(odd) {
    background-color: var(--light-background);
  }
`,Zs=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,m8=x.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`,g8=x.div`
  flex: 1;
`,v8=x.div`
  flex: 1;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: var(--shadow);
  }
`,x8=x.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,ea=x.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`,y8=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,bn=x.div`
  text-align: center;
`,Dn=x.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  box-shadow: var(--shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Bn=x.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`,Hn=x.p`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
`,Un=x.p`
  color: #666;
  line-height: 1.6;
`,w8=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,ta=x.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,na=x.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,ra=x.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`,Vn=x.p`
  color: #666;
  line-height: 1.6;
`,S8=x.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`,oa=x.a`
  color: var(--primary-color);
  font-size: 1.8rem;
  transition: var(--transition);
  
  &:hover {
    color: #2980b9;
    transform: translateY(-3px);
  }
`,j8=()=>s.jsxs(c8,{children:[s.jsx(d8,{children:s.jsxs(f8,{children:[s.jsx(p8,{children:"关于我们"}),s.jsx(h8,{children:"了解零屿笔记背后的团队和我们的使命，共同探索知识管理的未来。"})]})}),s.jsx(Xs,{children:s.jsxs(Zs,{children:[s.jsx("h2",{className:"section-title",children:"我们的使命"}),s.jsx("p",{className:"section-subtitle",children:"用AI技术重新定义笔记体验，让知识管理更智能、更高效"}),s.jsxs(m8,{children:[s.jsxs(g8,{children:[s.jsx(x8,{children:"从零开始，构建知识岛屿"}),s.jsx(ea,{children:"零屿笔记诞生于对传统笔记应用的反思。我们发现，随着信息爆炸时代的到来， 人们需要的不仅是简单的记录工具，更需要一个能够智能组织、关联和挖掘知识价值的平台。"}),s.jsx(ea,{children:'我们的使命是将先进的AI技术与笔记应用相结合，创造一个从"零"开始， 帮助用户构建个人知识"岛屿"的工具。在这里，每一条笔记不再是孤立的信息， 而是相互关联的知识节点，共同构成用户独特的知识体系。'}),s.jsx(ea,{children:"我们相信，通过手写识别、知识图谱、语音交互等技术的融合， 可以让知识管理变得更加自然、高效，让学习和创造的过程更加愉悦。"})]}),s.jsx(v8,{children:s.jsx("img",{src:"/images/about-mission.jpg",alt:"零屿笔记的使命"})})]})]})}),s.jsx(Xs,{id:"team",children:s.jsxs(Zs,{children:[s.jsx("h2",{className:"section-title",children:"我们的团队"}),s.jsx("p",{className:"section-subtitle",children:"一群热爱技术与教育的创新者，致力于改变人们的学习方式"}),s.jsxs(y8,{children:[s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member1.jpg",alt:"张明 - 创始人兼CEO"})}),s.jsx(Bn,{children:"张明"}),s.jsx(Hn,{children:"创始人兼CEO"}),s.jsx(Un,{children:"前Google AI研究员，拥有10年AI和教育科技经验。 致力于将最前沿的AI技术应用于教育领域，让学习变得更加个性化和高效。"})]}),s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member2.jpg",alt:"李华 - CTO"})}),s.jsx(Bn,{children:"李华"}),s.jsx(Hn,{children:"CTO"}),s.jsx(Un,{children:"全栈开发专家，曾在多家知名科技公司担任技术负责人。 专注于构建高性能、可扩展的软件架构，确保用户体验的流畅和稳定。"})]}),s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member3.jpg",alt:"王芳 - 产品设计总监"})}),s.jsx(Bn,{children:"王芳"}),s.jsx(Hn,{children:"产品设计总监"}),s.jsx(Un,{children:"拥有丰富的用户体验设计经验，曾参与多个知名教育应用的设计工作。 致力于创造简洁、直观且功能强大的产品界面，让复杂的技术变得易于使用。"})]}),s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member4.jpg",alt:"陈强 - AI研发负责人"})}),s.jsx(Bn,{children:"陈强"}),s.jsx(Hn,{children:"AI研发负责人"}),s.jsx(Un,{children:"机器学习专家，专注于自然语言处理和计算机视觉领域。 负责零屿笔记的核心AI引擎开发，包括手写识别、知识图谱构建等关键技术。"})]}),s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member5.jpg",alt:"赵琳 - 市场营销总监"})}),s.jsx(Bn,{children:"赵琳"}),s.jsx(Hn,{children:"市场营销总监"}),s.jsx(Un,{children:"拥有丰富的科技产品营销经验，精通用户增长和品牌建设。 负责零屿笔记的市场策略和用户社区建设，致力于打造活跃的学习社区。"})]}),s.jsxs(bn,{children:[s.jsx(Dn,{children:s.jsx("img",{src:"/images/team-member6.jpg",alt:"刘伟 - 教育顾问"})}),s.jsx(Bn,{children:"刘伟"}),s.jsx(Hn,{children:"教育顾问"}),s.jsx(Un,{children:"资深教育工作者，拥有20年教学和教育研究经验。 为零屿笔记提供教育学理论支持，确保产品设计符合学习科学原理。"})]})]})]})}),s.jsx(Xs,{id:"contact",children:s.jsxs(Zs,{children:[s.jsx("h2",{className:"section-title",children:"联系我们"}),s.jsx("p",{className:"section-subtitle",children:"有任何问题或建议？我们期待听到您的声音"}),s.jsxs(w8,{children:[s.jsxs(ta,{children:[s.jsx(na,{children:s.jsx(sg,{})}),s.jsx(ra,{children:"电子邮件"}),s.jsx(Vn,{children:"info@zeroislenotes.com"}),s.jsx(Vn,{children:"support@zeroislenotes.com"})]}),s.jsxs(ta,{children:[s.jsx(na,{children:s.jsx(xg,{})}),s.jsx(ra,{children:"电话"}),s.jsx(Vn,{children:"+86 400-123-4567"}),s.jsx(Vn,{children:"周一至周五 9:00-18:00"})]}),s.jsxs(ta,{children:[s.jsx(na,{children:s.jsx(gg,{})}),s.jsx(ra,{children:"地址"}),s.jsx(Vn,{children:"北京市海淀区中关村科技园"}),s.jsx(Vn,{children:"创新大厦B座15层"})]})]}),s.jsxs(S8,{children:[s.jsx(oa,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:s.jsx(Ip,{})}),s.jsx(oa,{href:"#",title:"微信公众号：零屿笔记",children:s.jsx(bp,{})}),s.jsx(oa,{href:"#",title:"QQ群：123456789",children:s.jsx($p,{})})]})]})})]}),k8=x.div`
  padding-top: 80px;
`,C8=x.section`
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
`,E8=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,_8=x.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,z8=x.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`,P8=x.section`
  padding: 100px 0;
  background-color: var(--light-background);
`,T8=x.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`,R8=x.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`,E1=x.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`,Ni=x.button`
  flex: 1;
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: ${({active:e})=>e?"600":"400"};
  color: ${({active:e})=>e?"var(--primary-color)":"var(--text-color)"};
  border-bottom: ${({active:e})=>e?"2px solid var(--primary-color)":"none"};
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`,_1=x.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xt=x.div`
  position: relative;
`,Mt=x.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,dn=x.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`,ia=x.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  cursor: pointer;
`,z1=x.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,P1=x.div`
  display: flex;
  gap: 1rem;
`,T1=x(Mt)`
  flex: 1;
`,R1=x.button`
  background-color: ${({disabled:e})=>e?"#ccc":"var(--primary-color)"};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 0.9rem;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: var(--transition);
  white-space: nowrap;
  
  &:hover {
    background-color: ${({disabled:e})=>e?"#ccc":"#2980b9"};
  }
`,N1=x.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
`,O1=x.span`
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,N8=x.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
  }
  
  span {
    padding: 0 1rem;
    color: #666;
    font-size: 0.9rem;
  }
`,O8=x.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`,A1=x.button`
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`,L1=x.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,A8=()=>{const[e,t]=_.useState("login"),[n,r]=_.useState("phone"),[o,i]=_.useState(""),[l,a]=_.useState(""),[u,c]=_.useState(""),[p,d]=_.useState(""),[g,w]=_.useState(""),[v,y]=_.useState(!1),[k,h]=_.useState(!1),[f,m]=_.useState(0),[j,C]=_.useState(""),z=()=>{m(60);const O=setInterval(()=>{m(ve=>ve<=1?(clearInterval(O),0):ve-1)},1e3)},S=()=>{if(!l){C("请输入手机号");return}z(),C("")},T=O=>{if(O.preventDefault(),n==="phone"){if(!l||!g){C("请填写手机号和验证码");return}console.log("手机号登录",{phone:l,verificationCode:g})}else{if(!o||!u){C("请填写用户名和密码");return}console.log("密码登录",{username:o,password:u})}C("")},F=O=>{if(O.preventDefault(),!o||!l||!u||!p||!g){C("请填写所有必填字段");return}if(u!==p){C("两次输入的密码不一致");return}console.log("注册",{username:o,phone:l,password:u,verificationCode:g}),C("")};return s.jsxs(k8,{children:[s.jsx(C8,{children:s.jsxs(E8,{children:[s.jsx(_8,{children:"用户中心"}),s.jsx(z8,{children:"登录或注册零屿笔记，开始您的知识管理之旅"})]})}),s.jsx(P8,{children:s.jsx(T8,{children:s.jsxs(R8,{children:[s.jsxs(E1,{children:[s.jsx(Ni,{active:e==="login",onClick:()=>t("login"),children:"登录"}),s.jsx(Ni,{active:e==="register",onClick:()=>t("register"),children:"注册"})]}),e==="login"?s.jsxs(s.Fragment,{children:[s.jsxs(E1,{children:[s.jsx(Ni,{active:n==="phone",onClick:()=>r("phone"),children:"手机验证码登录"}),s.jsx(Ni,{active:n==="password",onClick:()=>r("password"),children:"账号密码登录"})]}),s.jsxs(_1,{onSubmit:T,children:[n==="phone"?s.jsxs(s.Fragment,{children:[s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(o1,{})}),s.jsx(Mt,{type:"tel",placeholder:"请输入手机号",value:l,onChange:O=>a(O.target.value)})]}),s.jsx(xt,{children:s.jsxs(P1,{children:[s.jsx(T1,{type:"text",placeholder:"请输入验证码",value:g,onChange:O=>w(O.target.value)}),s.jsx(R1,{type:"button",disabled:f>0,onClick:S,children:f>0?`${f}秒后重新获取`:"获取验证码"})]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(Nl,{})}),s.jsx(Mt,{type:"text",placeholder:"请输入用户名/手机号/邮箱",value:o,onChange:O=>i(O.target.value)})]}),s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(Ws,{})}),s.jsx(Mt,{type:v?"text":"password",placeholder:"请输入密码",value:u,onChange:O=>c(O.target.value)}),s.jsx(ia,{onClick:()=>y(!v),children:v?s.jsx(Hs,{}):s.jsx(Us,{})})]})]}),j&&s.jsx(L1,{children:j}),s.jsx(z1,{type:"submit",children:"登录"})]}),s.jsx(N8,{children:s.jsx("span",{children:"或"})}),s.jsxs(O8,{children:[s.jsx(A1,{title:"微信登录",children:s.jsx("svg",{t:"1701234567890",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:s.jsx("path",{d:"M692.677 347.793c4.049 0 8.064 0.097 12.065 0.257-31.009-144.835-185.701-252.26-362.061-252.26-197.184 0-359.488 134.513-359.488 306.529 0 99.074 54.113 180.655 144.513 243.793l-36.129 108.705 126.337-63.281c45.201 8.929 81.457 18.177 126.721 18.177 11.361 0 22.625-0.545 33.793-1.409-7.073-24.225-11.169-49.633-11.169-75.969 0.001-158.065 135.681-284.545 325.425-284.545zM497.025 249.345c27.201 0 45.249 17.889 45.249 45.057 0 27.073-18.048 45.249-45.249 45.249-27.073 0-54.241-18.177-54.241-45.249 0-27.169 27.169-45.057 54.241-45.057zM244.657 339.651c-27.073 0-54.433-18.177-54.433-45.249 0-27.169 27.361-45.057 54.433-45.057 27.201 0 45.249 17.889 45.249 45.057 0 27.073-18.048 45.249-45.249 45.249zM1010.607 630.065c0-144.833-144.513-262.865-306.913-262.865-171.873 0-307.073 118.033-307.073 262.865 0 145.121 135.201 262.865 307.073 262.865 35.937 0 72.257-9.025 108.513-18.177l99.073 54.241-27.169-90.241c72.545-54.529 126.497-126.721 126.497-208.689zM616.707 584.817c-18.048 0-36.129-17.889-36.129-36.129 0-18.049 18.081-36.129 36.129-36.129 27.361 0 45.249 18.081 45.249 36.129 0 18.241-17.889 36.129-45.249 36.129zM815.539 584.817c-17.889 0-36.033-17.889-36.033-36.129 0-18.049 18.145-36.129 36.033-36.129 27.073 0 45.249 18.081 45.249 36.129 0 18.241-18.177 36.129-45.249 36.129z",fill:"#09BB07"})})}),s.jsx(A1,{title:"QQ登录",children:s.jsxs("svg",{t:"1701234567890",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:[s.jsx("path",{d:"M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z",fill:"#FAAD08"}),s.jsx("path",{d:"M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z",fill:"#FAAD08"}),s.jsx("path",{d:"M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z",fill:"#000000"}),s.jsx("path",{d:"M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698c-3.262-0.963-9.717-0.148-9.717-0.148-11.222 29.214-22.307 59.634-30.427 85.72-38.36 123.76-43.378 245.832-26.494 283.93 16.887 38.099 53.07 36.523 53.07 36.523 22.756-8.609 86.029-76.086 121.346-141.952 0 0 1.333-2.576 2.42-3.646 3.532-2.532 11.27-0.315 11.27-0.315 86.04 20.31 185.274 32.17 289.736 32.17 105.982 0 209.414-12.028 297.766-32.915 0 0 7.453-1.745 10.646 0.147 1.985 1.2 2.423 3.648 2.423 3.648 35.318 65.866 98.59 133.343 121.347 141.952 0 0 36.183 1.576 53.069-36.523 16.883-38.098 11.871-160.17-26.492-283.93z",fill:"#000000"}),s.jsx("path",{d:"M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.236-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453",fill:"#FFFFFF"}),s.jsx("path",{d:"M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498",fill:"#FAAD08"}),s.jsx("path",{d:"M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135",fill:"#000000"}),s.jsx("path",{d:"M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927",fill:"#FFFFFF"}),s.jsx("path",{d:"M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574",fill:"#EB1C26"}),s.jsx("path",{d:"M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z",fill:"#EB1C26"})]})})]}),s.jsxs(N1,{children:["还没有账号？ ",s.jsx(O1,{onClick:()=>t("register"),children:"立即注册"})]})]}):s.jsxs(_1,{onSubmit:F,children:[s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(Nl,{})}),s.jsx(Mt,{type:"text",placeholder:"请输入用户名",value:o,onChange:O=>i(O.target.value)})]}),s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(o1,{})}),s.jsx(Mt,{type:"tel",placeholder:"请输入手机号",value:l,onChange:O=>a(O.target.value)})]}),s.jsx(xt,{children:s.jsxs(P1,{children:[s.jsx(T1,{type:"text",placeholder:"请输入验证码",value:g,onChange:O=>w(O.target.value)}),s.jsx(R1,{type:"button",disabled:f>0,onClick:S,children:f>0?`${f}秒后重新获取`:"获取验证码"})]})}),s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(Ws,{})}),s.jsx(Mt,{type:v?"text":"password",placeholder:"请设置密码",value:u,onChange:O=>c(O.target.value)}),s.jsx(ia,{onClick:()=>y(!v),children:v?s.jsx(Hs,{}):s.jsx(Us,{})})]}),s.jsxs(xt,{children:[s.jsx(dn,{children:s.jsx(Ws,{})}),s.jsx(Mt,{type:k?"text":"password",placeholder:"请确认密码",value:p,onChange:O=>d(O.target.value)}),s.jsx(ia,{onClick:()=>h(!k),children:k?s.jsx(Hs,{}):s.jsx(Us,{})})]}),j&&s.jsx(L1,{children:j}),s.jsx(z1,{type:"submit",children:"注册"}),s.jsxs(N1,{children:["已有账号？ ",s.jsx(O1,{onClick:()=>t("login"),children:"立即登录"})]})]})]})})})]})},L8=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: var(--light-background);
`,F8=x.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,M8=x.h2`
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,I8=x.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
`,$8=x(gt)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #2980b9;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,b8=()=>s.jsxs(L8,{children:[s.jsx(F8,{children:"404"}),s.jsx(M8,{children:"页面未找到"}),s.jsx(I8,{children:"很抱歉，您尝试访问的页面不存在或已被移除。 请检查URL是否正确，或返回首页继续浏览。"}),s.jsx($8,{to:"/",children:"返回首页"})]});x.div`
  background-color: var(--background-paper);
  border-radius: var(--radius-md);
  padding: ${e=>e.padding||"var(--spacing-md)"};
  
  ${e=>e.elevation===0&&Ft`
    box-shadow: none;
  `}
  
  ${e=>e.elevation===1&&Ft`
    box-shadow: var(--shadow-light);
  `}
  
  ${e=>e.elevation===2&&Ft`
    box-shadow: var(--shadow-main);
  `}
  
  ${e=>e.elevation===3&&Ft`
    box-shadow: var(--shadow-dark);
  `}
  
  ${e=>e.elevation===4&&Ft`
    box-shadow: var(--shadow-intense);
  `}
  
  ${e=>e.square&&Ft`
    border-radius: 0;
  `}
  
  ${e=>e.hoverable&&Ft`
    transition: var(--transition-normal);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-dark);
    }
  `}
`;const D8=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`,B8=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
`,H8=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  background-color: var(--background-alt);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  
  svg {
    color: var(--text-secondary);
    margin-right: var(--spacing-xs);
  }
  
  input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--text-primary);
    outline: none;
    font-size: 0.9rem;
  }
`,U8=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,F1=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--background-alt);
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`,M1=x.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--primary-main);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-dark);
  }
`,V8=x.div`
  display: ${e=>e.visible?"flex":"none"};
  flex-direction: column;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
  background-color: var(--background-alt);
  gap: var(--spacing-md);
`,I1=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`,$1=x.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`,b1=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`,la=x.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: 1px solid ${e=>e.selected?"var(--primary-main)":"var(--border-light)"};
  background-color: ${e=>e.selected?"var(--primary-light)":"var(--background-paper)"};
  color: ${e=>e.selected?"var(--primary-dark)":"var(--text-primary)"};
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    border-color: var(--primary-main);
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`,W8=x.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-sm);
`,Q8=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,fh=x.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  background-color: ${e=>e.color||"var(--background-default)"};
  border-left: 4px solid ${e=>e.color||"var(--primary-main)"};
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition-normal);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`,K8=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
`,G8=x.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Y8=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  opacity: 0;
  transition: var(--transition-normal);
  
  ${fh}:hover & {
    opacity: 1;
  }
`,sa=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  border: none;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt);
    color: var(--primary-main);
  }
`,q8=x.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,J8=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
  font-size: 0.8rem;
  color: var(--text-tertiary);
`,X8=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
`,aa=x.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  background-color: ${e=>e.color||"var(--background-alt)"};
  color: var(--text-secondary);
  font-size: 0.75rem;
`,Z8=x.span`
  font-size: 0.75rem;
`,e5=x.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 24px 24px 0;
  border-color: transparent var(--primary-main) transparent transparent;
`,t5=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
  text-align: center;
  
  svg {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    font-size: 0.9rem;
    max-width: 400px;
  }
`,n5=({notes:e=[],categories:t=[],tags:n=[],onNoteSelect:r,onNewNote:o})=>{const[i,l]=_.useState(""),[a,u]=_.useState(!1),[c,p]=_.useState(null),[d,g]=_.useState([]),[w,v]=_.useState("updated_desc"),[y,k]=_.useState([]);_.useEffect(()=>{let S=[...e];if(i){const T=i.toLowerCase();S=S.filter(F=>F.title.toLowerCase().includes(T)||F.content&&F.content.toLowerCase().includes(T))}c&&(S=S.filter(T=>T.category===c)),d.length>0&&(S=S.filter(T=>d.every(F=>T.tags.some(O=>O.id===F)))),S.sort((T,F)=>{if(T.is_pinned&&!F.is_pinned)return-1;if(!T.is_pinned&&F.is_pinned)return 1;switch(w){case"updated_desc":return new Date(F.updated_at)-new Date(T.updated_at);case"updated_asc":return new Date(T.updated_at)-new Date(F.updated_at);case"created_desc":return new Date(F.created_at)-new Date(T.created_at);case"created_asc":return new Date(T.created_at)-new Date(F.created_at);case"title_asc":return T.title.localeCompare(F.title);case"title_desc":return F.title.localeCompare(T.title);default:return new Date(F.updated_at)-new Date(T.updated_at)}}),k(S)},[e,i,c,d,w]);const h=()=>{const S=["updated_desc","updated_asc","created_desc","created_asc","title_asc","title_desc"],F=(S.indexOf(w)+1)%S.length;v(S[F])},f=S=>{d.includes(S)?g(d.filter(T=>T!==S)):g([...d,S])},m=S=>new Date(S).toLocaleDateString("zh-CN",{year:"numeric",month:"short",day:"numeric"}),j=()=>{switch(w){case"updated_desc":return{icon:s.jsx(ai,{}),text:"最近更新"};case"updated_asc":return{icon:s.jsx(Qs,{}),text:"最早更新"};case"created_desc":return{icon:s.jsx(ai,{}),text:"最近创建"};case"created_asc":return{icon:s.jsx(Qs,{}),text:"最早创建"};case"title_asc":return{icon:s.jsx(Qs,{}),text:"标题升序"};case"title_desc":return{icon:s.jsx(ai,{}),text:"标题降序"};default:return{icon:s.jsx(ai,{}),text:"最近更新"}}},{icon:C,text:z}=j();return s.jsxs(D8,{children:[s.jsxs(B8,{children:[s.jsxs(H8,{children:[s.jsx(s1,{}),s.jsx("input",{type:"text",placeholder:"搜索笔记...",value:i,onChange:S=>l(S.target.value)})]}),s.jsxs(U8,{children:[s.jsx(F1,{title:z,onClick:h,children:C}),s.jsx(F1,{title:"筛选选项",onClick:()=>u(!a),style:{backgroundColor:a?"var(--primary-light)":"var(--background-alt)"},children:s.jsx(ag,{})}),s.jsxs(M1,{onClick:o,children:[s.jsx(l1,{})," 新建笔记"]})]})]}),s.jsxs(V8,{visible:a,children:[s.jsxs(I1,{children:[s.jsxs($1,{children:[s.jsx(r1,{})," 分类"]}),s.jsxs(b1,{children:[s.jsx(la,{selected:c===null,onClick:()=>p(null),children:"全部"}),t.map(S=>s.jsx(la,{selected:c===S.id,onClick:()=>p(S.id),style:{borderColor:S.color||"var(--border-light)",backgroundColor:c===S.id?`${S.color}20`||"var(--primary-light)":"var(--background-paper)"},children:S.name},S.id))]})]}),s.jsxs(I1,{children:[s.jsxs($1,{children:[s.jsx(c1,{})," 标签"]}),s.jsx(b1,{children:n.map(S=>s.jsx(la,{selected:d.includes(S.id),onClick:()=>f(S.id),style:{borderColor:S.color||"var(--border-light)",backgroundColor:d.includes(S.id)?`${S.color}20`||"var(--primary-light)":"var(--background-paper)"},children:S.name},S.id))})]})]}),s.jsx(W8,{children:y.length>0?s.jsx(Q8,{children:y.map(S=>s.jsxs(fh,{color:S.color,onClick:()=>r(S.id),children:[S.is_pinned&&s.jsx(e5,{}),s.jsxs(K8,{children:[s.jsx(G8,{children:S.title}),s.jsxs(Y8,{children:[s.jsx(sa,{title:"置顶笔记",children:s.jsx(Eg,{})}),s.jsx(sa,{title:"归档笔记",children:s.jsx(eg,{})}),s.jsx(sa,{title:"删除笔记",children:s.jsx(zg,{})})]})]}),s.jsx(q8,{children:S.content?S.content.replace(/<[^>]*>/g,""):"无内容"}),s.jsxs(J8,{children:[s.jsxs(X8,{children:[S.category_name&&s.jsxs(aa,{color:"var(--primary-light)",children:[s.jsx(r1,{size:10})," ",S.category_name]}),S.tags&&S.tags.slice(0,3).map(T=>s.jsxs(aa,{color:T.color||"var(--background-alt)",children:[s.jsx(c1,{size:10})," ",T.name]},T.id)),S.tags&&S.tags.length>3&&s.jsxs(aa,{children:["+",S.tags.length-3]})]}),s.jsx(Z8,{children:m(S.updated_at)})]})]},S.id))}):s.jsxs(t5,{children:[s.jsx(s1,{}),s.jsx("h3",{children:"未找到笔记"}),s.jsx("p",{children:i||c||d.length>0?"尝试使用不同的搜索词或筛选条件":"开始创建你的第一个笔记吧"}),!i&&!c&&d.length===0&&s.jsxs(M1,{onClick:o,style:{marginTop:"var(--spacing-md)"},children:[s.jsx(l1,{})," 新建笔记"]})]})})]})},r5=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`,o5=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
`,i5=x.input`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: var(--spacing-sm);
  
  &:focus {
    border-bottom: 2px solid var(--primary-main);
  }
`,l5=x.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`,Wn=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding-right: var(--spacing-sm);
  margin-right: var(--spacing-sm);
  border-right: 1px solid var(--border-light);
  
  &:last-child {
    border-right: none;
  }
`,we=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  border: none;
  background-color: ${e=>e.active?"var(--primary-light)":"transparent"};
  color: ${e=>e.active?"var(--primary-dark)":"var(--text-secondary)"};
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt);
    color: var(--primary-main);
  }
  
  &:active {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`,s5=x.div`
  flex: 1;
  padding: var(--spacing-md);
  overflow-y: auto;
`,a5=x.div`
  width: 100%;
  min-height: 400px;
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: var(--background-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
`,u5=x.textarea`
  width: 100%;
  min-height: 400px;
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Courier New', monospace;
  outline: none;
  resize: none;
  border: none;
  background-color: var(--background-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
`,c5=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  border-top: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-size: 0.875rem;
`,d5=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`,f5=x.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--primary-main);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--background-alt);
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`,p5=x.div`
  display: flex;
  align-items: center;
  background-color: var(--background-alt);
  border-radius: var(--radius-md);
  overflow: hidden;
`,ua=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: none;
  background-color: ${e=>e.active?"var(--primary-main)":"transparent"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  font-weight: ${e=>e.active?"500":"normal"};
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary-main)":"var(--background-paper)"};
  }
`,h5=({initialNote:e,onSave:t})=>{const[n,r]=_.useState("rich_text"),[o,i]=_.useState(e||{title:"",content:"",content_type:"rich_text",tags:[],category:null,is_pinned:!1,color:""}),[l,a]=_.useState(0),[u,c]=_.useState(0),[p,d]=_.useState(!1),[g,w]=_.useState(!1),v=_.useRef(null),y=_.useRef(null);_.useEffect(()=>{if(o.content){const C=o.content.replace(/<[^>]*>/g,"");c(C.length),a(C.trim().split(/\s+/).length)}else c(0),a(0)},[o.content]),_.useEffect(()=>{e&&e.content_type&&r(e.content_type)},[e]);const k=C=>{i(z=>({...z,title:C.target.value})),w(!0)},h=()=>{n==="rich_text"||n==="plain_text"?i(C=>({...C,content:v.current.innerHTML,content_type:n})):n==="markdown"&&i(C=>({...C,content:y.current.value,content_type:"markdown"})),w(!0)},f=C=>{r(C),i(z=>({...z,content_type:C}))},m=(C,z=null)=>{n==="rich_text"&&(document.execCommand(C,!1,z),h())},j=async()=>{if(!o.title.trim()){alert("请输入笔记标题");return}d(!0);try{await t(o),w(!1)}catch(C){console.error("保存笔记失败:",C),alert("保存失败，请重试")}finally{d(!1)}};return s.jsxs(r5,{children:[s.jsxs(o5,{children:[s.jsx(i5,{type:"text",placeholder:"输入笔记标题...",value:o.title,onChange:k}),s.jsxs(p5,{children:[s.jsxs(ua,{active:n==="rich_text",onClick:()=>f("rich_text"),children:[s.jsx(ug,{})," 富文本"]}),s.jsxs(ua,{active:n==="markdown",onClick:()=>f("markdown"),children:[s.jsx(Y4,{})," Markdown"]}),s.jsxs(ua,{active:n==="plain_text",onClick:()=>f("plain_text"),children:[s.jsx(n1,{})," 纯文本"]})]})]}),n==="rich_text"&&s.jsxs(l5,{children:[s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>m("bold"),children:s.jsx(rg,{})}),s.jsx(we,{onClick:()=>m("italic"),children:s.jsx(fg,{})}),s.jsx(we,{onClick:()=>m("underline"),children:s.jsx(Pg,{})})]}),s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>m("formatBlock","<h1>"),children:s.jsx(cg,{})}),s.jsx(we,{onClick:()=>m("formatBlock","<blockquote>"),children:s.jsx(yg,{})}),s.jsx(we,{onClick:()=>m("formatBlock","<pre>"),children:s.jsx(og,{})})]}),s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>m("insertUnorderedList"),children:s.jsx(mg,{})}),s.jsx(we,{onClick:()=>m("insertOrderedList"),children:s.jsx(hg,{})})]}),s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>m("justifyLeft"),children:s.jsx(n1,{})}),s.jsx(we,{onClick:()=>m("justifyCenter"),children:s.jsx(J4,{})}),s.jsx(we,{onClick:()=>m("justifyRight"),children:s.jsx(Z4,{})}),s.jsx(we,{onClick:()=>m("justifyFull"),children:s.jsx(X4,{})})]}),s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>{const C=prompt("请输入图片URL:");C&&m("insertImage",C)},children:s.jsx(dg,{})}),s.jsx(we,{onClick:()=>{const C=prompt("请输入链接URL:");C&&m("createLink",C)},children:s.jsx(pg,{})})]}),s.jsxs(Wn,{children:[s.jsx(we,{onClick:()=>m("undo"),children:s.jsx(Tg,{})}),s.jsx(we,{onClick:()=>m("redo"),children:s.jsx(wg,{})})]})]}),s.jsxs(s5,{children:[(n==="rich_text"||n==="plain_text")&&s.jsx(a5,{ref:v,contentEditable:!0,dangerouslySetInnerHTML:{__html:o.content},onInput:h,style:{fontFamily:n==="plain_text"?'"Courier New", monospace':"inherit"}}),n==="markdown"&&s.jsx(u5,{ref:y,value:o.content,onChange:h,placeholder:"使用Markdown格式编写笔记..."})]}),s.jsxs(c5,{children:[s.jsxs(d5,{children:[s.jsxs("span",{children:[l," 词"]}),s.jsxs("span",{children:[u," 字符"]}),s.jsx("span",{children:g?"已修改":"已保存"})]}),s.jsxs(f5,{onClick:j,disabled:p||!g,children:[s.jsx(Sg,{}),p?"保存中...":"保存笔记"]})]})]})},m5=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg) var(--spacing-md);
  }
`,g5=x.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
`,v5=x.div`
  display: flex;
  gap: var(--spacing-xl);
  flex: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`,x5=x.div`
  width: 380px;
  flex-shrink: 0;
  display: ${e=>e.visible?"block":"none"};
  
  @media (max-width: 992px) {
    width: 100%;
  }
`,y5=x.div`
  flex: 1;
  display: ${e=>e.visible?"block":"none"};
`,w5=x.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--background-alt);
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: var(--spacing-md);
  
  &:hover {
    background-color: var(--background-paper);
    color: var(--primary-main);
  }
`,S5=[{id:"1",name:"工作",color:"#4A6FFF",icon:"briefcase"},{id:"2",name:"学习",color:"#6C5CE7",icon:"book"},{id:"3",name:"个人",color:"#00D2D3",icon:"user"},{id:"4",name:"项目",color:"#2ECC71",icon:"project"}],j5=[{id:"1",name:"重要",color:"#E74C3C"},{id:"2",name:"待办",color:"#F39C12"},{id:"3",name:"灵感",color:"#8C7AE6"},{id:"4",name:"会议",color:"#3498DB"},{id:"5",name:"参考",color:"#1ABC9C"}],k5=[{id:"1",title:"项目计划书",content:"<p>这是一个项目计划书，包含以下内容：</p><ul><li>项目背景</li><li>目标与范围</li><li>时间线</li><li>资源需求</li><li>风险评估</li></ul>",content_type:"rich_text",category:"1",category_name:"工作",tags:[{id:"1",name:"重要",color:"#E74C3C"},{id:"4",name:"会议",color:"#3498DB"}],is_pinned:!0,is_archived:!1,is_trashed:!1,color:"#EBF3FF",created_at:"2023-11-15T10:30:00Z",updated_at:"2023-11-16T14:20:00Z"},{id:"2",title:"学习笔记：React Hooks",content:"<h2>React Hooks 基础</h2><p>React Hooks 是 React 16.8 引入的新特性，它可以让你在不编写 class 的情况下使用 state 和其他 React 特性。</p><h3>常用的 Hooks</h3><ul><li>useState</li><li>useEffect</li><li>useContext</li><li>useReducer</li><li>useCallback</li><li>useMemo</li><li>useRef</li></ul>",content_type:"rich_text",category:"2",category_name:"学习",tags:[{id:"5",name:"参考",color:"#1ABC9C"}],is_pinned:!1,is_archived:!1,is_trashed:!1,color:"#F0ECFF",created_at:"2023-11-10T09:15:00Z",updated_at:"2023-11-12T16:45:00Z"},{id:"3",title:"周末计划",content:`- 周六上午：健身
- 周六下午：读书
- 周六晚上：电影
- 周日：家庭聚餐`,content_type:"markdown",category:"3",category_name:"个人",tags:[{id:"2",name:"待办",color:"#F39C12"}],is_pinned:!0,is_archived:!1,is_trashed:!1,color:"#E6FFF9",created_at:"2023-11-17T18:30:00Z",updated_at:"2023-11-17T18:45:00Z"},{id:"4",title:"产品创意",content:"<p>新产品创意：智能家居控制系统</p><p>核心功能：</p><ol><li>语音控制</li><li>远程监控</li><li>能源管理</li><li>自动化场景</li><li>安全警报</li></ol><p>目标用户：年轻家庭、科技爱好者</p>",content_type:"rich_text",category:"4",category_name:"项目",tags:[{id:"3",name:"灵感",color:"#8C7AE6"}],is_pinned:!1,is_archived:!1,is_trashed:!1,color:"#E8F8EF",created_at:"2023-11-05T11:20:00Z",updated_at:"2023-11-08T09:30:00Z"}],C5=()=>{const[e,t]=_.useState("list"),[n,r]=_.useState(k5),[o,i]=_.useState(S5),[l,a]=_.useState(j5),[u,c]=_.useState(null),p=v=>{const y=n.find(k=>k.id===v);c(y),t("editor")},d=()=>{const v={id:Date.now().toString(),title:"",content:"",content_type:"rich_text",category:null,tags:[],is_pinned:!1,is_archived:!1,is_trashed:!1,color:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()};c(v),t("editor")},g=()=>{t("list"),c(null)},w=v=>{const y=!n.some(k=>k.id===v.id);r(y?[v,...n]:n.map(k=>k.id===v.id?v:k))};return s.jsxs(m5,{children:[s.jsx(g5,{children:"我的笔记"}),s.jsxs(v5,{children:[s.jsx(x5,{visible:e==="list",children:s.jsx(n5,{notes:n,categories:o,tags:l,onNoteSelect:p,onNewNote:d})}),s.jsxs(y5,{visible:e==="editor",children:[s.jsxs(w5,{onClick:g,children:[s.jsx(tg,{})," 返回笔记列表"]}),u&&s.jsx(h5,{initialNote:u,onSave:w})]})]})]})},E5=()=>s.jsx(uv,{children:s.jsx(lv,{children:s.jsxs("div",{className:"app",children:[s.jsx(jv,{}),s.jsx("main",{children:s.jsxs(A6,{children:[s.jsx(At,{path:"/",element:s.jsx(Wv,{})}),s.jsx(At,{path:"/features",element:s.jsx(Jv,{})}),s.jsx(At,{path:"/download",element:s.jsx(u8,{})}),s.jsx(At,{path:"/about",element:s.jsx(j8,{})}),s.jsx(At,{path:"/auth",element:s.jsx(A8,{})}),s.jsx(At,{path:"/notes",element:s.jsx(C5,{})}),s.jsx(At,{path:"*",element:s.jsx(b8,{})})]})}),s.jsx(Pv,{})]})})});ca.createRoot(document.getElementById("root")).render(s.jsx(Ne.StrictMode,{children:s.jsx(D6,{children:s.jsx(E5,{})})}));
