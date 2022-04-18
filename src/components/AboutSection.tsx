import React from "react";
import ProfilePicture from "../assets/images/profile-picture.jpg";
import "../assets/styles/about-me.scss";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { Trans, useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

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
          <Trans>Hi! My name is</Trans>
          <br /> <Trans>Axel León and I'm a</Trans>
          <br />{" "}
          <span>
            <Trans>Web Developer</Trans>
          </span>
        </h2>
        <p className="about-text">{t("aboutMessage")}</p>
        <button className="about-button">
          <Trans>Get in touch</Trans>
        </button>
      </div>
      <a href="#" className="about-chevron">
        <Icon path={mdiChevronDown} size={3} />
      </a>
    </section>
  );
};

export default AboutSection;
