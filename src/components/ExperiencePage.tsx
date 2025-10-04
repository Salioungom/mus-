import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { QrCode, Headphones, Smartphone, Volume2, Languages } from 'lucide-react';

export function ExperiencePage() {
  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 text-[var(--deep-black)]">
            Expérience <span className="text-[var(--gold)]">Interactive</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Plongez dans une visite immersive et multilingue grâce à nos outils interactifs
          </p>
        </div>

        {/* Language Selector */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-br from-[var(--off-white)] to-white border-[var(--gold)]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Languages className="text-[var(--gold)]" size={24} />
              </div>
              <div>
                <h2 className="text-[var(--deep-black)]">Navigation Multilingue</h2>
                <p className="text-sm text-gray-600">Choisissez votre langue préférée</p>
              </div>
            </div>
            
            <Tabs defaultValue="fr" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[var(--off-white)]">
                <TabsTrigger value="fr" className="data-[state=active]:bg-[var(--gold)] data-[state=active]:text-[var(--deep-black)]">
                  🇫🇷 Français
                </TabsTrigger>
                <TabsTrigger value="en" className="data-[state=active]:bg-[var(--gold)] data-[state=active]:text-[var(--deep-black)]">
                  🇬🇧 English
                </TabsTrigger>
                <TabsTrigger value="wo" className="data-[state=active]:bg-[var(--gold)] data-[state=active]:text-[var(--deep-black)]">
                  🇸🇳 Wolof
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="fr" className="mt-6">
                <div className="p-6 bg-white rounded-lg border border-[var(--gold)]/20">
                  <h3 className="mb-2 text-[var(--deep-black)]">Bienvenue au Musée</h3>
                  <p className="text-gray-600">
                    Explorez notre collection en français avec des descriptions détaillées, 
                    des guides audio et des vidéos enrichissantes.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="en" className="mt-6">
                <div className="p-6 bg-white rounded-lg border border-[var(--gold)]/20">
                  <h3 className="mb-2 text-[var(--deep-black)]">Welcome to the Museum</h3>
                  <p className="text-gray-600">
                    Explore our collection in English with detailed descriptions, 
                    audio guides and enriching videos.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="wo" className="mt-6">
                <div className="p-6 bg-white rounded-lg border border-[var(--gold)]/20">
                  <h3 className="mb-2 text-[var(--deep-black)]">Dalal ak jàmm ci Muse bi</h3>
                  <p className="text-gray-600">
                    Xool sa collection bi ci Wolof ak ay tànneef yu mat, 
                    ay guide audio ak ay widéo yu am solo.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* QR Code Scanner */}
          <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <QrCode className="text-[var(--gold)]" size={32} />
              </div>
              <h2 className="text-[var(--deep-black)]">Scanner QR Code</h2>
            </div>
            
            <div className="mb-6 relative h-64 bg-gradient-to-br from-[var(--gold)]/5 to-[var(--ochre)]/5 rounded-lg flex items-center justify-center border-2 border-dashed border-[var(--gold)]/30">
              <div className="text-center">
                <Smartphone className="mx-auto mb-4 text-[var(--gold)]" size={64} />
                <p className="text-gray-600">Zone de scan QR Code</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Pointez votre appareil vers le code QR</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Accédez instantanément aux informations</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Découvrez du contenu exclusif</span>
              </li>
            </ul>
            
            <Button className="w-full bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]">
              Activer le scanner
            </Button>
          </Card>

          {/* Audio Guide */}
          <Card className="p-8 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <Headphones className="text-[var(--gold)]" size={32} />
              </div>
              <h2 className="text-[var(--deep-black)]">Guide Audio</h2>
            </div>
            
            <div className="mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzU5MzY2MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Audio guide"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Descriptions détaillées par des experts</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Histoires et anecdotes fascinantes</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2" />
                <span>Disponible dans 3 langues</span>
              </li>
            </ul>
            
            <Button className="w-full bg-[var(--deep-black)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-colors gap-2">
              <Volume2 size={18} />
              Écouter le guide
            </Button>
          </Card>
        </div>

        {/* How it Works */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-[var(--deep-black)]">
            Comment <span className="text-[var(--gold)]">ça marche</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)] text-white flex items-center justify-center">
                1
              </div>
              <h4 className="mb-2 text-[var(--deep-black)]">Scannez</h4>
              <p className="text-sm text-gray-600">
                Utilisez votre smartphone pour scanner le QR code
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)] text-white flex items-center justify-center">
                2
              </div>
              <h4 className="mb-2 text-[var(--deep-black)]">Choisissez</h4>
              <p className="text-sm text-gray-600">
                Sélectionnez votre langue préférée
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)] text-white flex items-center justify-center">
                3
              </div>
              <h4 className="mb-2 text-[var(--deep-black)]">Écoutez</h4>
              <p className="text-sm text-gray-600">
                Profitez du guide audio immersif
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)] text-white flex items-center justify-center">
                4
              </div>
              <h4 className="mb-2 text-[var(--deep-black)]">Explorez</h4>
              <p className="text-sm text-gray-600">
                Découvrez photos, vidéos et détails
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
