import "./Header.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    let mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("dark");
  };
  return (
    <div>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-light hidden" onClick={handleTheme}>
            <i className="fa fa-moon-o"></i>
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-dark" onClick={handleTheme}>
            <i className="fa fa-sun-o"></i>
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
