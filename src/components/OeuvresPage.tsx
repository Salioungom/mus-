import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { QrCode, Headphones, Video } from 'lucide-react';
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  period: string;
  image: string;
  description: string;
  audioUrl: string;
  videoUrl: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Masque Cérémonial",
    category: "Sculpture",
    period: "XIXe siècle",
    image: "https://images.unsplash.com/photo-1566417898929-52af8d8cdab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFzayUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1OTMyMjcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Ce masque cérémonial était utilisé lors des rituels sacrés. Sculpté dans du bois d'ébène, il représente les ancêtres et sert de lien entre le monde des vivants et celui des esprits. Les motifs géométriques symbolisent l'harmonie cosmique.",
    audioUrl: "#",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Sculpture Ancestrale",
    category: "Sculpture",
    period: "XVIIIe siècle",
    image: "https://images.unsplash.com/photo-1682668701024-b6508708a764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2N1bHB0dXJlJTIwYXJ0fGVufDF8fHx8MTc1OTM2NjE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Figure ancestrale en terre cuite représentant un chef de tribu. Cette œuvre témoigne de l'excellence technique des artisans de l'époque et de l'importance accordée à la mémoire des leaders communautaires.",
    audioUrl: "#",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Textile Traditionnel",
    category: "Textile",
    period: "XXe siècle",
    image: "https://images.unsplash.com/photo-1758633854855-3059c5b48674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMHBhdHRlcm58ZW58MXx8fHwxNzU5MzY2MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Tissu Kente tissé à la main avec des fils de coton et de soie. Chaque couleur et motif raconte une histoire spécifique et transmet des messages de sagesse, de richesse et de statut social.",
    audioUrl: "#",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "Sculpture en Bois",
    category: "Sculpture",
    period: "XVIIe siècle",
    image: "https://images.unsplash.com/photo-1700985958097-c75dea592121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29vZGVuJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc1OTM2NjE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sculpture traditionnelle en bois noble représentant une divinité protectrice. L'artiste a capturé l'essence spirituelle à travers des lignes épurées et une expression sereine.",
    audioUrl: "#",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "Parure Royale",
    category: "Bijoux",
    period: "XIXe siècle",
    image: "https://images.unsplash.com/photo-1757140448241-ba7511316754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwamV3ZWxyeSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1OTM2NjE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Collier cérémonial porté par les membres de la royauté. Composé de perles de verre colorées et d'or, il symbolise le pouvoir, la richesse et la connexion divine.",
    audioUrl: "#",
    videoUrl: "#"
  },
  {
    id: 6,
    title: "Poterie Ancestrale",
    category: "Céramique",
    period: "XVIIIe siècle",
    image: "https://images.unsplash.com/photo-1682668701024-b6508708a764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcG90dGVyeSUyMGNlcmFtaWNzfGVufDF8fHx8MTc1OTM2NjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Vase en terre cuite orné de motifs géométriques complexes. Utilisé pour stocker l'eau et les denrées alimentaires, il témoigne du savoir-faire technique des potiers africains.",
    audioUrl: "#",
    videoUrl: "#"
  }
];

export function OeuvresPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="min-h-screen py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 text-[var(--deep-black)]">
            Notre <span className="text-[var(--gold)]">Collection</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explorez notre collection exceptionnelle d'œuvres d'art et d'artefacts 
            qui racontent l'histoire riche et diversifiée des civilisations africaines
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="group overflow-hidden border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[var(--gold)] text-[var(--deep-black)] border-0">
                    {artwork.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2 text-sm text-gray-500">{artwork.period}</div>
                <h3 className="mb-3 text-[var(--deep-black)]">{artwork.title}</h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {artwork.description}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="w-full bg-[var(--deep-black)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-colors gap-2"
                    >
                      <QrCode size={18} />
                      Voir les détails
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--deep-black)]">
                        {artwork.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div className="relative h-96 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-[var(--gold)] text-[var(--gold)]">
                          {artwork.category}
                        </Badge>
                        <Badge variant="outline">
                          {artwork.period}
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 text-[var(--deep-black)]">Description</h4>
                        <p className="text-gray-600">
                          {artwork.description}
                        </p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                        >
                          <Headphones size={18} />
                          Écouter l'audio guide
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                        >
                          <Video size={18} />
                          Voir la vidéo
                        </Button>
                      </div>
                      
                      <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
                        <div className="flex items-center gap-3 mb-2">
                          <QrCode className="text-[var(--gold)]" size={24} />
                          <h4 className="text-[var(--deep-black)]">Code QR</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Scannez le QR code devant l'œuvre au musée pour accéder à cette page 
                          et découvrir du contenu exclusif
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
