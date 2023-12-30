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
            <img src="/assets/home.svg" alt="" />
            Home
          </div>
          <div className="listItems">
            <img src="/assets/bookmark.svg" alt="" />
            Saved
          </div>
          <div className="listItems">
            <img src="/assets/rocket.svg" alt="" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
