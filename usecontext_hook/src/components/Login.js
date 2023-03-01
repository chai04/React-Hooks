import Button from "./UI/Button";
import { LoginContext } from "./context/LoginContext";
import { useContext } from "react";

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => setLoggedIn(true)}>Login</Button>
      <Button onClick={() => setLoggedIn(false)}>Logout</Button>
      {loggedIn ? <p> You are Logged In</p> : <p>You are Logged Out</p>}
    </div>
  );
};

export default Login;
