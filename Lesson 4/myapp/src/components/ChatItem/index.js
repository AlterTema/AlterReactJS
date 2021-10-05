import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";

export const ChatItem = ({ chat, onDelete, id }) => {
  const showName = useSelector((state) => state.showName);

  const handleDelete = () => {
    onDelete(id);
  };

  console.log(showName);
  return (
    <ListItem>
      <Link class="chats_number" to={`/chats/${chat.id}`}>{chat.name}</Link>
      <button class="chats_number" onClick={handleDelete}>delete</button>
    </ListItem>
  );
};