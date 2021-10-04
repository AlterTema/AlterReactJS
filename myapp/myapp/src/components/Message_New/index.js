
import React from "react";

export const Message_New = ({ text, onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  }
  return <div class="right_text" onClick={handleClick}>{text}</div>;
};