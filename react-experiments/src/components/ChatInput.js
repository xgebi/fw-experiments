import {useEffect, useState} from "react";

function ChatInput(props) {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(props.socket);

  useEffect(() => {
    socket.onmessage = function(event) {
      props.update(event.data);
    }
  }, [socket])

  function sendThing() {
    if (socket.readyState === socket.OPEN) {
      socket.send(message);
      setMessage("");
    }
  }

  function updateMsg(event) {
    setMessage(event.target.value);
  }

  return (
    <section>
      <input type="text" value={message} onChange={updateMsg} />
      <button onClick={sendThing}>Send</button>
    </section>
  )
}

export default ChatInput;