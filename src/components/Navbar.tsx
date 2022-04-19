import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FunctionComponent } from "react";
import "../assets/styles/navbar.scss";
import LanguageSwitch from "./LanguageSwitcher";

const Navbar: FunctionComponent = () => {

  return (
    <nav className={`navbar`}>
      <a href="#" className="navbar__logo">{`\{AxelLeon\}`}</a>
      <ul>
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#stack">Mi stack</a>
        </li>
        <li>
          <a href="#projects">Mis proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <ul>
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
