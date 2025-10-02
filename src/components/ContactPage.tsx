import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  return (
    <div className="min-h-screen py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 text-[var(--deep-black)]">
            Nous <span className="text-[var(--gold)]">Contacter</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Une question ? Une suggestion ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-[var(--gold)]/30 bg-white">
              <h2 className="mb-6 text-[var(--deep-black)]">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      placeholder="Votre prénom"
                      className="border-[var(--gold)]/20 focus:border-[var(--gold)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      placeholder="Votre nom"
                      className="border-[var(--gold)]/20 focus:border-[var(--gold)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@example.com"
                    className="border-[var(--gold)]/20 focus:border-[var(--gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+221 XX XXX XX XX"
                    className="border-[var(--gold)]/20 focus:border-[var(--gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    placeholder="Objet de votre message"
                    className="border-[var(--gold)]/20 focus:border-[var(--gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Écrivez votre message ici..."
                    rows={6}
                    className="border-[var(--gold)]/20 focus:border-[var(--gold)] resize-none"
                  />
                </div>

                <Button className="w-full bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] gap-2">
                  <Send size={18} />
                  Envoyer le message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 border-[var(--gold)]/30 bg-white hover:border-[var(--gold)]/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[var(--gold)]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[var(--deep-black)]">Adresse</h3>
                    <p className="text-gray-600">
                      Route de l'Aéroport LSS<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-[var(--gold)]/30 bg-white hover:border-[var(--gold)]/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[var(--gold)]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[var(--deep-black)]">Téléphone</h3>
                    <p className="text-gray-600">
                      +221 33 823 92 00<br />
                      Lun - Ven: 9h - 17h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-[var(--gold)]/30 bg-white hover:border-[var(--gold)]/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[var(--gold)]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[var(--deep-black)]">Email</h3>
                    <p className="text-gray-600">
                      contact@mcn.sn<br />
                      info@mcn.sn
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-[var(--gold)]/30 bg-white">
                <h3 className="mb-4 text-[var(--deep-black)]">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi</span>
                    <span className="text-gray-800">Fermé</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mardi - Dimanche</span>
                    <span className="text-gray-800">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jours fériés</span>
                    <span className="text-gray-800">Fermé</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[var(--deep-black)]">
              Nos <span className="text-[var(--gold)]">Partenaires</span>
            </h2>
            <p className="text-gray-600">
              Ils nous soutiennent dans notre mission de préservation culturelle
            </p>
          </div>

          <Card className="p-12 border-[var(--gold)]/30 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 rounded-lg bg-[var(--off-white)] border border-[var(--gold)]/10 hover:border-[var(--gold)]/30 transition-all"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--ochre)] flex items-center justify-center">
                      <span className="text-white">P{index}</span>
                    </div>
                    <p className="text-sm text-gray-600">Partenaire {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
