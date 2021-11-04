import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  ChatList,
  AddChatRoom,
  ChatRoom,
} from "../pages/PagesIndex";

export default function AppRouter({ isLoggedIn }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {isLoggedIn ? (
            <>
              <div className="firstContainer">
                <ChatList />
                <Route exact path="/" component={Home} />
                <Route exact path="/addChatRoom" component={AddChatRoom} />
                <Route exact path="/chatRoom" component={ChatRoom} />
              </div>
            </>
          ) : (
            <>
              <Route exact path="/" component={Login} />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
}
