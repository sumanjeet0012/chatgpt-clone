import { useEffect, useRef, useState } from "react";
import "./App.css";
import SendMsgToOpenAI  from "./openai";

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT. I am here to help you with your queries.",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }
  , [messages]);

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await handleSend();
    }
  }

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([
      ...messages,
      { text, isBot: false },
    ]);

    const res = await SendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
      { text, isBot: false },
    ]);

    const res = await SendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: text, isBot: false },
      { text: res, isBot: true },
    ]);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src="/assets/chatgpt.svg" alt="Logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn" onClick={() => {window.location.reload()}} >
            <img src="/assets/add-30.png" alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideButton">
            <button className="query" onClick={handleQuery} value={"What is Programming"} >
              <img src="/assets/message.svg" alt="query" />
              What is Programming
            </button>
            <button className="query" onClick={handleQuery} value={"How to use an API"} >
              <img src="/assets/message.svg" alt="query" />
              How to use an API
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src="/assets/home.svg" alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src="/assets/bookmark.svg" alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src="/assets/rocket.svg" alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {/* <div className="chat">
            <img className="chatImg" src="/assets/user-icon.png" alt="" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo veritatis laudantium doloremque facere dolores aut alias
              iure minima deserunt voluptatem.
            </p>
          </div> */}
          
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
            <img className="chatImg" src={message.isBot?"/assets/chatgptLogo.svg":"/assets/user-icon.png"} alt="" />
            <p className="txt">
              { message.text }
            </p>
          </div>
          )}
          <div ref={msgEnd} />
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />{" "}
            <button onClick={handleSend} className="send">
              <img src="/assets/send.svg" alt="send" />
            </button>
          </div>
          <p>ChatGPT may produce incorrect results</p>
        </div>
      </div>
    </div>
  );
}

export default App;
