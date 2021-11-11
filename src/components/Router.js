import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  ChatList,
  AddChatRoom,
  ChatRoom,
} from "../pages/PagesIndex";

export default function AppRouter({ myToken }) {
  return (
    <>
      <BrowserRouter>
        {myToken ? (
          <>
            <div className="firstContainer">
              <ChatList />
              <Route exact path="/" component={Home} />
              <Route path="/addChatRoom">
                <AddChatRoom myToken={myToken} />
              </Route>
              <Route path="/chatRoom" component={ChatRoom} />
            </div>
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
          </>
        )}
      </BrowserRouter>
    </>
  );
}
