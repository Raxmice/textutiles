import { useState } from "react";
import Formarea from "./components/Formarea";
import Header from "./components/Header";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
//img links
function App() {

  const [name, setname] = useState("Your Name ?");
  function Yourname() {
    let newname = prompt("What is your name ?");
    setname(newname);
  }
  const [mode, setmode] = useState("black");
  function Theme(event) {
    setmode(pre => {
      switch (pre) {
        case "black":
          document.title = "TaxtUtiles - Blue";
          return "blue";
        case "blue":
          document.title = "TaxtUtiles - Green";
          return "green";
        case "green":
          document.title = "TaxtUtiles - Purpul";
          return "purpul";
        case "purpul":
          document.title = "TaxtUtiles - Orange";
          return "orange";
        default:
          document.title = "TaxtUtiles - Black";
          return "black"
      }
    })
  }
  return (
    <>
      <Router>
        <Header name={name} mode={mode} Theme={Theme} Yourname={Yourname} />
        <Switch>
          <Route exact path="/" element={<Formarea mode={mode} />}></Route>
          <Route exact path ="/about" element={<About mode={mode} />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
