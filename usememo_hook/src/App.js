import "./App.css";
import UseMemoHook from "./hooks/UseMemoHook";
import UseReducerHook from "./hooks/UseReducerHook";

function App() {
  return (
    <div className="App">
      <UseMemoHook />
      <UseReducerHook />
    </div>
  );
}

export default App;
