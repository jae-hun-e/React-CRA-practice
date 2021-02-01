import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("Hello!")}>Hello, Ant Design.</Button>
    </div>
  );
}

export default App;
