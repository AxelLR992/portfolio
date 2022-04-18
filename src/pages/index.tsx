import * as React from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import StackSection from "../components/StackSection";

const IndexPage = () => {
  return (
    <main>
      <Container>
        <AboutSection />
        <StackSection />
      </Container>
      {/* Projects is out of container to allow the background to be full width */}
      <ProjectsSection />
      <Container>
        <ContactSection />
        <Footer />
      </Container>
    </main>
  );
};

export default IndexPage;
