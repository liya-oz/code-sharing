import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import LogInPage from "./pages/LogInPage";
import CodeDisplayPage from "./pages/CodeDisplayPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartPage />} exact />
          <Route path="/main" element={<MainPage />} exact />
          <Route path="/signup" element={<SignUpPage />} exact />
          <Route path="/login" element={<LogInPage />} exact />
          <Route path="/code/:uuid" element={<CodeDisplayPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
