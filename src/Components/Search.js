import React, { useState } from "react";
import "../Stylesheets/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("button clicker", input);

    // add the input to data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    //redirect to /search
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outline">
            {" "}
            Google Search
          </Button>
          <Button variant="outline">I'm feeling Lucky'</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outline"
          >
            {" "}
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outline">
            I'm feeling Lucky'
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
