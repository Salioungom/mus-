import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 text-[var(--deep-black)]">
            À <span className="text-[var(--gold)]">Propos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez l'histoire et la mission du Musée des Civilisations Noires
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706264568861-81855ecf51a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzZXVtJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTM2NjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Musée des Civilisations Noires"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-black)]/50 to-transparent" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-[var(--deep-black)]">Notre Histoire</h2>
                <p className="text-gray-600 mb-4">
                  Le Musée des Civilisations Noires (MCN) est un établissement culturel majeur 
                  situé à Dakar, au Sénégal. Inauguré en décembre 2018, il représente un symbole 
                  puissant de la préservation et de la célébration du patrimoine africain.
                </p>
                <p className="text-gray-600 mb-4">
                  Conçu par l'architecte Pierre Goudiaby Atepa, le musée s'étend sur plus de 
                  14 000 m² et abrite des collections exceptionnelles qui racontent l'histoire 
                  riche et diversifiée des civilisations noires à travers les âges.
                </p>
                <p className="text-gray-600">
                  Notre mission est de documenter, préserver et partager l'héritage culturel 
                  africain avec le monde, tout en servant de lieu d'éducation, de recherche 
                  et d'échange interculturel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Calendar className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-[var(--gold)]">2018</div>
              <p className="text-sm text-gray-600">Année d'inauguration</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Award className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-[var(--gold)]">1000+</div>
              <p className="text-sm text-gray-600">Œuvres d'art</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Users className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-[var(--gold)]">100K+</div>
              <p className="text-sm text-gray-600">Visiteurs par an</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <MapPin className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-[var(--gold)]">14,000 m²</div>
              <p className="text-sm text-gray-600">Surface totale</p>
            </Card>
          </div>
        </div>

        {/* Location */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 border-[var(--gold)]/30 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <MapPin className="text-[var(--gold)]" size={24} />
              </div>
              <div>
                <h2 className="text-[var(--deep-black)]">Nous Trouver</h2>
                <p className="text-sm text-gray-600">Route de l'Aéroport, Dakar, Sénégal</p>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--gold)]/10 to-[var(--ochre)]/10">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-[var(--gold)]" size={64} />
                  <h3 className="mb-2 text-[var(--deep-black)]">Carte Interactive</h3>
                  <p className="text-gray-600">
                    Musée des Civilisations Noires<br />
                    Route de l'Aéroport LSS<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4 p-6 bg-[var(--off-white)] rounded-lg">
              <div>
                <h4 className="mb-2 text-[var(--deep-black)]">Horaires</h4>
                <p className="text-sm text-gray-600">
                  Mardi - Dimanche<br />
                  9h00 - 18h00
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--deep-black)]">Contact</h4>
                <p className="text-sm text-gray-600">
                  +221 33 823 92 00<br />
                  contact@mcn.sn
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--deep-black)]">Tarifs</h4>
                <p className="text-sm text-gray-600">
                  Adultes: 2000 FCFA<br />
                  Étudiants: 1000 FCFA
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
