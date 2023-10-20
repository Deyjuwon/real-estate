import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Ready To Connect with Us?</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            sed do eiusmod tempor
          </span>
          <button className="button" href>
            <a href="mailto:temitayoadejuwon@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;