import "./styles.css";
import { useStateValue } from "./StateProvider";
import React, { useMemo } from "react";
import Home from "./Home";
export default function App() {
  const [{ count }, dispatch] = useStateValue();
  const user = useMemo(() => ({ name: "tk", age: 27 }), []);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <br />
      <Home user={user} />
    </div>
  );
}
