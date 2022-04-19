import React from "react";
import ProfilePicture from "../assets/images/profile-picture.jpg";
import "../assets/styles/about-me.scss";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
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
        <h2
          className="about-title"
          dangerouslySetInnerHTML={{ __html: t("home.title") }}
        />
        <p className="about-text">{t("home.about_me_message")}</p>
        <button className="about-button">
          {t("general.contact_invitation_button")}
        </button>
      </div>
      <a href="#" className="about-chevron">
        <Icon path={mdiChevronDown} size={3} />
      </a>
    </section>
  );
};

export default AboutSection;
