import React from "react";
import "./Widgets.css";
import { InfoRounded } from "@material-ui/icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Linked News</h2>
        <InfoRounded />
      </div>
      <div>
        {newsArticle("Cornovirus update", "Top news- 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars and Auto- 300 readers")}
        {newsArticle("Bitcoin breaks $22k", "Crypto- 123 readers")}
        {newsArticle("is redux too good ?", "Code- 500 readers")}
        {newsArticle(
          "microsoft launches new version of pixel",
          "Top news- 7000 readers"
        )}
      </div>
    </div>
  );
};

export default Widgets;
