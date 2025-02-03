import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

export const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          src={menu_icon}
          alt=""
          onClick={() => setSidebar((prev) => !prev)}
        ></img>
        <Link to="/">
          <img className="logo" src={logo} alt=""></img>
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt=""></img>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt=""></img>
        <img src={more_icon} alt=""></img>
        <img src={notification_icon} alt=""></img>
        <img src={profile_icon} className="user-icon" alt=""></img>
      </div>
    </nav>
  );
};
