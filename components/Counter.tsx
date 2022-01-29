import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Router from "react-router-dom";

export function Counter() {
  const [count, setCount] = React.useState(0);
  let thecurrentPageLocation = Router.useLocation();
  let thecurrentPageURL = thecurrentPageLocation.pathname;

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Path: {thecurrentPageURL}
      </div>
      <button onClick={() => setCount(count + 1)}> Click </button>
    </div>
  );
}
