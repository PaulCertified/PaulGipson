import React from 'react';
import { Container, PageWrapper } from '../components/layout';
import {
  Navbar,
  Hero,
  Features,
  Projects,
  Testimonials,
  Approach,
  Contact,
  Footer,
} from '../components';

const App = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Container>
        <Hero />
        <Features />
        <Projects />
        <Testimonials />
        <Approach />
        <Contact />
        <Footer />
      </Container>
    </PageWrapper>
  );
};

export default App;
