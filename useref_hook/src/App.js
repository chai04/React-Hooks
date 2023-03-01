import "./App.css";
import Button from "./components/UI/Button";
import { useRef } from "react";

function App() {
  const nameInput = useRef(null);

  const clearInput = () => {
    nameInput.current.value="";
  };
  return (
    <div className="App">
      <input type="text" placeholder="Write your name..." ref={nameInput} />
      <Button onClick={clearInput}>Submit</Button>
    </div>
  );
}

export default App;
