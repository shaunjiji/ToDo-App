import React from "react";
import "./home.css";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";

const Home = () => {
  const handleIcon = () => {
    let moon = document.querySelector("#moon");
    let sun = document.querySelector("#ssun");

    let lightBg = document.querySelector("#light-bg");
    let darkBg = document.querySelector("#dark-bg");

    let theme = document.querySelector(".main-container");

    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    theme.classList.toggle("dark");
  };
  return (
    <section className="home-page-container">
      <img
        className="home-page-image"
        id="light-bg"
        src="images/bg-desktop-light.jpg"
        alt="homepage-light"
      />
      <img
        className="home-page-image hidden"
        id="dark-bg"
        src="images/bg-desktop-dark.jpg"
        alt="homepage-dark"
      />

      <div className="todo-container">
        <div className="todo-wrapper">
          <h1 className="title">todo</h1>
          <div className="theme-icon">
            <Moon id="moon" onClick={() => handleIcon()} />
            <Sun id="sun" className="hidden" onClick={() => handleIcon()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
