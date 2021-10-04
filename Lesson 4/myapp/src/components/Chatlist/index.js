
import React from "react";
import { List } from "@material-ui/core";

import { Button } from "../Button";
import { ChatItem } from "../ChatItem";

export const ChatList = ({ chats }) => {
  return (
    <List >
     <div class="chats_number2">  
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat.id} />
      ))}</div>
       <Button>
      {() => <span  style={{ fontWeight: "bold" }}><a class="btn_home" href="http://localhost:3000">Вернуться на главный экран</a></span>}
      </Button>
    </List>
  );
};