import React from "react";

const Header = () => {
  const containerStyle = {
    textAlign: "center",
  };

  const headerStyle = {
    fontFamily: "Oxygen, sans-serif",
    color: "white",
    marginBottom: "-20px",
  };
  const subheaderStyle = {
    fontFamily: "Noto Sans, sans-serif",
    color: "gold",
    fontSize: "21px",
    position: "relative",
  };

  const subheaderLine = {
    content: "",
    display: "block",
    width: "100%",
    height: "1px",
    backgroundColor: "white",
    position: "absolute",
    bottom: "-5px",
    left: 0,
    borderRadius: "5px",
    opacity: 0.4,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Karolina Kołomyjec</h1>
      <h2 style={subheaderStyle}>
        Junior Frontend/React Developer <span style={subheaderLine}></span>
      </h2>
    </div>
  );
};

export default Header;
