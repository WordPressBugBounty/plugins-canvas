!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=102)}({102:function(e,t,n){e.exports=n(103)},103:function(e,t,n){"use strict";n.r(t),n.d(t,"name",(function(){return E})),n.d(t,"settings",(function(){return _}));var r=n(9);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=wp.i18n.__,d=wp.element,b=d.Component,g=d.Fragment,m=wp.blockEditor.RichTextToolbarButton,h=wp.components.RadioControl,w=wp.richText.registerFormatType,S=wp.blockEditor.URLPopover;function C(){var e=window.getSelection();if(0===e.rangeCount)return!1;var t=e.getRangeAt(0).startContainer;for(t=t.nextElementSibling||t;t.nodeType!==window.Node.ELEMENT_NODE;)t=t.parentNode;return t.closest(".cnvs-badge")}function O(){var e=C();return e?e.getBoundingClientRect():{}}var j=function(e){l(n,e);var t=f(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).state={rect:O()},e}return i(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.rect;return wp.element.createElement(S,{focusOnMount:!1,anchorRect:t},wp.element.createElement("div",{style:{padding:20}},e))}}]),n}(b),E="canvas/badge",_={title:v("Badge"),tagName:"span",className:"cnvs-badge",attributes:{class:"class"},edit:function(e){l(n,e);var t=f(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).state={currentColor:""},e.toggleFormat=e.toggleFormat.bind(p(e)),e.getColorStyle=e.getColorStyle.bind(p(e)),e.updateColorStyle=e.updateColorStyle.bind(p(e)),e}return i(n,[{key:"componentDidUpdate",value:function(){var e=this.props.isActive;if(!this.state.currentColor&&e){var t=C();if(t){var n=this.getColorStyle(t.className);n&&(n=n.replace(/^is-cnvs-badge-color-/,""),this.setState({currentColor:n}))}}else this.state.currentColor&&!e&&this.setState({currentColor:""})}},{key:"toggleFormat",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.props,r=n.value,o=n.onChange,a={};e&&(a.class="is-cnvs-badge-color-".concat(e),this.setState({currentColor:e}));var u=t?wp.richText.toggleFormat:wp.richText.applyFormat;o(u(r,{type:E,attributes:a}))}},{key:"getColorStyle",value:function(e){return Object(r.a)(e,"is-cnvs-badge-color")}},{key:"updateColorStyle",value:function(e){var t=this.props,n=t.attributes;(0,t.onChangeClassName)(Object(r.b)(n.className,"is-cnvs-badge-color",e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.isActive;return wp.element.createElement(g,null,wp.element.createElement(m,{icon:"tag",title:v("Badge"),onClick:function(){e.toggleFormat()},isActive:r}),r?wp.element.createElement(j,{value:n,name:E},wp.element.createElement(h,{label:v("Color"),selected:this.state.currentColor,options:[{label:v("Default"),value:"default"},{label:v("Primary"),value:"primary"},{label:v("Secondary"),value:"secondary"},{label:v("Success"),value:"success"},{label:v("Info"),value:"info"},{label:v("Warning"),value:"warning"},{label:v("Danger"),value:"danger"},{label:v("Light"),value:"light"},{label:v("Dark"),value:"dark"}],onChange:function(t){e.toggleFormat(t,!1)}})):"")}}]),n}(b)};w(E,_)},9:function(e,t,n){"use strict";function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw u}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var a=wp.tokenList;function u(e,t){var n,o=r(new a(e).values());try{for(o.s();!(n=o.n()).done;){var u=n.value;if(-1!==u.indexOf("".concat(t,"-")))return u}}catch(e){o.e(e)}finally{o.f()}return!1}function i(e,t,n){var o,u=new a(e),i=new RegExp("".concat(t,"-")),l=r(u.values());try{for(l.s();!(o=l.n()).done;){var c=o.value;i.test(c)&&u.remove(c)}}catch(e){l.e(e)}finally{l.f()}return n&&u.add("".concat(t,"-").concat(n)),u.value}}});