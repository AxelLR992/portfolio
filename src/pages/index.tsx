import * as React from "react";
import AboutSection from "../components/AboutSection";
import Container from "../components/Container";
import StackSection from "../components/StackSection";

const IndexPage = () => {
  return (
    <main>
      <Container>
        <AboutSection />
        <StackSection />
      </Container>
    </main>
  );
};

export default IndexPage;
