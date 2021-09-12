import React from 'react';
 import {useState, useEffect} from 'react';
import {Message} from '../Message'


export const MessageList = (props) =>{
    console.log(props);


 const[messages, setMessages] = useState ([]);
    
 useEffect(() => {
     console.log('App did mount')
 },[]);
 
 const handleAddMessage = () => {
     setMessages(messages => [...messages,'new message']);
 };

 return(
     <div class="chatbox"> 
<form class="chat">
    <p class="chatText">Чат</p>
    <input type="text"></input>
    </form>
    <button class="btn2" onClick={handleAddMessage}>Add message</button>
      {messages.map((message) => <Message text={message} />)}
      </div>

    

);  
}
