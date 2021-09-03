(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"a":"Art Ginzburg","b":{"type":"git","url":"git+https://github.com/artginzburg/react-mesto-auth.git"}}')},34:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),i=n(10),s=(n(34),n(11)),u=n.n(s),l=n(2),b=n(24),d=n(13),j=n(3),O=n(4),f="nomoreparties.co",m="/login",h="/register",p="/",v={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},g={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},_={action:"\u0412\u044b\u0439\u0442\u0438"};function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return c.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}function C(e,t){var n=Object(a.useState)((function(){try{var n=localStorage[e];return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useCallback)((function(t){localStorage[e]=JSON.stringify(t),o(t)}),[e]);return x("storage",Object(a.useCallback)((function(n){n.key===e&&o(n.newValue?JSON.parse(n.newValue):t)}),[e,t])),[r,i]}var k=n(14),S=n(15),N=n(23),y=n(22),w=function(){function e(t){Object(k.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject(e.statusText)},this._baseUrl=t.baseUrl,this._headers=t.headers,this._authFormat=""}return Object(S.a)(e,[{key:"_constructAuthorization",value:function(){this._headers=Object(l.a)(Object(l.a)({},this._headers),{},{authorization:this._authFormat+localStorage.token})}},{key:"_customFetch",value:function(e,t,n){var a,c={headers:null!==(a=this._headers)&&void 0!==a?a:{}};return t&&"GET"!==t&&(c.method=t,"DELETE"!==t&&(c.headers["Content-Type"]="application/json")),n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),c).then(this._handleFetch)}}]),e}(),E={url:new URL("https://mesto.".concat(f)),version:"v1",endpoints:{users:"users/me",cards:"cards"}},T=new(function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).editProfile=function(t){var n=t.name,a=t.about;return e._customFetch(E.endpoints.users,"PATCH",{name:n,about:a})},e.addCard=function(t,n){return e._customFetch(E.endpoints.cards,"POST",{name:t,link:n})},e.deleteCard=function(t){return e._customFetch("".concat(E.endpoints.cards,"/").concat(t),"DELETE")},e.changeLikeCardStatus=function(t,n){return e._customFetch("".concat(E.endpoints.cards,"/likes/").concat(t),n?"PUT":"DELETE")},e.updateAvatar=function(t){var n=t.avatar;return e._customFetch("".concat(E.endpoints.users,"/avatar"),"PATCH",{avatar:n})},e}return Object(S.a)(n,[{key:"getUserInfo",value:function(){return this._customFetch(E.endpoints.users)}},{key:"getInitialCards",value:function(){return this._customFetch(E.endpoints.cards)}}]),n}(w))({baseUrl:"".concat(E.url.origin,"/").concat(E.version,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),F={url:new URL("https://auth.".concat(f)),endpoints:{signup:"signup",signin:"signin",user:"users/me"}},L=new(function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e))._authFormat="Bearer ",a}return Object(S.a)(n,[{key:"register",value:function(e,t){return this._customFetch(F.endpoints.signup,"POST",{password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(F.endpoints.signin,"POST",{password:t,email:e})}},{key:"getUserInfo",value:function(){return this._constructAuthorization(),this._customFetch(F.endpoints.user).then((function(e){return e.data}))}}]),n}(w))({baseUrl:F.url.origin}),D=n(1),A={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"},P=c.a.createContext(),I=c.a.createContext();function U(e){var t=e.state,n=e.dispatch,a=e.children;return Object(D.jsx)(P.Provider,{value:t,children:Object(D.jsx)(I.Provider,{value:n,children:a})})}function R(){var e=c.a.useContext(P);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function M(){var e=c.a.useContext(I);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function J(e,t){return JSON.stringify(e)===JSON.stringify(t)}function B(e,t,n,a){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(u.a.mark((function e(t,n,a,c){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(l.a)(Object(l.a)({},n),a),t(r),e.prev=2,e.next=5,T[c](a);case 5:return o=e.sent,J(r,o)||t(o),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),t(n),console.log("Couldnt update user information on the server",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var H=n(17),V={},K=!0;function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(V),i=Object(j.a)(o,2),s=i[0],u=i[1],b=Object(a.useState)(K),d=Object(j.a)(b,2),O=d[0],f=d[1];function m(t,n){r((function(a){var c=Object(l.a)(Object(l.a)({},a),{},Object(H.a)({},t,n));return JSON.stringify(Object(l.a)(Object(l.a)({},e),c))===JSON.stringify(e)&&f(!0),c}))}function h(e,t){u((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(H.a)({},e,t))}))}var p=Object(a.useCallback)((function(t,n){r(null!==n&&void 0!==n?n:e),u(V),f(K)}),[e]);return{registerForm:function(){return{isSubmitDisabled:O,onReset:p}},register:function(e){var t;return{value:null!==(t=c[e])&&void 0!==t?t:"",onChange:function(t){var n=t.currentTarget,a=n.value,c=n.validationMessage;m(e,a),h(e,a.length?c:"");var r=n.closest("form").checkValidity();f(!r)},validationMessage:s[e],name:e}},reset:p,getData:function(){return c},isInvalid:O}}var q=n(6),G=function(e){return".".concat(e)},Y="popup__close-button",Q={inputClass:"form__input",submitButtonClass:"form__button"},X=(G(Q.formClass),G(Q.inputClass),G(Q.submitButtonClass),["onSubmit"]),Z=Object(a.memo)((function(e){var t=e.onSubmit,n=Object(q.a)(e,X),c=Object(a.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(D.jsx)("form",Object(l.a)(Object(l.a)({action:"#",onSubmit:c,className:"form"},n),{},{children:n.children}))})),$=function(e){return e.filter(Boolean).join(" ")},ee=function(e){return{className:$(e)}},te=["isFocused","validationMessage"],ne="text",ae=!0,ce=2,re=Object(a.forwardRef)((function(e,t){var n,c,r,o=e.isFocused,i=e.validationMessage,s=Object(q.a)(e,te),u=null!==t&&void 0!==t?t:Object(a.createRef)(),b=null!==(n=s.type)&&void 0!==n?n:ne,d=null!==(c=s.required)&&void 0!==c?c:ae,j=b===ne?ce:null,O={type:b,minLength:null!==(r=s.minLength)&&void 0!==r?r:j,required:d,ref:u};return Object(a.useEffect)((function(){o&&u&&u.current&&u.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){u&&u.current&&u.current.focus()}),50)}),[o,u]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("input",Object(l.a)(Object(l.a)(Object(l.a)({},s),ee([Q.inputClass,i&&"form__input_type_error",s.className])),O)),Object(D.jsx)("p",Object(l.a)(Object(l.a)({},ee(["form__error",i&&"form__error_visible"])),{},{id:"".concat(s.id,"-error"),children:i}))]})})),oe=["form"],ie={autoCorrect:"off",spellCheck:!1,className:"".concat(Q.inputClass,"_theme_dark")},se="email",ue="password",le=Object(a.memo)((function(e){var t=e.form,n=Object(q.a)(e,oe),c=Object(a.useState)(!1),r=Object(j.a)(c,2),o=r[0],i=r[1],s=o?"".concat(n.buttonSavingTitle,"..."):n.buttonTitle;return Object(D.jsxs)("div",{className:"content auth",children:[Object(D.jsx)("h2",{className:"auth__title",children:n.title}),Object(D.jsxs)(Z,{onSubmit:function(e){i(!0);var a=t.getData(),c=a.email,r=a.password;n.handleSubmit(e,c,r).finally((function(){i(!1)}))},onReset:t.reset,children:[Object(D.jsx)(re,Object(l.a)(Object(l.a)(Object(l.a)({},ie),{},{autoFocus:!0},t.register(se)),{},{id:se,type:se,autoComplete:se,placeholder:"Email"})),Object(D.jsx)(re,Object(l.a)(Object(l.a)(Object(l.a)({},ie),t.register(ue)),{},{type:ue,id:n.passwordAutocomplete,autoComplete:n.passwordAutocomplete,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})),Object(D.jsx)("button",{type:"submit",disabled:t.isInvalid||o,className:"auth__button ".concat(Q.submitButtonClass," ").concat(Q.submitButtonClass,"_theme_dark"),children:s})]}),n.children]})})),be={passwordAutocomplete:"current-password",title:v.title,buttonTitle:v.action,buttonSavingTitle:v.title},de=Object(a.memo)((function(e){return Object(D.jsx)(le,Object(l.a)(Object(l.a)({},e),be))})),je={passwordAutocomplete:"new-password",title:g.title,buttonTitle:g.action,buttonSavingTitle:g.title},Oe=Object(a.memo)((function(e){return Object(D.jsx)(le,Object(l.a)(Object(l.a)(Object(l.a)({},e),je),{},{children:Object(D.jsxs)("div",{className:"auth__signin",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(D.jsx)(i.b,{to:m,className:"auth__login-link",children:v.action})]})}))})),fe=Object(a.memo)((function(e){var t,n,a=W({email:null!==(n="email",t=localStorage[n]&&atob(JSON.parse(localStorage[n])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(D.jsx)(O.a,{to:p}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(O.b,{path:m,children:Object(D.jsx)(de,{handleSubmit:e.handleLogin,form:a})}),Object(D.jsx)(O.b,{path:h,children:Object(D.jsx)(Oe,{handleSubmit:e.handleRegister,form:a})})]})})),me=function(e){return Object(D.jsx)(O.b,{children:e.loggedIn?e.children:Object(D.jsx)(O.a,{to:m})})},he=n(21),pe=he.b.url.split(".");pe.pop();for(var ve=pe.join(".").split("+")[1],ge=n.p+"static/media/logo.6fa47d29.svg",_e=["loggedIn"],xe=Object(a.memo)((function(e){var t,n=e.loggedIn,a=Object(q.a)(e,_e),c=Object(O.h)(),r=m;switch(c.pathname){case m:t=g.title,r=h;break;case h:t=v.action;break;default:t=_.action}return Object(D.jsxs)("header",{className:"header",children:[Object(D.jsx)("a",{target:"_self",href:ve,className:"logo header__logo",children:Object(D.jsx)("img",{className:"logo__img",alt:"Mesto",src:ge})}),Object(D.jsxs)("div",{className:"header__container",children:[n&&a.credential&&Object(D.jsx)("p",{className:"header__credential",children:a.credential}),Object(D.jsx)(i.b,Object(l.a)(Object(l.a)({to:r,onClick:n?a.onSignOut:null},ee(["header__action-button",n&&"header__action-button_dimmed"])),{},{children:t}))]})]})})),Ce=["card"],ke=Object(a.memo)((function(e){var t,n=e.card,a=Object(q.a)(e,Ce);n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var c=R();n.isTemporarilyLocal&&(n.owner=c);var r=n.owner._id===c._id,o=n.likes.some((function(e){return e._id===c._id}));var i="\u0410\u0432\u0442\u043e\u0440: ".concat(n.owner.name," \xb7 ").concat(n.owner.about),s="".concat(i,"\n\n#").concat(n.owner._id,"\n").concat(n.owner.avatar);return Object(D.jsxs)("li",{className:"element",children:[Object(D.jsx)("img",{onClick:function(){a.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),r&&Object(D.jsx)("button",{onClick:function(){n.isTemporarilyLocal||a.onCardDelete(n)},type:"reset",className:"element__trash-button"}),Object(D.jsxs)("div",{className:"element__container",title:i,children:[Object(D.jsx)("h2",{className:"element__title",children:n.name}),Object(D.jsxs)("div",{className:"element__likes",children:[Object(D.jsx)("input",{checked:o,type:"checkbox",onChange:function(){n.isTemporarilyLocal||a.onCardLike(n)},className:"element__like-button",title:s}),Object(D.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]})})),Se={isTemporarilyLocal:!0,name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."},Ne=[],ye=0;ye<30;ye++)Ne.push(Se);var we=Object(a.memo)((function(e){var t=R(),n=Object(a.useMemo)((function(){return e.cards.length?e.cards:Ne}),[e.cards]);return Object(D.jsxs)("main",{className:"content",children:[Object(D.jsxs)("section",{className:"profile",children:[Object(D.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(D.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(D.jsxs)("div",{className:"profile__info",children:[Object(D.jsx)("h1",{className:"profile__name",children:t.name}),Object(D.jsx)("p",{className:"profile__description",children:t.about}),Object(D.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(D.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(D.jsx)("section",{className:"elements",children:Object(D.jsx)("ul",{className:"elements__list",children:n.map((function(t){var n;return Object(D.jsx)(ke,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})})),Ee=ve.split("/");Ee.pop();var Te=Ee.join("/"),Fe=(new Date).getFullYear(),Le=Object(a.memo)((function(){return Object(D.jsx)("footer",{className:"footer",children:Object(D.jsxs)("a",{target:"_blank",rel:"noreferrer",href:Te,className:"footer__copyright",children:["\xa9 ",Fe," ",he.a]})})})),De=["isOpen","closeTimeoutMS"],Ae=document.getElementById("modal-root"),Pe={className:"popup",shouldAppearInDOM:!1};Pe.classNameOpened="".concat(Pe.className,"_opened");var Ie=Object(a.memo)((function(e){var t=e.isOpen,n=e.closeTimeoutMS,c=void 0===n?250:n,o=Object(q.a)(e,De),i=Object(a.useState)(),s=Object(j.a)(i,2),u=s[0],b=s[1],d=Object(a.useState)(Pe.shouldAppearInDOM),O=Object(j.a)(d,2),f=O[0],m=O[1];return Object(a.useEffect)((function(){if(t)return m(!Pe.shouldAppearInDOM),void b(Pe.classNameOpened);document.activeElement.blur(),b();var e=setTimeout((function(){m(Pe.shouldAppearInDOM)}),c);return function(){return clearTimeout(e)}}),[c,t]),f?Object(r.createPortal)(Object(D.jsx)("section",Object(l.a)(Object(l.a)({style:{transitionDuration:"".concat(c,"ms")}},ee([Pe.className,o.className,u])),{},{onClick:o.onClick,id:o.id,children:o.children})),Ae):null})),Ue=function(e,t){var n=e.isOpen,a=e.isOpen!==t.isOpen;return!(n||a)},Re=function(e,t){function n(n){var a=Object(l.a)({isOpen:n.isOpen,onClick:n.onClose},t&&t(n));return Object(D.jsx)(Ie,Object(l.a)(Object(l.a)({},a),{},{children:Object(D.jsx)(e,Object(l.a)({},n))}))}return Object(a.memo)(n,Ue)},Me=["onSubmit","children","onReset"],Je=Re((function(e){var t,n=e.onSubmit,c=e.children,r=e.onReset,o=Object(q.a)(e,Me),i=Object(a.useState)(!1),s=Object(j.a)(i,2),u=s[0],l=s[1],b=u?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":null!==(t=o.buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",d=Object(a.useCallback)((function(e){l(!0),n&&n(e).then((function(t){return c&&(e.target.reset(),r&&r(e)),t})).catch((function(e){console.log(e)})).finally((function(){l(!1)}))}),[c,r,n]);return Object(D.jsxs)("div",{className:"popup__container",children:[Object(D.jsx)("button",{type:"reset",className:Y}),Object(D.jsx)("h2",{className:"popup__title",children:o.title}),Object(D.jsxs)(Z,{onSubmit:d,onReset:r,children:[c,Object(D.jsx)("button",{disabled:o.isSubmitDisabled||u,type:"submit",className:"popup__button ".concat(Q.submitButtonClass),children:b})]})]})}),(function(e){return{id:e.name}})),Be=["reset"],ze=Object(a.memo)((function(e){var t=R(),n=M(),c=W(t),r=c.reset,o=Object(q.a)(c,Be);function i(){return(i=Object(d.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B(n,t,o.getData(),"editProfile");case 2:return c=a.sent,e.onUpdateUser(),a.abrupt("return",c);case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e.isOpen||r()}),[e.isOpen,r]),Object(D.jsxs)(Je,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return i.apply(this,arguments)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",isSubmitDisabled:o.isInvalid,children:[Object(D.jsx)(re,Object(l.a)(Object(l.a)({isFocused:e.isOpen},o.register("name")),{},{autoComplete:"name",autoCapitalize:"words",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40"})),Object(D.jsx)(re,Object(l.a)(Object(l.a)({},o.register("about")),{},{id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200"}))]}))})),He=Object(a.memo)((function(e){var t=W(),n=R(),a=M();return Object(D.jsx)(Je,Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return e.onUpdateAvatar(),B(a,n,t.getData(),"updateAvatar")},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor"},t.registerForm()),{},{children:Object(D.jsx)(re,Object(l.a)(Object(l.a)({isFocused:e.isOpen},t.register("avatar")),{},{type:"url",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}))}))})),Ve=Object(a.memo)((function(e){var t=W();return Object(D.jsxs)(Je,Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return e.onAddPlace(t.getData())},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},t.registerForm()),{},{children:[Object(D.jsx)(re,Object(l.a)(Object(l.a)({isFocused:e.isOpen},t.register("title")),{},{id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30"})),Object(D.jsx)(re,Object(l.a)(Object(l.a)({},t.register("link")),{},{type:"url",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}))]}))}));var Ke=Object(a.memo)((function(e){var t=e.onCardDelete,n=e.card,c=e.isOpen,r=Object(a.useCallback)((function(){return t(n)}),[n,t]);return function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=e}),[e]),x("keydown",Object(a.useCallback)((function(e){"Enter"===e.key&&t.current()}),[]))}(Object(a.useCallback)((function(){return c&&r()}),[r,c])),Object(D.jsx)(Je,Object(l.a)(Object(l.a)({},e),{},{onSubmit:r,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))})),We=[Y,"".concat(Y,"_parent-corners_straight")],qe=Re((function(e){var t=e.card;return Object(D.jsxs)("figure",{className:"popup__figure",children:[Object(D.jsx)("button",Object(l.a)({type:"button"},ee(We))),Object(D.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(D.jsx)("figcaption",{className:"popup__caption",children:t.name})]})}),(function(){return{className:"popup_type_image",id:"image-viewer"}})),Ge=n.p+"static/media/check.5221857e.svg",Ye=n.p+"static/media/cross.173b3897.svg",Qe=Re((function(e){var t,n=e.isSuccess;return Object(D.jsxs)("div",{className:"popup__container",children:[Object(D.jsx)("button",{type:"button",className:Y}),Object(D.jsxs)("div",{className:"info-tooltip",children:[Object(D.jsx)("div",{className:"info-tooltip__icon",style:(t=n?Ge:Ye,{backgroundImage:"url(".concat(t,")")})}),Object(D.jsx)("h3",{className:"info-tooltip__title",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})}));"localhost"===window.location.host&&function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/react-mesto-auth",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),t=e.NODE_ENV,n=e.REACT_APP_LOCAL_HOST;if("development"===t&&n)window.location.host=n}();var Xe=function(){var e=Object(O.g)(),t=C("currentUser",A),n=Object(j.a)(t,2),r=n[0],o=n[1],i=C("loggedIn",!1),s=Object(j.a)(i,2),f=s[0],v=s[1],g=function(e,t){var n=C(e,t),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useCallback)((function(e){o(btoa(e))}),[o]),s=Object(a.useRef)(atob(r));return Object(a.useEffect)((function(){s.current=atob(r)})),[s.current,i]}("email",""),_=Object(j.a)(g,2),k=_[0],S=_[1],N=c.a.useState(!1),y=Object(j.a)(N,2),w=y[0],E=y[1],F=c.a.useState(!1),P=Object(j.a)(F,2),I=P[0],R=P[1],M=c.a.useState(!1),J=Object(j.a)(M,2),B=J[0],z=J[1],H=c.a.useState(!1),V=Object(j.a)(H,2),K=V[0],W=V[1],q=c.a.useState(!1),G=Object(j.a)(q,2),Y=G[0],Q=G[1],X=c.a.useState(!1),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(j.a)(te,2),ae=ne[0],ce=ne[1],re=c.a.useState({}),oe=Object(j.a)(re,2),ie=oe[0],se=oe[1],ue=C("cards",[]),le=Object(j.a)(ue,2),be=le[0],de=le[1];function je(){return(je=Object(d.a)(u.a.mark((function e(t){var n,a,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=be,a=t.likes.some((function(e){return e._id===r._id})),c=a?t.likes.filter((function(e){return e._id!==r._id})):[].concat(Object(b.a)(t.likes),[r]),o=Object(l.a)(Object(l.a)({},t),{},{likes:c}),de(be.map((function(e){return e._id===t._id?o:e}))),e.prev=5,e.next=8,T.changeLikeCardStatus(t._id,!a);case 8:return i=e.sent,de(be.map((function(e){return e._id===t._id?i:e}))),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(5),de(n),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}function Oe(){z(!1),E(!1),R(!1),W(!1),Q(!1),ee(!1)}c.a.useEffect((function(){T.getUserInfo().then(o).catch((function(e){return console.log("Couldnt get user info from the server",e)}))}),[o]),c.a.useEffect((function(){T.getInitialCards().then(de).catch((function(e){return console.log("Couldnt get initial cards from the server",e)}))}),[de]);var he=c.a.useCallback((function(e){var t=be;return de(be.filter((function(t){return t._id!==e._id}))),Oe(),T.deleteCard(e._id).catch((function(e){de(t),console.log("Couldnt delete card on the server",e)}))}),[be,de]),pe=c.a.useCallback((function(e){e.target===e.currentTarget&&Oe()}),[]),ve=Oe,ge=Oe;!function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=e}),[e]),x("keydown",Object(a.useCallback)((function(e){"Escape"===e.key&&t.current()}),[]))}(Oe);var _e=c.a.useCallback((function(e){S(e),v(!0)}),[S,v]),Ce=c.a.useCallback((function(){localStorage.token?(L.token=localStorage.token,L.getUserInfo().then((function(t){t&&(_e(t.email),e.replace(p))})).catch((function(e){v(!1),console.log(e)}))):v(!1)}),[_e,e,v]);return c.a.useEffect((function(){Ce()}),[Ce]),Object(D.jsxs)(U,{state:r,dispatch:o,children:[Object(D.jsx)(xe,{credential:k,onSignOut:function(){delete localStorage.token,v(!1),e.replace(m),window.scrollTo(0,0)},loggedIn:f}),Object(D.jsxs)(O.d,{children:[Object(D.jsxs)(O.b,{path:[h,m],children:[Object(D.jsx)(fe,{loggedIn:f,handleLogin:function(t,n,a){if(n&&a)return L.login(n,a).then((function(a){a.token&&(t.target.reset(),localStorage.token=a.token,_e(n),e.push(p))})).catch((function(e){ee(!0),console.log(e)}))},handleRegister:function(t,n,a){return L.register(n,a).then((function(){e.replace(m),ce(!0)})).catch((function(e){ce(!1),console.log(e)})).finally((function(){ee(!0)}))}}),Object(D.jsx)(Qe,{isOpen:$,isSuccess:ae,onClose:pe})]}),Object(D.jsxs)(me,{path:p,loggedIn:f,children:[Object(D.jsx)(we,{onEditProfile:function(){E(!0)},onAddPlace:function(){R(!0)},onEditAvatar:function(){z(!0)},cards:be,onCardClick:function(e){se(e),Q(!0)},onCardLike:function(e){return je.apply(this,arguments)},onCardDelete:function(e){se(e),W(!0)}}),Object(D.jsx)(ze,{onUpdateUser:ve,isOpen:w,onClose:pe}),Object(D.jsx)(Ve,{onAddPlace:function(e){var t=e.title,n=e.link,a=be;return de([{isTemporarilyLocal:!0,name:t,link:n}].concat(Object(b.a)(be))),Oe(),T.addCard(t,n).then((function(e){return de([e].concat(Object(b.a)(be)))})).catch((function(e){throw de(a),e}))},isOpen:I,onClose:pe}),Object(D.jsx)(He,{onUpdateAvatar:ge,isOpen:B,onClose:pe}),Object(D.jsx)(Ke,{card:ie,onCardDelete:he,isOpen:K,onClose:pe}),Object(D.jsx)(qe,{card:ie,isOpen:Y,onClose:pe})]})]}),Object(D.jsx)(Le,{})]})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(D.jsx)(Xe,{})})}),document.getElementById("root")),Ze()}},[[45,1,2]]]);
//# sourceMappingURL=main.68cd00b1.chunk.js.map