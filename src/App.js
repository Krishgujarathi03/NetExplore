import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchpage/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element=<Home /> />
          <Route exact path="/search" element=<SearchPage /> />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
