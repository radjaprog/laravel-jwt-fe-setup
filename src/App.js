import React, { useState } from "react";
import { authService } from "./services/AuthService";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
