import React, { useState } from "react";
import "../Stylesheets/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

const Search = () => {
  const [input, setInput] = useState("");

  const search = (e) => {
    console.log("clicked!!");
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outline">
          {" "}
          Google Search
        </Button>
        <Button variant="outline">I'm feeling Lucky'</Button>
      </div>
    </div>
  );
};

export default Search;
