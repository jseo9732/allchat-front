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

export default function AppRouter({ userId, myToken }) {
  return (
    <>
      <BrowserRouter>
        {myToken ? (
          <>
            <div className="firstContainer">
              <ChatList userId={userId} myToken={myToken} />
              <Route exact path="/" component={Home} />
              <Route path="/addChatRoom">
                <AddChatRoom userId={userId} myToken={myToken} />
              </Route>
              <Route path="/chatRoom/:chatRoomId" component={ChatRoom} />
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
