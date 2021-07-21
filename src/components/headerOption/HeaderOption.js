import React from "react";
import "./headerOption.css";

const HeaderOption = ({ Icon, Title }) => {
  return (
    <div className="headeroption">
      {Icon && <Icon/>}
      <h3>{Title}</h3>
    </div>
  );
};
export default HeaderOption;
