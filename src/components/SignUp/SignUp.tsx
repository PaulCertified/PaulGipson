import React from 'react';
import { Container } from '../layout';
import { SignUpForm } from './components/SignUpForm';
import { useSignUp } from './hooks/useSignUp';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const { signUp, isLoading, error } = useSignUp();

  return (
    <div className="min-h-screen bg-[#0A0A1B] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Create your account
          </h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <SignUpForm onSubmit={signUp} isLoading={isLoading} />

          <p className="mt-4 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/signin" className="text-purple-400 hover:text-purple-300">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};
