(this["webpackJsonpspeed-typing"]=this["webpackJsonpspeed-typing"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),s=n.n(a),i=(n(9),n(10),n(2)),u=function(e){var t=e.match(/\S+/g);return{charactersNoSpaces:e.replace(/\s+/g,"").length,characters:e.length,words:t?t.length:0,lines:e.split(/\r*\n/).length}};function l(e,t){return t}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=Object(c.useReducer)(l,t),s=Object(i.a)(a,2),o=s[0],d=s[1],h=Object(c.useState)(e),b=Object(i.a)(h,2),j=b[0],f=b[1],g=Object(c.useState)(n),O=Object(i.a)(g,2),p=O[0],v=O[1],m=Object(c.useState)(r),x=Object(i.a)(m,2),w=x[0],C=x[1],N=Object(c.useRef)(null),R=Object(c.useRef)(null);Object(c.useEffect)((function(){p&&(0===j?(v(!1),C(u(N.current.value).words),R.current.innerHTML="Play again"):setTimeout((function(){return f((function(e){return e-1}))}),1e3))}),[j,p,N]);var S=function(e){var t=e.target.value;d(t)},y=function(t){d(""),C(0),f(e),v(!0),N.current.disabled=!1,N.current.focus()};return{textAreaRef:N,btnRef:R,words:o,running:p,time:j,wordCount:w,handleChange:S,handleClick:y}},d=n(1);var h=function(){var e=o(5),t=e.textAreaRef,n=e.btnRef,c=e.words,r=e.running,a=e.time,s=e.wordCount,i=e.handleChange,u=e.handleClick;return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{className:"title",children:"How fast can you type?"}),Object(d.jsx)("textarea",{className:"inputArea",ref:t,name:"words",value:c,onChange:i,disabled:!r}),Object(d.jsxs)("h4",{className:"subtitle",children:["Time remaining: ",a]}),Object(d.jsx)("button",{className:"btn",ref:n,onClick:u,disabled:r,children:"Start"}),Object(d.jsxs)("h1",{className:"title",children:["Word count: ",s]})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9e27eb55.chunk.js.map