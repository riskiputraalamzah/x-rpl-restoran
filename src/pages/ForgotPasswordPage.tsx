import React from 'react';
import { LoginLayout } from '../components/auth/LoginLayout';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';

export const ForgotPasswordPage: React.FC = () => {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
};
