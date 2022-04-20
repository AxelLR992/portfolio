import { mdiGithub, mdiGitlab, mdiLinkedin, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/navbar.scss";
import LanguageSwitch from "./LanguageSwitcher";

const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <nav className={`navbar`}>
      <a href="#" className="navbar__logo">{`\{AxelLeon\}`}</a>
      <ul>
        <li>
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#stack">{t("navbar.stack")}</a>
        </li>
        <li>
          <a href="#projects">{t("navbar.projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://gitlab.com/AxelLeon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon path={mdiGitlab} title="GitLab" size={1} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AxelLR992"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon path={mdiGithub} title="Github" size={1} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AxelLR992"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon path={mdiTwitter} title="Twitter" size={1} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/karl992/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon path={mdiLinkedin} title="LinkedIn" size={1} />
          </a>
        </li>
        <li>
          <LanguageSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
