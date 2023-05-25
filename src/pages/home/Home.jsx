import React from "react";
import "./home.css";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";

const Home = () => {
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
          <div className="theme-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
