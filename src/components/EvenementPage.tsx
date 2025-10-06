import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Calendar, Users, Code, Lightbulb } from 'lucide-react';

export function EvenementPage() {
  const timeline = [
    { icon: Calendar, title: "Inscriptions", date: "1 Octobre - 3 Octobre 2025" },
    { icon: Users, title: "Formation des équipes", date: "3 Octobre 2025" },
    { icon: Code, title: "Événement principal", date: "8 - 9 Novembre 2025" },
    { icon: Trophy, title: "Remise des prix", date: "9 Novembre 2025 à 18h00" },
  ];

  return (
    <div className="min-h-screen py-20 bg-white text-[var(--deep-black)]">
      <div className="container mx-auto px-4">
        {/* ================= HERO ================= */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzU5MzY2MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hackathon 2025"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-black)]/90 via-[var(--deep-black)]/70 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                  <Badge className="mb-4 bg-[var(--gold)] text-[var(--deep-black)] border-0">
                    Événement 2025
                  </Badge>
                  <h1 className="mb-4 text-white text-4xl font-bold max-w-2xl">
                    Événement Innovation & Patrimoine Culturel
                  </h1>
                  <p className="mb-6 text-gray-200 max-w-xl">
                    Rejoignez-nous pour un événement unique qui combine technologie et culture africaine
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://drive.google.com/file/d/1wANY5Fi0AlASDTFs5WyVAJF07AzqUwGW/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] rounded-md font-medium transition-colors gap-2"
                    >
                      <Users size={18} />
                      S'inscrire maintenant
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OBJECTIFS ================= */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <section className="max-w-6xl mx-auto text-center">
            <h2 className="lg:text-5xl text-4xl  font-bold mb-6">
              <span className="text-[var(--gold)]">Objectifs</span> de l'Événement
            </h2>
            <div className="h-1 w-24 bg-[var(--gold)] mx-auto mb-12"></div>
            <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Créer des solutions innovantes pour préserver le patrimoine culturel africain.",
              },
              {
                icon: Code,
                title: "Technologie",
                text: "Utiliser l’IA, la réalité augmentée et le web3 pour des expériences immersives.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Rassembler développeurs, designers, artistes et historiens pour innover ensemble.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <item.icon className="text-[var(--gold)]" size={28} />
                </div>
                <h4 className="text-lg lg:text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base lg:text-xl">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="py-16">
        <section className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Dates <span className="text-[var(--gold)]">Clés</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les moments forts de l’événement.
            </p>
          </div>

          {/* --- Version mobile --- */}
          <div className="md:hidden relative max-w-md mx-auto px-4 space-y-6">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
            {timeline.map((item, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-white mt-2 z-10 ml-[0.35rem]" />
                <div className="flex-1 bg-white rounded-2xl shadow-md border border-[var(--gold)]/20 px-5 py-4 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold)]/10">
                      <item.icon size={20} className="text-[var(--gold)]" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-2">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- Version desktop --- */}
          <div className="hidden md:grid grid-cols-9 gap-6 relative">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0
                    ? 'col-start-1 col-end-5 justify-self-end'
                    : 'col-start-6 col-end-10 justify-self-start'
                } relative`}
              >
                <div className="w-full bg-white border border-[var(--gold)]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--gold)]/10">
                      <item.icon className="text-[var(--gold)]" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-600">{item.date}</p>
                </div>

                {/* Ligne + point central */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[-1.5rem] md:right-auto md:left-auto">
                  <div className="w-5 h-5 bg-[var(--gold)] rounded-full border-4 border-white shadow-md" />
                </div>
              </div>
            ))}

            {/* Ligne verticale centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gold)]/70 to-transparent animate-pulse -translate-x-1/2" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
