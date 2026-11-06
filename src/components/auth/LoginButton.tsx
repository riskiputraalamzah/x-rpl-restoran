import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Loader2, Check, ArrowRight } from 'lucide-react';

interface LoginButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  type = 'submit',
  onClick,
  isLoading = false,
  isSuccess = false,
  disabled = false,
  children,
  variant = 'primary',
  fullWidth = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading || isSuccess}
      whileHover={
        disabled || isLoading || isSuccess || shouldReduceMotion
          ? undefined
          : {
              scale: 1.015,
              transition: { duration: 0.2, ease: 'easeOut' },
            }
      }
      whileTap={
        disabled || isLoading || isSuccess || shouldReduceMotion
          ? undefined
          : {
              scale: 0.985,
              transition: { duration: 0.1, ease: 'easeIn' },
            }
      }
      className={`relative min-h-[48px] px-6 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 transition-all duration-300 overflow-hidden cursor-pointer ${
        fullWidth ? 'w-full' : 'w-auto'
      } ${
        isPrimary
          ? isSuccess
            ? 'bg-[#22C55E] text-[#08090D] shadow-[0_0_25px_rgba(34,197,94,0.35)]'
            : 'bg-gradient-to-r from-[#E5C07B] via-[#DDB469] to-[#C69F54] text-[#08090D] font-semibold shadow-[0_4px_20px_rgba(229,192,123,0.25)] hover:shadow-[0_6px_28px_rgba(229,192,123,0.4)]'
          : 'bg-[#151721] text-white border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#1A1C28]'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {/* Light sheen effect on hover */}
      {isPrimary && !disabled && !isLoading && !isSuccess && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      )}

      {isLoading ? (
        <div className="flex items-center gap-2 text-inherit">
          <Loader2 className="w-4 h-4 animate-spin text-[#08090D]" />
          <span>Authenticating...</span>
        </div>
      ) : isSuccess ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2 text-inherit"
        >
          <Check className="w-4 h-4 stroke-[2.5]" />
          <span>Access Granted</span>
        </motion.div>
      ) : (
        <div className="flex items-center gap-2 text-inherit">
          <span>{children}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      )}
    </motion.button>
  );
};
