import React from "react";
import "./MyProject.css";

const MyProject = () => {
  const PortfolioStyle = {
    fontFamily: "Oxygen, sans-serif",
  };

  return (
    <div className="my-project">
      <h3 style={PortfolioStyle} className="my-portfolio">
        My Portfolio
      </h3>
      <div className="project">
        <a href="https://karkolo16.github.io/ecomm/" target="_blank">
          <img src={require("../images/1.jpg")} alt="Ecomm" />
          <div style={PortfolioStyle} className="project-desc">
            E-COMM STORE <p>Project of ecomm store made in BOOSTRAP5.</p>
          </div>
        </a>
      </div>
      <a href="https://karkolo16.github.io/quote-of-the-day/" target="_blank">
        <img img src={require("../images/2.jpg")} alt="Quote Generator" />
      </a>
      <a href="https://karkolo16.github.io/react-app/" target="_blank">
        <img img src={require("../images/reactapp.png")} alt="React app" />
      </a>
    </div>
  );
};

export default MyProject;
