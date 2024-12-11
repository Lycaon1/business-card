import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/landing/hero';
import { LoginForm } from './components/auth/login-form';
import { SignupForm } from './components/auth/signup-form';
import { BusinessCardForm } from './components/profile/business-card-form';
import { BusinessCardView } from './components/profile/business-card-view';
import { BusinessCardProvider } from './context/BusinessCardContext';

export default function App() {
  return (
    <BusinessCardProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-navy-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link to="/" className="text-xl font-bold">Digital Business Card</Link>
              <div className="space-x-4">
                <Link to="/login" className="hover:text-gold-400">Login</Link>
                <Link to="/signup" className="hover:text-gold-400">Sign Up</Link>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="flex justify-center">
                    <LoginForm />
                  </div>
                </div>
              </>
            } />
            <Route path="/login" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center">
                  <LoginForm />
                </div>
              </div>
            } />
            <Route path="/signup" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center">
                  <SignupForm />
                </div>
              </div>
            } />
            <Route path="/create-profile" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BusinessCardForm />
              </div>
            } />
            <Route path="/card" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BusinessCardView />
              </div>
            } />
            <Route path="/edit" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BusinessCardForm />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </BusinessCardProvider>
  );
}