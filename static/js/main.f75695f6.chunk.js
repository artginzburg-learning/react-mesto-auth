(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":"Art Ginzburg","b":{"type":"git","url":"git+https://github.com/artginzburg/react-mesto-auth.git"}}')},32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),i=n(8),s=(n(32),n(9)),u=n.n(s),l=n(2),b=n(21),j=n(10),d=n(3),O=n(4),f="nomoreparties.co",m="/login",p="/register",h="/",v={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},g={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},_={action:"\u0412\u044b\u0439\u0442\u0438"},x="Enter",C=function(e){return"[".concat(e,"]")},k={close:C("Escape"),confirm:C(x)},S=document.getElementById("modal-root"),N=document.getElementById("root");function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=t}),[t]),Object(c.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return a.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}function w(e,t){var n=Object(c.useState)((function(){try{var n=localStorage[e];return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),a=Object(d.a)(n,2),r=a[0],o=a[1],i=Object(c.useCallback)((function(t){localStorage[e]=JSON.stringify(t),o(t)}),[e]);return y("storage",Object(c.useCallback)((function(n){n.key===e&&o(n.newValue?JSON.parse(n.newValue):t)}),[e,t])),[r,i]}var E=n(11),T=n(12),F=n(20),L=n(19),D=function(){function e(t){Object(E.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject(e.statusText)},this._baseUrl=t.baseUrl,this._headers=t.headers,this._authFormat=""}return Object(T.a)(e,[{key:"_constructAuthorization",value:function(){this._headers=Object(l.a)(Object(l.a)({},this._headers),{},{authorization:this._authFormat+localStorage.token})}},{key:"_customFetch",value:function(e,t,n){var c,a={headers:null!==(c=this._headers)&&void 0!==c?c:{}};return t&&"GET"!==t&&(a.method=t,"DELETE"!==t&&(a.headers["Content-Type"]="application/json")),n&&(a.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),a).then(this._handleFetch)}}]),e}(),A={url:new URL("https://mesto.".concat(f)),version:"v1",endpoints:{users:"users/me",cards:"cards"}},I=new(function(e){Object(F.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(E.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).editProfile=function(t){var n=t.name,c=t.about;return e._customFetch(A.endpoints.users,"PATCH",{name:n,about:c})},e.addCard=function(t,n){return e._customFetch(A.endpoints.cards,"POST",{name:t,link:n})},e.deleteCard=function(t){return e._customFetch("".concat(A.endpoints.cards,"/").concat(t),"DELETE")},e.changeLikeCardStatus=function(t,n){return e._customFetch("".concat(A.endpoints.cards,"/likes/").concat(t),n?"PUT":"DELETE")},e.updateAvatar=function(t){var n=t.avatar;return e._customFetch("".concat(A.endpoints.users,"/avatar"),"PATCH",{avatar:n})},e}return Object(T.a)(n,[{key:"getUserInfo",value:function(){return this._customFetch(A.endpoints.users)}},{key:"getInitialCards",value:function(){return this._customFetch(A.endpoints.cards)}}]),n}(D))({baseUrl:"".concat(A.url.origin,"/").concat(A.version,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),P={url:new URL("https://auth.".concat(f)),endpoints:{signup:"signup",signin:"signin",user:"users/me"}},U=new(function(e){Object(F.a)(n,e);var t=Object(L.a)(n);function n(e){var c;return Object(E.a)(this,n),(c=t.call(this,e))._authFormat="Bearer ",c}return Object(T.a)(n,[{key:"register",value:function(e,t){return this._customFetch(P.endpoints.signup,"POST",{password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(P.endpoints.signin,"POST",{password:t,email:e})}},{key:"getUserInfo",value:function(){return this._constructAuthorization(),this._customFetch(P.endpoints.user).then((function(e){return e.data}))}}]),n}(D))({baseUrl:P.url.origin}),R=n(1),J={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"},M=Object(c.createContext)(),B=Object(c.createContext)();function z(e){var t=e.state,n=e.dispatch,c=e.children;return Object(R.jsx)(M.Provider,{value:t,children:Object(R.jsx)(B.Provider,{value:n,children:c})})}function H(){var e=Object(c.useContext)(M);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function V(){var e=Object(c.useContext)(B);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function W(e,t){return JSON.stringify(e)===JSON.stringify(t)}function K(e,t,n,c){return q.apply(this,arguments)}function q(){return(q=Object(j.a)(u.a.mark((function e(t,n,c,a){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(l.a)(Object(l.a)({},n),c),t(r),e.prev=2,e.next=5,I[a](c);case 5:return o=e.sent,W(r,o)||t(o),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),t(n),console.log("Couldnt update user information on the server",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var G=n(14),Y={},Q=!0;function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(Y),i=Object(d.a)(o,2),s=i[0],u=i[1],b=Object(c.useState)(Q),j=Object(d.a)(b,2),O=j[0],f=j[1];function m(t,n){r((function(c){var a=Object(l.a)(Object(l.a)({},c),{},Object(G.a)({},t,n));return JSON.stringify(Object(l.a)(Object(l.a)({},e),a))===JSON.stringify(e)&&f(!0),a}))}function p(e,t){u((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(G.a)({},e,t))}))}var h=Object(c.useCallback)((function(t,n){r(null!==n&&void 0!==n?n:e),u(Y),f(Q)}),[e]);return{registerForm:function(){return{isSubmitDisabled:O,onReset:h}},register:function(e){var t;return{value:null!==(t=a[e])&&void 0!==t?t:"",onChange:function(t){var n=t.currentTarget,c=n.value,a=n.validationMessage;m(e,c),p(e,c.length?a:"");var r=n.closest("form").checkValidity();f(!r)},validationMessage:s[e],name:e}},reset:h,getData:function(){return a},isInvalid:O}}var Z=n(5),$=function(e){return".".concat(e)},ee="popup__close-button",te={inputClass:"form__input",submitButtonClass:"form__button"},ne=($(te.formClass),$(te.inputClass),$(te.submitButtonClass),["onSubmit"]),ce=Object(c.memo)((function(e){var t=e.onSubmit,n=Object(Z.a)(e,ne),a=Object(c.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(R.jsx)("form",Object(l.a)(Object(l.a)({action:"#",onSubmit:a,className:"form"},n),{},{children:n.children}))})),ae=function(e){return e.filter(Boolean).join(" ")},re=function(e){return{className:ae(e)}},oe=["isFocused","validationMessage"],ie="text",se=!0,ue=2,le=Object(c.forwardRef)((function(e,t){var n,a,r,o=e.isFocused,i=e.validationMessage,s=Object(Z.a)(e,oe),u=null!==t&&void 0!==t?t:Object(c.createRef)(),b=null!==(n=s.type)&&void 0!==n?n:ie,j=null!==(a=s.required)&&void 0!==a?a:se,d=b===ie?ue:null,O={type:b,minLength:null!==(r=s.minLength)&&void 0!==r?r:d,required:j,ref:u};return Object(c.useEffect)((function(){o&&u&&u.current&&u.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){u&&u.current&&u.current.focus()}),50)}),[o,u]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("input",Object(l.a)(Object(l.a)(Object(l.a)({},s),re([te.inputClass,i&&"form__input_type_error",s.className])),O)),Object(R.jsx)("p",Object(l.a)(Object(l.a)({},re(["form__error",i&&"form__error_visible"])),{},{id:"".concat(s.id,"-error"),children:i}))]})})),be=["form"],je={autoCorrect:"off",spellCheck:!1,className:"".concat(te.inputClass,"_theme_dark")},de="email",Oe="password",fe=Object(c.memo)((function(e){var t=e.form,n=Object(Z.a)(e,be),a=Object(c.useState)(!1),r=Object(d.a)(a,2),o=r[0],i=r[1],s=o?"".concat(n.buttonSavingTitle,"..."):n.buttonTitle;return Object(R.jsxs)("div",{className:"content auth",children:[Object(R.jsx)("h2",{className:"auth__title",children:n.title}),Object(R.jsxs)(ce,{onSubmit:function(e){i(!0);var c=t.getData(),a=c.email,r=c.password;n.handleSubmit(e,a,r).finally((function(){i(!1)}))},onReset:t.reset,children:[Object(R.jsx)(le,Object(l.a)(Object(l.a)(Object(l.a)({},je),{},{autoFocus:!0},t.register(de)),{},{id:de,type:de,autoComplete:de,placeholder:"Email"})),Object(R.jsx)(le,Object(l.a)(Object(l.a)(Object(l.a)({},je),t.register(Oe)),{},{type:Oe,id:n.passwordAutocomplete,autoComplete:n.passwordAutocomplete,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})),Object(R.jsx)("button",{type:"submit",disabled:t.isInvalid||o,className:"auth__button ".concat(te.submitButtonClass," ").concat(te.submitButtonClass,"_theme_dark"),children:s})]}),n.children]})})),me={passwordAutocomplete:"current-password",title:v.title,buttonTitle:v.action,buttonSavingTitle:v.title},pe=Object(c.memo)((function(e){return Object(R.jsx)(fe,Object(l.a)(Object(l.a)({},e),me))})),he={passwordAutocomplete:"new-password",title:g.title,buttonTitle:g.action,buttonSavingTitle:g.title},ve=Object(c.memo)((function(e){return Object(R.jsx)(fe,Object(l.a)(Object(l.a)(Object(l.a)({},e),he),{},{children:Object(R.jsxs)("div",{className:"auth__signin",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(R.jsx)(i.b,{to:m,className:"auth__login-link",children:v.action})]})}))})),ge=Object(c.memo)((function(e){var t,n,c=X({email:null!==(n="email",t=localStorage[n]&&atob(JSON.parse(localStorage[n])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(R.jsx)(O.a,{to:h}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(O.b,{path:m,children:Object(R.jsx)(pe,{handleSubmit:e.handleLogin,form:c})}),Object(R.jsx)(O.b,{path:p,children:Object(R.jsx)(ve,{handleSubmit:e.handleRegister,form:c})})]})})),_e=function(e){return Object(R.jsx)(O.b,{children:e.loggedIn?e.children:Object(R.jsx)(O.a,{to:m})})},xe=n(18),Ce=xe.b.url.split(".");Ce.pop();var ke=Ce.join(".").split("+")[1],Se=n.p+"static/media/logo.6fa47d29.svg",Ne=["loggedIn"],ye=Object(c.memo)((function(e){var t,n=e.loggedIn,c=Object(Z.a)(e,Ne),a=Object(O.h)(),r=m;switch(a.pathname){case m:t=g.title,r=p;break;case p:t=v.action;break;default:t=_.action}return Object(R.jsxs)("header",{className:"header",children:[Object(R.jsx)("a",{target:"_self",href:ke,className:"logo header__logo",children:Object(R.jsx)("img",{className:"logo__img",alt:"Mesto",src:Se})}),Object(R.jsxs)("div",{className:"header__container",children:[n&&c.credential&&Object(R.jsx)("p",{className:"header__credential",children:c.credential}),Object(R.jsx)(i.b,Object(l.a)(Object(l.a)({to:r,onClick:n?c.onSignOut:null},re(["header__action-button",n&&"header__action-button_dimmed"])),{},{children:t}))]})]})}));for(var we=["card"],Ee=Object(c.memo)((function(e){var t,n=e.card,c=Object(Z.a)(e,we);n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var a=H();n.isTemporarilyLocal&&(n.owner=a);var r=n.owner._id===a._id,o=n.likes.some((function(e){return e._id===a._id}));var i="\u0410\u0432\u0442\u043e\u0440: ".concat(n.owner.name," \xb7 ").concat(n.owner.about),s="".concat(i,"\n\n#").concat(n.owner._id,"\n").concat(n.owner.avatar);return Object(R.jsxs)("li",Object(l.a)(Object(l.a)({},re(["element",n.isTemporarilyLocal&&"element_appearing"])),{},{children:[Object(R.jsx)("img",{onError:function(e){e.target.style.cursor="default",e.target.title='Failed to load image: "'.concat(n.name,'"')},onClick:function(e){var t;(t=e.target).complete&&0!==t.naturalHeight&&c.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),r&&Object(R.jsx)("button",{onClick:function(){n.isTemporarilyLocal||c.onCardDelete(n)},type:"reset",className:"element__trash-button"}),Object(R.jsxs)("div",{className:"element__container",title:i,children:[Object(R.jsx)("h2",{className:"element__title",children:n.name}),Object(R.jsxs)("div",{className:"element__likes",children:[Object(R.jsx)("input",{checked:o,type:"checkbox",onChange:function(){n.isTemporarilyLocal||c.onCardLike(n)},className:"element__like-button",title:s}),Object(R.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]}))})),Te={isTemporarilyLocal:!0,name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."},Fe=[],Le=0;Le<30;Le++)Fe.push(Te);var De=Object(c.memo)((function(e){var t=H(),n=Object(c.useMemo)((function(){return e.cards.length?e.cards:Fe}),[e.cards]);return Object(R.jsxs)("main",{className:"content",children:[Object(R.jsxs)("section",{className:"profile",children:[Object(R.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(R.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(R.jsxs)("div",{className:"profile__info",children:[Object(R.jsx)("h1",{className:"profile__name",children:t.name}),Object(R.jsx)("p",{className:"profile__description",children:t.about}),Object(R.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(R.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(R.jsx)("section",{className:"elements",children:Object(R.jsx)("ul",{className:"elements__list",children:n.map((function(t){var n;return Object(R.jsx)(Ee,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})}),(function(e,t){return JSON.stringify(e)===JSON.stringify(t)})),Ae=ke.split("/");Ae.pop();var Ie=Ae.join("/"),Pe=(new Date).getFullYear(),Ue=Object(c.memo)((function(){return Object(R.jsx)("footer",{className:"footer",children:Object(R.jsxs)("a",{target:"_blank",rel:"noreferrer",href:Ie,className:"footer__copyright",children:["\xa9 ",Pe," ",xe.a]})})})),Re=["isOpen","closeTimeoutMS"],Je={className:"popup",shouldAppearInDOM:!1};Je.classNameOpened="".concat(Je.className,"_opened");var Me=Object(c.memo)((function(e){var t=e.isOpen,n=e.closeTimeoutMS,a=void 0===n?250:n,o=Object(Z.a)(e,Re),i=Object(c.useState)(),s=Object(d.a)(i,2),u=s[0],b=s[1],j=Object(c.useState)(Je.shouldAppearInDOM),O=Object(d.a)(j,2),f=O[0],m=O[1];return Object(c.useEffect)((function(){if(t){m(!Je.shouldAppearInDOM);var e=setTimeout((function(){b(Je.classNameOpened)}),5);return function(){return clearTimeout(e)}}document.activeElement.blur(),b();var n=setTimeout((function(){m(Je.shouldAppearInDOM)}),a);return function(){return clearTimeout(n)}}),[a,t]),f?Object(r.createPortal)(Object(R.jsx)("section",Object(l.a)(Object(l.a)({style:{transitionDuration:"".concat(a,"ms")}},re([Je.className,o.className,u])),{},{onClick:o.onClick,id:o.id,children:o.children})),S):null})),Be=function(e,t){var n=e.isOpen,c=e.isOpen!==t.isOpen;return!(n||c)},ze=function(e,t){function n(n){var c=Object(l.a)({isOpen:n.isOpen,onClick:n.onClose},t&&t(n));return Object(R.jsx)(Me,Object(l.a)(Object(l.a)({},c),{},{children:Object(R.jsx)(e,Object(l.a)({},n))}))}return Object(c.memo)(n,Be)},He=["onSubmit","children","onReset"],Ve=ze((function(e){var t,n=e.onSubmit,a=e.children,r=e.onReset,o=Object(Z.a)(e,He),i=Object(c.useState)(!1),s=Object(d.a)(i,2),u=s[0],l=s[1],b=u?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":null!==(t=o.buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",j=Object(c.useCallback)((function(e){l(!0),n&&n(e).then((function(t){return a&&(e.target.reset(),r&&r(e)),t})).catch((function(e){console.log(e)})).finally((function(){e.target.clientWidth&&l(!1)}))}),[a,r,n]);return Object(R.jsxs)("div",{className:"popup__container",children:[Object(R.jsx)("button",{title:k.close,type:"reset",className:ee}),Object(R.jsx)("h2",{className:"popup__title",children:o.title}),Object(R.jsxs)(ce,{onSubmit:j,onReset:r,children:[a,Object(R.jsx)("button",{disabled:o.isSubmitDisabled||u,title:k.confirm,type:"submit",className:"popup__button ".concat(te.submitButtonClass),children:b})]})]})}),(function(e){return{id:e.name}})),We=["reset"],Ke=Object(c.memo)((function(e){var t=H(),n=V(),a=X(t),r=a.reset,o=Object(Z.a)(a,We);function i(){return(i=Object(j.a)(u.a.mark((function c(){var a;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,K(n,t,o.getData(),"editProfile");case 2:return a=c.sent,e.onUpdateUser(),c.abrupt("return",a);case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(c.useEffect)((function(){e.isOpen||r()}),[e.isOpen,r]),Object(R.jsxs)(Ve,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return i.apply(this,arguments)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",isSubmitDisabled:o.isInvalid,children:[Object(R.jsx)(le,Object(l.a)(Object(l.a)({isFocused:e.isOpen},o.register("name")),{},{autoComplete:"name",autoCapitalize:"words",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40"})),Object(R.jsx)(le,Object(l.a)(Object(l.a)({},o.register("about")),{},{id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200"}))]}))})),qe=Object(c.memo)((function(e){var t=X(),n=H(),c=V();return Object(R.jsx)(Ve,Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return e.onUpdateAvatar(),K(c,n,t.getData(),"updateAvatar")},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor"},t.registerForm()),{},{children:Object(R.jsx)(le,Object(l.a)(Object(l.a)({isFocused:e.isOpen},t.register("avatar")),{},{type:"url",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}))}))})),Ge=Object(c.memo)((function(e){var t=X();return Object(R.jsxs)(Ve,Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){return e.onAddPlace(t.getData())},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},t.registerForm()),{},{children:[Object(R.jsx)(le,Object(l.a)(Object(l.a)({isFocused:e.isOpen},t.register("title")),{},{id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30"})),Object(R.jsx)(le,Object(l.a)(Object(l.a)({},t.register("link")),{},{type:"url",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}))]}))}));var Ye=Object(c.memo)((function(e){var t=e.onCardDelete,n=e.card,a=e.isOpen,r=Object(c.useCallback)((function(){return t(n)}),[n,t]);return function(e){var t=Object(c.useRef)();Object(c.useEffect)((function(){t.current=e}),[e]),y("keydown",Object(c.useCallback)((function(e){"Enter"===e.key&&t.current()}),[]))}(Object(c.useCallback)((function(){return a&&r()}),[r,a])),Object(R.jsx)(Ve,Object(l.a)(Object(l.a)({},e),{},{onSubmit:r,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))})),Qe=[ee,"".concat(ee,"_parent-corners_straight")],Xe=ze((function(e){var t=e.card;return Object(R.jsxs)("figure",{className:"popup__figure",children:[Object(R.jsx)("button",Object(l.a)({title:k.close,type:"button"},re(Qe))),Object(R.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(R.jsx)("figcaption",{className:"popup__caption",children:t.name})]})}),(function(){return{className:"popup_type_image",id:"image-viewer"}})),Ze=n.p+"static/media/check.5221857e.svg",$e=n.p+"static/media/cross.173b3897.svg",et=ze((function(e){var t,n=e.isSuccess;return Object(R.jsxs)("div",{className:"popup__container",children:[Object(R.jsx)("button",{title:k.close,type:"button",className:ee}),Object(R.jsxs)("div",{className:"info-tooltip",children:[Object(R.jsx)("div",{className:"info-tooltip__icon",style:(t=n?Ze:$e,{backgroundImage:"url(".concat(t,")")})}),Object(R.jsx)("h3",{className:"info-tooltip__title",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})}));"localhost"===window.location.host&&function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/react-mesto-auth",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),t=e.NODE_ENV,n=e.REACT_APP_LOCAL_HOST;if("development"===t&&n)window.location.host=n}();var tt=function(){var e=Object(O.g)(),t=w("currentUser",J),n=Object(d.a)(t,2),a=n[0],r=n[1],o=w("loggedIn",!1),i=Object(d.a)(o,2),s=i[0],f=i[1],v=function(e,t){var n=w(e,t),a=Object(d.a)(n,2),r=a[0],o=a[1],i=Object(c.useCallback)((function(e){o(btoa(e))}),[o]),s=Object(c.useRef)(atob(r));return Object(c.useEffect)((function(){s.current=atob(r)})),[s.current,i]}("email",""),g=Object(d.a)(v,2),_=g[0],x=g[1],C=Object(c.useState)(!1),k=Object(d.a)(C,2),S=k[0],E=k[1],T=Object(c.useState)(!1),F=Object(d.a)(T,2),L=F[0],D=F[1],A=Object(c.useState)(!1),P=Object(d.a)(A,2),M=P[0],B=P[1],H=Object(c.useState)(!1),V=Object(d.a)(H,2),W=V[0],K=V[1],q=Object(c.useState)(!1),G=Object(d.a)(q,2),Y=G[0],Q=G[1],X=Object(c.useState)(!1),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(d.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)({}),oe=Object(d.a)(re,2),ie=oe[0],se=oe[1],ue=w("cards",[]),le=Object(d.a)(ue,2),be=le[0],je=le[1];function de(){return(de=Object(j.a)(u.a.mark((function e(t){var n,c,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=be,c=t.likes.some((function(e){return e._id===a._id})),r=c?t.likes.filter((function(e){return e._id!==a._id})):[].concat(Object(b.a)(t.likes),[a]),o=Object(l.a)(Object(l.a)({},t),{},{likes:r}),je(be.map((function(e){return e._id===t._id?o:e}))),e.prev=5,e.next=8,I.changeLikeCardStatus(t._id,!c);case 8:return i=e.sent,je(be.map((function(e){return e._id===t._id?i:e}))),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(5),je(n),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}function Oe(){B(!1),E(!1),D(!1),K(!1),Q(!1),ee(!1)}Object(c.useEffect)((function(){I.getUserInfo().then(r).catch((function(e){return console.log("Couldnt get user info from the server",e)}))}),[r]),Object(c.useEffect)((function(){I.getInitialCards().then(je).catch((function(e){return console.log("Couldnt get initial cards from the server",e)}))}),[je]),Object(c.useEffect)((function(){N.classList[S||L||M||W||Y||$?"add":"remove"]("root-animated_popped-out")}),[L,W,M,S,Y,$]);var fe=Object(c.useCallback)((function(e){var t=be;return je(be.filter((function(t){return t._id!==e._id}))),Oe(),I.deleteCard(e._id).catch((function(e){je(t),console.log("Couldnt delete card on the server",e)}))}),[be,je]),me=Object(c.useCallback)((function(e){e.target===e.currentTarget&&Oe()}),[]),pe=Oe,he=Oe;!function(e){var t=Object(c.useRef)();Object(c.useEffect)((function(){t.current=e}),[e]),y("keydown",Object(c.useCallback)((function(e){"Escape"===e.key&&t.current()}),[]))}(Oe);var ve=Object(c.useCallback)((function(e){x(e),f(!0)}),[x,f]),xe=Object(c.useCallback)((function(){localStorage.token?(U.token=localStorage.token,U.getUserInfo().then((function(t){t&&(ve(t.email),e.replace(h))})).catch((function(e){f(!1),console.log(e)}))):f(!1)}),[ve,e,f]);return Object(c.useEffect)((function(){xe()}),[xe]),Object(R.jsxs)(z,{state:a,dispatch:r,children:[Object(R.jsx)(ye,{credential:_,onSignOut:function(){delete localStorage.token,f(!1),e.replace(m),window.scrollTo(0,0)},loggedIn:s}),Object(R.jsxs)(O.d,{children:[Object(R.jsxs)(O.b,{path:[p,m],children:[Object(R.jsx)(ge,{loggedIn:s,handleLogin:function(t,n,c){if(n&&c)return U.login(n,c).then((function(c){c.token&&(t.target.reset(),localStorage.token=c.token,ve(n),e.push(h))})).catch((function(e){ee(!0),console.log(e)}))},handleRegister:function(t,n,c){return U.register(n,c).then((function(){e.replace(m),ae(!0)})).catch((function(e){ae(!1),console.log(e)})).finally((function(){ee(!0)}))}}),Object(R.jsx)(et,{isOpen:$,isSuccess:ce,onClose:me})]}),Object(R.jsxs)(_e,{path:h,loggedIn:s,children:[Object(R.jsx)(De,{onEditProfile:function(){E(!0)},onAddPlace:function(){D(!0)},onEditAvatar:function(){B(!0)},cards:be,onCardClick:function(e){se(e),Q(!0)},onCardLike:function(e){return de.apply(this,arguments)},onCardDelete:function(e){se(e),K(!0)}}),Object(R.jsx)(Ke,{onUpdateUser:pe,isOpen:S,onClose:me}),Object(R.jsx)(Ge,{onAddPlace:function(e){var t=e.title,n=e.link,c=be;return je([{isTemporarilyLocal:!0,name:t,link:n}].concat(Object(b.a)(be))),Oe(),I.addCard(t,n).then((function(e){return je([e].concat(Object(b.a)(be)))})).catch((function(e){throw je(c),e}))},isOpen:L,onClose:me}),Object(R.jsx)(qe,{onUpdateAvatar:he,isOpen:M,onClose:me}),Object(R.jsx)(Ye,{card:ie,onCardDelete:fe,isOpen:W,onClose:me}),Object(R.jsx)(Xe,{card:ie,isOpen:Y,onClose:me})]})]}),Object(R.jsx)(Ue,{})]})},nt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(R.jsx)(tt,{})})}),document.getElementById("root")),nt()}},[[43,1,2]]]);
//# sourceMappingURL=main.f75695f6.chunk.js.map