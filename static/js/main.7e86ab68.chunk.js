(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{35:function(e,t,n){},54:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(26),r=n.n(s),i=n(2),o=n.n(i),u=n(6),l=n(3),h=(n(35),n(5)),d=n.n(h),j=n(10),m=n(4),b=(n(54),n(0));function f(){var e=Object(m.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),h=i[0],f=i[1],p=Object(a.useState)(!1),O=Object(l.a)(p,2),x=O[0],v=O[1],g=Object(a.useState)(!1),N=Object(l.a)(g,2),I=N[0],C=N[1],L=Object(a.useState)(!1),w=Object(l.a)(L,2),k=w[0],S=w[1],T=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://main.psblues.site/auth/duplicate",{method:"POST",headers:{"Content-Type":"application/json"},data:{username:t}}).then((function(e){C(!e.data.data),S(e.data.data)})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(a.useState)(""),E=Object(l.a)(y,2),R=E[0],B=E[1],A=Object(a.useState)(!1),M=Object(l.a)(A,2),F=M[0],D=M[1],P=Object(a.useState)(!1),q=Object(l.a)(P,2),W=q[0],_=q[1],H=Object(a.useState)(""),z=Object(l.a)(H,2),K=z[0],J=z[1],U=Object(a.useState)(!1),G=Object(l.a)(U,2),V=G[0],Q=G[1],X=Object(a.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),f(""===c),D(""===R),Q(""===K),$(K!==R),h||x||!k||F||W||V||Z){t.next=8;break}return t.next=8,d()("https://main.psblues.site/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},data:{username:c,password:R}}).then((function(t){alert("\ud658\uc601\ud569\ub2c8\ub2e4."),e.push("/")})).catch((function(e){console.log(e.response)}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"SignupContainer",children:[Object(b.jsx)("h1",{className:"Signuptitle",children:"\ud68c\uc6d0\uac00\uc785"}),Object(b.jsxs)("form",{className:"SignupForm",children:[Object(b.jsxs)("div",{className:"SignupUserId",children:[Object(b.jsx)("label",{children:"\uc544\uc774\ub514"}),Object(b.jsx)("input",{type:"text",placeholder:"\uc0ac\uc6a9\ud560 \uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,autoFocus:!0,value:c,minLength:"2",maxLength:"20",onChange:function(e){s(e.target.value)},onBlur:function(){f(""===c),v(0!==c.length&&c.length<2),c.length>=2?T(c):(C(!1),S(!1))}}),h&&Object(b.jsx)("div",{className:"Warning",children:"\ud544\uc218 \uc815\ubcf4\uc785\ub2c8\ub2e4."}),x&&Object(b.jsx)("div",{className:"Warning",children:"2~20\uc790\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."}),I&&Object(b.jsx)("div",{className:"Warning",children:"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc544\uc774\ub514\uc785\ub2c8\ub2e4."}),k&&Object(b.jsx)("div",{className:"Success",children:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc544\uc774\ub514\uc785\ub2c8\ub2e4."})]}),Object(b.jsxs)("div",{className:"SignupUserPw",children:[Object(b.jsx)("label",{children:"\ube44\ubc00\ubc88\ud638"}),Object(b.jsx)("input",{type:"password",placeholder:"\uc0ac\uc6a9\ud560 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,value:R,minLength:"4",maxLength:"16",onChange:function(e){B(e.target.value)},onBlur:function(){D(""===R),_(0!==R.length&&R.length<4)}}),F&&Object(b.jsx)("div",{className:"Warning",children:"\ud544\uc218 \uc815\ubcf4\uc785\ub2c8\ub2e4."}),W&&Object(b.jsx)("div",{className:"Warning",children:"4~16\uc790\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(b.jsx)("label",{children:"\ube44\ubc00\ubc88\ud638 \uc7ac\ud655\uc778"}),Object(b.jsx)("input",{type:"password",placeholder:"\uc0ac\uc6a9\ud560 \ube44\ubc00\ubc88\ud638\ub97c \uc7ac\uc785\ub825\ud558\uc138\uc694",required:!0,value:K,minLength:"4",maxLength:"16",onChange:function(e){J(e.target.value)},onBlur:function(){Q(""===K),$(K!==R),ae(K===R),""===K&&($(!1),ae(!1))}}),V&&Object(b.jsx)("div",{className:"Warning",children:"\ud544\uc218 \uc815\ubcf4\uc785\ub2c8\ub2e4."}),Z&&Object(b.jsx)("div",{className:"Warning",children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),ne&&Object(b.jsx)("div",{className:"Success",children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud569\ub2c8\ub2e4."})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"SignupBtn",type:"submit",onClick:ce,children:"\ud68c\uc6d0\uac00\uc785"})})]}),Object(b.jsx)(j.b,{to:"/",className:"toLoginBtn",children:"\ub85c\uadf8\uc778"})]})}n(64);function p(e){var t=e.refreshLogin,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),h=Object(l.a)(i,2),m=h[0],f=h[1],p=Object(a.useState)(!1),O=Object(l.a)(p,2),x=O[0],v=O[1],g=Object(a.useState)(!1),N=Object(l.a)(g,2),I=N[0],C=N[1],L=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://main.psblues.site/login",{method:"POST",headers:{"Content-Type":"application/json"},data:{username:s,password:m}}).then((function(e){var n=e.data;t(n),d.a.defaults.headers.common.Authorization="".concat(n.jwtToken)})).catch((function(e){console.log(e),v(!1),C(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"loginContainer",children:[Object(b.jsx)("h1",{className:"title",children:"AllChat"}),Object(b.jsxs)("form",{className:"loginForm",children:[Object(b.jsx)("input",{type:"text",className:"loginInput",placeholder:"ID",required:!0,autoFocus:!0,value:s,onChange:function(e){r(e.target.value),v(!1)}}),Object(b.jsx)("input",{type:"password",className:"loginInput",placeholder:"Password",required:!0,value:m,onChange:function(e){f(e.target.value),v(!1)}}),x&&Object(b.jsx)("div",{className:"Warning",children:"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),I&&Object(b.jsxs)("div",{className:"Warning",children:["\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc798\ubabb \uc785\ub825 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"\uc544\uc774\ub514"}),"\uc640 ",Object(b.jsx)("b",{children:"\ube44\ubc00\ubc88\ud638"}),"\ub97c \uc815\ud655\ud788 \uc785\ub825\ud574 \uc8fc\uc138\uc694."]}),Object(b.jsx)("button",{className:"loginBtn",type:"submit",onClick:function(e){e.preventDefault(),""===s||""===m?(v(!s||!m),C(!1)):L()},children:"\ub85c\uadf8\uc778"}),Object(b.jsxs)("a",{className:"KakaoLoginBtn",href:"https://kauth.kakao.com/oauth/authorize?client_id=3e716bc2780a7b5fe1da319c4487c6f9&redirect_uri=https://jseo9732.github.io/allchat-front/kakaologin&response_type=code",children:[Object(b.jsx)("i",{className:"fas fa-comment"}),Object(b.jsx)("div",{children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778"})]})]}),Object(b.jsx)(j.b,{to:"/signup",className:"toSignupBtn",children:"\ud68c\uc6d0\uac00\uc785"})]})}n(65);function O(e){var t=e.refreshLogin,n=new URL(window.location.href).searchParams.get("code"),c=Object(m.f)();return Object(a.useEffect)((function(){console.log(n);var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://main.psblues.site/login/kakao?code=".concat(n),{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(e){var n=e.data.data;t(n),d.a.defaults.headers.common.Authorization="".concat(n.jwtToken),c.replace("/")})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{className:"KakaoLoginContainer",children:Object(b.jsx)("div",{className:"KakaoLogin",children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778 \uc911\uc785\ub2c8\ub2e4."})})}n(66),n(67);function x(){var e=Object(m.f)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(b.jsx)("i",{className:c?"fas fa-comment-medical addChatIcon active":"fas fa-comment-medical addChatIcon",onClick:function(){e.push("/addChatRoom")},onMouseOver:function(){s(!0)},onMouseOut:function(){s(!1)}})}n(68);function v(e){var t=e.chatRoomId,n=e.masterId,a=e.participantCount,c=e.participantState,s=e.title,r=e.userId,i=e.jwtToken,l=e.refreshAllList,h=e.refreshEnterList,m=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://main.psblues.site/joins",{method:"POST",data:{userId:r,chatRoomId:t}}).then((function(e){l(),h(),d.a.get("https://main.psblues.site/chatrooms/".concat(t,"/joins/time?userId=").concat(r)).then((function(e){f(e.data.data.username)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://chatting.psblues.site/chats/notifications",{method:"POST",data:{participant:n,roomId:t,join:!0}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(j.b,{to:c?{pathname:"/chatRoom/".concat(t),state:{chatRoomId:t,masterId:n,participantCount:a,title:s,userId:r,jwtToken:i},refreshAllList:l,refreshEnterList:h}:"",className:"chatContainer",children:[Object(b.jsx)("div",{className:"chatNum",children:a}),Object(b.jsx)("div",{className:"chatTitle",children:s}),!c&&Object(b.jsx)("button",{className:"enterBtn",onClick:m,children:"\ucc38\uc5ec"})]})}n(69);function g(e){var t=e.refreshAllList,n=e.refreshEnterList,c=Object(a.useState)(!1),s=Object(l.a)(c,2),r=s[0],i=s[1],o=function(){i(document.getElementById("slider").scrollLeft>200)};Object(a.useEffect)((function(){document.getElementById("slider").addEventListener("scroll",o)}),[]);return Object(b.jsxs)("div",{className:"toggleBtnContainer",children:[Object(b.jsxs)("div",{className:"allChatBtn",onClick:function(){t(),document.getElementById("slider").scrollBy({top:0,left:-410,behavior:"smooth"})},children:[r?Object(b.jsx)("i",{className:"far fa-comment ChatBtnImg"}):Object(b.jsx)("i",{className:"fas fa-comment ChatBtnImg"}),Object(b.jsx)("div",{children:"\uc804\uccb4 \ucc44\ud305"})]}),Object(b.jsxs)("div",{className:"enterChatBtn",onClick:function(){n(),document.getElementById("slider").scrollBy({top:0,left:410,behavior:"smooth"})},children:[r?Object(b.jsx)("i",{className:"fas fa-comments ChatBtnImg"}):Object(b.jsx)("i",{className:"far fa-comments ChatBtnImg"}),Object(b.jsx)("div",{children:"\ucc38\uc5ec \ucc44\ud305"})]})]})}function N(e){var t=e.userObj,n=t.userId,c=t.jwtToken,s=e.allList,r=e.refreshAllList,i=e.enterList,o=e.refreshEnterList;return Object(a.useEffect)((function(){r(),o()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"chatListContainer",children:[Object(b.jsxs)("div",{className:"TitleContainer",children:[Object(b.jsx)(j.b,{to:"/",className:"chatListTitle",onClick:function(){r(),o()},children:"\ucc44\ud305"}),Object(b.jsx)(x,{})]}),Object(b.jsxs)("div",{id:"slider",className:"rowChatListContainer",children:[Object(b.jsx)("div",{className:"allchatList",children:s.map((function(e){return Object(b.jsx)(v,{chatRoomId:e.chatRoomId,masterId:e.masterId,participantCount:e.participantCount,participantState:e.participantState,title:e.title,userId:n,jwtToken:c,refreshAllList:r,refreshEnterList:o},e.chatRoomId)}))}),Object(b.jsx)("div",{className:"enterchatList",children:i.map((function(e){return Object(b.jsx)(v,{chatRoomId:e.chatRoomId,masterId:e.masterId,participantCount:e.participantCount,participantState:e.participantState,title:e.title,userId:n,jwtToken:c,refreshAllList:r,refreshEnterList:o},e.chatRoomId)}))})]}),Object(b.jsx)(g,{refreshAllList:r,refreshEnterList:o})]})})}n(70);function I(e){e.userObj;var t=e.refreshLogin,n=e.refreshAllList,c=e.refreshEnterList;return Object(a.useEffect)((function(){n(),c()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"homeContainer",children:[Object(b.jsx)("button",{className:"LogoutBtn",onClick:function(){t(null)},children:"\ub85c\uadf8\uc544\uc6c3"}),Object(b.jsx)("div",{className:"homeTitle",children:"AllChat"})]})})}n(71);function C(e){var t=e.userObj,n=e.refreshAllList,a=e.refreshEnterList,c=Object(m.f)(),s=function(){var e=Object(u.a)(o.a.mark((function e(s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),d()("https://main.psblues.site/chatrooms",{method:"POST",data:{masterId:t.userId,title:s.target.chatRoomTitle.value}}).then((function(){n(),a(),c.push("/")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"AddChatRoomContainer",children:[Object(b.jsxs)("div",{className:"AddChatRoomTopBar",children:[Object(b.jsx)("div",{className:"AddChatRoomImgContainer",children:Object(b.jsx)("i",{className:"fas fa-chevron-left AddChatRoomImg",onClick:function(){n(),a(),c.push("/")}})}),Object(b.jsx)("div",{className:"AddChatRoomTitle",children:"\uc0c8\ub85c\uc6b4 \ucc44\ud305"})]}),Object(b.jsxs)("form",{className:"AddChatRoomForm",onSubmit:s,children:[Object(b.jsx)("input",{name:"chatRoomTitle",className:"AddChatRoomInput",type:"text",placeholder:"\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",required:!0}),Object(b.jsx)("input",{className:"AddChatRoomBtn",type:"submit",value:"\ub9cc\ub4e4\uae30"})]})]})})}var L=n(29);n(72);function w(e){var t=e.chatRoomId,n=e.userId,c=e.jwtToken,s=void 0,r=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://main.psblues.site/chatrooms/".concat(t,"/joins/time?userId=").concat(n)).then((function(e){i(e.data.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){s=new L.EventSourcePolyfill("https://chatting.psblues.site/chatRooms/".concat(t,"/chats?username=").concat(e.username,"&joinDateTime=").concat(e.joinDateTime),{headers:{Authorization:c}}),l(s,e)},l=function(e,t){e.onmessage=function(e){var n=JSON.parse(e.data);null===n.sender?h(n):n.sender===t.username?j(n):m(n)}},h=function(e){var t=document.querySelector("#chat-box"),n=document.createElement("div");n.className="NotiBox",n.innerHTML=f(e),t.appendChild(n),document.getElementById("chat-box").scrollTop=document.getElementById("chat-box").scrollHeight},j=function(e){var t=document.querySelector("#chat-box"),n=document.createElement("div");n.className="sent_box",n.innerHTML=p(e),t.appendChild(n),document.getElementById("chat-box").scrollTop=document.getElementById("chat-box").scrollHeight},m=function(e){var t=document.querySelector("#chat-box"),n=document.createElement("div");n.className="received_box",n.innerHTML=O(e),t.appendChild(n),document.getElementById("chat-box").scrollTop=document.getElementById("chat-box").scrollHeight},f=function(e){return"<p>".concat(e.msg,"</p>")},p=function(e){var t=e.createDateTime.substring(5,10)+" | "+e.createDateTime.substring(11,16);return'<div class="sent_msg">\n              <p>'.concat(e.msg,'</p>\n              <span class="date_time">').concat(t,"</span>\n            </div>")},O=function(e){var t=e.createDateTime.substring(5,10)+" | "+e.createDateTime.substring(11,16);return'<div class="received_msg">\n              <b>'.concat(e.sender,"</b>\n              <p>").concat(e.msg,'</p>\n              <span class="date_time">').concat(t,"</span>\n            </div>")};return Object(a.useEffect)((function(){return r(),function(){s.close()}}),[t]),Object(b.jsx)("div",{className:"chatContents",children:Object(b.jsx)("div",{id:"chat-box"})})}n(73);function k(e){var t=e.chatRoomId,n=e.userId,c=Object(a.useState)(""),s=Object(l.a)(c,2),r=s[0],i=s[1],h=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d()("https://chatting.psblues.site/chats",{method:"POST",data:{msg:r,sender:f.username,roomId:t}}).then((function(e){i("")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=Object(a.useState)([]),m=Object(l.a)(j,2),f=m[0],p=m[1];return Object(a.useEffect)((function(){d.a.get("https://main.psblues.site/chatrooms/".concat(t,"/joins/time?userId=").concat(n)).then((function(e){p(e.data.data)}))}),[t]),Object(b.jsx)("div",{className:"chatInputContainer",children:Object(b.jsxs)("form",{className:"chatInputForm",onSubmit:h,children:[Object(b.jsx)("textarea",{name:"chatValue",id:"chatValue",className:"chatInput",type:"text",autoFocus:!0,value:r,onChange:function(e){i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&h(e)}}),Object(b.jsx)("button",{id:"submitBtn",className:"inputBtn",type:"submit",children:"\uc804\uc1a1"})]})})}n(74);function S(e){var t=e.showSideMenu,n=e.chatRoomId,c=e.userId,s=(e.jwtToken,e.isMaster),r=e.refreshAllList,i=e.refreshEnterList,h=Object(m.f)(),j=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==window.confirm("\ucc44\ud305\ubc29\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=3;break}return e.next=3,d()("https://main.psblues.site/chatrooms/".concat(n),{method:"DELETE"}).then((function(e){r(),i(),h.push("/")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==window.confirm("\ucc44\ud305\ubc29\uc744 \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=3;break}return e.next=3,d()("https://main.psblues.site/joins",{method:"DELETE",data:{userId:c,chatRoomId:n}}).then((function(e){p(),r(),i(),h.push("/")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://chatting.psblues.site/chats/notifications",{method:"POST",data:{participant:C.username,roomId:n,join:!1}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=Object(a.useState)([]),x=Object(l.a)(O,2),v=x[0],g=x[1],N=Object(a.useState)([]),I=Object(l.a)(N,2),C=I[0],L=I[1];return Object(a.useEffect)((function(){t&&(d()("https://main.psblues.site/chatrooms/".concat(n,"/joins"),{method:"GET"}).then((function(e){g(e.data.data)})),d.a.get("https://main.psblues.site/chatrooms/".concat(n,"/joins/time?userId=").concat(c)).then((function(e){L(e.data.data)})))}),[t,n]),Object(b.jsx)("div",{className:t?"sideMenuContainer active":"sideMenuContainer",children:Object(b.jsxs)("div",{className:"sideMenu",children:[Object(b.jsxs)("div",{className:"chatMemberContainer",children:[Object(b.jsx)("div",{className:"chatMemberTitle",children:"\ub300\ud654 \uc0c1\ub300"}),Object(b.jsx)("div",{className:"chatMemberBox",children:t&&v.map((function(e){return Object(b.jsx)("div",{className:"chatMember",children:e.username},e.joinId)}))})]}),Object(b.jsx)("div",{className:"btnBox",children:s?Object(b.jsx)("button",{onClick:j,children:"\ucc44\ud305\ubc29 \uc0ad\uc81c"}):Object(b.jsx)("button",{onClick:f,children:"\ub098\uac00\uae30"})})]})})}n(75);function T(e){var t=e.location,n=t.state,c=n.chatRoomId,s=n.masterId,r=n.participantCount,i=n.title,o=n.userId,u=n.jwtToken,h=t.refreshAllList,d=t.refreshEnterList,j=Object(m.f)(),f=Object(a.useState)(!1),p=Object(l.a)(f,2),O=p[0],x=p[1],v=function(){x(!O)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"chatRoomContainer",children:[Object(b.jsxs)("div",{className:"chatRoomTopBar",children:[Object(b.jsx)("div",{className:"chatRoomImgContainer",children:Object(b.jsx)("i",{className:"fas fa-chevron-left chatRoomImg",onClick:function(){j.push("/"),h(),d()}})}),Object(b.jsxs)("div",{className:"chatRoomTitleContainer",children:[Object(b.jsx)("span",{className:"chatRoomTitle",children:i}),Object(b.jsxs)("span",{className:"chatRoomNum",children:["(",r,")"]})]}),Object(b.jsx)("div",{className:"chatRoomImgContainer",children:O?Object(b.jsx)("i",{className:"fas fa-times chatRoomImg",onClick:v}):Object(b.jsx)("i",{className:"fas fa-bars chatRoomImg",onClick:v})})]}),Object(b.jsxs)("div",{className:"sideMenuFlex",children:[O&&Object(b.jsx)("div",{onClick:v,className:"sideMenuBlank"}),Object(b.jsx)(w,{chatRoomId:c,userId:o,jwtToken:u}),Object(b.jsx)(k,{chatRoomId:c,userId:o}),Object(b.jsx)(S,{showSideMenu:O,chatRoomId:c,userId:o,jwtToken:u,isMaster:s===Number(o),refreshAllList:h,refreshEnterList:d})]})]})})}n(76);function y(){return Object(b.jsxs)("div",{className:"EmptyPage",children:[Object(b.jsx)("h2",{children:"\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4."}),Object(b.jsx)(j.b,{to:"/",children:"\ub3cc\uc544\uac00\uae30"})]})}function E(e){var t=e.isLoggedin,n=e.userObj,a=e.refreshLogin,c=e.allList,s=e.refreshAllList,r=e.enterList,i=e.refreshEnterList;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{basename:"/allchat-front/",children:t?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"firstContainer",children:[Object(b.jsx)(N,{userObj:n,allList:c,refreshAllList:s,enterList:r,refreshEnterList:i}),Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{exact:!0,path:"/",children:Object(b.jsx)(I,{userObj:n,refreshLogin:a,refreshAllList:s,refreshEnterList:i})}),Object(b.jsx)(m.a,{path:"/addChatRoom",children:Object(b.jsx)(C,{userObj:n,refreshAllList:s,refreshEnterList:i})}),Object(b.jsx)(m.a,{path:"/chatRoom/:chatRoomId",component:T}),Object(b.jsx)(m.a,{component:y})]})]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{refreshLogin:a})}),Object(b.jsx)(m.a,{path:"/kakaologin/:code",children:Object(b.jsx)(O,{refreshLogin:a})}),Object(b.jsx)(m.a,{path:"/signup",component:f}),Object(b.jsx)(m.a,{component:y})]})})})})}function R(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),i=r[0],h=r[1],j=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Boolean(n)){e.next=3;break}return e.next=3,d.a.get("https://main.psblues.site/chatrooms").then((function(e){h(e.data.data)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(a.useState)([]),f=Object(l.a)(m,2),p=f[0],O=f[1],x=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Boolean(n)){e.next=3;break}return e.next=3,d.a.get("https://main.psblues.site/chatrooms/participating").then((function(e){O(e.data.data)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(E,{isLoggedin:Boolean(n),userObj:n,refreshLogin:function(e){c(e)},allList:i,refreshAllList:j,enterList:p,refreshEnterList:x})}r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.7e86ab68.chunk.js.map