import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { LoginButton } from './LoginButton';
import { AuthFeedback } from './AuthFeedback';
import { useAuth } from '../../context/AuthContext';
import { UserCheck } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const shouldReduceMotion = useReducedMotion();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; password?: string; terms?: string }>({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    const errors: { name?: string; email?: string; password?: string; terms?: string } = {};

    if (!name.trim()) {
      errors.name = 'Full name or studio entity is required.';
    }

    if (!email) {
      errors.email = 'Business email is required.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!password) {
      errors.password = 'Master passphrase is required.';
    } else if (password.length < 8) {
      errors.password = 'Security passphrase must be at least 8 characters.';
    }

    if (!termsAccepted) {
      errors.terms = 'Please accept the atelier engagement standards.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    const res = await register(name, email, password);
    if (!res.success) {
      setFeedback({ type: 'error', message: res.error || 'Registration failed.' });
    } else {
      setFeedback({ type: 'success', message: 'Account provisioned. Entering workspace...' });
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
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
          Client Enrollment
        </h1>
        <p className="text-sm text-[#9295A5] font-sans leading-relaxed">
          Register your partner credentials to initiate custom architectural projects and access review vaults.
        </p>
      </motion.div>

      {feedback && (
        <AuthFeedback
          type={feedback.type}
          message={feedback.message}
          onDismiss={() => setFeedback(null)}
        />
      )}

      {/* Name Input */}
      <motion.div variants={itemVariants} className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="reg-name" className="text-xs font-medium tracking-wider uppercase text-[#9295A5]">
            KELOMPOK 6
          </label>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#56596A] group-focus-within:text-[#E5C07B] transition-colors">
            <UserCheck className="w-4 h-4" />
          </div>
          <input
            id="reg-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
            }}
            placeholder="Elena Rostova, Principal Architect"
            disabled={isLoading}
            className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#151721] text-white text-sm placeholder:text-[#56596A] transition-all duration-200 outline-none border ${
              fieldErrors.name
                ? 'border-[#EF4444]'
                : 'border-white/[0.08] hover:border-white/[0.16] focus:border-[#E5C07B] focus:bg-[#1A1C29]'
            }`}
          />
        </div>
        {fieldErrors.name && (
          <p className="text-xs text-[#EF4444] pl-1">{fieldErrors.name}</p>
        )}
      </motion.div>

      {/* Email Input */}
      <motion.div variants={itemVariants}>
        <EmailInput
          id="reg-email"
          label="Corporate / Partner Email"
          placeholder="elena@rostovastudio.com"
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
          id="reg-password"
          label="Create Security Passphrase"
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: undefined });
          }}
          error={fieldErrors.password}
          disabled={isLoading}
          autoComplete="new-password"
        />
      </motion.div>

      {/* Terms Checkbox */}
      <motion.div variants={itemVariants} className="space-y-1">
        <label className="flex items-start gap-2.5 text-xs text-[#9295A5] cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => {
              setTermsAccepted(e.target.checked);
              if (fieldErrors.terms) setFieldErrors({ ...fieldErrors, terms: undefined });
            }}
            className="w-4 h-4 rounded border-white/[0.1] bg-[#151721] text-[#E5C07B] focus:ring-0 focus:ring-offset-0 mt-0.5 accent-[#E5C07B]"
          />
          <span className="leading-relaxed">
            I agree to the MONOLITH Media Confidentiality Agreement and Digital Vault Service Terms.
          </span>
        </label>
        {fieldErrors.terms && (
          <p className="text-xs text-[#EF4444] pl-1">{fieldErrors.terms}</p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants} className="pt-2">
        <LoginButton
          type="submit"
          isLoading={isLoading}
          isSuccess={feedback?.type === 'success'}
        >
          Create Studio Account
        </LoginButton>
      </motion.div>

      {/* Back to Login Link */}
      <motion.div variants={itemVariants} className="text-center text-xs text-[#9295A5] pt-2">
        <span>Already have an active credential? </span>
        <Link
          to="/login"
          className="text-[#E5C07B] hover:text-[#F3DC9E] font-semibold underline underline-offset-4 transition-colors ml-1"
        >
          Return to Sign In
        </Link>
      </motion.div>
    </motion.form>
  );
};
