import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './components/layout';
import {
  Navbar,
  Hero,
  BentoGrid,
  About,
  Projects,
  Testimonials,
  Approach,
  Contact,
  Footer,
} from './components';
import { Dashboard } from './components/Dashboard';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { useAuth } from './hooks/useAuth';
import { ContentMenu } from './components/ContentMenu';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!session) {
    return <Navigate to="/signin" replace />;
  }
  
  return <>{children}</>;
};

const MainContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:32px_32px]" />
      <Navbar />
      <Container>
        <Hero />
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <BentoGrid />
              <About />
              <Projects />
              <Testimonials />
              <Approach />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <ContentMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
