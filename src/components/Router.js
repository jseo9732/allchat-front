import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Home,
  Login,
  KakaoLogin,
  Signup,
  AddChatRoom,
  // ChatRoom,
} from "../pages/PagesIndex";

export default function AppRouter({ isLoggedin, userObj, refreshLogin }) {
  return (
    <>
      <BrowserRouter>
        {isLoggedin ? (
          <>
            <div className="firstContainer">
              <Route exact path="/">
                <Home refreshLogin={refreshLogin} userObj={userObj} />
              </Route>
              <Route path="/addChatRoom">
                <AddChatRoom userObj={userObj} />
              </Route>
              {/*<Route path="/chatRoom/:chatRoomId" component={ChatRoom} /> */}
            </div>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Login refreshLogin={refreshLogin} />
            </Route>
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
