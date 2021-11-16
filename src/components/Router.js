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
  { isLoggedin, userObj, refreshLogin } /*{ userId, myToken }*/
) {
  return (
    <>
      <BrowserRouter>
        {isLoggedin ? (
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
            <Route path="/kakaologin">
              <KakaoLogin refreshLogin={refreshLogin} />
            </Route>
            <Route path="/signup" component={Signup} />
          </>
        )}
      </BrowserRouter>
    </>
  );
}
