import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import DownloadPage from './pages/DownloadPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import NotesPage from './pages/NotesPage';
import { AuthProvider } from './services/auth.jsx';
import { ThemeProvider } from './theme/themeContext.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;