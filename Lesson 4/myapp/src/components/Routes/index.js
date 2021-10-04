import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import { Profile, ThemedProfile } from "../Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/chats">CHATS</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile" exact>
          <ThemedProfile theme={null} />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
          {/* <Chats /> */}
        </Route>
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};