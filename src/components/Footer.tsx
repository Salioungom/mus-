import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--deep-black)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--gold)] to-[var(--ochre)] rounded-lg flex items-center justify-center">
                <span className="font-serif">MCN</span>
              </div>
              <div className="text-sm">
                <div>Musée des</div>
                <div className="text-[var(--gold)]">Civilisations Noires</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Préserver et célébrer l'héritage des civilisations noires à travers le monde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[var(--gold)]">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">
                  Expositions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">
                  Événements
                </a>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="mb-4 text-[var(--gold)]">Visiter</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Horaires & Tarifs</li>
              <li>Visite guidée</li>
              <li>Accessibilité</li>
              <li>Plan du musée</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[var(--gold)]">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Route de l'Aéroport LSS</li>
              <li>Dakar, Sénégal</li>
              <li>+221 33 823 92 00</li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                contact@mcn.sn
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-[var(--gold)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Musée des Civilisations Noires. Tous droits réservés.
            </p>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
