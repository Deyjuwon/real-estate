import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <h1>oatHomes</h1>
          <span className="secondaryText">
          
          To provide the finest real estate service in Africa, <br />
          upholding the highest standards of integrity, ethics and customer care.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">4, Adeola Odeku, Victoria Island Lagos</span>
          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>About Us</span>
            <span>Contact</span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;