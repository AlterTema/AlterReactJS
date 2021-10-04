import { useState, useEffect, useCallback } from "react";
import { useParams, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../Chatlist";

const initialMessages = {
  "chat-1": [
    { text: "Привет, GeekBrain!!!", author: "HUMAN", id: "mess-2" },
    { text: "GeekBrain, привет!!!", author: "HUMAN", id: "mess-1" },
  ],
  "chat-2": [],
};

const initialChats = [
  { name: "Чат №1", id: "chat-1" },
  { name: "Чат №2", id: "chat-2" },
];

function Chats(props) {
  console.log(props);
  const { chatId } = useParams();
  const location = useLocation();

  console.log(location);

  const [messages, setMessages] = useState(initialMessages);
  const [chats, setChats] = useState(initialChats);

  const sendMessage = useCallback(
    (message) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [...prevMess[chatId], message],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    let timeout;
    const curMess = messages[chatId];

    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "Привет от бота",
          author: AUTHORS.bot,
          id: `mess-${Date.now()}`,
        });
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage({
        text,
        author: AUTHORS.HUMAN,
        id: `mess-${Date.now()}`,
      });
    },
    [chatId, sendMessage]
  );

  return (
    <div className="App" class="App">
      <ChatList chats={chats} onAddChat />
      {!!chatId && (
        <>
          {messages[chatId].map((message) => (
            <Message key={message.id} text={message.text} id={message.id} />
          ))}
          <Form onSubmit={handleAddMessage} />
        </>
      )}
    </div>
  );
}

export default Chats;