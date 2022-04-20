import React, { FunctionComponent, useState } from "react";
import Modal from "react-modal";
import "../assets/styles/footer.scss";
import ReactLogo from "../assets/images/stack/react.png";
import TypescriptLogo from "../assets/images/stack/typescript.png";
import GatsbyLogo from "../assets/images/stack/gatsby.png";
import PhpLogo from "../assets/images/stack/php.png";
import { useTranslation } from "react-i18next";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

Modal.setAppElement(`#___gatsby`);

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {t("footer.message", { year: new Date().getFullYear() })}
      <br />
      <button
        onClick={() => setModalIsOpen(true)}
        dangerouslySetInnerHTML={{ __html: t("footer.about") }}
      ></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="About this website"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="footer__about-modal-content">
          <h4 dangerouslySetInnerHTML={{ __html: t("footer.about") }}></h4>
          <p>{t("footer.description")}</p>
          <div className="footer__about-modal-content__logos">
            <Logo src={ReactLogo} title="React JS" />
            <Logo src={TypescriptLogo} title="TypeScript" />
            <Logo src={GatsbyLogo} title="Gatsby" />
            <Logo src={PhpLogo} title="PHP" />
          </div>

          <button
            onClick={() => setModalIsOpen(false)}
            className="footer__about-modal-content__close-btn"
          >
            {t("general.close")}
          </button>

          <a
            href="https://github.com/AxelLR992/portfolio"
            className="footer__about-modal-content__github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiGithub} size={1} />
            <span>{t("footer.github_button")}</span>
          </a>
        </div>
      </Modal>
    </footer>
  );
};

interface ILogoProps {
  src: string;
  title: string;
}

const Logo: FunctionComponent<ILogoProps> = ({ src, title }) => {
  return (
    <div className="footer__about-modal-content__logo">
      <img src={src} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default Footer;
