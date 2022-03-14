import React, { FunctionComponent } from "react";
import "../assets/styles/container.scss";

interface IContainerProps {
  children: React.ReactNode;
}

const Container: FunctionComponent<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
