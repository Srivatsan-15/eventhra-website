import React from "react";
import logo from "./images/logo.png";
import "./App.scss";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  const [navVariable, setnavVariable] = React.useState(1);
  const [isIntra, setisIntra] = React.useState(true);
  let content;
  if (navVariable === 1) {
    content = (
      <Home
        navVariable={navVariable}
        setnavVariable={setnavVariable}
      />
    );
  }
  else if (navVariable === 2) {
    content = (
      <Events
        navVariable={navVariable}
        setnavVariable={setnavVariable}
      />
    );
  }
  return (
    <div>{content}</div>

  );
}

export default App;
