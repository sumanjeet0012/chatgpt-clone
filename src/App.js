import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src="/assets/chatgpt.svg" alt="Logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn">
            <img src="/assets/add-30.png" alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideButton">
            <button className="query">
              <img src="/assets/message.svg" alt="query" />
              What is Programming
            </button>
            <button className="query">
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
          <div className="chat">
            <img className="chatImg" src="/assets/user-icon.png" alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veritatis laudantium doloremque facere dolores aut alias iure minima deserunt voluptatem.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src="/assets/chatgptLogo.svg" alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quae tempore voluptates asperiores similique aliquid odit rem, ipsam qui repellat nisi eveniet explicabo minus dolorem. Nihil, similique consequatur quo illum reiciendis architecto quibusdam deleniti odit quam dolores eligendi rem iure, asperiores ex, harum placeat dolorem. Iste nam quidem maiores, ad, fugit facilis debitis iure eaque officia dolorem, quibusdam voluptas aliquam qui dolor culpa quos quas labore dolorum distinctio sed aperiam. Amet voluptas similique accusantium molestiae beatae aperiam sed nobis nihil? Quo porro et ut magnam explicabo deserunt dolorum impedit, corrupti sequi sint velit numquam repellat voluptates iste eligendi. Eligendi, eaque?</p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" /> <button className="send"><img src="/assets/send.svg" alt="send" /></button>
          </div>
          <p>ChatGPT may produce incorrect results</p>
        </div>

      </div>
    </div>
  );
}

export default App;
