import React from 'react';
import { Container } from '../layout';
import { SignInForm } from './components/SignInForm';
import { useSignIn } from './hooks/useSignIn';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const { signIn, isLoading, error } = useSignIn();

  return (
    <div className="min-h-screen bg-[#0A0A1B] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Sign in to Dashboard
          </h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300">
              {error}
            </div>
          )}

          <SignInForm onSubmit={signIn} isLoading={isLoading} />

          <p className="mt-4 text-center text-gray-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-300 hover:text-purple-200 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};
