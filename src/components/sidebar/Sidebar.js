import React from "react";
import "./Sidebar.css";
import Mountain from "../../img/eberhard-grossgasteiger-G9obWyQA9rQ-unsplash.jpg";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <img src={Mountain} alt="" />
          <Avatar
            src="../../img/abhi.jpeg"
            alt="abhishek"
            className="sidebar__avatar"
          />
          <h2>Abhishek Parashar</h2>
          <h4 className="h4">senior software engineer</h4>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who Viewed you</p>
            <p className="sidebar_statnumber">2543</p>
          </div>
          <div className="sidebar_stat">
            <p>views on post</p>
            <p className="sidebar_statnumber">2448</p>
          </div>
        </div>
        <div className="sidebar__bottom">
        <h5>Recent</h5>
        <div className="sidebar__recentitems">
          <p className="paragraph">#algothms</p>
          <p className="paragraph">#startups</p>
          <p className="paragraph">#computer science</p>
          <p className="paragraph">#india</p>
          <p className="paragraph">#technology</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
