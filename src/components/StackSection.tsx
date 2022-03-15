import React, { FunctionComponent } from "react";
import "../assets/styles/stack.scss";
import TypescriptLogo from "../assets/images/stack/typescript.png";
import JavascriptLogo from "../assets/images/stack/javascript.png";
import ReactLogo from "../assets/images/stack/react.png";
import NodeLogo from "../assets/images/stack/node.png";
import NestLogo from "../assets/images/stack/nest.png";
import HtmlLogo from "../assets/images/stack/html.png";
import CssLogo from "../assets/images/stack/css.png";
import PhpLogo from "../assets/images/stack/php.png";
import JavaLogo from "../assets/images/stack/java.png";

const StackSection = () => {
  return (
    <section className="stack">
      <h2 className="stack__title">
        My <span>stack</span>
      </h2>
      <h5 className="subtitle">Lorem ipsum dolor sit amet</h5>
      <div className="stack__logos">
        <Logo src={TypescriptLogo} title="TypeScript" />
        <Logo src={JavascriptLogo} title="JavaScript" />
        <Logo src={ReactLogo} title="React JS" />
        <Logo src={NodeLogo} title="Node JS" />
        <Logo src={NestLogo} title="Nest" />
        <Logo src={HtmlLogo} title="HTML 5" />
        <Logo src={CssLogo} title="CSS 3" />
        <Logo src={PhpLogo} title="PHP" />
        <Logo src={JavaLogo} title="Java" />
      </div>
    </section>
  );
};

interface ILogoProps {
  src: string;
  title: string;
}

const Logo: FunctionComponent<ILogoProps> = ({ src, title }) => {
  return (
    <div className="stack__logo">
      <img src={src} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default StackSection;
