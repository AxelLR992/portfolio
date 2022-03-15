import * as React from "react";
import AboutSection from "../components/AboutSection";
import Container from "../components/Container";
import ProjectsSection from "../components/ProjectsSection";
import StackSection from "../components/StackSection";

const IndexPage = () => {
  return (
    <main>
      <Container>
        <AboutSection />
        <StackSection />
      </Container>
      {/* Projects is out of container to allow the background to be in the entire width */}
      <ProjectsSection />
    </main>
  );
};

export default IndexPage;
