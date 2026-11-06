import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';

interface EmailInputProps {
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  id = 'email-input',
  value,
  onChange,
  error,
  disabled = false,
  label = 'Studio Email',
  placeholder = 'partner@monolithmedia.com',
  autoComplete = 'email',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isValidEmail = value.includes('@') && value.includes('.') && value.length > 5;

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-medium tracking-wider uppercase text-[#9295A5] transition-colors"
        >
          {label}
        </label>
        {isValidEmail && !error && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 text-[11px] text-[#22C55E]"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified
          </motion.span>
        )}
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#56596A] group-focus-within:text-[#E5C07B] transition-colors">
          <Mail className="w-4 h-4" />
        </div>

        <input
          id={id}
          type="email"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#151721] text-white text-sm placeholder:text-[#56596A] transition-all duration-200 outline-none border ${
            error
              ? 'border-[#EF4444] shadow-[0_0_15px_rgba(239,68,68,0.2)]'
              : isFocused
              ? 'border-[#E5C07B] shadow-[0_0_20px_rgba(229,192,123,0.18)] bg-[#1A1C29]'
              : 'border-white/[0.08] hover:border-white/[0.16] hover:bg-[#181A25]'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-xs text-[#EF4444] pl-1 font-sans"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
