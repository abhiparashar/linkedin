import React from "react";
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import Logo from "../../img/linkedin.png";
import HeaderOption from "../headerOption/HeaderOption";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
  return (
    <div className="header">
      <div className="left__header">
        <img src={Logo} alt="Linkedin Logo" />
      </div>
      <div className="search__header">
        <SearchIcon />
        <input type="text"/>
      </div>
      <div className="right__header">
        <HeaderOption Icon={HomeIcon} Title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} Title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} Title="Jobs"/>
        <HeaderOption Icon={ChatIcon} Title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} Title="Notifications"/>
      </div>
    </div>
  );
};

export default Header;
