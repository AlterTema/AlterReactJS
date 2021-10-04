import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";

export const ChatItem = ({ chat }) => {
  const showName = useSelector((state) => state.showName);
  
  console.log(showName);
  return (
    <ListItem>
      <Link to={`/chats/${chat.id}`}><button class="chats_number">Chat{chat.name}</button></Link>
    </ListItem>
  );
};