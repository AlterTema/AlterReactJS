import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";

import { Button } from "../Button";

export const ChatList = ({ chats }) => {
  return (
    <List class="class_chat">
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <Link class="class_chat" to={`/chats/${chat.id}`}>{chat.name}</Link>
        </ListItem>
      ))}
      <Button>
        {() => <span  style={{ fontWeight: "bold" }}><a class="btn_home" href="http://localhost:3000">Вернуться на главный экран</a></span>}
      </Button>
    </List>
  );
};