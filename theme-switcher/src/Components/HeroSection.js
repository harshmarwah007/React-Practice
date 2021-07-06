

/** @format */

import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.color}`,
        textAlign: "center",
      }}>
      <h1>Context api theme switcher</h1>
      <p>There is a Nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60 ",
          padding: "10px 150px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}></button>
    </div>
  );
};
export default HeroSection;
