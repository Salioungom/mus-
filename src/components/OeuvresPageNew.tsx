import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { QrCode, Video, Pause, Play, Loader as Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { supabase, Artwork, ArtworkDescription } from '../lib/supabase';
import { QRScanner } from './QRScanner';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function OeuvresPageNew() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [description, setDescription] = useState<ArtworkDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const toggleAudio = () => {
    if (!audioRef.current || !description?.audio_url) return;

    if (playingAudio === selectedArtwork?.id) {
      audioRef.current.pause();
      setPlayingAudio(null);
    } else {
      audioRef.current.play();
      setPlayingAudio(selectedArtwork?.id || null);
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
          {categories.map((category) => (
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
          {filteredArtworks.map((artwork) => (
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

                      {description && (
                        <>
                          <div>
                            <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Description</h4>
                            <p className="text-gray-600">
                              {description.description}
                            </p>
                          </div>

                          {description.history && (
                            <div>
                              <h4 className="mb-2 text-[var(--deep-black)] font-semibold">
                                {t(translations.artworks.history)}
                              </h4>
                              <p className="text-gray-600">
                                {description.history}
                              </p>
                            </div>
                          )}
                        </>
                      )}

                      <div className="grid sm:grid-cols-2 gap-4">
                        {description?.audio_url && (
                          <>
                            <Button
                              onClick={toggleAudio}
                              variant="outline"
                              className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                            >
                              {playingAudio === artwork.id ? (
                                <><Pause size={18} /> {t(translations.artworks.pauseAudio)}</>
                              ) : (
                                <><Play size={18} /> {t(translations.artworks.playAudio)}</>
                              )}
                            </Button>
                            <audio
                              ref={audioRef}
                              src={description.audio_url}
                              onEnded={() => setPlayingAudio(null)}
                            />
                          </>
                        )}
                        {description?.video_url && (
                          <Button
                            onClick={() => window.open(description.video_url!, '_blank')}
                            variant="outline"
                            className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                          >
                            <Video size={18} />
                            {t(translations.artworks.watchVideo)}
                          </Button>
                        )}
                      </div>

                      <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
                        <div className="flex items-center gap-3 mb-3">
                          <QrCode className="text-[var(--gold)]" size={24} />
                          <h4 className="text-[var(--deep-black)] font-semibold">
                            {t(translations.artworks.qrCode)}
                          </h4>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <QRCodeSVG
                              value={artwork.id}
                              size={200}
                              level="H"
                              includeMargin
                            />
                          </div>
                          <p className="text-sm text-gray-600 text-center">
                            {t(translations.artworks.qrDescription)}
                          </p>
                        </div>
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
