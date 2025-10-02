import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { OeuvresPage } from './components/OeuvresPage';
import { ExperiencePage } from './components/ExperiencePage';
import { AboutPage } from './components/AboutPage';
import { HackathonPage } from './components/HackathonPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'oeuvres':
        return <OeuvresPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'about':
        return <AboutPage />;
      case 'hackathon':
        return <HackathonPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
