import React from 'react';
import { Container } from '../layout';
import { ProjectList } from './components/ProjectList';
import { ProjectForm } from './components/ProjectForm';
import { useDashboard } from './hooks/useDashboard';

const Dashboard = () => {
  const { projects, isLoading, error, addProject, updateProject, deleteProject } = useDashboard();

  if (error) {
    return <div className="text-red-500">Error loading projects: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A1B] py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectForm onSubmit={addProject} />
          <ProjectList 
            projects={projects}
            isLoading={isLoading}
            onUpdate={updateProject}
            onDelete={deleteProject}
          />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
