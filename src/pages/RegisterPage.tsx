import React from 'react';
import { LoginLayout } from '../components/auth/LoginLayout';
import { RegisterForm } from '../components/auth/RegisterForm';

export const RegisterPage: React.FC = () => {
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};
