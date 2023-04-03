import React, { useReducer, useState } from "react";

const initialvalue = [];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.obj];
    case "Delete":
      return state.filter((empl) => empl.id !== action.obj.id);
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function addData(e) {
    e.preventDefault();
    const emp = {
      id: new Date(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", obj: emp });
  }
  return (
    <div>
      <h1>Employee Info</h1>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addData}>Add Data</button>
      <ul>
        {state.map((employee) => (
          <li key={employee.id}>
            <h3>{employee.name}</h3>
            <h3>{employee.email}</h3>
            <button
              onClick={() =>
                dispatch({ type: "Delete", obj: { id: employee.id } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerHook;
