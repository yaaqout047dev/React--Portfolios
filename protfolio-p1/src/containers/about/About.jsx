import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import HeaderContent from "../../components/pageHeaderContent/HeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./about.scss";

const personalData = [
  {
    label: "Name",
    value: "Yaaqout Tareq",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "Egypt",
  },
  {
    label: "Email",
    value: "yaaqouttareq@gmail.com",
  },
];

const jobSum =
  "Front end dev with 2 years of experience Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde a dolore nisi sunt placeat nulla exercitationem, cum est hic quaerat facere qui quam ipsum at praesentium libero corporis itaque error veniam illo obcaecati reprehenderit labore. Eum corporis repudiandae provident iste, obcaecati iusto rerum voluptas facilis est totam voluptate cumque libero?";
export default function About() {
  return (
    <section id="about" className="about">
      <HeaderContent
        headerText="about me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSum}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="per-text">Personal Information</h3>
            <ul>
              {personalData.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
