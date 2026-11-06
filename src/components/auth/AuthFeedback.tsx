import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

interface AuthFeedbackProps {
  type: 'error' | 'success' | null;
  message: string | null;
  onDismiss?: () => void;
}

export const AuthFeedback: React.FC<AuthFeedbackProps> = ({ type, message, onDismiss }) => {
  return (
    <AnimatePresence mode="wait">
      {type && message && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`w-full p-4 rounded-xl flex items-start justify-between gap-3 text-sm border backdrop-blur-md ${
            type === 'error'
              ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#FCA5A5]'
              : 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#86EFAC]'
          }`}
          role="alert"
        >
          <div className="flex items-start gap-3">
            {type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
            )}
            <p className="leading-snug">{message}</p>
          </div>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-inherit opacity-70 hover:opacity-100 transition-opacity p-0.5"
              aria-label="Dismiss alert"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
