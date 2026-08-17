import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SERVER_URL = window.location.port === '5173'
  ? `http://${window.location.hostname}:3001`
  : '';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from localStorage on mount (but don't auto-create a user)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tutor_auth_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate the saved object has required fields
        if (parsed && parsed.id && parsed.email && parsed.role) {
          setUser(parsed);
        }
      }
    } catch (e) {
      console.error('Error restoring auth session:', e);
      localStorage.removeItem('tutor_auth_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Invalid credentials');
      }

      const data = await res.json();
      if (data.user) {
        setUser(data.user);
        localStorage.setItem('tutor_auth_user', JSON.stringify(data.user));
        return true;
      }
      return false;
    } catch (err: any) {
      // If server is unreachable, throw a clear message
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Cannot reach the server. Make sure the server is running.');
      }
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tutor_auth_user');
    // Clear any persisted state
    localStorage.removeItem('active_interrupt');
    localStorage.removeItem('active_locked_quiz');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isLoading
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
