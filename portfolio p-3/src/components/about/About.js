import React from "react";
import Me from "../../assets/Yaaqout1.jpeg";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuFolderGit2 } from "react-icons/lu";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="my imag" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about-card">
              <FaAward  className="about__icon"/>
              <h5>Experience</h5>
              <small>+2 Years working</small>
            </article>

            <article className="about-card">
              <FiUsers  className="about__icon"/>
              <h5>Clients</h5>
              <small>+200 worldwide</small>
            </article>

            <article className="about-card">
              <LuFolderGit2  className="about__icon"/>
              <h5>Projects</h5>
              <small>+80 Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium ipsam fugit vero voluptatibus facere esse corporis placeat incidunt? Nobis deserunt ipsam quam saepe optio a perferendis accusamus animi quae!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
