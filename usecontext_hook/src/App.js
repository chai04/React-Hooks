import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import { LoginContext } from "./components/context/LoginContext";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Home />
        <Login />
        <Contact />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
