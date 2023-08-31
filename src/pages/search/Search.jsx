import React from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../reducer/StateProvider";
import MicIcon from "@mui/icons-material/Mic";

function Search({ hideButtons }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "SEARCH_TERM",
      term: input,
    });
    e.defaultValue = "";
    navigate("/search");
  }

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="searchicon" />
        <input
          type="search"
          placeholder="Search or type a URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {hideButtons ? (
        <div className="search_btn" style={{ display: "none" }}>
          <Button variant="outlined" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      ) : (
        <div className="search_btn">
          <Button variant="outlined" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
