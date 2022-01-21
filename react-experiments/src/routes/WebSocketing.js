import logo from "../logo.svg";
import {useEffect, useState} from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

function WebSocketing() {
  const exampleSocket = new WebSocket("ws://localhost:5000/echo");
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(exampleSocket);

  useEffect(() => {
    console.log('whole refresh?');
  }, []);

  useEffect(() => {
    console.log('messages refreshed', messages);
  }, [messages])

  useEffect(() => {
    console.log('socket updated');
  }, [socket]);

  function updateMessages(msg) {
    console.log(messages);
    setMessages([...messages, msg]);
  }

  return (
    <div className="App">
      <h1>Web Sockets wish</h1>
      <ChatWindow messages={messages} />
      <ChatInput socket={socket} update={updateMessages} />
    </div>
  );
}

export default WebSocketing;