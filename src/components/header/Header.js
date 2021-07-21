import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Logo from "../../img/linkedin.png";
import Abhi from '../../img/abhi.jpeg'
import HeaderOption from "../headerOption/HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="left__header">
        <img src={Logo} alt="Linkedin Logo" />
      </div>
      <div className="search__header">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="right__header">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="../../img/abhi.jpeg"
          title="Abhishek"
        />
      </div>
    </div>
  );
};

export default Header;
