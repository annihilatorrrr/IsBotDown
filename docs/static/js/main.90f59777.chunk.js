(this["webpackJsonpfrontend-starter"]=this["webpackJsonpfrontend-starter"]||[]).push([[0],{31:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);n(31);var r=n(10),c=n(2),s=n(6),o=n.n(s),a=n(7),i=n(3),u=n(26).a,j=n(0),b=u("text-indigo-900","font-bold","text-3xl","md:text-5xl","mt-8","mb-4"),d=function(e){var t=e.children;return Object(j.jsx)("p",{className:b,children:t})},l=u("text-indigo-800"),h=function(e){var t=e.children;return Object(j.jsx)("p",{className:l,children:t})},x=u("text-indigo-800","underline"),p=function(e){var t=e.children,n=e.to;return Object(j.jsx)(r.b,{to:n,className:x,children:t})},O=function(e){var t=e.children,n=e.to;return Object(j.jsx)("a",{href:n,className:x,target:"_blank",rel:"noopener noreferrer",children:t})},f=n(27),m=n.n(f).a.create({baseURL:"https://backend.isbotdown.com",headers:{"Content-Type":"application/json"}});function v(){return(v=Object(a.a)(o.a.mark((function e(t,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/bots?skip=".concat(t,"&limit=").concat(n));case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(a.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/bots/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.interceptors.response.use((function(e){return e}),(function(e){throw console.error(e),e}));var k=n(1),y=n.n(k),I=n(9),B=n.n(I),N=n(14),D=n.n(N);function S(){var e=Object(c.g)().username,t=Object(k.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],u=Object(k.useState)(!1),b=Object(i.a)(u,2),l=b[0],x=b[1],f=Object(c.f)();return Object(k.useEffect)((function(){var t=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e){t.next=2;break}return t.abrupt("return");case 2:return(null===e||void 0===e?void 0:e.trim())||f("/"),t.prev=3,t.t0=s,t.next=7,g(e);case 7:t.t1=t.sent,(0,t.t0)(t.t1),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(3),x(!0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,f]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{to:"/",children:"back to main"}),Object(j.jsx)(d,{children:Object(j.jsxs)(O,{to:"https://t.me/".concat(e),children:["@",e]})}),!r&&!l&&Object(j.jsx)(h,{children:"\ud83e\udd14 loading..."}),l&&Object(j.jsxs)(h,{children:["This bot is not in the system! However, you can add it in"," ",Object(j.jsx)(O,{to:"https://t.me/IsBotDownBot",children:"@IsBotDownBot"}),"."]}),r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(h,{children:["Telegram ID: ",r.telegramId]}),Object(j.jsx)(h,{children:r.isDown?"\u274c Bot is down since ".concat(B()(r.downSince).fromNow()):"\u2705 Bot is up"})]}),Object(j.jsxs)(h,{children:["Discuss here \ud83d\udc49"," ",Object(j.jsx)(O,{to:"https://t.me/borodutch_support",children:"@borodutch_support"}),"."]})]})}B.a.extend(D.a);var F=n(28),T=n(16);B.a.extend(D.a);var _=u("mt-2"),E=function(e){var t=e.bot;return Object(j.jsxs)("div",{className:_,children:[t.isDown?"\u274c":"\u2705"," ",Object(j.jsxs)(p,{to:"/".concat(t.username),children:["@",t.username]}),!!t.downSince&&" since ".concat(B()(t.downSince).fromNow())]})},M=u("my-4"),A=function(e){var t=e.children;return Object(j.jsx)("div",{className:M,children:Object(j.jsx)(h,{children:t})})},C=u("mt-4");function z(){var e=function(e){var t=Object(k.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(k.useState)(!0),u=Object(i.a)(s,2),j=u[0],b=u[1],d=function(){var t=Object(a.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,n=20,t.next=6,e(r.length,n);case 6:(s=t.sent).length&&c([].concat(Object(T.a)(r),Object(T.a)(s))),s.length<n&&b(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}();return Object(k.useEffect)((function(){d()}),[]),{items:r,setItems:c,fetchMoreItemsIfNeeded:d,moreItemsAvailable:j}}((function(e,t){return function(e,t){return v.apply(this,arguments)}(e,t)})),t=e.items,n=e.fetchMoreItemsIfNeeded,r=e.moreItemsAvailable;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{children:"Bots in the system:"}),Object(j.jsx)(F.a,{dataLength:t.length,next:n,hasMore:r,loader:Object(j.jsx)(A,{children:"\ud83e\udd14 Loading..."}),endMessage:Object(j.jsx)(A,{children:"\ud83d\ude80 That's all!"}),className:C,children:t.map((function(e){return Object(j.jsx)(E,{bot:e},e.telegramId)}))})]})}var L=n(17),J=n(30),H=["title","disabled"],K=function(e){return u("transition-colors","focus:outline-none","px-8","py-2","rounded-2xl",e?"bg-indigo-300":"bg-indigo-700",e?void 0:"hover:bg-indigo-900","text-indigo-100",e?"cursor-not-allowed":void 0)},P=function(e){var t=e.title,n=e.disabled,r=Object(J.a)(e,H);return Object(j.jsx)("button",Object(L.a)(Object(L.a)({className:K(n)},r),{},{children:t}))};var R=u("flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2"),U=u("px-2","py-2","bg-transparent","border","border-indigo-200","transition-colors","rounded-2xl","text-indigo-900","focus:border-indigo-900","focus:outline-none");function Z(){var e=Object(k.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(k.useState)(!1),o=Object(i.a)(s,2),a=o[0],u=o[1],b=Object(c.f)(),l=function(e){b("/".concat(e))};return Object(k.useEffect)((function(){u(!!function(e){var t=/@?([A-Za-z0-9_]+bot)/gi.exec(e);if(t&&t[1])return t[1]}(n))}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{children:"Find a bot:"}),Object(j.jsxs)("div",{className:R,children:[Object(j.jsx)("input",{className:U,placeholder:"@username",value:n,onChange:function(e){r(e.target.value)},onKeyDown:function(e){return"Enter"===e.code?l(n):void 0}}),Object(j.jsx)(P,{title:"Find!",disabled:!a,onClick:function(){return a?l(n):void 0}})]})]})}function q(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{children:"Is Bot Down"}),Object(j.jsx)(h,{children:"Check if your favorite bot is down or not!"}),Object(j.jsxs)(h,{children:["This is a website representation of the data from"," ",Object(j.jsx)(O,{to:"https://t.me/IsBotDownBot",children:"@IsBotDownBot"}),"."]}),Object(j.jsxs)(h,{children:["This website is"," ",Object(j.jsx)(O,{to:"https://github.com/backmeupplz/IsBotDown",children:"open-source"}),". The bot is"," ",Object(j.jsx)(O,{to:"https://github.com/backmeupplz/IsBotDownBot",children:"too"})," ","(and it has a public API)."]}),Object(j.jsxs)(h,{children:["Official discussion group \ud83d\udc49"," ",Object(j.jsx)(O,{to:"https://t.me/borodutch_support",children:"@borodutch_support"}),"."]}),Object(j.jsx)(Z,{}),Object(j.jsx)(z,{})]})}function G(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{children:"Not found"}),Object(j.jsxs)(h,{children:["Try a different page or ",Object(j.jsx)(p,{to:"/",children:"go back"})," to the main page."]})]})}var Q=u("container","mx-auto","pb-10","max-w-4xl","p-4"),V=function(e){var t=e.children;return Object(j.jsx)("div",{className:Q,children:t})},W=function(){return Object(j.jsx)(V,{children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(c.c,{children:[Object(j.jsx)(c.a,{path:"/",element:Object(j.jsx)(q,{})}),Object(j.jsx)(c.a,{path:"/:username",element:Object(j.jsx)(S,{})}),Object(j.jsx)(c.a,{path:"*",element:Object(j.jsx)(G,{})})]})})})},X=n(29);n.n(X).a.render(Object(j.jsx)(y.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.90f59777.chunk.js.map