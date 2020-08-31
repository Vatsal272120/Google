import React from "react";
import "../Stylesheets/Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import AppsIcon from "@material-ui/icons/Apps";

import Search from "./../Components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about"> About</Link>
          <Link to="/store"> Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail"> Gmail</Link>
          <Link to="/images"> Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRReCrKc-Mq9oWh5ccENr4OXKxoVjvqcPTHQ&usqp=CAU"
          alt="google"
        />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;
