import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/Appliation/Application";

function App() {
  return (
    <div className="App">
      {/* <Marketing />
      // navigation
        // content about us contact us log /import
        // login
        // redirected to Application
         */}
      // ? protected route to application
      <Application />
      // navigation //
    </div>
  );
}

export default App;
