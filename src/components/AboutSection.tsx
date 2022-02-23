import React from "react";
import ProfilePicture from "../assets/images/profile-picture.jpg";
import "../assets/styles/about-me.scss";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profile-picture-container">
          <img src={ProfilePicture} alt="Axel León" />
          <div className="circle primary-circle"></div>
          <div className="circle secondary-circle"></div>
          <div className="circle tertiary-circle"></div>
        </div>
      </div>
      <div>
        <h2 className="about-title">
          Hi! My name is
          <br /> Axel León and I'm a<br /> <span>Web Developer</span>
        </h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem totam
          molestias officia numquam soluta provident inventore placeat facilis
          labore pariatur. Eius, porro! Esse officiis eius, quibusdam
          repudiandae at velit dolorem dolore tempore ut magnam aliquid
          voluptatem quidem molestias, nostrum, natus fugit ad nesciunt iste rem
          beatae maiores magni. Id, dignissimos?
        </p>
        <button className="about-button">Get in touch</button>
      </div>
      <a href="#" className="about-chevron">
        <Icon path={mdiChevronDown} size={3} />
      </a>
    </section>
  );
};

export default AboutSection;
