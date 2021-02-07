(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{119:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),o=r.n(c),s=(r(89),r(13)),u=r.n(s),i=r(38),d=r(20),j=r(75),b=(r(91),r(17)),p=r(4),l=r(156),f=r(5),x=Object(p.a)({root:{width:"100%"}})((function(e){return Object(f.jsx)(l.a,Object(b.a)({},e))}));var h=function(e){var t=e.onChange;return Object(f.jsx)(x,Object(b.a)(Object(b.a)({},e),{},{onChange:t}))},O=r(159),v=Object(p.a)({root:{}})((function(e){return Object(f.jsx)(O.a,Object(b.a)({},e))})),m=function(e){return Object(f.jsx)(v,Object(b.a)({},e))},k=r(147),w=function(e){var t=e.addTodo,r=Object(n.useRef)();return Object(f.jsx)("div",{className:"todo-form-main",children:Object(f.jsx)("div",{className:"form",children:Object(f.jsxs)(k.a,{container:!0,justify:"center",children:[Object(f.jsx)(k.a,{item:!0,md:4,sm:10,children:Object(f.jsx)(h,{variant:"outlined",size:"small",inputRef:r,onKeyDown:function(e){return function(e){"Enter"===e.key&&(t(r.current.value),r.current.value="")}(e)}})}),Object(f.jsx)(m,{variant:"contained",color:"secondary",className:"ml-1",onClick:function(){t(r.current.value),r.current.value=""},children:"Add Task"})]})})})},T=r(158),g=r(148),y=r(122),N=r(149),A=r(150),C=r(151),E=r(152),S=r(71),D=r.n(S),I=r(72),_=r.n(I),R=r(73),B=r.n(R),J=function(e){return Object(f.jsx)(D.a,Object(b.a)({style:{width:"30px",height:"30px",cursor:"pointer",color:"#1db56d"}},e))},U=function(e){return Object(f.jsx)(_.a,Object(b.a)({style:{width:"30px",height:"30px",cursor:"pointer",color:"#e53737"}},e))},z=function(e){return Object(f.jsx)(B.a,Object(b.a)({style:{width:"30px",height:"30px",cursor:"pointer",color:"#1db56d"}},e))},F=(r(99),function(e){var t=e.todoItems,r=e.removeTask,n=e.updateTodo;return Object(f.jsx)("div",{className:"todo-list-main",children:Object(f.jsx)(T.a,{mt:3,children:Object(f.jsx)(k.a,{container:!0,spacing:3,justify:"center",children:Object(f.jsx)(k.a,{item:!0,sm:12,md:6,lg:5,className:"w-90 px-0",children:Object(f.jsx)(g.a,{component:y.a,children:Object(f.jsx)(N.a,{children:Object(f.jsx)(A.a,{children:t&&t.map((function(e){return Object(f.jsxs)(C.a,{children:[Object(f.jsx)(E.a,{className:e.isDone?"line-through":"remove-line-through",children:e.name}),Object(f.jsxs)(E.a,{className:"d-flex justify-end align-center",children:[e.isDone?Object(f.jsx)(J,{onClick:function(){return n(e,!1)}}):Object(f.jsx)(z,{onClick:function(){return n(e,!0)}}),Object(f.jsx)(U,{onClick:function(){return r(e._id)}})]})]})}))})})})})})})})}),K=r(16),L=r(153),M=r(154),P=r(155),q=function(){return Object(f.jsx)(T.a,{mt:3,children:Object(f.jsx)(k.a,{container:!0,spacing:1,justify:"center",children:Object(f.jsx)(k.a,{item:!0,md:6,children:Object(f.jsx)(L.a,{children:Object(f.jsx)(M.a,{children:Object(f.jsx)(P.a,{component:"p",className:"text-center",children:"No task Added!"})})})})})})},G=r(50),H="development",Q=function e(){Object(G.a)(this,e)},V=(Q.env="production")===H?"http://localhost:5000":"https://evening-wave-28538.herokuapp.com",W="/addTodo",X="/getAllTodos",Y="/updateTodo",Z="/deleteTodo",$=r(74),ee=r.n($);console.log("base url ",V);var te=ee.a.create({baseURL:V});te.interceptors.response.use(void 0,(function(e){if("Network Error"===e.message&&!e.response)return K.b.error("Network Error");var t=e.response.status;return 404===t?K.b.error("404 | Not Found"):500===t?K.b.error("500 | Internal Server Error"):void 0}));var re=function e(){Object(G.a)(this,e)};re.getAllTodos=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.get(X);case 2:if(!(t=e.sent)||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:return e.abrupt("return",void 0);case 6:case"end":return e.stop()}}),e)}))),re.addTodo=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.post(W,t);case 2:if(!(r=e.sent).data){e.next=6;break}return console.log("result data ",r.data),e.abrupt("return",r.data);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re.deleteTodo=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(Z,"/").concat(t),e.next=3,te.delete(r);case 3:if(!(n=e.sent).data){e.next=6;break}return e.abrupt("return",n.data);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re.updateTodo=function(){var e=Object(d.a)(u.a.mark((function e(t,r){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Y,"/").concat(t),e.next=3,te.put(n,r);case 3:if(!(a=e.sent).data){e.next=6;break}return e.abrupt("return",a.data);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();var ne=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),r=t[0],a=t[1];Object(n.useEffect)((function(){o()}),[]);var c=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("val ",t),t){e.next=4;break}return K.b.error("Task can't be empty!"),e.abrupt("return");case 4:return n={name:t},e.next=7,re.addTodo(n);case 7:if(c=e.sent){e.next=10;break}return e.abrupt("return");case 10:K.b.info("Task Added Successfully!"),a([].concat(Object(i.a)(r),[c]));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.getAllTodos();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:a(Object(i.a)(t));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.filter((function(e){return e._id!==t})),e.next=3,re.deleteTodo(t);case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:K.b.info("Task Deleted Successfully!"),a(Object(i.a)(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t._id,o=t.name,r.forEach((function(e){e._id===c&&(e.isDone=n)})),s={name:o,isDone:n},e.next=5,re.updateTodo(c,s);case 5:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:K.b.info("Task Status Updated Successfully!"),a(Object(i.a)(r));case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"todo-app-main",children:[Object(f.jsx)("h1",{className:"title text-center",children:"Todo Application"}),Object(f.jsx)(w,{addTodo:c}),r?Object(f.jsx)(F,{todoItems:r,removeTask:s,updateTodo:b}):Object(f.jsx)(q,{})]})};r(118);o.a.render(Object(f.jsxs)(a.a.StrictMode,{children:[Object(f.jsx)(ne,{}),Object(f.jsx)(K.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0})]}),document.getElementById("root"))},89:function(e,t,r){},91:function(e,t,r){},99:function(e,t,r){}},[[119,1,2]]]);
//# sourceMappingURL=main.c1d975c9.chunk.js.map