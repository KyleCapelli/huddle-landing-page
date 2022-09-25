import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <img
        className="header__logo"
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        alt="header-logo"
      />
    </div>
  );
};

export default Header;
