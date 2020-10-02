(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(15),a(9)),i=a(1),s=r.a.createContext();var u=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,o=r.a.useContext(s),l=t.owner._id===o._id,i=t.likes.some((function(e){return e._id===o._id})),u="element__btn_delete ".concat(l&&"element__btn_delete_active"),m="element__btn_like ".concat(i&&"element__btn_like_active");return r.a.createElement("div",{className:"element"},r.a.createElement("button",{className:u,onClick:function(){c(t)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),r.a.createElement("img",{src:t.link,onClick:function(){a(t)},className:"element__img",alt:t.link}),r.a.createElement("div",{className:"element__description"},r.a.createElement("h2",{className:"element__name"},t.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{className:m,onClick:function(){n(t)},type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"}),r.a.createElement("span",{className:"element__like_counter"},t.likes.length>0?"".concat(t.likes.length):"0"))))};var m=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onCardDelete,c=e.onAddPlace,o=e.cards,l=e.onCardClick,i=e.onCardLike,m=r.a.useContext(s);return r.a.createElement("main",null,r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__image"},r.a.createElement("img",{alt:"",style:{backgroundImage:"url(".concat(m.avatar,")")},className:"profile__avatar"}),r.a.createElement("button",{onClick:t,className:"profile__avatar_change",type:"button"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__edit-form"},r.a.createElement("h1",{className:"profile__name"},m.name),r.a.createElement("button",{onClick:a,className:"profile__edit-btn",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})),r.a.createElement("p",{className:"profile__description"},m.about)),r.a.createElement("button",{onClick:c,className:"profile__add-btn",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})),r.a.createElement("section",{className:"elements"},r.a.createElement("ul",{className:"elements__list"},o.map((function(e){return r.a.createElement(u,{key:e._id,card:e,onCardClick:l,onCardLike:i,onCardDelete:n})})))))},p=a(6),_=a.n(p);var d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:_.a,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"}))};var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u0410\u0440\u0442\u0451\u043c \u0410\u043a\u0441\u0451\u043d\u043e\u0432"))};var h=function(e){var t=e.card,a=e.isClose;return r.a.createElement("section",{className:"popup popup_image ".concat(t&&"popup_opened")},r.a.createElement("figure",{className:"popup__image_container"},r.a.createElement("button",{onClick:a,className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),r.a.createElement("img",{src:"".concat(t.link),alt:"",className:"popup__preview"}),r.a.createElement("figcaption",{className:"popup__image-title"},t.name)))};var b=function(e){var t=e.name,a=e.title,n=e.isOpen,c=e.onClose,o=e.children,l=e.onSubmit;return e.submitTitle,r.a.createElement("section",{className:"popup ".concat(n&&"popup_opened")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{onClick:c,className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),r.a.createElement("h3",{className:"popup__title"},a),r.a.createElement("form",{className:"popup__form popup__form_edit",name:t,method:"POST",onSubmit:l,action:"#",noValidate:!0},o)))};var E=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,c=r.a.useRef(""),o=r.a.useRef("");return r.a.useEffect((function(){c.current.value="",o.current.value=""}),[t]),r.a.createElement(b,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"form-add",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:c.current.value,link:o.current.value})}},r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{ref:c,id:"title-input",type:"text",className:"popup__input popup__input_type_place",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),r.a.createElement("span",{id:"title-input-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{ref:o,id:"url-input",type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{id:"url-input-error",className:"popup__error"})),r.a.createElement("button",{className:"popup__button",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))},v=a(7),g=a(8),N=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(v.a)(this,e),this._baseUrl=a,this._headers=n}return Object(g.a)(e,[{key:"getServerData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"_getStatus",value:function(e){return e.ok?e.json():Promise.reject("Error! : ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getStatus)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getStatus)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getStatus)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getStatus)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._getStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getStatus)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"c7ea0259-f390-4c4a-ac25-c955c79b8ace","Content-Type":"application/json"}});var C=function(e){var t=e.onUpdateAvatar,a=e.isOpen,n=e.onClose,c=e.isLoading,o=r.a.useRef("");return r.a.useEffect((function(){o.current.value=""}),[a]),r.a.createElement(b,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),t({avatar:o.current.value})},isLoading:c},r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{ref:o,id:"avatar-input",type:"url",className:"popup__input popup__input_type_avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0}),r.a.createElement("span",{id:"avatar-input-error",className:"popup__error"})),r.a.createElement("button",{className:"popup__button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var k=function(e){var t=e.onUpdateProfile,a=e.isOpen,n=e.onClose,c=e.isLoading,o=r.a.useContext(s),l=r.a.useState(""),u=Object(i.a)(l,2),m=u[0],p=u[1],_=r.a.useState(""),d=Object(i.a)(_,2),f=d[0],h=d[1];return r.a.useEffect((function(){p(o.name),h(o.about)}),[o]),r.a.createElement(b,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"form-profile",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),t({name:m,about:f})},isLoading:c},r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{onChange:function(e){p(e.target.value)},id:"name-input",type:"text",className:"popup__input popup__input_type_name",value:m||"",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{id:"name-input-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{onChange:function(e){h(e.target.value)},id:"about-input",type:"text",className:"popup__input popup__input_type_description",value:f||"",name:"about",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{id:"about-input-error",className:"popup__error"})),r.a.createElement("button",{className:"popup__button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var y=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),o=Object(i.a)(c,2),u=o[0],p=o[1],_=r.a.useState(!1),v=Object(i.a)(_,2),g=v[0],y=v[1],S=r.a.useState(""),O=Object(i.a)(S,2),U=O[0],L=O[1],P=r.a.useState({}),j=Object(i.a)(P,2),x=j[0],A=j[1],D=r.a.useState([]),T=Object(i.a)(D,2),I=T[0],q=T[1];function w(){n(!1),p(!1),y(!1),L("")}return r.a.useEffect((function(){N.getServerData().then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];A(a),q(n)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(s.Provider,{value:x},r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"page"},r.a.createElement(d,null),r.a.createElement(m,{onEditProfile:function(){n(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){L(e)},cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===x._id}));N.likeCard(e._id,!t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));q(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){N.deleteCard(e._id).then((function(){var t=I.filter((function(t){return t._id!==e._id}));q(t)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(f,null),r.a.createElement(k,{isOpen:a,onClose:w,onUpdateProfile:function(e){N.setUserInfo(e).then((function(e){A(e),w()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(E,{isOpen:u,onClose:w,onAddPlace:function(e){N.createCard(e).then((function(e){q([e].concat(Object(l.a)(I))),w()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(C,{isOpen:g,onClose:w,onUpdateAvatar:function(e){N.changeAvatar(e).then((function(e){A(e),w()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(b,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"form-confirm",onClose:w}),r.a.createElement(h,{card:U,isClose:w}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/header__logo.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.25ab48c0.chunk.js.map