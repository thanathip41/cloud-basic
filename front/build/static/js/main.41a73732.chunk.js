(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{29:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(19),c=a.n(r),s=a(6),i=a(17),o=a(38),l=a(5),u="LOGIN",d="PROFILE",b="LOGOUT",j=Object(i.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"CLOSE_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return localStorage.setItem("accessToken",null===t||void 0===t?void 0:t.data),e;case d:return Object(l.a)(Object(l.a)({},e),{},{user:null===t||void 0===t?void 0:t.data});case b:return localStorage.clear(),Object(l.a)(Object(l.a)({},e),{},{user:null});default:return e}}}),p=Object(i.d)(j,Object(i.c)(Object(i.a)(o.a))),m=a(9),v=a(3),h=a(26),f=(a(29),a(0)),O=function(){return Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-navbar navbar-login",children:Object(f.jsx)("div",{className:"container-navbar",children:Object(f.jsx)(m.b,{className:"nav-link","aria-current":"page",to:"/",children:Object(f.jsx)("i",{className:"fa fa-home"})})})})},x=function(e){var t=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{}),Object(f.jsx)("div",{className:"container",children:t})]})},g=a(2),N=a.n(g),w=a(7),y=a(21),S=a(14),E=a(23),k=a(39),L=a.n(k),_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"http://34.125.71.137:8000/api"}),A={NODE_ENV:_.NODE_ENV,BASE_URL:_.REACT_APP_BASE_URL},C=Object(E.a)("configs"),I=Object(E.a)("nextError"),P=Object(E.a)("fetchData"),D=new function e(){var t=this;Object(y.a)(this,e),this.AXIOS=L.a,this.ENV=A,this.get=function(){var e=Object(w.a)(N.a.mark((function e(a){var n,r,c,s,i,o=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=n.headers,c=void 0===r?{}:r,s=n.params,i=void 0===s?{}:s,e.next=3,Object(S.a)(t,P)[P]({url:a,headers:c,params:i,method:"get"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.post=function(){var e=Object(w.a)(N.a.mark((function e(a){var n,r,c,s,i,o,l,u=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.data,c=void 0===r?{}:r,s=n.headers,i=void 0===s?{}:s,o=n.params,l=void 0===o?{}:o,e.next=3,Object(S.a)(t,P)[P]({url:a,data:c,headers:i,params:l,method:"post"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.put=function(){var e=Object(w.a)(N.a.mark((function e(a){var n,r,c,s,i,o,l,u=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.data,c=void 0===r?{}:r,s=n.headers,i=void 0===s?{}:s,o=n.params,l=void 0===o?{}:o,e.next=3,Object(S.a)(t,P)[P]({url:a,data:c,headers:i,params:l,method:"put"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(w.a)(N.a.mark((function e(a){var n,r,c,s,i,o,l,u=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.data,c=void 0===r?{}:r,s=n.headers,i=void 0===s?{}:s,o=n.params,l=void 0===o?{}:o,e.next=3,Object(S.a)(t,P)[P]({url:a,data:c,headers:i,params:l,method:"delete"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object.defineProperty(this,C,{writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.headers,n=void 0===a?{}:a,r=e.params,c=void 0===r?{}:r,s={headers:{Accept:"application/json","Content-type":"application/json","Cache-Control":"no-cache"},params:{}},i=t.ENV.CLIENT_TOKEN;i&&(s.headers["client-token"]=i);var o=localStorage.getItem("accessToken");for(var l in o&&(s.headers.Authorization="Bearer ".concat(o)),n)s.headers[l]=n[l];for(var u in c)s.params[u]=c[u];var d={development:t.ENV.BASE_URL,production:t.ENV.BASE_URL};return t.AXIOS.defaults.baseURL=d[t.ENV.NODE_ENV||"development"],s}}),Object.defineProperty(this,I,{writable:!0,value:function(e){var t=new Error;return t.message=null===e||void 0===e?void 0:e.message,t.response=null===e||void 0===e?void 0:e.response,t}}),Object.defineProperty(this,P,{writable:!0,value:function(){var e=Object(w.a)(N.a.mark((function e(a){var n,r,c,s,i,o,l,u,d,b,j,p,m,v,h;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.url,r=a.headers,c=a.params,s=a.data,i=void 0===s?{}:s,o=a.method,e.prev=1,l=Object(S.a)(t,C)[C]({headers:r,params:c}),e.t0=o,e.next="get"===e.t0?6:"post"===e.t0?11:"put"===e.t0?16:"delete"===e.t0?21:26;break;case 6:return e.next=8,t.AXIOS.get(n,l);case 8:return u=e.sent,d=u.data,e.abrupt("return",d);case 11:return e.next=13,t.AXIOS.post(n,i,l);case 13:return b=e.sent,j=b.data,e.abrupt("return",j);case 16:return e.next=18,t.AXIOS.put(n,i,l);case 18:return p=e.sent,m=p.data,e.abrupt("return",m);case 21:return e.next=23,t.AXIOS.delete(n,l);case 23:return v=e.sent,h=v.data,e.abrupt("return",h);case 26:throw new Error("unknow this [".concat(o,"] method "));case 27:e.next=32;break;case 29:throw e.prev=29,e.t1=e.catch(1),Object(S.a)(t,I)[I](e.t1);case 32:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(t){return e.apply(this,arguments)}}()})},T=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("login",{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("users/profile");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("register",{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.delete("logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(w.a)(N.a.mark((function e(t){var a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.dispatch,n=t.type,r=t.time,e.abrupt("return",new Promise((function(e){setTimeout((function(){a({type:n}),e()}),r)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U({dispatch:t,type:"OPEN_LOADING",time:0});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U({dispatch:t,type:"CLOSE_LOADING",time:800});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U({dispatch:t,type:"OPEN_LOADING",time:0});case 3:return e.next=5,U({dispatch:t,type:"CLOSE_LOADING",time:800});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=Object(s.c)((function(e){return e.auth})).user,t=Object(v.g)(),a=Object(s.b)();return Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-navbar",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m.b,{className:"nav-link","aria-current":"page",to:"/",children:Object(f.jsx)("i",{className:"fa fa-home"})}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsxs)("div",{id:"navbarSupportedContent",className:"collapse navbar-collapse",children:[Object(f.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(m.b,{className:"nav-link","aria-current":"page",to:"/about",children:[Object(f.jsx)("i",{className:"fa fa-check"})," about"]})})}),!e&&Object(f.jsxs)("ul",{className:"navbar-nav mr-auto mb-2 mb-lg-0",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(m.b,{className:"nav-link",to:"/login",children:"Sign In"})}),Object(f.jsx)("li",{className:"nav-item sign-up",children:Object(f.jsx)(m.b,{className:"nav-link",to:"/register",children:"Sign Up"})})]}),e&&Object(f.jsx)("ul",{className:"navbar-nav mr-auto mb-2 mb-lg-0",children:Object(f.jsxs)("li",{className:"nav-item dropdown",children:[Object(f.jsx)("a",{id:"navbarDropdown",className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown",children:Object(f.jsxs)("i",{className:"fa fa-user",children:["  ",null===e||void 0===e?void 0:e.name," "]})}),Object(f.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(f.jsx)("li",{className:"text-center cursor-pointer",onClick:function(){a(G()),a(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V();case 3:a({type:b}),e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t)),a(B())},children:Object(f.jsx)("i",{className:"fa fa-sign-out",children:" Sign out "})})})]})})]})]})})},X=function(e){var t=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(H,{}),Object(f.jsx)("div",{className:"container",children:t})]})},M="MIDDLEWARE_AUTH",W="MIDDLEWARE_GUEST",K=function(e){var t=e.Layout,a=e.Component,n=e.rest,r=e.store,c=n.middleware,s=r.auth.user,i={Layout:t,Component:a,rest:n};switch(c){case W:i=Object(l.a)(Object(l.a)({},i),{},{redirect:"/",checked:null==s});break;case M:i=Object(l.a)(Object(l.a)({},i),{},{redirect:"/login",checked:null!=s})}return function(e){var t=e.redirect,a=void 0===t?"/":t,n=e.checked,r=void 0===n||n,c=e.Layout,s=e.Component,i=e.rest;return Object(f.jsx)(v.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return r?Object(f.jsxs)(c,{children:[" ",Object(f.jsx)(s,Object(l.a)({},e))," "]}):Object(f.jsx)(v.a,{to:{pathname:a}})}}))}(i)},J=["component","dispatch"],z=["component"],$=function(e){var t=e.component,a=(e.dispatch,Object(h.a)(e,J)),n=Object(s.c)((function(e){return e}));return K({Layout:X,Component:t,rest:a,store:n})},Q=function(e){var t=e.component,a=Object(h.a)(e,z),n=Object(s.c)((function(e){return e}));return K({Layout:x,Component:t,rest:a,store:n})},Y=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e(F())}),[e]),Object(f.jsx)("div",{className:"has-text-centered",children:Object(f.jsx)("section",{className:"section",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("h1",{className:"title",children:" index "})})})})},Z=function(){var e=Object(s.c)((function(e){return e.auth})).user,t=Object(s.b)();return Object(n.useEffect)((function(){t(F())}),[t]),Object(f.jsx)("div",{className:"has-text-centered",children:Object(f.jsx)("section",{className:"section",children:Object(f.jsxs)("div",{className:"container text-center",children:[Object(f.jsx)("h1",{className:"title ",children:" About "}),Object(f.jsxs)("h3",{className:"title ",children:[" name : ",e.name," "]}),Object(f.jsxs)("h3",{className:"title ",children:[" email : ",e.email," "]})]})})})},ee=a(16),te=a(22),ae=(a(69),a(40)),ne=function(){function e(t){Object(y.a)(this,e),this.form=t,this.firstElemValidate="",this.removeState()}return Object(ae.a)(e,[{key:"validateEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e){var a=e[t],n=/\S+@\S+\.\S+/,r=n.test(a.value);r?this.displaySucess(a):this.displayError(a,"Email must be valid !")}}},{key:"validateNumber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e){var a=e[t],n=/^\d+$/,r=n.test(a.value);r?this.displaySucess(a):this.displayError(a,"Number only !")}}},{key:"validateRequired",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e){var a=e[t];if(a){var n=a.value;0===n.length?this.displayError(a,"Required !"):this.displaySucess(a)}}}},{key:"removeState",value:function(){this.form.classList.remove("invalid")}},{key:"displayError",value:function(e,t){var a=e.parentElement.querySelector("small");a&&""===a.innerHTML&&(a.innerHTML=t),e.classList.add("is-invalid"),e.classList.remove("is-valid"),this.form.classList.add("invalid"),""===this.firstElemValidate&&(this.firstElemValidate=e)}},{key:"displaySucess",value:function(e){e.classList.add("is-valid"),e.classList.remove("is-invalid");var t=e.parentElement.querySelector("small");t&&(t.innerHTML="")}},{key:"scrollIntoError",value:function(){var e=this.firstElemValidate;e&&(e.scrollIntoView(!0),window.scrollBy(0,-500))}},{key:"formValidate",value:function(){return!this.form.classList.contains("invalid")}}]),e}(),re=function(){var e=Object(s.b)();Object(n.useEffect)((function(){e(F())}),[e]);var t=Object(n.useState)({email:"",password:""}),a=Object(te.a)(t,2),r=a[0],c=a[1],i=function(e){c(Object(l.a)(Object(l.a)({},r),{},Object(ee.a)({},e.target.name,e.target.value)))};return Object(f.jsx)("div",{className:"container-login",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault();try{var a=t.target,n=new ne(a);n.validateRequired({email:document.querySelector("#email"),password:document.querySelector("#password")}),n.formValidate()&&(e(G()),e(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(a){var n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:if(!(n=t.sent).success){t.next=11;break}return a({type:u,data:n.access_token}),t.next=8,R(e);case 8:r=t.sent,c=r.user,a({type:d,data:c});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(r)),e(B())),document.querySelector("#email").classList.add("is-invalid"),document.querySelector("#password").classList.add("is-invalid")}catch(c){console.log(c.message)}},className:"container",children:[Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Email address"}),Object(f.jsx)("input",{id:"email",type:"text",className:"form-control",name:"email",onChange:i})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Password"}),Object(f.jsx)("input",{id:"password",type:"password",className:"form-control",name:"password",onChange:i})]}),Object(f.jsx)("button",{className:"btn btn-primary btn-block",children:" Sign In"})]})}),Object(f.jsxs)("div",{className:"text-center pt-2 pb-3",children:["New to account?",Object(f.jsx)(m.b,{className:"m-2",to:"/register",children:"Create an account."})]})]})})},ce=(a(70),function(){var e=Object(v.g)(),t=Object(s.b)(),a=Object(n.useState)({name:"",email:"",password:"",confirmPassword:""}),r=Object(te.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){t(F())}),[t]);var o=function(e){i(Object(l.a)(Object(l.a)({},c),{},Object(ee.a)({},e.target.name,e.target.value)))};return Object(f.jsx)("div",{className:"container-login",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{onSubmit:function(a){a.preventDefault();try{t(G());var n=a.target,r=new ne(n);r.validateRequired({name:document.querySelector("#name"),password:document.querySelector("#password"),email:document.querySelector("#email"),confirmPassword:document.querySelector("#confirmPassword")});var s=r.formValidate(),i=c.password===c.confirmPassword;if(!i){var o=document.querySelector("#password"),l=document.querySelector("#confirmPassword");return o.classList.add("is-invalid"),void l.classList.add("is-invalid")}s&&i&&t(function(e,t){return function(){var a=Object(w.a)(N.a.mark((function a(n){var r,c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(e);case 3:if(!(r=a.sent).success){a.next=10;break}return n({type:u,data:r.access_token}),a.next=8,R(e);case 8:c=a.sent,n({type:d,data:c.data});case 10:t.push("/"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(c,e)),t(B())}catch(b){}},className:"container",children:[Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:" Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",onChange:o})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Email address"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",onChange:o})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",onChange:o})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",onChange:o})]}),Object(f.jsx)("button",{className:"btn btn-primary btn-block",children:" Sign Up"})]})}),Object(f.jsxs)("div",{className:"text-center pt-2 pb-3",children:["Account?",Object(f.jsx)(m.b,{className:"m-2",to:"/login",children:"Sign in."})]})]})})}),se=(a(71),function(){return Object(f.jsx)("div",{children:" 404 "})}),ie=function(){return Object(f.jsx)(m.a,{children:Object(f.jsxs)(v.d,{children:[Object(f.jsx)($,{exact:!0,path:"/",component:Y}),Object(f.jsx)($,{path:"/about",component:Z,middleware:M}),Object(f.jsx)(Q,{path:"/login",component:re,middleware:W}),Object(f.jsx)(Q,{path:"/register",component:ce,middleware:W}),Object(f.jsx)($,{path:"*",component:se})]})})},oe=function(){var e=Object(s.c)((function(e){return e.auth})).user,t=Object(s.b)(),a=Object(v.g)();return localStorage.getItem("accessToken")&&!e&&t(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(a){var n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R();case 3:n=t.sent,r=n.user,a({type:d,data:r}),c=Object(v.h)(),e.push("/".concat(c.pathname)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(a)),Object(f.jsx)(n.Fragment,{})},le=(a(72),function(){var e=Object(s.c)((function(e){return e.loading})).loading;return Object(f.jsx)(f.Fragment,{children:e&&Object(f.jsx)("div",{className:"preloader",children:Object(f.jsx)("div",{className:"preloader-inner",children:Object(f.jsxs)("div",{className:"preloader-icon",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})})})})}),ue=function(){return Object(f.jsxs)(s.a,{store:p,children:[Object(f.jsx)(ie,{}),Object(f.jsx)(oe,{}),Object(f.jsx)(le,{})]})};c.a.render(Object(f.jsx)(ue,{}),document.querySelector("#root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.41a73732.chunk.js.map