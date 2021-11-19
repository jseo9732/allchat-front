import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Signup,
  Login,
  KakaoLogin,
  ChatList,
  Home,
  AddChatRoom,
  ChatRoom,
  EmptyPage,
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
              <Switch>
                <Route exact path="/">
                  <Home
                    userObj={userObj}
                    refreshLogin={refreshLogin}
                    refreshAllList={refreshAllList}
                    refreshEnterList={refreshEnterList}
                  />
                </Route>
                <Route path="/addChatRoom">
                  <AddChatRoom
                    userObj={userObj}
                    refreshAllList={refreshAllList}
                    refreshEnterList={refreshEnterList}
                  />
                </Route>
                <Route path="/chatRoom/:chatRoomId" component={ChatRoom} />
                <Route component={EmptyPage} />
              </Switch>
            </div>
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <Login refreshLogin={refreshLogin} />
              </Route>
              <Route path="/kakaologin">
                <KakaoLogin refreshLogin={refreshLogin} />
              </Route>
              <Route path="/signup" component={Signup} />
              <Route component={EmptyPage} />
            </Switch>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
