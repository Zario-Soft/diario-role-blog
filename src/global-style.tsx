import { ThemeProvider } from "@emotion/react";
import { useState, useCallback, useEffect, useMemo, ReactNode } from "react";
import { createGlobalStyle } from "styled-components"

export interface Theme {
  colors: {
    background: string;
    surface: string;
    primary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    background: '#F8FAFC', // Light gray-blue
    surface: '#FFFFFF',    // Pure white
    primary: '#3B82F6',    // Vibrant blue
    textPrimary: '#1E293B', // Dark slate
    textSecondary: '#f78da7', // Muted slate
    textTertiary: '#94a3b8', // Light gray
    border: '#E2E8F0', // Light border color
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

export const DarkTheme: Theme = {
  colors: {
    background: '#0F172A', // Deep navy
    surface: '#1E293B',    // Lighter navy
    primary: '#60A5FA',    // Lighter blue for better contrast on dark
    textPrimary: '#F1F5F9', // Near white
    textSecondary: '#f78da7', // Muted gray
    textTertiary: '#94a3b8', // Light gray
    border: '#334155', // Dark border color
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

export type ThemeMode = 'light' | 'dark';
export const themes: Record<ThemeMode, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};

export const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const setMode = useCallback((mode: ThemeMode) => {
    setTheme(mode);
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, []);

  const toggleTheme = () => theme === 'light' ? setMode('dark') : setMode('light');

  useEffect(() => {
    const setInternalTheme = (theme: ThemeMode) => {
      setTheme(theme);
      document.documentElement.setAttribute('data-theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      setInternalTheme(savedTheme);
    }
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setInternalTheme(initialTheme);
      localStorage.setItem('theme', initialTheme);
    }

  }, []);

  const themeMode = useMemo(() => themes[theme], [theme]);

  return { theme, toggleTheme, themeMode };
}


export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
    --bg-color: ${({ theme }) => theme.colors.background};
    --surface-color: ${({ theme }) => theme.colors.surface};
    --primary-color: ${({ theme }) => theme.colors.primary};
    --text-primary-color: ${({ theme }) => theme.colors.textPrimary};
    --text-secondary-color: ${({ theme }) => theme.colors.textSecondary};
    --text-tertiary-color: ${({ theme }) => theme.colors.textTertiary};
    --border-color: ${({ theme }) => theme.colors.border};
    --spacing-sm: ${({ theme }) => theme.spacing.sm};
    --spacing-md: ${({ theme }) => theme.spacing.md};
    --spacing-lg: ${({ theme }) => theme.spacing.lg};    
  }


  body {
      background-color: var(--bg-color);
      color: var(--text-primary-color);
      transition: background-color 0.3s ease, color 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.6;
  }

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;    

    &:hover,
    &:focus,
    &:active {
      color: var(--text-primary-color);
    }
  }

  @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const DiarioThemeProvider = ({ children }: { children: ReactNode }) => {
  const { themeMode } = useThemeMode();
  
  return <ThemeProvider theme={themeMode}>
    <GlobalStyle theme={themeMode} />
    {children}
  </ThemeProvider>
}