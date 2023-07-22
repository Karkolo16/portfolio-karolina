import React from "react";

const Header = () => {
  const containerStyle = {
    textAlign: "center",
  };

  const headerStyle = {
    fontFamily: "Lumanosimo, sans-serif",
    color: "white",
    marginBottom: "-20px",
  };
  const subheaderStyle = {
    fontFamily: "Noto Sans, sans-serif",
    color: "gold",
    fontSize: "21px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Karolina Kołomyjec</h1>
      <h2 style={subheaderStyle}>Junior Frontend/React Developer</h2>
    </div>
  );
};

export default Header;
