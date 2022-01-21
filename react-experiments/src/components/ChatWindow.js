import {useEffect, useState} from "react";

function ChatWindow(props) {
  function displayMessages() {
    const messagesDisplayed = [];
    for (let i = 0; i < props.messages.length; i++) {
      messagesDisplayed.push(<div key={i}>{props.messages[i]}</div>)
    }
    return messagesDisplayed;
  }

  return (
    <article>
      {props.messages.length}
      {displayMessages()}
    </article>
  )
}

export default ChatWindow;