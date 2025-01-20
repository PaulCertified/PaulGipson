import React, { useState } from 'react';
import { Container } from '../layout';
import { Title, Subtitle } from './components/Typography';
import { ProjectForm } from './components/ProjectForm';
import type { ProjectFormData } from './types';

const ProjectRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData: ProjectFormData) => {
    setSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="pt-4 pb-24 relative project-request-section">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Title />
          <Subtitle />
          <ProjectForm onSubmit={handleSubmit} submitted={submitted} />
        </div>
      </Container>
    </section>
  );
};

export default ProjectRequest;
