import React from "react";
import "./home.css";
import {ReactComponent as Moon} from "../../assets/icon-moon.svg"
import {ReactComponent as Sun} from "../../assets/icon-sun.svg"


const Home = () => {
  return (
    <section className="home-page-container">
        <img alt="homepage-light"className="home-page-image" id="light-bg" src="images/bg-desktop-light.jpg"/>
    </section>
  )
}

export default Home
