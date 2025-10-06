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
            À propos du Musée des Civilisations Noires
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://journals.openedition.org/ocim/docannexe/image/4717/img-1-small480.jpg"
                  alt="Musée des Civilisations Noires - Vue extérieure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-black)]/50 to-transparent" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--deep-black)]">
                  Projet au long cours, pensé par des visionnaires
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Projet au long cours, pensé tour à tour par un militant anticolonialiste (Lamine Senghor), un penseur de la négritude (Léopold Sédar Senghor) et un chantre de la renaissance africaine (Abdoulaye Wade), le Musée des Civilisations noires (MCN) a été inauguré le 6 décembre 2018 par le Président Macky Sall.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Le MCN œuvre depuis lors pour la valorisation de l'apport des Civilisations noires au patrimoine universel de l'humanité. Ainsi, le visiteur qui franchit la porte de la case à impluvium qui a inspiré son architecture rencontre tout autour du grand Baobab de l'artiste haïtien Edouard Duval-Carrié, l'exposition : l'Afrique, berceau de l'humanité.
                </p>
                <div className="mt-6">
                  <a 
                    href="/evenements"
                    className="inline-flex items-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] rounded-md font-medium transition-colors"
                  >
                    Découvrir nos événements
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--deep-black)]">
                  Un voyage à travers l'histoire des civilisations noires
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Partout ailleurs, à travers les fascinantes œuvres qui font les diverses expositions, le visiteur peut se faire une idée de la dispersion des peuples noirs à travers le monde. Il peut imaginer les formations sociales, les modes de production, les représentations symboliques, les rites initiatiques, produits par les civilisations noires depuis la nuit des temps.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Il rencontre le rôle joué par les peuples noirs dans les guerres mondiales et l'avènement d'un monde libre. Il peut se remémorer les débats et les combats des intellectuels, des artistes et écrivains noirs dans les luttes pour l'émancipation, sans compter leur apport dans la naissance du Panafricanisme et les droits civiques.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--deep-black)]">
                  Une vision tournée vers l'avenir
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Le visiteur quitte la case en ayant foi en la communauté de destin qui lie les peuples noirs (africains, états-uniens, caraïbéens, européens, australiens, afro-latins, indiens…). Pour autant, sans tomber dans une approche faussement universalisante ou prétendument non-victimaire qui ruserait avec la réalité historique objective faite de maltraitance pluriséculaire des corps noirs à travers : la traite négrière, la colonisation, l'apartheid, le racisme systémique, etc. À aucun moment, les expositions ne tombent dans le piège du passéisme, du romantisme béat, de l'autoglorification et de la complaisance avec soi.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Comme un miroir placé devant les visiteurs, bien des œuvres ou des expositions questionnent les inconséquences de nos trajectoires. Au demeurant, le futur africain est déjà-là !
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Enfin, le MCN étant enraciné depuis sa conceptualisation, il y a six décennies, au pays de la teranga, il valorise l'hospitalité, l'interculturalité, et par là-même, insuffle le respect de la diversité culturelle et les pratiques qui vont dans le sens de l'engendrement d'un monde post-racial !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Calendar className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--gold)]">2018</div>
              <p className="text-gray-600">Année d'inauguration</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Award className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--gold)]">1000+</div>
              <p className="text-gray-600">Œuvres d'art</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Users className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--gold)]">100K+</div>
              <p className="text-gray-600">Visiteurs par an</p>
            </Card>

            <Card className="p-6 text-center border-[var(--gold)]/30 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <MapPin className="text-[var(--gold)]" size={32} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--gold)]">14,000 m²</div>
              <p className="text-gray-600">Surface totale</p>
            </Card>
          </div>
        </div>

        {/* Horaires et Tarifs */}
        <div className="max-w-6xl mx-auto mb-12 px-4 sm:px-6">
          <div className="relative mb-16 text-center">
            <div className="inline-block relative group">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-black)] relative z-10 px-8 py-2">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-[var(--gold)]/10 rounded-lg transform -skew-y-1 -rotate-1 group-hover:rotate-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Informations pratiques</span>
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent transform -translate-x-1/2 group-hover:w-32 transition-all duration-300"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Retrouvez toutes les informations essentielles pour préparer votre visite au Musée des Civilisations Noires
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Carte Horaires */}
            <Card className="p-6 border-[var(--gold)]/30 hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--gold)] mb-2">Horaires</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 text-center flex-grow flex flex-col justify-center">
                <p className="font-medium text-base">Mardi au dimanche</p>
                <p className="text-[var(--deep-black)] font-medium">10h00 - 19h00</p>
              </div>
            </Card>

            {/* Carte Tarifs */}
            <Card className="p-6 border-[var(--gold)]/30 hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--gold)] mb-2">Tarifs</h3>
              </div>
              <div className="text-sm space-y-3 text-center flex-grow flex flex-col justify-center">
                <div>
                  <p className="font-medium text-[var(--deep-black)]">Visite libre</p>
                  <p className="text-gray-700">3000 FCFA (plein)</p>
                  <p className="text-gray-700">500 FCFA (scolaire/étudiant)</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-[var(--deep-black)]">Visite guidée</p>
                  <p className="text-gray-700">5000 FCFA (plein)</p>
                  <p className="text-gray-700">1000-1500 FCFA (scolaire/étudiant)</p>
                </div>
              </div>
            </Card>

            {/* Carte Consignes */}
            <Card className="p-6 border-[var(--gold)]/30 hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--gold)] mb-2">Consignes</h3>
              </div>
              <div className="text-sm space-y-2 text-center flex-grow flex flex-col justify-center">
                <div className="space-y-1">
                  <p className="text-gray-700">• Groupes scolaires avec accompagnateurs</p>
                  <p className="text-gray-700">• Pas de nourriture/boisson</p>
                  <p className="text-gray-700">• Photos sans flash</p>
                  <p className="text-gray-700">• Ne pas toucher aux œuvres</p>
                </div>
                <p className="text-[var(--gold)] text-sm font-medium mt-3">Accessible à tous</p>
              </div>
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
                <h2 className="text-xl font-semibold text-[var(--deep-black)]">Nous Trouver</h2>
                <p className="text-gray-600">Route de l'Aéroport, Dakar, Sénégal</p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-[var(--gold)]/20 shadow-lg mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30890.438903641774!2d-17.4351307!3d14.6772877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172538b8abfdf%3A0xdd1143ed7cd3e02d!2sMus%C3%A9e%20des%20Civilisations%20noires!5e0!3m2!1sfr!2ssn!4v1728170627256!5m2!1sfr!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Musée des Civilisations Noires"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">
                  Le Musée des Civilisations Noires est situé au cœur de Dakar, facilement accessible depuis l'aéroport international Blaise Diagne et le centre-ville.
                </p>
                <a 
                  href="https://www.google.com/maps/place/Mus%C3%A9e+des+Civilisations+noires/@14.677288,-17.435131,16z/data=!4m6!3m5!1s0xec172538b8abfdf:0xdd1143ed7cd3e02d!8m2!3d14.6772877!4d-17.4351307!16s%2Fg%2F11fj32bdwt?hl=fr-FR&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-white hover:text-[var(--gold)] transition-colors text-sm font-medium"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
