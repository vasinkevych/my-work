webpackJsonp([3],{488:function(t,e,r){"use strict";function n(t){return{onLoadData:function(e){void 0!==e&&e.preventDefault&&e.preventDefault(),t(Object(p.d)())}}}Object.defineProperty(e,"__esModule",{value:!0}),e.mapDispatchToProps=n;var o=r(118),c=r(180),a=r(499),i=(r.n(a),r(514)),u=r(553),f=r(555),s=r(544),l=r(556),p=r(547),y=Object(i.a)({key:"header",saga:u.a}),h=Object(s.a)({key:"header",reducer:p.b}),v=Object(a.createStructuredSelector)({branch:Object(f.a)()}),b=Object(c.b)(v,n);e.default=Object(o.c)(h,y,b)(l.a)},492:function(t,e,r){var n=r(504),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();t.exports=c},493:function(t,e,r){function n(t,e){var r=c(t,e);return o(r)?r:void 0}var o=r(520),c=r(525);t.exports=n},494:function(t,e,r){function n(t){if(!c(t))return!1;var e=o(t);return e==i||e==u||e==a||e==f}var o=r(495),c=r(497),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",f="[object Proxy]";t.exports=n},495:function(t,e,r){function n(t){return null==t?void 0===t?u:i:f&&f in Object(t)?c(t):a(t)}var o=r(503),c=r(521),a=r(522),i="[object Null]",u="[object Undefined]",f=o?o.toStringTag:void 0;t.exports=n},496:function(t,e){function r(t){return null!=t&&"object"==typeof t}t.exports=r},497:function(t,e){function r(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=r},498:function(t,e){var r=Array.isArray;t.exports=r},499:function(t,e,r){"use strict";function n(t,e){return t===e}function o(t,e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var n=e.length,o=0;o<n;o++)if(!t(e[o],r[o]))return!1;return!0}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=null,c=null;return function(){return o(e,r,arguments)||(c=t.apply(null,arguments)),r=arguments,c}}function a(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(t){return"function"===typeof t})){var r=e.map(function(t){return typeof t}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return e}function i(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var i=0,u=n.pop(),f=a(n),s=t.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(r)),l=c(function(){for(var t=[],e=f.length,r=0;r<e;r++)t.push(f[r].apply(null,arguments));return s.apply(null,t)});return l.resultFunc=u,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;if("object"!==typeof t)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof t);var r=Object.keys(t);return e(r.map(function(e){return t[e]}),function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e,n){return t[r[n]]=e,t},{})})}e.__esModule=!0,e.defaultMemoize=c,e.createSelectorCreator=i,e.createStructuredSelector=u;var f=e.createSelector=i(c)},500:function(t,e,r){function n(t){if(null==t)return!0;if(u(t)&&(i(t)||"string"==typeof t||"function"==typeof t.splice||f(t)||l(t)||a(t)))return!t.length;var e=c(t);if(e==p||e==y)return!t.size;if(s(t))return!o(t).length;for(var r in t)if(v.call(t,r))return!1;return!0}var o=r(501),c=r(518),a=r(506),i=r(498),u=r(507),f=r(509),s=r(502),l=r(510),p="[object Map]",y="[object Set]",h=Object.prototype,v=h.hasOwnProperty;t.exports=n},501:function(t,e,r){function n(t){if(!o(t))return c(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}var o=r(502),c=r(516),a=Object.prototype,i=a.hasOwnProperty;t.exports=n},502:function(t,e){function r(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}var n=Object.prototype;t.exports=r},503:function(t,e,r){var n=r(492),o=n.Symbol;t.exports=o},504:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(e,r(49))},505:function(t,e){function r(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var n=Function.prototype,o=n.toString;t.exports=r},506:function(t,e,r){var n=r(530),o=r(496),c=Object.prototype,a=c.hasOwnProperty,i=c.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!i.call(t,"callee")};t.exports=u},507:function(t,e,r){function n(t){return null!=t&&c(t.length)&&!o(t)}var o=r(494),c=r(508);t.exports=n},508:function(t,e){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}var n=9007199254740991;t.exports=r},509:function(t,e,r){(function(t){var n=r(492),o=r(531),c="object"==typeof e&&e&&!e.nodeType&&e,a=c&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===c,u=i?n.Buffer:void 0,f=u?u.isBuffer:void 0,s=f||o;t.exports=s}).call(e,r(117)(t))},510:function(t,e,r){var n=r(532),o=r(533),c=r(534),a=c&&c.isTypedArray,i=a?o(a):n;t.exports=i},511:function(t,e,r){function n(t){return"string"==typeof t||!c(t)&&a(t)&&o(t)==i}var o=r(495),c=r(498),a=r(496),i="[object String]";t.exports=n},512:function(t,e,r){function n(t,e){return null==e||o(t,e,c(e))}var o=r(535),c=r(536);t.exports=n},513:function(t,e,r){"use strict";function n(t){var e={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:f.a,injectedSagas:f.a};l()(c()(t,e),"(src/utils...) injectors: Expected a valid redux store")}e.a=n;var o=r(512),c=r.n(o),a=r(494),i=r.n(a),u=r(497),f=r.n(u),s=r(23),l=r.n(s)},514:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(6),i=r.n(a),u=r(11),f=r.n(u),s=r(116),l=r.n(s),p=r(515),y=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.a=function(t){var e=t.key,r=t.saga,a=t.mode;return function(t){var u=function(u){function f(){var t,e,r,c;n(this,f);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return e=r=o(this,(t=f.__proto__||Object.getPrototypeOf(f)).call.apply(t,[this].concat(i))),r.injectors=Object(p.a)(r.context.store),c=e,o(r,c)}return c(f,u),y(f,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(e,{saga:r,mode:a},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(e)}},{key:"render",value:function(){return i.a.createElement(t,this.props)}}]),f}(i.a.Component);return u.WrappedComponent=t,u.contextTypes={store:f.a.object.isRequired},u.displayName="withSaga("+(t.displayName||t.name||"Component")+")",l()(u,t)}}},515:function(t,e,r){"use strict";function n(t,e){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2];e||Object(b.a)(t);var c=Object.assign({},n,{mode:n.mode||d.c}),a=c.saga,i=c.mode;j(r),m(c);var u=Reflect.has(t.injectedSagas,r);(!u||u&&i!==d.a&&i!==d.b)&&(t.injectedSagas[r]=Object.assign({},c,{task:t.runSaga(a,o)}))}}function o(t,e){return function(r){if(e||Object(b.a)(t),j(r),Reflect.has(t.injectedSagas,r)){var n=t.injectedSagas[r];n.mode!==d.a&&(n.task.cancel(),t.injectedSagas[r]="done")}}}function c(t){return Object(b.a)(t),{injectSaga:n(t,!0),ejectSaga:o(t,!0)}}e.a=c;var a=r(500),i=r.n(a),u=r(494),f=r.n(u),s=r(511),l=r.n(s),p=r(23),y=r.n(p),h=r(512),v=r.n(h),b=r(513),d=r(540),g=[d.c,d.a,d.b],j=function(t){return y()(l()(t)&&!i()(t),"(src/utils...) injectSaga: Expected `key` to be a non empty string")},m=function(t){var e={saga:f.a,mode:function(t){return l()(t)&&g.includes(t)}};y()(v()(t,e),"(app/utils...) injectSaga: Expected a valid saga descriptor")}},516:function(t,e,r){var n=r(517),o=n(Object.keys,Object);t.exports=o},517:function(t,e){function r(t,e){return function(r){return t(e(r))}}t.exports=r},518:function(t,e,r){var n=r(519),o=r(526),c=r(527),a=r(528),i=r(529),u=r(495),f=r(505),s=f(n),l=f(o),p=f(c),y=f(a),h=f(i),v=u;(n&&"[object DataView]"!=v(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=v(new o)||c&&"[object Promise]"!=v(c.resolve())||a&&"[object Set]"!=v(new a)||i&&"[object WeakMap]"!=v(new i))&&(v=function(t){var e=u(t),r="[object Object]"==e?t.constructor:void 0,n=r?f(r):"";if(n)switch(n){case s:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case y:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=v},519:function(t,e,r){var n=r(493),o=r(492),c=n(o,"DataView");t.exports=c},520:function(t,e,r){function n(t){return!(!a(t)||c(t))&&(o(t)?h:f).test(i(t))}var o=r(494),c=r(523),a=r(497),i=r(505),u=/[\\^$.*+?()[\]{}|]/g,f=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,p=s.toString,y=l.hasOwnProperty,h=RegExp("^"+p.call(y).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=n},521:function(t,e,r){function n(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}var o=r(503),c=Object.prototype,a=c.hasOwnProperty,i=c.toString,u=o?o.toStringTag:void 0;t.exports=n},522:function(t,e){function r(t){return o.call(t)}var n=Object.prototype,o=n.toString;t.exports=r},523:function(t,e,r){function n(t){return!!c&&c in t}var o=r(524),c=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=n},524:function(t,e,r){var n=r(492),o=n["__core-js_shared__"];t.exports=o},525:function(t,e){function r(t,e){return null==t?void 0:t[e]}t.exports=r},526:function(t,e,r){var n=r(493),o=r(492),c=n(o,"Map");t.exports=c},527:function(t,e,r){var n=r(493),o=r(492),c=n(o,"Promise");t.exports=c},528:function(t,e,r){var n=r(493),o=r(492),c=n(o,"Set");t.exports=c},529:function(t,e,r){var n=r(493),o=r(492),c=n(o,"WeakMap");t.exports=c},530:function(t,e,r){function n(t){return c(t)&&o(t)==a}var o=r(495),c=r(496),a="[object Arguments]";t.exports=n},531:function(t,e){function r(){return!1}t.exports=r},532:function(t,e,r){function n(t){return a(t)&&c(t.length)&&!!i[o(t)]}var o=r(495),c=r(508),a=r(496),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=n},533:function(t,e){function r(t){return function(e){return t(e)}}t.exports=r},534:function(t,e,r){(function(t){var n=r(504),o="object"==typeof e&&e&&!e.nodeType&&e,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=c&&c.exports===o,i=a&&n.process,u=function(){try{var t=c&&c.require&&c.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(e,r(117)(t))},535:function(t,e){function r(t,e,r){var n=r.length;if(null==t)return!n;for(t=Object(t);n--;){var o=r[n],c=e[o],a=t[o];if(void 0===a&&!(o in t)||!c(a))return!1}return!0}t.exports=r},536:function(t,e,r){function n(t){return a(t)?o(t):c(t)}var o=r(537),c=r(501),a=r(507);t.exports=n},537:function(t,e,r){function n(t,e){var r=a(t),n=!r&&c(t),s=!r&&!n&&i(t),p=!r&&!n&&!s&&f(t),y=r||n||s||p,h=y?o(t.length,String):[],v=h.length;for(var b in t)!e&&!l.call(t,b)||y&&("length"==b||s&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||u(b,v))||h.push(b);return h}var o=r(538),c=r(506),a=r(498),i=r(509),u=r(539),f=r(510),s=Object.prototype,l=s.hasOwnProperty;t.exports=n},538:function(t,e){function r(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}t.exports=r},539:function(t,e){function r(t,e){var r=typeof t;return!!(e=null==e?n:e)&&("number"==r||"symbol"!=r&&o.test(t))&&t>-1&&t%1==0&&t<e}var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=r},540:function(t,e,r){"use strict";r.d(e,"c",function(){return n}),r.d(e,"a",function(){return o}),r.d(e,"b",function(){return c});var n="@@saga-injector/restart-on-remount",o="@@saga-injector/daemon",c="@@saga-injector/once-till-unmount"},541:function(t,e,r){t.exports=r(542)},542:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,c=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(543),o)n.regeneratorRuntime=c;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},543:function(t,e){!function(e){"use strict";function r(t,e,r,n){var c=e&&e.prototype instanceof o?e:o,a=Object.create(c.prototype),i=new y(n||[]);return a._invoke=f(t,r,i),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function c(){}function a(){}function i(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,c,a){var i=n(t[r],t,o);if("throw"!==i.type){var u=i.arg,f=u.value;return f&&"object"===typeof f&&g.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,c,a)},function(t){e("throw",t,c,a)}):Promise.resolve(f).then(function(t){u.value=t,c(u)},a)}a(i.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function f(t,e,r){var o=S;return function(c,a){if(o===A)throw new Error("Generator is already running");if(o===R){if("throw"===c)throw a;return v()}for(r.method=c,r.arg=a;;){var i=r.delegate;if(i){var u=s(i,r);if(u){if(u===k)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===S)throw o=R,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=A;var f=n(t,e,r);if("normal"===f.type){if(o=r.done?R:E,f.arg===k)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=R,r.method="throw",r.arg=f.arg)}}}function s(t,e){var r=t.iterator[e.method];if(r===b){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=b,s(t,e),"throw"===e.method))return k;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,k;var c=o.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=b),e.delegate=null,k):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[m];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=b,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:b,done:!0}}var b,d=Object.prototype,g=d.hasOwnProperty,j="function"===typeof Symbol?Symbol:{},m=j.iterator||"@@iterator",x=j.asyncIterator||"@@asyncIterator",w=j.toStringTag||"@@toStringTag",O="object"===typeof t,_=e.regeneratorRuntime;if(_)return void(O&&(t.exports=_));_=e.regeneratorRuntime=O?t.exports:{},_.wrap=r;var S="suspendedStart",E="suspendedYield",A="executing",R="completed",k={},L={};L[m]=function(){return this};var P=Object.getPrototypeOf,N=P&&P(P(h([])));N&&N!==d&&g.call(N,m)&&(L=N);var C=a.prototype=o.prototype=Object.create(L);c.prototype=C.constructor=a,a.constructor=c,a[w]=c.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(C),t},_.awrap=function(t){return{__await:t}},i(u.prototype),u.prototype[x]=function(){return this},_.AsyncIterator=u,_.async=function(t,e,n,o){var c=new u(r(t,e,n,o));return _.isGeneratorFunction(e)?c:c.next().then(function(t){return t.done?t.value:c.next()})},i(C),C[w]="Generator",C[m]=function(){return this},C.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},_.values=h,y.prototype={constructor:y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=b,this.done=!1,this.delegate=null,this.method="next",this.arg=b,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=b)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return c.type="throw",c.arg=t,r.next=e,n&&(r.method="next",r.arg=b),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),i=g.call(o,"finallyLoc");if(a&&i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=b),k}}}(function(){return this}()||Function("return this")())},544:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(6),i=r.n(a),u=r(11),f=r.n(u),s=r(116),l=r.n(s),p=r(545),y=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.a=function(t){var e=t.key,r=t.reducer;return function(t){var a=function(a){function u(){var t,e,r,c;n(this,u);for(var a=arguments.length,i=Array(a),f=0;f<a;f++)i[f]=arguments[f];return e=r=o(this,(t=u.__proto__||Object.getPrototypeOf(u)).call.apply(t,[this].concat(i))),r.injectors=Object(p.a)(r.context.store),c=e,o(r,c)}return c(u,a),y(u,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(e,r)}},{key:"render",value:function(){return i.a.createElement(t,this.props)}}]),u}(i.a.Component);return a.WrappedComponent=t,a.contextTypes={store:f.a.object.isRequired},a.displayName="withReducer("+(t.displayName||t.name||"Component")+")",l()(a,t)}}},545:function(t,e,r){"use strict";function n(t,e){return function(r,n){e||Object(y.a)(t),a()(p()(r)&&!u()(r)&&s()(n),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(t.injectedReducers,r)&&t.injectedReducers[r]===n||(t.injectedReducers[r]=n,t.replaceReducer(Object(h.a)(t.injectedReducers)))}}function o(t){return Object(y.a)(t),{injectReducer:n(t,!0)}}e.a=o;var c=r(23),a=r.n(c),i=r(500),u=r.n(i),f=r(494),s=r.n(f),l=r(511),p=r.n(l),y=r(513),h=r(182)},547:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"d",function(){return c}),r.d(e,"e",function(){return a}),r.d(e,"c",function(){return i});var n=r(60),o=(r.n(n),"my/LOAD_BRANCH_PENDING"),c=function(){return{type:o}},a=function(t){return{type:"my/LOAD_BRANCH_SUCCESS",payload:t.data}},i=function(t){return{type:"my/LOAD_BRANCH_FAILURE",error:t.error}},u=Object(n.fromJS)({loading:!1,loaded:!1,error:null,branch:null}),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments[1];switch(e.type){case o:return t.set("loading",!0);case"my/LOAD_BRANCH_SUCCESS":return t.set("loading",!1).set("loaded",!0).set("branch",e.payload);case"my/LOAD_BRANCH_FAILURE":return t.set("loading",!1).set("loaded",!0).set("error",e.error);default:return t}};e.b=f},553:function(t,e,r){"use strict";function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)(Object(s.e)({data:f.a}));case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,Object(i.a)(Object(s.c)({error:t.t0}));case 9:case"end":return t.stop()}},l,this,[[0,5]])}function o(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.b)(s.a,n);case 2:case"end":return t.stop()}},p,this)}e.a=o;var c=r(541),a=r.n(c),i=r(181),u=r(554),f=r.n(u),s=r(547),l=a.a.mark(n),p=a.a.mark(o)},554:function(t,e){t.exports={id:1,managerId:1,number:35,location:"\u043c. \u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a \u0432\u0443\u043b. \u041a\u043e\u043d\u043e\u0432\u0430\u043b\u044c\u0446\u044f 144\u0430",employees:[1,2,3,4,5]}},555:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(499),o=(r.n(n),function(t){return t&&t.get("header")}),c=function(){return Object(n.createSelector)(o,function(t){return t.get("branch")})}},556:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(6),i=r.n(a),u=r(119),f=r(183),s=r(557),l=(r.n(s),function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()),p=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),l(e,[{key:"componentDidMount",value:function(){this.props.onLoadData()}},{key:"render",value:function(){return console.log(this.props.branch),i.a.createElement("nav",{className:"navbar fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement(u.a,{className:"navbar-brand",to:"/"},"My work"),i.a.createElement("ul",null),i.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button"},i.a.createElement("span",null,"Username")," ",i.a.createElement(f.a,{icon:"sign-out"}))))}}]),e}(i.a.Component);e.a=p},557:function(t,e,r){t.exports=r.p+"static/media/header.fca129a9.scss"}});
//# sourceMappingURL=3.6cdd2e37.chunk.js.map