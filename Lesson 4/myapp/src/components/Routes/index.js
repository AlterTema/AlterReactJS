import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import { Profile, ThemedProfile } from "../Profile";
import { Civilizations } from "../Civilizations"
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  }

  return (
    <BrowserRouter>
      <ul>
        <li>
        <Link class="btn_home" to="/chats">Чаты</Link>
        </li>
        <li>
          <Link class="btn_home" to="/profile">Профиль</Link>
        </li>
        <li>
          <Link class="btn_home" to="/Civilizations">Цивилизации</Link>
        </li>
      </ul>
      <Switch>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleLogin} />
        </PublicRoute>
        <PrivateRoute path="/profile" exact authed={authed}>
          <ThemedProfile theme={null} onLogout={handleLogout} />
        </PrivateRoute>
        <PrivateRoute
          path="/chats/:chatId?"
          component={Chats}
          authed={authed}
        />
        <Route path="/civilizations" component={Civilizations} />
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};