import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="cont">
        <div className="left">
          <img
            className="logo"
            src="https://preview.redd.it/qlev5tln9iq71.png?width=640&crop=smart&auto=webp&s=d38a2d4f2005eb2331b02f5b435cdd2050e3fd5f"
            alt="sitelogo"
          />
          <span href="Feature">
            <Link to={`/home`} className="h2"><h2 >home</h2></Link>
          </span>
          <span href="List">
           <Link to={`/Movies`} className="h2" > <h2>Movies</h2></Link>
          </span>
        </div>
        <div className="right">
          <Search />
          <Notifications />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;