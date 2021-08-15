import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 30, textAlign: "center", backgroundColor: "#282C34", color: "#61DAFB"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
