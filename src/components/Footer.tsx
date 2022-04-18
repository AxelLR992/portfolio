import React, { FunctionComponent, useState } from "react";
import Modal from "react-modal";
import "../assets/styles/footer.scss";
import ReactLogo from "../assets/images/stack/react.png";
import TypescriptLogo from "../assets/images/stack/typescript.png";
import GatsbyLogo from "../assets/images/stack/gatsby.png";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <footer className="footer">
      Copyright {new Date().getFullYear()} &copy; - Website developed by Axel
      León
      <br />
      <button onClick={() => setModalIsOpen(true)}>About this website</button>
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
          <h4>
            About this <span>website</span>
          </h4>
          <p>
            This website was developed by Axel León, using these technologies:
          </p>
          <div className="footer__about-modal-content__logos">
            <Logo src={ReactLogo} title="React JS" />
            <Logo src={TypescriptLogo} title="TypeScript" />
            <Logo src={GatsbyLogo} title="Gatsby" />
          </div>

          <button
            onClick={() => setModalIsOpen(false)}
            className="footer__about-modal-content__close-btn"
          >
            Close
          </button>
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
