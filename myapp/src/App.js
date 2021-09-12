import TextField from "@material-ui/core/TextField";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import './App.css';
import {Counter} from './components/Counter';
import {MessageList} from '../src/components/MessageList'
import {Message_New} from './components/Message_New'
import {SimpleText} from './components/SimpleText'

const initialMessages = [
  { text: "Hello, my friend", author: "HUMAN", id: "mess-2" },
  { text: "Hello, my friend", author: "HUMAN", id: "mess-1" },
];


function App() {
   
     

 const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const inputRef = useRef(null);

  const [messages, setMessages] = useState(initialMessages);
  const [value, setValue] = useState("");

  const messagesToShow = useMemo(() => {
    console.log("filtering...");
    return messages.filter(({ text }) => text.includes("Привет"));
  }, [messages]);

useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("it's alive");
    }, 3500);

   return () => {
      clearTimeout(timeout);
    };
  });

useEffect(() => {
    if (messages[messages.length - 1]?.author === "Human") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello, I am robot", author: "bot", id: `mess-${Date.now()}` },
      ]);
      inputRef.current.focus();
    }
  }, [messages]);

const handleAddMessage = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: value,
        author: "Human",
        id: `mess-${Date.now()}`,
      },
    ]);

    setValue("");
    inputRef.current.focus();
  };

const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
      console.log(messages.length);
    },
    [messages]
  );

const handleMessageClick = useCallback((id) => {
    console.log("clicked", id);
  }, []);


return (
 <div className = "App-header">
 

<SimpleText name="AlterTema" age={29} />
      {showCounter ? <Counter /> : null}
      {messagesToShow.map((message, i) => (
        <Message_New
          key={message.id}
          text={message.text}
          onClick={handleMessageClick}
          id={message.id}
        />
      ))}
      <div class="form_label"><form class="right_form"onSubmit={handleAddMessage}>
        <TextField
          placeholder="message"
          label="Label"
          value={value}
          onChange={handleChange}
          inputRef={inputRef}
        />
        <button>Add message</button>
      </form></div>
      <div class="button_div"><button class="btn_toggle" onClick={toggleCounter}>Сброс счетчика</button></div>
    </div>

  );
}
  

export default App;

