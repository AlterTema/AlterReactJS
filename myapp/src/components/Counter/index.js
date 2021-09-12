import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState({ number: 0 });
  const [string, setString] = useState("");

    useEffect(() => {
    console.log("like did mount------------");
  }, []);

  useEffect(() => {
    console.log("like did mount + like did update string");
  }, [string]);

  useEffect(() => {
    return () => {
      console.log("will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("mount and every update");
  });

   return (
    <div class='count_number'>
      <div>{count.number}</div>
      <div>{string}</div>
      <div class="button_block"> 
      <button class="btn_click" onClick={() => setCount({ number: count.number + 1 })}>
        Счетчик нажатий
      </button>
      <button class="btn_string" onClick={() => setString(`The winner is ${Math.random()}`)}>Вывод текста</button></div>
    </div>
  );
};