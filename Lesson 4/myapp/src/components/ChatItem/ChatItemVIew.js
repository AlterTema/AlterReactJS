
import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

export const ChatItemView = ({ name, id, onDelete }) => (
  <ListItem>
    <Link class="chats_number" to={`/chats/${id}`}>{name}</Link>
    <span class="chats_number" onClick={onDelete}>delete</span>
  </ListItem>
);