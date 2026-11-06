import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EmailInput } from './EmailInput';
import { LoginButton } from './LoginButton';
import { AuthFeedback } from './AuthFeedback';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const ForgotPasswordForm: React.FC = () => {
  const { forgotPassword, isLoading } = useAuth();
  const shouldReduceMotion = useReducedMotion();

  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
  const [emailError, setEmailError] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);

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

    if (!email) {
      setEmailError('Please enter your registered studio email.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError(undefined);
    const res = await forgotPassword(email);
    if (!res.success) {
      setFeedback({ type: 'error', message: res.error || 'Recovery request failed.' });
    } else {
      setSubmitted(true);
      setFeedback({
        type: 'success',
        message: 'Security recovery dispatch sent. Check your inbox for encrypted access credentials.',
      });
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
          Password  recovery
        </h1>
        <p className="text-sm text-[#9295A5] font-sans leading-relaxed">
       MASUKKAN EMAIL ANDA UNTUK MELAKUKAN PASSWORD RECOVERY </p>
      </motion.div>

      {feedback && (
        <AuthFeedback
          type={feedback.type}
          message={feedback.message}
          onDismiss={() => setFeedback(null)}
        />
      )}

      {!submitted ? (
        <>
          <motion.div variants={itemVariants}>
            <EmailInput
              id="reset-email"
              label="Masukkan email anda"
              placeholder="client@monolithmedia.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError(undefined);
              }}
              error={emailError}
              disabled={isLoading}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <LoginButton
              type="submit"
              isLoading={isLoading}
              isSuccess={submitted}
            >
              Reset Password
            </LoginButton>
          </motion.div>
        </>
      ) : (
        <motion.div
          variants={itemVariants}
          className="p-5 rounded-2xl bg-[#151721] border border-[#E5C07B]/30 space-y-3"
        >
          <div className="flex items-center gap-2 text-[#E5C07B] text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-[#E5C07B]" />
            <span>Encrypted Verification Dispatched</span>
          </div>
          <p className="text-xs text-[#9295A5] leading-relaxed">
            We have routed a single-use authorization token to <strong className="text-white">{email}</strong>. The link expires in 15 minutes.
          </p>
        </motion.div>
      )}

      {/* Return to Sign In Link */}
      <motion.div variants={itemVariants} className="text-center pt-2">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C07B] hover:text-[#F3DC9E] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke halaman</span>
        </Link>
      </motion.div>
    </motion.form>
  );
};
