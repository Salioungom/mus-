// import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-[var(--deep-black)] text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           {/* About */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img 
//                 src="https://mcn-sn.com/wp-content/uploads/2025/02/Logo_MCN_ang_Fran_Plan-de-travail-1-copie-4.png" 
//                 alt="Musée des Civilisations Noires" 
//                 className="h-12 w-auto object-contain"
//               />
//               <div className="text-sm">
//                 <div>Musée des</div>
//                 <div className="text-[var(--gold)]">Civilisations Noires</div>
//               </div>
//             </div>
//             <p className="text-sm text-gray-400">
//               Préserver et célébrer l'héritage des civilisations noires à travers le monde.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="mb-4 text-[var(--gold)]">Liens Rapides</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//             <li>
//                 <a href="/home" className="hover:text-[var(--gold)] transition-colors">
//                   Accueil
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-[var(--gold)] transition-colors">
//                   À propos
//                 </a>
//               </li>
//               <li>
//                 <a href="/oeuvres" className="hover:text-[var(--gold)] transition-colors">
//                   Œuvres
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-[var(--gold)] transition-colors">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="/evenement" className="hover:text-[var(--gold)] transition-colors">
//                   Événements
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Visit */}
//           <div>
//             <h4 className="mb-4 text-[var(--gold)]">Visiter</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Horaires & Tarifs</li>
//               <li>Visite guidée</li>
//               <li>Accessibilité</li>
//               <li>Plan du musée</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="mb-4 text-[var(--gold)]">Contact</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Route de l'Aéroport LSS</li>
//               <li>Dakar, Sénégal</li>
//               <li>+221 33 823 92 00</li>
//               <li className="flex items-center gap-2">
//                 <Mail size={14} />
//                 contact@mcn.sn
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Social & Copyright */}
//         <div className="pt-8 border-t border-[var(--gold)]/20">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-gray-400">
//               © 2025 Musée des Civilisations Noires. Tous droits réservés.
//             </p>
            
//             <div className="flex gap-4">
//               <a
//                 href="https://www.facebook.com/mcndakar/?locale=fr_FR"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
//               >
//                 <Facebook size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
//               >
//                 <Instagram size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
//               >
//                 <Twitter size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
//               >
//                 <Youtube size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Info,
  Home,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-black)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* --- À propos --- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://mcn-sn.com/wp-content/uploads/2025/02/Logo_MCN_ang_Fran_Plan-de-travail-1-copie-4.png"
                alt="Musée des Civilisations Noires"
                className="h-12 w-auto object-contain"
              />
              <div className="text-sm leading-tight">
                <div>Musée des</div>
                <div className="text-[var(--gold)] font-semibold">
                  Civilisations Noires
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Préserver et célébrer l'héritage des civilisations noires à travers le monde.
            </p>
          </div>

          {/* --- Liens rapides --- */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-[var(--gold)] font-semibold">
              <Home size={18} className="text-[var(--gold)]" />
              Liens Rapides
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Accueil", href: "/home" },
                { label: "À propos", href: "/about" },
                { label: "Œuvres", href: "/oeuvres" },
                { label: "Événements", href: "/evenement" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-2"
                  >
                    <Navigation size={14} /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Visiter --- */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-[var(--gold)] font-semibold">
              <MapPin size={18} className="text-[var(--gold)]" />
              Visiter
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock size={14} /> Horaires & Tarifs
              </li>
              <li className="flex items-center gap-2">
                <Info size={14} /> Visite guidée
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Accessibilité
              </li>
              <li className="flex items-center gap-2">
                <Navigation size={14} /> Plan du musée
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-[var(--gold)] font-semibold">
              <Mail size={18} className="text-[var(--gold)]" />
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Route de l'Aéroport LSS, Dakar
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +221 33 823 92 00
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:contact@mcn.sn"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  contact@mcn.sn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bas de page --- */}
        <div className="pt-8 border-t border-[var(--gold)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Musée des Civilisations Noires. Tous droits réservés.
            </p>

            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/mcndakar/?locale=fr_FR",
                  icon: Facebook,
                  label: "Facebook",
                },
                { href: "#", icon: Instagram, label: "Instagram" },
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
