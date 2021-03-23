(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__1ZVxV",label:"ContactForm_label__VCxjP",input:"ContactForm_input__1koB8",button:"ContactForm_button__3tm2h"}},18:function(t,e,n){t.exports={errorMessage:"ErrorMessage_errorMessage__3LUlJ",appear:"ErrorMessage_appear__6QiAv",appearActive:"ErrorMessage_appearActive__1N3bs",exit:"ErrorMessage_exit__K5X7Z",exitActive:"ErrorMessage_exitActive__BCvTG"}},20:function(t,e,n){t.exports={container:"App_container__1VZV7",tittle:"App_tittle__1CFBb",appear:"App_appear__EGLvD",appearActive:"App_appearActive__Ug7yy",filter:"App_filter__2Y5HL"}},24:function(t,e,n){t.exports={enter:"ContactList_enter__2oPzT",enterActive:"ContactList_enterActive__2tcV_",exit:"ContactList_exit__vZnyF",exitActive:"ContactList_exitActive__1AlpS",button:"ContactList_button__2d8Z3",list:"ContactList_list__1vH4K"}},39:function(t,e,n){t.exports={input:"Filter_input__W3YXn"}},41:function(t,e,n){t.exports={loader:"Loader_loader__2RmkF"}},47:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),i=(n(47),n(12)),s=n(13),u=n(16),l=n(15),b=n(9),j=n(4),p=n(93),d=n(11),f=n.n(d),h=n(18),m=n.n(h),O=n(1),_=function(t){var e=t.message;return Object(O.jsx)(p.a,{appear:!0,in:!0,timeout:250,classNames:m.a,unmountOnExit:!0,children:Object(O.jsx)("div",{className:m.a.errorMessage,children:Object(O.jsx)("p",{children:e})})})},v=n(19),x=n.n(v),C=n(3),g=Object(C.b)("contacts/fetchContactsRequest"),A=Object(C.b)("contacts/fetchContactsSuccess"),y=Object(C.b)("contacts/fetchContactsError"),F=Object(C.b)("contacts/addContactRequest"),L=Object(C.b)("contacts/addContactSuccess"),N=Object(C.b)("contacts/addContactError"),E=Object(C.b)("contacts/deleteContactRequest"),S=Object(C.b)("contacts/deleteContactSuccess"),k=Object(C.b)("contacts/deleteContactError"),w=Object(C.b)("contacts/changeFilter");x.a.defaults.baseURL="http://localhost:3000";var M=n(21),V=function(t){return t.contacts.items},R=function(t){return t.contacts.filter},T={getLoading:function(t){return t.contacts.loading},getFilter:R,getVisibleContacts:Object(M.a)([V,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:V},Z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",phone:"",error:null},t.handleChangeForm=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(j.a)({},c,a))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.phone,r=t.props.onAdd;t.validateForm()||r(c,a),t.resetForm()},t.validateForm=function(){var e=t.state,n=e.name,c=e.phone,a=!!t.props.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}));return n&&c?a?(t.setState({error:"Contact is already exist"}),setTimeout((function(){t.setState({error:null})}),2e3)):void 0:(t.setState({error:"Some filed is empty"}),setTimeout((function(){t.setState({error:null})}),2e3))},t.resetForm=function(){t.setState({name:"",phone:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone,c=t.error;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:f.a.form,onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("label",{className:f.a.label,children:"name"}),Object(O.jsx)("input",{className:f.a.input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(O.jsx)("label",{className:f.a.label,children:"phone"}),Object(O.jsx)("input",{className:f.a.input,type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(O.jsx)("button",{className:f.a.button,type:"submit",children:"Add Contact"})]}),Object(O.jsx)(p.a,{appear:!0,in:null!==c,timeout:250,classNames:m.a,unmountOnExit:!0,children:Object(O.jsx)(_,{message:c})})]})}}]),n}(c.Component),B=Object(b.b)((function(t){return{contacts:T.getAllContacts(t)}}),(function(t){return{onAdd:function(e,n){return t(function(t){var e=t.name,n=t.phone;return function(t){var c={name:e,phone:n};t(F()),x.a.post("/contacts",c).then((function(e){var n=e.data;return t(L(n))})).catch((function(e){return t(N(e))}))}}(e))}}}))(Z),q=n(94),D=n(24),J=n.n(D),P=Object(b.b)((function(t){return{contacts:T.getVisibleContacts(t)}}),(function(t){return{onRemove:function(e){return t((n=e,function(t){t(E()),x.a.delete("/contacts/".concat(n)).then((function(){return t(S(n))})).catch((function(e){return t(k(e))}))}));var n}}}))((function(t){var e=t.contacts,n=t.onRemove;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(q.a,{component:"ul",className:J.a.list,children:e.map((function(t){var e=t.name,c=t.phone,a=t.id;return Object(O.jsx)(p.a,{classNames:J.a,timeout:300,unmountOnExit:!0,children:Object(O.jsxs)("li",{children:[e,": ",c," ",Object(O.jsx)("button",{className:J.a.button,id:a,onClick:function(){return n(a)},children:"x"})]},a)},a)}))})})})),U=n(39),G=n.n(U);var H,K,X=Object(b.b)((function(t){return{value:T.getFilter(t),contacts:T.getAllContacts(t)}}),(function(t){return{onChange:function(e){return t(w(e.target.value))}}}))((function(t){var e=t.value,n=void 0===e?"":e,c=t.onChange;return Object(O.jsx)("input",{className:G.a.input,type:"text",value:n,onChange:c,placeholder:"Enter name for Search"})})),Y=n(20),z=n.n(Y),I=n(40),Q=n.n(I),W=n(41),$=n.n(W),tt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(Q.a,{className:$.a.loader,type:"Circles",color:"#3f51b5",height:150,width:150})})}}]),n}(c.Component),et=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isLoading&&Object(O.jsx)(tt,{}),Object(O.jsxs)("div",{className:z.a.container,children:[Object(O.jsx)(p.a,{in:!0,appear:!0,classNames:z.a,timeout:500,unmountOnExit:!0,children:Object(O.jsx)("h2",{className:z.a.tittle,children:"Phonebook"})}),Object(O.jsx)(B,{}),Object(O.jsxs)("div",{className:z.a.filter,children:[Object(O.jsx)("h2",{children:"find contact"}),Object(O.jsx)(X,{})]}),Object(O.jsx)(P,{})]})]})}}]),n}(c.Component),nt=Object(b.b)((function(t){return{contacts:T.getAllContacts(t),isLoading:T.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(g()),x.a.get("/contacts").then((function(e){var n=e.data;return t(A(n))})).catch((function(e){return t(y(e))}))}))}}}))(et),ct=n(23),at=n(8),rt=Object(C.c)([],(H={},Object(j.a)(H,A,(function(t,e){return e.payload})),Object(j.a)(H,L,(function(t,e){return[e.payload].concat(Object(ct.a)(t))})),Object(j.a)(H,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),H)),ot=Object(C.c)("",Object(j.a)({},w,(function(t,e){return e.payload}))),it=Object(C.c)(!1,(K={},Object(j.a)(K,g,(function(){return!0})),Object(j.a)(K,A,(function(){return!1})),Object(j.a)(K,y,(function(){return!1})),Object(j.a)(K,F,(function(){return!0})),Object(j.a)(K,L,(function(){return!1})),Object(j.a)(K,N,(function(){return!1})),Object(j.a)(K,E,(function(){return!0})),Object(j.a)(K,S,(function(){return!1})),Object(j.a)(K,k,(function(){return!1})),K)),st=Object(at.c)({items:rt,filter:ot,loading:it}),ut=Object(ct.a)(Object(C.d)()),lt=Object(C.a)({reducer:{contacts:st},middleware:ut,devTools:!1});o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(b.a,{store:lt,children:Object(O.jsx)(nt,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.9439376e.chunk.js.map