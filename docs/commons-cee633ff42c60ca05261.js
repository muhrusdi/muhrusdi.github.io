(self.webpackChunkmuhrusdi_github_io=self.webpackChunkmuhrusdi_github_io||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,s=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3411:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,i,a,c=n(7294),l=n(9499),s=n(5697),u=n.n(s),f=n(4839),p=n.n(f),m=n(2993),d=n.n(m),h=n(6494),y=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",O="href",x="http-equiv",C="innerHTML",A="itemprop",S="name",j="property",N="rel",k="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",_="encodeSpecialCharacters",R="onChangeClientState",z="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,w.TITLE),n=X(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},G=function(e){return X(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=y()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,o),le(f,p);var m={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,i),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,s),styleTags:ue(w.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=pe(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(b,o,r),link:me(w.LINK,i,r),meta:me(w.META,a,r),noscript:me(w.NOSCRIPT,c,r),script:me(w.SCRIPT,l,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:J([O,L],e),bodyAttributes:$(g,e),defer:X(e,M),encode:X(e,_),htmlAttributes:$(b,e),linkTags:Q(w.LINK,[N,O],e),metaTags:Q(w.META,[S,E,x,j,A],e),noscriptTags:Q(w.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:Q(w.SCRIPT,[k,C],e),styleTags:Q(w.STYLE,[T],e),title:W(e),titleAttributes:$(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),de)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return Y(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case w.BODY:return U({},o,{bodyAttributes:U({},i)});case w.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(V(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var ge=n(5444),be=function(e){var t,n=e.description,r=e.lang,o=e.title,i=e.image,a=e.author,s=e.date,u=e.slug,f=e.type,p=(0,ge.useStaticQuery)("45326706").site,m=(0,l.useLocation)().pathname,d="article"===f,h=n||p.siteMetadata.description,y=o||p.siteMetadata.title,g=i||p.siteMetadata.image,b=a||p.siteMetadata.author,v=u?""+p.siteMetadata.siteUrl+m:p.siteMetadata.siteUrl,w={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:b},copyrightHolder:{"@type":"Person",name:b},copyrightYear:"2019",creator:{"@type":"Person",name:b},publisher:{"@type":"Organization",name:b,logo:{"@type":"ImageObject",url:g}},datePublished:s,description:h,headline:y,url:v,name:y,image:{"@type":"ImageObject",url:g},mainEntityOfPage:v};return c.createElement(ye,{htmlAttributes:{lang:r},meta:[{name:"description",content:h},{property:"og:title",content:y},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(t=p.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:title",content:y},{name:"twitter:image",content:g},{name:"twitter:description",content:h}]},c.createElement("title",null,y),d&&c.createElement("script",{type:"application/ld+json"},JSON.stringify(w)),"\\",c.createElement("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "2bd8976300b840faae07e9a2aa6f3f40"}'}))};be.defaultProps={lang:"id",description:"",type:"website"};var ve=be},4719:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(3411),i=n(5444),a=n(9463),c=n(1852),l=n(9692),s=l.ZP.li.withConfig({displayName:"styled__GithubItem",componentId:"hs45e6-0"})([""]),u=l.ZP.div.withConfig({displayName:"styled__CenterMenus",componentId:"hs45e6-1"})(["position:absolute;left:0;right:0;top:0;padding:18px 20px;@media (min-width:640px){position:relative;}ul{padding:36px 14px 14px 14px;@media (min-width:640px){padding:0;",'{padding-left:1rem !important;}}li{padding:8px 0;@media (min-width:640px){position:relative;&:not(:first-of-type){padding-left:1.5rem;&:after{content:"/";position:absolute;left:9px;top:8px;color:rgba(100,116,139,var(--tw-bg-opacity));bottom:0;}}&:last-of-type{&:after{display:none;}}}}}'],s),f=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,r.useRef)(null),l=function(e){o.current&&!o.current.contains(e.target)&&t&&(console.log("test",t),n(!1))};return(0,r.useEffect)((function(){return document.addEventListener("click",l),function(){return document.removeEventListener("click",l)}}),[t]),r.createElement(r.Fragment,null,r.createElement("nav",{className:"top-0 left-0 right-0 absolute z-50"},r.createElement("div",{className:"container max-w-screen-lg"},r.createElement("div",{className:"flex py-7 sm:py-6 justify-between items-center"},r.createElement("div",{className:"relative z-50"},r.createElement(i.Link,{to:"/"},r.createElement("svg",{style:{height:t?24:44},className:"transition-all",viewBox:"0 0 745 745",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M103 103L255.036 255.036L273.364 273.364L372.5 372.5L471.636 273.364V283.777V471.636L489.964 489.964L642 642V103L489.964 255.036L471.636 273.364L372.5 372.5L430.5 430.5L273.364 300.022V471.636L255.036 489.964L103 642V103Z",fill:"white"})))),r.createElement(u,{ref:o},r.createElement("ul",{className:"sm:flex justify-center -mx-2 uppercase text-sm border border-gray-700 sm:border-none rounded-lg bg-black items-center "+(t?"":"hidden")},r.createElement("li",{className:"px-2"},r.createElement(i.Link,{to:"/blog",className:"text-gray-200 hover:text-white transition-all"},"Blog")),r.createElement("li",{className:"px-2"},r.createElement(i.Link,{to:"/work",className:"text-gray-200 hover:text-white transition-all"},"Work")),r.createElement("li",{className:"px-2"},r.createElement("a",{href:"#",className:"text-gray-200 hover:text-white transition-all"},"Story")),r.createElement("li",{className:"px-2"},r.createElement(i.Link,{to:"/profile",className:"text-gray-200 hover:text-white transition-all"},"Profile")),r.createElement(s,{className:"sm:px-2 sm:ml-2 py-2 px-1 rounded-md mt-2 sm:mt-0 flex justify-center bg-gray-900 sm:bg-transparent sm:p-0 sm:block"},r.createElement("a",{href:"https://github.com/muhrusdi",target:"_blank",rel:"noreferrer",className:"block"},r.createElement(a.pZu,{size:22}))))),r.createElement("div",{className:"relative block sm:hidden"},r.createElement("button",{onClick:function(){n((function(e){return!e}))},className:"align-middle"},r.createElement(c.Ps6,null)))))),r.createElement("div",{style:{height:122}}))},p=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement("div",null,r.createElement("div",{className:"bg-gray-900 rounded-lg overflow-hidden sm:px-32 relative"},r.createElement("div",{className:"absolute flex justify-center z-50 items-center top-0 bottom-0 left-0 right-0"},r.createElement("div",null,r.createElement("div",null,r.createElement("h4",{className:"font-black text-4xl text-center"},"Get in Touch")),r.createElement("div",{className:"mt-6 flex items-center -mx-4"},r.createElement("div",{className:"px-4"},r.createElement("button",{onMouseEnter:function(){n(!0)},onMouseLeave:function(){n(!1)},className:"py-2 font-semibold rounded-md px-4 hover:bg-indigo-700 transition-all bg-indigo-600"},r.createElement("a",{href:"mailto:mhmrofficial@gmail.com"},"Contact me"))),r.createElement("div",{className:"px-4"},r.createElement(i.Link,{to:"/profile"},"About Us"))))),r.createElement("img",{className:"object-cover w-full transform "+(t?"translate-x-6":"translate-x-0")+" transition-all duration-1000",style:{height:200},src:"https://tailwindui.com/img/beams-bottom.jpg",alt:""})))},m=function(){var e=new Date;return r.createElement("footer",{className:"mt-36"},r.createElement(p,null),r.createElement("div",{className:"text-center py-16 mt-20"},r.createElement("span",null,"© ",e.getFullYear()," Made with ",r.createElement("span",{className:"text-red-500"},"♥")," - Muhammad Rusdi")))},d=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(f,null),r.createElement("div",{className:"container max-w-screen-lg"},t,r.createElement(m,null)))}}}]);
//# sourceMappingURL=commons-cee633ff42c60ca05261.js.map