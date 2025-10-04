import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { OeuvresPageNew } from './components/OeuvresPageNew';
import { ExperiencePage } from './components/ExperiencePage';
import { AboutPage } from './components/AboutPage';
import { HackathonPage } from './components/HackathonPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import TestSupabasePage from './pages/test-supabase';

// Composant pour synchroniser l'état de navigation avec le routeur
interface RouterSyncProps {
  onNavigate: (page: string) => void;
}

const RouterSync: React.FC<RouterSyncProps> = ({ onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Mettre à jour l'état de navigation lorsque l'URL change
    const path = location.pathname.substring(1) || 'accueil';
    onNavigate(path === 'test-supabase' ? 'accueil' : path);
  }, [location, onNavigate]);

  // Fonction pour naviguer via le header
  const handleNavigation = (page: string) => {
    if (page === 'accueil') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <>
      <Header currentPage={location.pathname === '/' ? 'accueil' : location.pathname.substring(1)} 
              onNavigate={handleNavigation} />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
          <Route path="/oeuvres" element={<OeuvresPageNew />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test-supabase" element={<TestSupabasePage />} />
          <Route path="*" element={<HomePage onNavigate={handleNavigation} />} />
        </Routes>
      </main>
    </>
  );
};

export default function App() {
  // L'état currentPage est conservé pour la compatibilité avec d'autres composants
  // mais n'est plus utilisé directement dans ce composant
  const [_, setCurrentPage] = useState('accueil');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <RouterSync onNavigate={setCurrentPage} />
        <Footer />
      </div>
    </Router>
  );
}
