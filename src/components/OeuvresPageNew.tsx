import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { useState, useEffect } from 'react';
import { QrCode, Video, Headphones } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { supabase, Artwork, ArtworkDescription } from '../lib/supabase';
import { QRScanner } from './QRScanner';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function OeuvresPageNew() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [description, setDescription] = useState<ArtworkDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    loadArtworks();
  }, []);

  useEffect(() => {
    if (selectedArtwork) {
      loadDescription(selectedArtwork.id);
    }
  }, [selectedArtwork, language]);

  const loadArtworks = async () => {
    try {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setArtworks(data || []);
    } catch (error) {
      console.error('Error loading artworks:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadDescription = async (artworkId: string) => {
    try {
      const { data, error } = await supabase
        .from('artwork_descriptions')
        .select('*')
        .eq('artwork_id', artworkId)
        .eq('language', language)
        .maybeSingle();

      if (error) throw error;
      setDescription(data);
    } catch (error) {
      console.error('Error loading description:', error);
    }
  };

  const handleQRScan = async (artworkId: string) => {
    const artwork = artworks.find(a => a.id === artworkId || a.qr_code_data === artworkId);
    if (artwork) {
      setSelectedArtwork(artwork);
    }
  };

  const getTitle = (artwork: Artwork) => {
    switch (language) {
      case 'en': return artwork.title_en;
      case 'wo': return artwork.title_wo;
      default: return artwork.title_fr;
    }
  };

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(a => a.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(artworks.map(a => a.category)))];

  if (loading) {
    return (
      <div className="min-h-screen py-24 bg-[var(--off-white)] flex items-center justify-center">
        <Loader2 className="animate-spin text-[var(--gold)]" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-[var(--deep-black)]">
            {t(translations.artworks.title)} <span className="text-[var(--gold)]">{t(translations.artworks.titleHighlight)}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            {t(translations.artworks.description)}
          </p>
          <QRScanner onScan={handleQRScan} />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category: string) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]'
                  : 'border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10'
              }
            >
              {t(translations.artworks.categories[category as keyof typeof translations.artworks.categories] ||
                { fr: category, en: category, wo: category })}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredArtworks.map((artwork: Artwork) => (
            <Card key={artwork.id} className="group overflow-hidden border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={artwork.image_url}
                  alt={getTitle(artwork)}
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
                <h3 className="mb-3 text-[var(--deep-black)]">{getTitle(artwork)}</h3>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="w-full bg-[var(--deep-black)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-colors gap-2"
                    >
                      <QrCode size={18} />
                      {t(translations.artworks.viewDetails)}
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--deep-black)]">
                        {getTitle(artwork)}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div className="relative h-96 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={artwork.image_url}
                          alt={getTitle(artwork)}
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
                        <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Description</h4>
                        <p className="text-gray-600">
                          {description?.description || t(translations.artworks.description)}
                        </p>
                      </div>

                      {description?.history && (
                        <div>
                          <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Histoire et Contexte</h4>
                          <p className="text-gray-600">{description.history}</p>
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                          onClick={() => {
                            if (description?.audio_url) {
                              window.open(description.audio_url, '_blank');
                            } else {
                              setErrorMessage("L'audio guide n'est pas disponible pour cette œuvre.");
                              setIsErrorDialogOpen(true);
                            }
                          }}
                        >
                          <Headphones size={18} />
                          Écouter l'audio guide
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                          onClick={() => {
                            if (description?.video_url) {
                              window.open(description.video_url, '_blank');
                            } else {
                              setErrorMessage("La vidéo n'est pas disponible pour cette œuvre.");
                              setIsErrorDialogOpen(true);
                            }
                          }}
                        >
                          <Video size={18} />
                          Voir la vidéo
                        </Button>
                      </div>

                      <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
                        <div className="flex items-center gap-3 mb-3">
                          <QrCode className="text-[var(--gold)]" size={24} />
                          <h4 className="text-[var(--deep-black)] font-semibold">Code QR</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Scannez le QR code devant l'œuvre au musée pour accéder à cette page
                          et découvrir du contenu exclusif
                        </p>
                      </div>
                    </div>
                    <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
                      <DialogContent className="w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
                        <DialogHeader className="mb-4">
                          <DialogTitle className="text-xl md:text-2xl text-[var(--deep-black)]">
                            Information
                          </DialogTitle>
                        </DialogHeader>
                        <div className="py-2">
                          <p className="text-base md:text-lg text-gray-700">
                            {errorMessage}
                          </p>
                        </div>
                        <div className="mt-6 flex justify-end">
                        </div>
                      </DialogContent>
                    </Dialog>
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
