import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      {/* <StartPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
