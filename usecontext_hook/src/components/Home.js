import { LoginContext } from "./context/LoginContext";
import { useContext } from "react";

const Home = () => {
  const { loggedIn } = useContext(LoginContext);

  return (
    <div>
      <h1>Home</h1>
      {loggedIn ? <p> You are Logged In</p> : <p>You are Logged Out</p>}
    </div>
  );
};

export default Home;
