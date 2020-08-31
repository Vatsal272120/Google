import React from "react";
import "../Stylesheets/SearchPage.css";
import { useStateValue } from "./../StateProvider";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  return (
    <div className="searchPage">
      <div className="searchPage__Header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__Results"></div>
    </div>
  );
};

export default SearchPage;
