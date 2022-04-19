import React, { FunctionComponent } from "react";
import "../assets/styles/projects.scss";
import Container from "./Container";
import SsmanImage from "../assets/images/projects/ssman.png";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <Container>
        <h2 dangerouslySetInnerHTML={{ __html: t("home.my_projects") }} />
        <h5 className="subtitle">{t("home.my_projects_subtitle")}</h5>
        <div className="projects__elements">
          <Project
            title={t("projects.ssman_title")}
            description={t("projects.ssman_description")}
            technologies={["React JS", "TypeScript", "SQL Server", "Nest"]}
            image={SsmanImage}
          />
        </div>
      </Container>
    </section>
  );
};

interface IProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const Project: FunctionComponent<IProjectProps> = ({
  title,
  description,
  technologies,
  image,
}) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="project__technologies">
        {technologies.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
