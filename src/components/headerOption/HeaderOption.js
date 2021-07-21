import React from "react";
import "./headerOption.css";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headeroption">
      {Icon && <Icon />}
      {avatar && <Avatar src={avatar} alt="Me" />}
      {title}
    </div>
  );
};
export default HeaderOption;
