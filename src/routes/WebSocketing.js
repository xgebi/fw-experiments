import logo from "../logo.svg";
import {useEffect, useState} from "react";

function WebSocketing() {
  const exampleSocket = new WebSocket("ws://localhost:5000/echo");
  useEffect(() => {
    console.log('Hi', exampleSocket);
    exampleSocket.onmessage = function(event) {
      console.log(event);
    }
    exampleSocket.onopen = function() {
      console.log(exampleSocket);
      exampleSocket.send("Hello?")
    }
  }, []);

  function sendThing() {
    if (exampleSocket.readyState === exampleSocket.OPEN) {
      exampleSocket.send("Hi");
    }
  }
  return (
    <div className="App">
      <h1>Web Sockets wish</h1>
      <button onClick={sendThing}>Send</button>
    </div>
  );
}

export default WebSocketing;