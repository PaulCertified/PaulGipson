import React, { useState } from 'react';
import { Container } from '../layout';
import { Title, Subtitle } from './components/Typography';
import { ProjectForm } from './components/ProjectForm';
import { SuggestionList } from './components/SuggestionList';
import { projectConfig } from './config';

const ProjectRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Here you would typically handle the form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="pt-4 pb-24 relative project-request-section">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Title />
          <Subtitle />
          <ProjectForm onSubmit={handleSubmit} submitted={submitted} />
          <SuggestionList 
            suggestions={projectConfig.suggestions} 
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectRequest;
