import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trophy, Calendar, Users, Code, Lightbulb, Award } from 'lucide-react';

export function HackathonPage() {
  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero */}
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
                  <h1 className="mb-4 text-white max-w-2xl">
                    Hackathon Innovation & Patrimoine Culturel
                  </h1>
                  <p className="mb-6 text-gray-200 max-w-xl">
                    Rejoignez-nous pour un hackathon unique qui combine technologie et culture africaine
                  </p>
                  <Button className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] gap-2">
                    <Users size={18} />
                    S'inscrire maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectif */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[var(--deep-black)]">
              <span className="text-[var(--gold)]">Objectif</span> du Hackathon
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
              <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Lightbulb className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Innovation</h3>
              <p className="text-gray-600">
                Développer des solutions technologiques innovantes pour préserver et 
                promouvoir le patrimoine culturel africain
              </p>
            </Card>

            <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
              <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Code className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Technologie</h3>
              <p className="text-gray-600">
                Utiliser les technologies modernes (IA, AR/VR, Web3) pour créer des 
                expériences immersives autour de l'art africain
              </p>
            </Card>

            <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
              <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Users className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="mb-3 text-[var(--deep-black)]">Collaboration</h3>
              <p className="text-gray-600">
                Réunir développeurs, designers, historiens et artistes pour créer 
                des projets impactants et significatifs
              </p>
            </Card>
          </div>
        </div>

        {/* Dates Clés */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[var(--deep-black)]">
              Dates <span className="text-[var(--gold)]">Clés</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--gold)]/30 hidden lg:block" />

            <div className="space-y-8">
              {/* Date 1 */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 lg:text-right">
                  <Card className="p-6 border-[var(--gold)]/30 bg-[var(--off-white)]">
                    <div className="flex lg:flex-row-reverse items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center flex-shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-[var(--deep-black)]">Inscriptions</h4>
                        <p className="text-sm text-gray-600">15 Mars - 15 Avril 2025</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-[var(--gold)] hidden lg:block" />
                <div className="flex-1" />
              </div>

              {/* Date 2 */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1" />
                <div className="w-4 h-4 rounded-full bg-[var(--gold)] hidden lg:block" />
                <div className="flex-1">
                  <Card className="p-6 border-[var(--gold)]/30 bg-[var(--off-white)]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center flex-shrink-0">
                        <Users size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-[var(--deep-black)]">Formation des équipes</h4>
                        <p className="text-sm text-gray-600">20 Avril 2025</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Date 3 */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 lg:text-right">
                  <Card className="p-6 border-[var(--gold)]/30 bg-[var(--off-white)]">
                    <div className="flex lg:flex-row-reverse items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center flex-shrink-0">
                        <Code size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-[var(--deep-black)]">Hackathon</h4>
                        <p className="text-sm text-gray-600">10-12 Mai 2025 (48h non-stop)</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-[var(--gold)] hidden lg:block" />
                <div className="flex-1" />
              </div>

              {/* Date 4 */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1" />
                <div className="w-4 h-4 rounded-full bg-[var(--gold)] hidden lg:block" />
                <div className="flex-1">
                  <Card className="p-6 border-[var(--gold)]/30 bg-[var(--off-white)]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center flex-shrink-0">
                        <Trophy size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-[var(--deep-black)]">Cérémonie de remise des prix</h4>
                        <p className="text-sm text-gray-600">12 Mai 2025, 18h00</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prix */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[var(--deep-black)]">
              Prix & <span className="text-[var(--gold)]">Récompenses</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des prix exceptionnels pour récompenser les meilleures innovations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-[var(--gold)] bg-gradient-to-b from-[var(--gold)]/10 to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <Trophy className="mx-auto mb-4 text-[var(--gold)]" size={48} />
                <div className="mb-2 text-[var(--gold)]">1er Prix</div>
                <h3 className="mb-4 text-[var(--deep-black)]">5,000,000 FCFA</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>💰 Prix en espèces</li>
                  <li>🎯 Mentorat de 6 mois</li>
                  <li>💼 Accès aux investisseurs</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 text-center border-[var(--gold)]/60 bg-gradient-to-b from-[var(--gold)]/5 to-white">
              <Award className="mx-auto mb-4 text-[var(--ochre)]" size={48} />
              <div className="mb-2 text-[var(--ochre)]">2ème Prix</div>
              <h3 className="mb-4 text-[var(--deep-black)]">3,000,000 FCFA</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>💰 Prix en espèces</li>
                <li>🎯 Mentorat de 3 mois</li>
                <li>📚 Formation gratuite</li>
              </ul>
            </Card>

            <Card className="p-8 text-center border-[var(--gold)]/40 bg-gradient-to-b from-[var(--gold)]/5 to-white">
              <Award className="mx-auto mb-4 text-[var(--ochre)]" size={48} />
              <div className="mb-2 text-[var(--ochre)]">3ème Prix</div>
              <h3 className="mb-4 text-[var(--deep-black)]">1,500,000 FCFA</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>💰 Prix en espèces</li>
                <li>🎯 Mentorat de 1 mois</li>
                <li>🎁 Goodies exclusifs</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] px-8 py-6">
              Participer au Hackathon 2025
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
