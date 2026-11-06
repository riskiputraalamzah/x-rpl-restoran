import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { LoginButton } from './LoginButton';
import { SocialLogin } from './SocialLogin';
import { AuthFeedback } from './AuthFeedback';
import { useAuth } from '../../context/AuthContext';
import { Bold, Sparkles } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const shouldReduceMotion = useReducedMotion();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const handleFillDemo = () => {
    setEmail('atelier@monolithmedia.com');
    setPassword('MonolithAtelier2026!');
    setFieldErrors({});
    setFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    const errors: { email?: string; password?: string } = {};

    if (!email) {
      errors.email = 'Studio email is required.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errors.email = 'Please provide a valid email format.';
    }

    if (!password) {
      errors.password = 'Security passphrase is required.';
    } else if (password.length < 6) {
      errors.password = 'Passphrase must be at least 6 characters.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    const res = await login(email, password);
    if (!res.success) {
      setFeedback({ type: 'error', message: res.error || 'Authentication failed.' });
    } else {
      setFeedback({ type: 'success', message: 'Identity confirmed. Opening executive dashboard...' });
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    }
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Heading section (No eyebrow badge, no gradient text) */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
          LOGIN PAGES
        </h1>
        <p className="text-sm text-[#9295A5] font-sans leading-relaxed">
          LOGIN PAGE INI DIBUAT OLEH KELOMPOK 6
        </p>
      </motion.div>

      {/* Demo Credentials Fast-Fill Prompt */}
      <motion.div variants={itemVariants}>
        <button
          type="button"
          onClick={handleFillDemo}
          className="w-full py-2 px-3.5 rounded-lg bg-[#151721] hover:bg-[#1A1C2A] border border-[#E5C07B]/25 hover:border-[#E5C07B]/50 transition-all text-xs text-[#E5C07B] flex items-center justify-between group cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>  LOGIN PAGE  DEMO</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#9295A5] font-mono group-hover:text-white transition-colors">
            One-Click Test
          </span>
        </button>
      </motion.div>

      {/* Auth Feedback notification */}
      {feedback && (
        <AuthFeedback
          type={feedback.type}
          message={feedback.message}
          onDismiss={() => setFeedback(null)}
        />
      )}

      {/* Email Input */}
      <motion.div variants={itemVariants}>
        <EmailInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
          }}
          error={fieldErrors.email}
          disabled={isLoading}
        />
      </motion.div>

      {/* Password Input */}
      <motion.div variants={itemVariants}>
        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: undefined });
          }}
          error={fieldErrors.password}
          disabled={isLoading}
        />
      </motion.div>

      {/* Remember Me & Forgot Password Links */}
      <motion.div variants={itemVariants} className="flex items-center justify-between text-xs pt-1">
        <label className="flex items-center gap-2.5 text-[#9295A5] hover:text-white cursor-pointer select-none transition-colors">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-white/[0.1] bg-[#151721] text-[#E5C07B] focus:ring-0 focus:ring-offset-0 transition-colors accent-[#E5C07B]"
          />
          <span>INGATKAN SAYA </span>
        </label>

        <Link
          to="/forgot-password"
          className="text-[#E5C07B] hover:text-[#F3DC9E] font-medium transition-colors"
        >
          LUPA PASSWORD
        </Link>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants} className="pt-2">
        <LoginButton
          type="submit"
          isLoading={isLoading}
          isSuccess={feedback?.type === 'success'}
        >
          Sign In to Portal
        </LoginButton>
      </motion.div>

      {/* Social / SSO Auth */}
      <motion.div variants={itemVariants}>
        <SocialLogin
          disabled={isLoading}
          onGoogleLogin={() => {
            setFeedback({
              type: 'success',
              message: 'Connecting to Google Workspace identity provider...',
            });
            setTimeout(() => navigate('/dashboard'), 900);
          }}
          onSSOLogin={() => {
            setFeedback({
              type: 'success',
              message: 'Connecting to Enterprise Single Sign-On...',
            });
            setTimeout(() => navigate('/dashboard'), 900);
          }}
        />
      </motion.div>

      {/* Switch to Register Route */}
      <motion.div variants={itemVariants} className="text-center text-xs text-[#9295A5] pt-2">
        <span> </span>
        <Link
          to="/register"
          className="text-[#E5C07B] hover:text-[#F3DC9E] font-semibold underline underline-offset-4 transition-colors ml-1"
        >
          Minta Undangan dari
        </Link>
      </motion.div>
    </motion.form>
  );
};
