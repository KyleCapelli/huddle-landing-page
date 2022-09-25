import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="body__container">
      <img
        className="body__illustration"
        src={`${process.env.PUBLIC_URL}/illustration-mockups.svg`}
        alt="illustrations"
      />
      <div className="body__content-container">
        <h3>Build The Community Your Fans Will Love</h3>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Body;
