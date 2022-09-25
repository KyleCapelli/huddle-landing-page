import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <img
        className="footer__fb"
        src={`${process.env.PUBLIC_URL}/facebook.svg`}
        alt="facebook"
      />
      <img
        className="footer__tw"
        src={`${process.env.PUBLIC_URL}/twitter.svg`}
        alt="twitter"
      />
      <img
        className="footer__in"
        src={`${process.env.PUBLIC_URL}/instagram.svg`}
        alt="instagram"
      />
    </div>
  );
};

export default Footer;
