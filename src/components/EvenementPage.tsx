// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Card } from './ui/card';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { Trophy, Calendar, Users, Code, Lightbulb, Award } from 'lucide-react';

// export function EvenementPage() {
//   return (
//     <div className="min-h-screen py-24 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Hero */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//             <div className="relative h-96">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzU5MzY2MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Hackathon 2025"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-black)]/90 via-[var(--deep-black)]/70 to-transparent" />
//               <div className="absolute inset-0 flex items-center">
//                 <div className="container mx-auto px-8">
//                   <Badge className="mb-4 bg-[var(--gold)] text-[var(--deep-black)] border-0">
//                     Événement 2025
//                   </Badge>
//                   <h1 className="mb-4 text-white text-4xl font-bold max-w-2xl">
//                     Événement Innovation & Patrimoine Culturel
//                   </h1>
//                   <p className="mb-6 text-gray-200 max-w-xl">
//                     Rejoignez-nous pour un événement unique qui combine technologie et culture africaine
//                   </p>
//                   <div className="flex flex-wrap gap-4">
//                     <a 
//                       href="https://drive.google.com/file/d/1wANY5Fi0AlASDTFs5WyVAJF07AzqUwGW/view" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] rounded-md font-medium transition-colors gap-2"
//                     >
//                       <Users size={18} />
//                       S'inscrire maintenant
//                     </a>
                  
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Objectif */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <div className="text-center mb-12">
//             <h2 className="mb-4 text-[var(--deep-black)]">
//               <span className="text-[var(--gold)]">Objectif</span> de l'Événement
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
//               <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
//                 <Lightbulb className="text-[var(--gold)]" size={32} />
//               </div>
//               <h3 className="mb-3 text-[var(--deep-black)]">Innovation</h3>
//               <p className="text-gray-600">
//                 Développer des solutions technologiques innovantes pour préserver et 
//                 promouvoir le patrimoine culturel africain
//               </p>
//             </Card>

//             <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
//               <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
//                 <Code className="text-[var(--gold)]" size={32} />
//               </div>
//               <h3 className="mb-3 text-[var(--deep-black)]">Technologie</h3>
//               <p className="text-gray-600">
//                 Utiliser les technologies modernes (IA, AR/VR, Web3) pour créer des 
//                 expériences immersives autour de l'art africain
//               </p>
//             </Card>

//             <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
//               <div className="w-16 h-16 mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
//                 <Users className="text-[var(--gold)]" size={32} />
//               </div>
//               <h3 className="mb-3 text-[var(--deep-black)]">Collaboration</h3>
//               <p className="text-gray-600">
//                 Réunir développeurs, designers, historiens et artistes pour créer 
//                 des projets impactants et significatifs
//               </p>
//             </Card>
//           </div>
//         </div>

//         {/* Dates Clés */}
//         <div className="max-w-6xl mx-auto mb-16 px-4 sm:px-6">
//           <div className="text-center mb-12">
//             <h2 className="mb-4 text-3xl font-bold text-[var(--deep-black)]">
//               Dates <span className="text-[var(--gold)]">Clés</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Découvrez les moments forts de notre événement
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline Line - Mobile */}
//             <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--gold)]/30 lg:hidden" />
//             {/* Timeline Line - Desktop */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--gold)]/30 hidden lg:block" />

//             <div className="space-y-8 lg:space-y-12">
//               {/* Date 1 */}
//               <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center relative">
//                 <div className="flex-1 lg:text-right lg:pr-8">
//                   <Card className="p-5 sm:p-6 border-[var(--gold)]/30 bg-[var(--off-white)] hover:shadow-md transition-shadow">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center mx-auto sm:mx-0">
//                         <Calendar size={20} />
//                       </div>
//                       <div className="text-center sm:text-left">
//                         <h4 className="text-lg font-semibold text-[var(--deep-black)] mb-1">Inscriptions</h4>
//                         <p className="text-sm text-gray-600">1 Octobre - 3 Octobre 2025</p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//                 {/* Timeline dot - Mobile */}
//                 <div className="absolute left-0 top-6 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-[var(--gold)] lg:hidden z-10" />
//                 {/* Timeline dot - Desktop */}
//                 <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--gold)] flex-shrink-0" />
//                 <div className="lg:flex-1" />
//               </div>

//               {/* Date 2 */}
//               <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center relative">
//                 <div className="lg:flex-1" />
//                 {/* Timeline dot - Desktop */}
//                 <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--gold)] flex-shrink-0" />
//                 <div className="flex-1 lg:pl-8">
//                   <Card className="p-5 sm:p-6 border-[var(--gold)]/30 bg-[var(--off-white)] hover:shadow-md transition-shadow">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center mx-auto sm:mx-0">
//                         <Users size={20} />
//                       </div>
//                       <div className="text-center sm:text-left">
//                         <h4 className="text-lg font-semibold text-[var(--deep-black)] mb-1">Formation des équipes</h4>
//                         <p className="text-sm text-gray-600">3 Octobre 2025</p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//                 {/* Timeline dot - Mobile */}
//                 <div className="absolute left-0 top-6 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-[var(--gold)] lg:hidden z-10" />
//               </div>

//               {/* Date 3 */}
//               <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center relative">
//                 <div className="flex-1 lg:text-right lg:pr-8">
//                   <Card className="p-5 sm:p-6 border-[var(--gold)]/30 bg-[var(--off-white)] hover:shadow-md transition-shadow">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center mx-auto sm:mx-0">
//                         <Code size={20} />
//                       </div>
//                       <div className="text-center sm:text-left">
//                         <h4 className="text-lg font-semibold text-[var(--deep-black)] mb-1">Événement principal</h4>
//                         <p className="text-sm text-gray-600">8-9 Novembre 2025</p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//                 {/* Timeline dot - Mobile */}
//                 <div className="absolute left-0 top-6 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-[var(--gold)] lg:hidden z-10" />
//                 {/* Timeline dot - Desktop */}
//                 <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--gold)] flex-shrink-0" />
//                 <div className="lg:flex-1" />
//               </div>

//               {/* Date 4 */}
//               <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center relative">
//                 <div className="lg:flex-1" />
//                 {/* Timeline dot - Desktop */}
//                 <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--gold)] flex-shrink-0" />
//                 <div className="flex-1 lg:pl-8">
//                   <Card className="p-5 sm:p-6 border-[var(--gold)]/30 bg-[var(--off-white)] hover:shadow-md transition-shadow">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] text-white flex items-center justify-center mx-auto sm:mx-0">
//                         <Trophy size={20} />
//                       </div>
//                       <div className="text-center sm:text-left">
//                         <h4 className="text-lg font-semibold text-[var(--deep-black)] mb-1">Cérémonie de remise des prix</h4>
//                         <p className="text-sm text-gray-600">9 Novembre 2025, 18h00</p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//                 {/* Timeline dot - Mobile */}
//                 <div className="absolute left-0 top-6 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-[var(--gold)] lg:hidden z-10" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Événement Principal */}
//         <div id="evenement-principal" className="max-w-6xl mx-auto mb-16">
//           <div className="text-center mb-12">
//             <h2 className="mb-4 text-[var(--deep-black)]">
//               <span className="text-[var(--gold)]">Événement</span> Principal
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Découvrez les détails de notre hackathon d'innovation culturelle
//             </p>
//           </div>
          
//           <Card className="p-8 border-[var(--gold)]/30">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-2xl font-bold text-[var(--deep-black)] mb-4">Hackathon Innovation & Culture</h3>
//                 <p className="text-gray-600 mb-6">
//                   Pendant 48 heures, venez relever le défi de créer des solutions innovantes pour la préservation et la mise en valeur du patrimoine culturel africain à travers les nouvelles technologies.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <Calendar className="text-[var(--gold)] mt-1 flex-shrink-0" size={20} />
//                     <div>
//                       <p className="font-medium text-[var(--deep-black)]">8-9 Novembre 2025</p>
//                       <p className="text-sm text-gray-600">48h non-stop d'innovation</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)] mt-1 flex-shrink-0">
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                       <circle cx="12" cy="10" r="3"></circle>
//                     </svg>
//                     <div>
//                       <p className="font-medium text-[var(--deep-black)]">Musée des Civilisations Noires</p>
//                       <p className="text-sm text-gray-600">Dakar, Sénégal</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 rounded-lg p-6">
//                 <h4 className="font-semibold text-[var(--deep-black)] mb-3">Thématiques du hackathon :</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
//                     <span>Réalité augmentée/virtuelle pour l'expérience muséale</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
//                     <span>Solutions numériques pour la préservation du patrimoine</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
//                     <span>Expériences interactives pour les visiteurs</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
//                     <span>Technologies d'accessibilité pour les musées</span>
//                   </li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]">
//                   Voir le règlement complet
//                 </Button>              </div>
//             </div>
//           </Card>
//         </div>

//         {/* Prix */}
//         <div className="max-w-6xl mx-auto mt-16">
//           <div className="text-center mb-12">
//             <h2 className="mb-4 text-[var(--deep-black)]">
//               Prix & <span className="text-[var(--gold)]">Récompenses</span>
//             </h2>
//             <p className="text-gray-600">
//               Des prix exceptionnels pour récompenser les meilleures innovations
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="p-8 text-center border-[var(--gold)] bg-gradient-to-b from-[var(--gold)]/10 to-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full -mr-16 -mt-16" />
//               <div className="relative">
//                 <Trophy className="mx-auto mb-4 text-[var(--gold)]" size={48} />
//                 <div className="mb-2 text-[var(--gold)]">1er Prix</div>
//                 <h3 className="mb-4 text-[var(--deep-black)]">5,000,000 FCFA</h3>
//                 <ul className="text-sm text-gray-600 space-y-2">
//                   <li>💰 Prix en espèces</li>
//                   <li>🎯 Mentorat de 6 mois</li>
//                   <li>💼 Accès aux investisseurs</li>
//                 </ul>
//               </div>
//             </Card>

//             <Card className="p-8 text-center border-[var(--gold)]/60 bg-gradient-to-b from-[var(--gold)]/5 to-white">
//               <Award className="mx-auto mb-4 text-[var(--ochre)]" size={48} />
//               <div className="mb-2 text-[var(--ochre)]">2ème Prix</div>
//               <h3 className="mb-4 text-[var(--deep-black)]">3,000,000 FCFA</h3>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>💰 Prix en espèces</li>
//                 <li>🎯 Mentorat de 3 mois</li>
//                 <li>📚 Formation gratuite</li>
//               </ul>
//             </Card>

//             <Card className="p-8 text-center border-[var(--gold)]/40 bg-gradient-to-b from-[var(--gold)]/5 to-white">
//               <Award className="mx-auto mb-4 text-[var(--ochre)]" size={48} />
//               <div className="mb-2 text-[var(--ochre)]">3ème Prix</div>
//               <h3 className="mb-4 text-[var(--deep-black)]">1,500,000 FCFA</h3>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>💰 Prix en espèces</li>
//                 <li>🎯 Mentorat de 1 mois</li>
//                 <li>🎁 Goodies exclusifs</li>
//               </ul>
//             </Card>
//           </div>

//           <div className="mt-12 text-center">
//             <Button className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] px-8 py-6">
//               Participer au Hackathon 2025
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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
        {/* HERO */}
        <section className="relative mb-20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-[22rem] sm:h-[28rem] md:h-[32rem]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
              alt="Hackathon 2025"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-10 md:px-16">
                <Badge className="mb-4 bg-[var(--gold)] text-[var(--deep-black)] border-0 text-sm">
                  Événement 2025
                </Badge>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl">
                  Innovation & Patrimoine Culturel
                </h1>
                <p className="mt-3 text-gray-200 max-w-xl text-sm sm:text-base">
                  Rejoignez-nous pour un événement unique alliant technologie et culture africaine.
                </p>
                <a
                  href="https://drive.google.com/file/d/1wANY5Fi0AlASDTFs5WyVAJF07AzqUwGW/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 items-center px-5 py-3 bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] font-medium rounded-lg transition gap-2"
                >
                  <Users size={18} />
                  S'inscrire maintenant
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIFS */}
        <section className="max-w-6xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-[var(--gold)]">Objectifs</span> de l'Événement
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Créer des solutions innovantes pour préserver le patrimoine culturel africain."
              },
              {
                icon: Code,
                title: "Technologie",
                text: "Utiliser l’IA, la réalité augmentée et le web3 pour des expériences immersives."
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Rassembler développeurs, designers, artistes et historiens pour innover ensemble."
              }
            ].map((item, i) => (
              <Card
                key={i}
                className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <item.icon className="text-[var(--gold)]" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ TIMELINE RESPONSIVE */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Dates <span className="text-[var(--gold)]">Clés</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les moments forts de l’événement.
            </p>
          </div>

          {/* Version mobile */}
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

          {/* Version desktop */}
          <div className="hidden md:grid grid-cols-9 gap-6 relative">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 0 ? 'col-start-1 col-end-5 justify-self-end' : 'col-start-6 col-end-10 justify-self-start'} relative`}
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

                {/* Ligne centrale + point */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[-1.5rem] md:right-auto md:left-auto">
                  <div className="w-5 h-5 bg-[var(--gold)] rounded-full border-4 border-white shadow-md" />
                </div>
              </div>
            ))}

            {/* Ligne centrale verticale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gold)]/70 to-transparent animate-pulse -translate-x-1/2" />
          </div>
        </section>
      </div>
    </div>
  );
}
