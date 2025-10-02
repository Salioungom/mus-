import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { id: 'accueil', label: t(translations.nav.home) },
    { id: 'oeuvres', label: t(translations.nav.artworks) },
    { id: 'experience', label: t(translations.nav.experience) },
    { id: 'about', label: t(translations.nav.about) },
    { id: 'hackathon', label: t(translations.nav.hackathon) },
    { id: 'contact', label: t(translations.nav.contact) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--deep-black)] text-[var(--off-white)] border-b border-[var(--gold)]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('accueil')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)] to-[var(--ochre)] rounded-lg flex items-center justify-center">
              <span className="font-serif">MCN</span>
            </div>
            <div className="hidden md:block">
              <div className="tracking-wide">Musée des</div>
              <div className="tracking-wide text-[var(--gold)]">Civilisations Noires</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--off-white)] hover:text-[var(--gold)]'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)]" />
                  )}
                </button>
              ))}
            </nav>

            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[var(--gold)]/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-[var(--gold)]/20 text-[var(--gold)]'
                    : 'text-[var(--off-white)] hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
