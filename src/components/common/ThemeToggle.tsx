import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
        theme === 'dark'
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
      } ${className}`}
      title={`Switch to ${theme === 'dark' ? 'Light (White)' : 'Dark'} theme`}
      aria-label="Toggle theme mode"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 animate-in spin-in-90 duration-200" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
