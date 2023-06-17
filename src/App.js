import "./App.css";
import Amplify, { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Contact from "./components/home/contact/contact";

function App() {
  // const [myMessage, setMyMessage] = useState("");

  // async function testAPI() {
  //   API.get("backend", "/api", {})
  //     .then((response) => {
  //       setMyMessage(response.success);
  //       console.log(`response: ${response}`);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
