import { LoginContext } from "./context/LoginContext";
import { useContext } from "react";

const Contact = () => {
  const { loggedIn } = useContext(LoginContext);
  return (
    <div>
      <h1>Contact</h1>

      {loggedIn ? <p> You are Logged In</p> : <p>You are Logged Out</p>}
    </div>
  );
};

export default Contact;
