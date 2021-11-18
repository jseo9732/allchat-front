import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Signup,
  Login,
  KakaoLogin,
  ChatList,
  Home,
  AddChatRoom,
  ChatRoom,
} from "../pages/PagesIndex";

export default function AppRouter({
  isLoggedin,
  userObj,
  refreshLogin,
  allList,
  refreshAllList,
  enterList,
  refreshEnterList,
}) {
  return (
    <>
      <BrowserRouter>
        {isLoggedin ? (
          <>
            <div className="firstContainer">
              <ChatList
                userObj={userObj}
                allList={allList}
                refreshAllList={refreshAllList}
                enterList={enterList}
                refreshEnterList={refreshEnterList}
              />
              <Route exact path="/">
                <Home refreshLogin={refreshLogin} userObj={userObj} />
              </Route>
              <Route path="/addChatRoom">
                <AddChatRoom
                  userObj={userObj}
                  refreshAllList={refreshAllList}
                  refreshEnterList={refreshEnterList}
                />
              </Route>
              <Route path="/chatRoom/:chatRoomId" component={ChatRoom} />
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
