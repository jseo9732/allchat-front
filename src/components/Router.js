import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login, ChatList } from "../pages/PagesIndex";

export default function AppRouter({ isLoggedIn }) {
  return (
    <>
      <BrowserRouter>
        {isLoggedIn && <ChatList />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/" component={Home} />
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
