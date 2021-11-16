import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  // Home,
  Login,
  KakaoLogin,
  Signup,
  // ChatList,
  // AddChatRoom,
  // ChatRoom,
} from "../pages/PagesIndex";

export default function AppRouter(
  { isLogin, refreshLogin } /*{ userId, myToken }*/
) {
  return (
    <>
      <BrowserRouter>
        {isLogin ? (
          <>
            <div className="firstContainer">
              {/* <ChatList userId={userId} myToken={myToken} />
              <Route exact path="/" component={Home} />
              <Route path="/addChatRoom">
                <AddChatRoom userId={userId} myToken={myToken} />
              </Route>
              <Route path="/chatRoom/:chatRoomId" component={ChatRoom} /> */}
              로그인 됨
            </div>
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Route path="/kakaologin" component={KakaoLogin} />
            <Route path="/signup" component={Signup} />
          </>
        )}
      </BrowserRouter>
    </>
  );
}
