import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FunctionComponent } from "react";
import "../assets/styles/navbar.scss";
import LanguageSwitch from "./LanguageSwitcher";

const Navbar: FunctionComponent = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar__logo">{`\{AxelLeon\}`}</li>
        <li>Sobre mí</li>
        <li>Mi stack</li>
        <li>Mis proyectos</li>
        <li>Contacto</li>
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
