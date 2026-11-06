import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
  organization: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  forgotPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('monolith_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    // Simulate high-security cryptographic handshake & network latency
    await new Promise((resolve) => setTimeout(resolve, 950));

    // Demo validation
    if (!email || !password) {
      setIsLoading(false);
      return { success: false, error: 'Please enter both your studio email and security passphrase.' };
    }

    if (!email.includes('@')) {
      setIsLoading(false);
      return { success: false, error: 'Please provide a valid email address.' };
    }

    if (password.length < 6) {
      setIsLoading(false);
      return { success: false, error: 'Security passphrase must be at least 6 characters.' };
    }

    // Success simulation
    const authenticatedUser: User = {
      id: 'usr_monolith_091',
      email,
      name: email.split('@')[0].toUpperCase(),
      role: 'Creative Partner & Executive Client',
      organization: 'MONOLITH Media Atelier',
    };

    setUser(authenticatedUser);
    localStorage.setItem('monolith_auth_user', JSON.stringify(authenticatedUser));
    setIsLoading(false);
    return { success: true };
  };

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!name.trim()) {
      setIsLoading(false);
      return { success: false, error: 'Full legal name is required for studio accreditation.' };
    }

    if (!email.includes('@')) {
      setIsLoading(false);
      return { success: false, error: 'Please enter a valid business or partner email.' };
    }

    if (password.length < 8) {
      setIsLoading(false);
      return { success: false, error: 'Master passphrase must contain at least 8 characters.' };
    }

    const newUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      email,
      name,
      role: 'Private Client',
      organization: 'MONOLITH Partner Network',
    };

    setUser(newUser);
    localStorage.setItem('monolith_auth_user', JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  };

  const forgotPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!email || !email.includes('@')) {
      setIsLoading(false);
      return { success: false, error: 'Please specify the registered account email.' };
    }

    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('monolith_auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        forgotPassword,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
