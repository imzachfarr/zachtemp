'use client';

import { useState, useEffect } from 'react';
import { Lock, User, Key } from 'lucide-react';

interface AdminAuthProps {
  children: React.ReactNode;
}

export default function AdminAuth({ children }: AdminAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Check if already authenticated on mount
  useEffect(() => {
    const authToken = localStorage.getItem('admin_auth');
    if (authToken === 'zachapps_authenticated') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple hardcoded authentication
    if (username === 'zachapps' && password === 'ZachEthan2025$') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'zachapps_authenticated');
    } else {
      setError('Invalid credentials');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    setUsername('');
    setPassword('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="bg-[#1D1D27] rounded-2xl p-8 w-full max-w-md border border-[#00D4FF]/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white mb-2">Admin Access</h1>
            <p className="text-gray-400">Enter your credentials to access the analytics dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#2A2A3A] border-2 border-[#00D4FF]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#2A2A3A] border-2 border-[#00D4FF]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
              <div className="relative bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] text-white py-3 rounded-xl font-black hover:scale-105 transition-transform duration-300">
                Access Dashboard
              </div>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Logout button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
        >
          Logout
        </button>
      </div>
      
      {children}
    </div>
  );
} 