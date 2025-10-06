import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, Globe, Headphones, QrCode } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://lh3.googleusercontent.com/p/AF1QipPHWPPPTPqG7vtZCjKmkTHc-pRQFiyIzKDdHSOh=s1360-w1360-h1020-rw"
            alt="Musée des Civilisations Noires"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-black)]/70 via-[var(--deep-black)]/50 to-[var(--deep-black)]/80" />
        </div>
        
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--gold)]">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <path d="M 10 20 L 30 20 M 20 10 L 20 30" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="200" height="200" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 max-w-4xl mx-auto">
            <span className="block mb-4 text-3xl lg:text-5xl font-medium">Découvrez l'héritage des</span>
            <span className="block text-[var(--gold)] text-5xl lg:text-8xl font-bold">Civilisations Noires</span>
          </h1>
          <p className="mb-12 max-w-4xl mx-auto text-gray-200 text-xl lg:text-2xl leading-relaxed font-semibold">
            Explorez une collection <span className="font-bold">unique</span> d'œuvres d'art, d'artefacts et d'histoire qui célèbrent 
            la richesse et la diversité des cultures africaines.
          </p>
          <Button
            onClick={() => onNavigate('oeuvres')}
            className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] px-8 py-6 gap-2"
          >
            <span className="text-lg lg:text-xl font-medium">Découvrir les œuvres</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[var(--off-white)] to-white border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <QrCode size={32} className="text-[var(--gold)]" />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Scan QR Code</h3>
              <p className="text-gray-600">
                Scannez les codes QR devant chaque œuvre pour accéder à du contenu interactif enrichi
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[var(--off-white)] to-white border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Headphones size={32} className="text-[var(--gold)]" />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Audio Guide</h3>
              <p className="text-gray-600">
                Écoutez des descriptions détaillées et des histoires fascinantes pour chaque pièce
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[var(--off-white)] to-white border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Globe size={32} className="text-[var(--gold)]" />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Multilingue</h3>
              <p className="text-gray-600">
                Profitez de l'expérience en Français, Anglais ou Wolof selon vos préférences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-[var(--deep-black)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758633854855-3059c5b48674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMHBhdHRlcm58ZW58MXx8fHwxNzU5MzY2MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              <span className="text-[var(--gold)]">Événement</span> à venir
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Rejoignez-nous pour un événement exceptionnel qui célèbre l'innovation et la culture
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--gold)]/10 to-[var(--ochre)]/10 rounded-2xl p-8 md:p-12 border border-[var(--gold)]/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--deep-black)] rounded-full mb-4">
                  Hackathon 2025
                </div>
                <h3 className="mb-4">Innovation & Patrimoine Culturel</h3>
                <p className="text-gray-300 mb-6">
                  Un hackathon unique combinant technologie et culture africaine. 
                  Créez des solutions innovantes pour préserver et promouvoir notre patrimoine.
                </p>
                <Button
                  onClick={() => onNavigate('evenements')}
                  variant="outline"
                  className="border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                >
                  En savoir plus
                </Button>
              </div>
              <div className="w-full md:w-64 h-64 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzU5MzY2MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hackathon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
