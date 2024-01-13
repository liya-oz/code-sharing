import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} exact />
          <Route path="/main" element={<MainPage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
