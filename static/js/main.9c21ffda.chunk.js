(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"a":"Art Ginzburg","b":{"type":"git","url":"git+https://github.com/artginzburg/react-mesto-auth.git"}}')},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),o=n.n(r),i=n(9),s=(n(33),n(14)),u=n.n(s),l=n(2),d=n(22),b=n(18),j=n(3),m=n(4),h="nomoreparties.co",f="/login",p="/register",O="/",_={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},v={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},g={action:"\u0412\u044b\u0439\u0442\u0438"};function x(e,t){var n=Object(a.useState)(localStorage[e]?JSON.parse(localStorage[e]):t),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useCallback)((function(n){n.key===e&&o(n.newValue?JSON.parse(n.newValue):t)}),[e,t]),s=Object(a.useCallback)((function(t){localStorage[e]=JSON.stringify(t),o(t)}),[e]);return Object(a.useEffect)((function(){var e,t=["storage",i];return(e=window).addEventListener.apply(e,t),function(){var e;(e=window).removeEventListener.apply(e,t)}}),[i]),[r,s]}var C=n(11),k=n(12),S=n(21),y=n(20),N=function(){function e(t){Object(C.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject(e.status)},this._baseUrl=t.baseUrl,this._headers=t.headers,this._authFormat=""}return Object(k.a)(e,[{key:"_constructAuthorization",value:function(){this._headers=Object(l.a)(Object(l.a)({},this._headers),{},{authorization:this._authFormat+localStorage.token})}},{key:"_customFetch",value:function(e,t,n){var a,c={headers:null!==(a=this._headers)&&void 0!==a?a:{}};return t&&"GET"!==t&&(c.method=t,"DELETE"!==t&&(c.headers["Content-Type"]="application/json")),n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),c).then(this._handleFetch)}}]),e}(),E={url:new URL("https://mesto.".concat(h)),version:"v1",endpoints:{users:"users/me",cards:"cards"}},w=new(function(e){Object(S.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).editProfile=function(t){var n=t.name,a=t.about;return e._customFetch(E.endpoints.users,"PATCH",{name:n,about:a})},e.addCard=function(t,n){return e._customFetch(E.endpoints.cards,"POST",{name:t,link:n})},e.deleteCard=function(t){return e._customFetch("".concat(E.endpoints.cards,"/").concat(t),"DELETE")},e.changeLikeCardStatus=function(t,n){return e._customFetch("".concat(E.endpoints.cards,"/likes/").concat(t),n?"PUT":"DELETE")},e.updateAvatar=function(t){var n=t.avatar;return e._customFetch("".concat(E.endpoints.users,"/avatar"),"PATCH",{avatar:n})},e}return Object(k.a)(n,[{key:"getUserInfo",value:function(){return this._customFetch(E.endpoints.users)}},{key:"getInitialCards",value:function(){return this._customFetch(E.endpoints.cards)}}]),n}(N))({baseUrl:"".concat(E.url.origin,"/").concat(E.version,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),L={url:new URL("https://auth.".concat(h)),endpoints:{signup:"signup",signin:"signin",user:"users/me"}},T=new(function(e){Object(S.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e))._authFormat="Bearer ",a}return Object(k.a)(n,[{key:"register",value:function(e,t){return this._customFetch(L.endpoints.signup,"POST",{password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(L.endpoints.signin,"POST",{password:t,email:e})}},{key:"getUserInfo",value:function(){return this._constructAuthorization(),this._customFetch(L.endpoints.user).then((function(e){return e.data}))}}]),n}(N))({baseUrl:L.url.origin}),F=n(1),U={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"},A=c.a.createContext(),I=c.a.createContext();function P(e){var t=e.children,n=x("currentUser",U),a=Object(j.a)(n,2),r=a[0],o=a[1];return c.a.useEffect((function(){w.getUserInfo().then(o).catch((function(e){return console.log("Couldnt get user info from the server",e)}))}),[o]),Object(F.jsx)(A.Provider,{value:r,children:Object(F.jsx)(I.Provider,{value:o,children:t})})}function D(){var e=c.a.useContext(A);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function B(){var e=c.a.useContext(I);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function J(e,t){return JSON.stringify(e)===JSON.stringify(t)}function R(e,t,n,a){return q.apply(this,arguments)}function q(){return(q=Object(b.a)(u.a.mark((function e(t,n,a,c){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(l.a)(Object(l.a)({},n),a),t(r),e.prev=2,e.next=5,w[c](a);case 5:o=e.sent,J(r,o)||t(o),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(2),t(n),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var z=n(13),V=["onSubmit"],H=Object(a.memo)((function(e){var t=e.onSubmit,n=Object(z.a)(e,V),c=Object(a.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(F.jsx)("form",Object(l.a)(Object(l.a)({action:"#",onSubmit:c},n),{},{children:e.children}))})),M=["isFocused"],G="text",Y=!0,K=2,Q=Object(a.forwardRef)((function(e,t){var n,c,r,o=null!==t&&void 0!==t?t:Object(a.createRef)(),i=null!==(n=e.type)&&void 0!==n?n:G,s=null!==(c=e.required)&&void 0!==c?c:Y,u=i===G?K:null,d={type:i,minLength:null!==(r=e.minLength)&&void 0!==r?r:u,required:s,ref:o},b=e.isFocused,j=Object(z.a)(e,M);return Object(a.useEffect)((function(){b&&o&&o.current&&o.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){o&&o.current&&o.current.focus()}),50)}),[b,o]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("input",Object(l.a)(Object(l.a)({},j),{},{className:"form__input".concat(j.className?" ".concat(j.className):"")},d)),Object(F.jsx)("p",{className:"form__error",id:"".concat(e.id,"-error")})]})})),W={autoCorrect:"off",spellCheck:!1,className:"form__input_theme_dark"},X=Object(a.memo)((function(e){var t=Object(j.a)(e.states.email,2),n=t[0],a=t[1],c=Object(j.a)(e.states.password,2),r=c[0],o=c[1];return Object(F.jsxs)("div",{className:"auth",children:[Object(F.jsx)("h2",{className:"auth__title",children:e.title}),Object(F.jsxs)(H,{onSubmit:e.onSubmit,className:"form",children:[Object(F.jsx)(Q,Object(l.a)(Object(l.a)({},W),{},{autoFocus:!0,id:"email",name:"email",type:"email",placeholder:"Email",autoComplete:"email",value:n,onChange:function(e){a(e.target.value)}})),Object(F.jsx)(Q,Object(l.a)(Object(l.a)({},W),{},{id:e.passwordAutocomplete,name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:e.passwordAutocomplete,value:r,onChange:function(e){o(e.target.value)}})),Object(F.jsx)("button",{type:"submit",className:"auth__button form__button form__button_theme_dark",children:e.buttonTitle})]}),e.children]})})),Z=Object(m.g)(X),$={passwordAutocomplete:"current-password",title:_.title,buttonTitle:_.action},ee=Object(a.memo)((function(e){var t=Object(j.a)(e.states.email,2),n=t[0],a=t[1],c=Object(j.a)(e.states.password,2),r=c[0],o=c[1];return Object(F.jsx)(Z,Object(l.a)(Object(l.a)({onSubmit:function(){n&&r&&T.login(n,r).then((function(t){t.token&&(a(""),o(""),localStorage.token=t.token,e.handleLogin(n),e.history.push(O))})).catch((function(e){return console.log(e)}))}},e),$))})),te=Object(m.g)(ee),ne={passwordAutocomplete:"new-password",title:v.title,buttonTitle:v.action},ae=Object(a.memo)((function(e){var t=Object(j.a)(e.states.email,1)[0],n=Object(j.a)(e.states.password,1)[0];return Object(F.jsx)(Z,Object(l.a)(Object(l.a)(Object(l.a)({onSubmit:function(){T.register(t,n).then((function(t){400!==t.statusCode&&e.history.push(f)}))}},e),ne),{},{children:Object(F.jsxs)("div",{className:"auth__signin",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(F.jsx)(i.b,{to:f,className:"auth__login-link",children:_.action})]})}))})),ce=Object(m.g)(ae),re=Object(a.memo)((function(e){var t={email:Object(a.useState)(localStorage.email?atob(JSON.parse(localStorage.email)):""),password:Object(a.useState)("")};return e.location.pathname===f?Object(F.jsx)(te,{handleLogin:e.handleLogin,states:t}):Object(F.jsx)(ce,{states:t})})),oe=Object(m.g)(re),ie=function(e){return Object(F.jsx)(m.b,{children:e.loggedIn?e.children:Object(F.jsx)(m.a,{to:f})})},se=n(19),ue=se.b.url.split(".");ue.pop();for(var le=ue.join(".").split("+")[1],de=n.p+"static/media/logo.6fa47d29.svg",be=Object(a.memo)((function(e){var t,n=f,a=!1;switch(e.location.pathname){case f:t=v.title,n=p;break;case p:t=_.action;break;default:t=g.action,a=!0}return Object(F.jsxs)("header",{className:"header",children:[Object(F.jsx)("a",{target:"_self",href:le,className:"logo header__logo",children:Object(F.jsx)("img",{className:"logo__img",alt:"Mesto",src:de})}),Object(F.jsxs)("div",{className:"header__container",children:[a&&e.credential?Object(F.jsx)("p",{className:"header__credential",children:e.credential}):null,Object(F.jsx)(i.b,{to:n,onClick:a?function(){delete localStorage.token,e.history.push(f)}:null,className:"header__action-button".concat(a?" header__action-button_dimmed":""),children:t})]})]})})),je=Object(m.g)(be),me="element__trash-button",he="element__like-button",fe=Object(a.memo)((function(e){var t,n=e.card;n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var a=D();n.isTemporarilyLocal&&(n.owner=a);var c=[me];if(n.owner._id===a._id){var r="".concat(me,"_visible");c.push(r)}var o=c.join(" "),i=[he];if(n.likes.some((function(e){return e._id===a._id}))){var s="".concat(he,"_active");i.push(s)}var u=i.join(" ");return Object(F.jsxs)("li",{className:"element",children:[Object(F.jsx)("img",{onClick:function(){e.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),Object(F.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardDelete(n)},type:"reset",className:o}),Object(F.jsxs)("div",{className:"element__container",children:[Object(F.jsx)("h2",{className:"element__title",children:n.name}),Object(F.jsxs)("div",{className:"element__likes",children:[Object(F.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardLike(n)},type:"button",className:u}),Object(F.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]})})),pe={isTemporarilyLocal:!0,name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."},Oe=[],_e=0;_e<30;_e++)Oe.push(pe);var ve=Object(a.memo)((function(e){var t=D(),n=Object(a.useMemo)((function(){return e.cards.length?e.cards:Oe}),[e.cards]);return Object(F.jsxs)("main",{className:"content",children:[Object(F.jsxs)("section",{className:"profile",children:[Object(F.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(F.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(F.jsxs)("div",{className:"profile__info",children:[Object(F.jsx)("h1",{className:"profile__name",children:t.name}),Object(F.jsx)("p",{className:"profile__description",children:t.about}),Object(F.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(F.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(F.jsx)("section",{className:"elements",children:Object(F.jsx)("ul",{className:"elements__list",children:n.map((function(t){var n;return Object(F.jsx)(fe,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})})),ge=le.split("/");ge.pop();var xe=ge.join("/"),Ce=(new Date).getFullYear(),ke=Object(a.memo)((function(){return Object(F.jsx)("footer",{className:"footer",children:Object(F.jsxs)("a",{target:"_blank",rel:"noreferrer",href:xe,className:"footer__copyright",children:["\xa9 ",Ce," ",se.a]})})})),Se="popup__close-button",ye={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"},Ne=function(){function e(t,n){var a=this;Object(C.a)(this,e),this._showInputError=function(e,t){var n=a._element.querySelector("#".concat(e.id,"-error"));e.classList.add(a._data.inputErrorClass),n.textContent=t,n.classList.add(a._data.errorClass)},this._hideInputError=function(e){var t=a._element.querySelector("#".concat(e.id,"-error"));e.classList.remove(a._data.inputErrorClass),t.classList.remove(a._data.errorClass),t.textContent=""},this._resetFormErrors=function(){a._inputList.forEach((function(e){return a._hideInputError(e)})),a._toggleButtonState(1)},this._checkInputValidity=function(e){return e.validity.valid?a._hideInputError(e):a._showInputError(e,e.validationMessage)},this._hasInvalidInput=function(e){return e.some((function(e){return!e.validity.valid}))},this._toggleButtonState=function(e){return a._buttonElement.disabled=e||a._hasInvalidInput(a._inputList)},this._validationHandler=function(e){a._checkInputValidity(e),a._toggleButtonState()},this._setListeners=function(){a._element.addEventListener("reset",a._resetFormErrors),a._inputList.forEach((function(e){e.value&&a._validationHandler(e),e.addEventListener("input",(function(){return a._validationHandler(e)}))}))},this._data=t,this._element=n,this._inputList=Array.from(this._element.querySelectorAll(this._data.inputSelector)),this._buttonElement=this._element.querySelector(this._data.submitButtonSelector)}return Object(k.a)(e,[{key:"enableValidation",value:function(){this._toggleButtonState(),this._setListeners()}}]),e}();var Ee={className:"popup",classNameClosed:"",isOpened:!1};Ee.classNameOpened="".concat(Ee.className,"_opened");var we=Object(a.memo)((function(e){var t=Object(a.useState)(Ee.classNameClosed),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(Ee.isOpened),i=Object(j.a)(o,2),s=i[0],u=i[1];if(Object(a.useEffect)((function(){if(e.isOpen||document.activeElement.blur(),e.isOpen){u(!Ee.isOpened);var t=setTimeout((function(){r(Ee.classNameOpened)}),10);return function(){return clearTimeout(t)}}r(Ee.classNameClosed);var n=setTimeout((function(){u(Ee.isOpened)}),300);return function(){return clearTimeout(n)}}),[e.isOpen]),!s)return null;var l=[Ee.className,e.className,c].filter((function(e){return null!=e&&""!==e})).join(" ");return Object(F.jsx)("section",{onClick:e.onClick,className:l,id:e.id,children:e.children})})),Le=["onSubmit","children"],Te=Object(a.memo)((function(e){var t,n=e,c=n.onSubmit,r=n.children,o=Object(z.a)(n,Le),i=null!==(t=(e=o).buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",s=Object(a.useCallback)((function(e){c&&c(e),r&&e.target.reset()}),[r,c]),u=e.name;return Object(a.useEffect)((function(){if(e.isOpen){var t=setTimeout((function(){var e;e=document.getElementById(u).querySelector(ye.formSelector),new Ne(ye,e).enableValidation()}),1);return function(){return clearTimeout(t)}}}),[u,e.isOpen]),Object(F.jsx)(we,{isOpen:e.isOpen,onClick:e.onClose,id:u,children:Object(F.jsxs)("div",{className:"popup__container",children:[Object(F.jsx)("button",{type:"reset",className:Se}),Object(F.jsx)("h2",{className:"popup__title",children:e.title}),Object(F.jsxs)(H,{className:"form",onSubmit:s,onReset:e.onReset,children:[r,Object(F.jsx)("button",{type:"submit",className:"popup__button form__button",children:i})]})]})})})),Fe=Object(a.memo)((function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),s=i[0],u=i[1],d=D(),b=B();return Object(a.useEffect)((function(){r(d.name),u(d.about)}),[d]),Object(F.jsxs)(Te,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){R(b,d,{name:c,about:s},"editProfile"),e.onUpdateUser()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",children:[Object(F.jsx)(Q,{isFocused:e.isOpen,value:c,onChange:function(e){r(e.target.value)},autoComplete:"name",autoCapitalize:"words",name:"name",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40"}),Object(F.jsx)(Q,{value:s,onChange:function(e){u(e.target.value)},name:"about",id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200"})]}))})),Ue=Object(a.memo)((function(e){var t=Object(a.useRef)(),n=D(),c=B();return Object(F.jsx)(Te,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){R(c,n,{avatar:t.current.value},"updateAvatar"),e.onUpdateAvatar()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor",children:Object(F.jsx)(Q,{isFocused:e.isOpen,ref:t,type:"url",name:"avatar",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})}))})),Ae="",Ie="",Pe=Object(a.memo)((function(e){var t=Object(a.useState)(Ae),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(Ie),i=Object(j.a)(o,2),s=i[0],u=i[1];return Object(F.jsxs)(Te,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){e.onAddPlace(c,s)},onReset:function(){r(Ae),u(Ie)},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(F.jsx)(Q,{isFocused:e.isOpen,value:c,onChange:function(e){r(e.target.value)},name:"title",id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30"}),Object(F.jsx)(Q,{value:s,onChange:function(e){u(e.target.value)},type:"url",name:"link",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]}))})),De=Object(a.memo)((function(e){return Object(F.jsx)(Te,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(){e.onCardDelete(e.card)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))})),Be=[Se,"".concat(Se,"_parent-corners_straight")].join(" "),Je=Object(a.memo)((function(e){var t=e.card;return Object(F.jsx)(we,{isOpen:e.isOpen,onClick:e.onClose,className:"popup_type_image",id:"image-viewer",children:Object(F.jsxs)("figure",{className:"popup__figure",children:[Object(F.jsx)("button",{type:"button",className:Be}),Object(F.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(F.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})}));var Re=Object(m.g)((function(e){var t=D(),n=c.a.useState(!!localStorage.token),r=Object(j.a)(n,2),o=r[0],i=r[1],s=function(e,t){var n=x(e,t),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useCallback)((function(e){o(btoa(e))}),[o]),s=Object(a.useRef)(atob(r));return Object(a.useEffect)((function(){s.current=atob(r)})),[s.current,i]}("email",""),h=Object(j.a)(s,2),_=h[0],v=h[1],g=c.a.useState(!1),C=Object(j.a)(g,2),k=C[0],S=C[1],y=c.a.useState(!1),N=Object(j.a)(y,2),E=N[0],L=N[1],U=c.a.useState(!1),A=Object(j.a)(U,2),I=A[0],P=A[1],B=c.a.useState(!1),J=Object(j.a)(B,2),R=J[0],q=J[1],z=c.a.useState(!1),V=Object(j.a)(z,2),H=V[0],M=V[1],G=c.a.useState({}),Y=Object(j.a)(G,2),K=Y[0],Q=Y[1],W=x("cards",[]),X=Object(j.a)(W,2),Z=X[0],$=X[1];function ee(){return(ee=Object(b.a)(u.a.mark((function e(n){var a,c,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Z,c=n.likes.some((function(e){return e._id===t._id})),r=c?n.likes.filter((function(e){return e._id!==t._id})):[].concat(Object(d.a)(n.likes),[t]),o=Object(l.a)(Object(l.a)({},n),{},{likes:r}),$(Z.map((function(e){return e._id===n._id?o:e}))),e.prev=5,e.next=8,w.changeLikeCardStatus(n._id,!c);case 8:i=e.sent,$(Z.map((function(e){return e._id===n._id?i:e}))),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),$(a),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function te(){P(!1),S(!1),L(!1),q(!1),M(!1)}c.a.useEffect((function(){w.getInitialCards().then($).catch((function(e){return console.log("Couldnt get initial cards from the server",e)}))}),[$]);var ne=c.a.useCallback((function(e){var t=Z;$(Z.filter((function(t){return t._id!==e._id}))),w.deleteCard(e._id).catch((function(e){throw $(t),e})),te()}),[Z,$]),ae=c.a.useCallback((function(e){e.target===e.currentTarget&&te()}),[]),ce=te,re=te,se=c.a.useCallback((function(e){"Escape"===e.key&&te()}),[]);c.a.useEffect((function(){var e,t=["keydown",se,!1];return(e=document).addEventListener.apply(e,t),function(){var e;return(e=document).removeEventListener.apply(e,t)}}),[se]);var ue=c.a.useCallback((function(e){v(e),i(!0)}),[v]),le=c.a.useCallback((function(){localStorage.token&&(T.token=localStorage.token,T.getUserInfo().then((function(t){t&&(ue(t.email),e.history.push(O))})).catch((function(e){i(!1),console.log(e)})))}),[ue,e.history]);return c.a.useEffect((function(){le()}),[le]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(je,{credential:_}),Object(F.jsxs)(m.d,{children:[Object(F.jsx)(m.b,{path:[p,f],children:Object(F.jsx)(oe,{handleLogin:ue})}),Object(F.jsxs)(ie,{path:O,loggedIn:o,children:[Object(F.jsx)(ve,{onEditProfile:function(){S(!0)},onAddPlace:function(){L(!0)},onEditAvatar:function(){P(!0)},cards:Z,onCardClick:function(e){Q(e),M(!0)},onCardLike:function(e){return ee.apply(this,arguments)},onCardDelete:function(e){Q(e),q(!0)}}),Object(F.jsx)(Fe,{onUpdateUser:ce,isOpen:k,onClose:ae}),Object(F.jsx)(Pe,{onAddPlace:function(e,t){var n=Z;$([{isTemporarilyLocal:!0,name:e,link:t}].concat(Object(d.a)(Z))),w.addCard(e,t).then((function(e){return $([e].concat(Object(d.a)(Z)))})).catch((function(){return $(n)})),te()},isOpen:E,onClose:ae}),Object(F.jsx)(Ue,{onUpdateAvatar:re,isOpen:I,onClose:ae}),Object(F.jsx)(De,{card:K,onCardDelete:ne,isOpen:R,onClose:ae}),Object(F.jsx)(Je,{card:K,isOpen:H,onClose:ae})]})]}),Object(F.jsx)(ke,{})]})})),qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(F.jsx)(P,{children:Object(F.jsx)(Re,{})})})}),document.getElementById("root")),qe()}},[[44,1,2]]]);
//# sourceMappingURL=main.9c21ffda.chunk.js.map