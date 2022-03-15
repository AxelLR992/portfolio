import React, { FunctionComponent } from "react";
import "../assets/styles/projects.scss";
import Container from "./Container";
import SsmanImage from "../assets/images/projects/ssman.png";

const ProjectsSection = () => {
  return (
    <section className="projects">
      <Container>
        <h2>
          My <span>projects</span>
        </h2>
        <h5 className="subtitle">Lorem ipsum dolor sit amet.</h5>
        <div className="projects__elements">
          <Project
            title="SSMAN"
            description={`El Sistema de Solicitudes de Mantenimiento (SSMAN) fue 
            desarrollado para el Departamento de Mantenimiento del ISSET. 
            Permite a las diferentes áreas del Instituto la generación de 
            solicitudes de mantenimiento, para posteriormente ser gestionadas 
            por un analista.`}
            technologies={["React JS", "TypeScript", "SQL Server"]}
            image={SsmanImage}
          />
          <Project
            title="Project 2"
            description="Lorem ipsum dolor sit amet"
            technologies={["React JS", "TypeScript", "SQL Server"]}
            image=""
          />
          <Project
            title="Project 3"
            description="Lorem ipsum dolor sit amet"
            technologies={["React JS", "TypeScript", "SQL Server"]}
            image=""
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
