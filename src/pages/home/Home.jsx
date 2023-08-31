import React from "react";
import "./home.css";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
function Home() {
  return (
    <div className="home">
      <div className="home_body">
        <Link to="/" className="homePage">
          <div className="Title">NetExplore 🔍</div>
        </Link>
        <div className="home_inputContainer">
          <Search />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
