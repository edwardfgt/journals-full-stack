import logo from "./logo.svg";
import "./App.css";
import Amplify, { API } from "aws-amplify";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    testAPI();
  }, []);

  const [myMessage, setMyMessage] = useState("");

  async function testAPI() {
    API.get("backend", "/api", {})
      .then((response) => {
        setMyMessage(response.success);
        console.log(`response: ${response}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{myMessage}</p>
      </header>
    </div>
  );
}

export default App;
