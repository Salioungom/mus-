// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Button } from './ui/button';
// import { Card } from './ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
// import { Badge } from './ui/badge';
// import { useState, useEffect, useRef } from 'react';
// import { QrCode, Video, Headphones } from 'lucide-react';
// import { Loader2 } from 'lucide-react';
// import { Artwork, ArtworkDescription } from '../lib/artworkService';
// import { getArtworkByQr } from '../lib/artworkService';
// import { supabase } from '../lib/supabase'; // Utilisation du client Supabase centralisé
// import { QRScanner } from './QRScanner';
// import { useLanguage } from '../contexts/LanguageContext';
// import { translations } from '../translations';

// export function OeuvresPageNew() {
//   const [artworks, setArtworks] = useState<Artwork[]>([]);
//   const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
//   const [description, setDescription] = useState<ArtworkDescription | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
//   const { language, t } = useLanguage();

//   useEffect(() => {
//     loadArtworks();
//   }, []);

//   useEffect(() => {
//     if (selectedArtwork) {
//       loadDescription(selectedArtwork.id);
//     }
//   }, [selectedArtwork, language]);

//   const loadArtworks = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('artworks')
//         .select('*')
//         .order('created_at', { ascending: true });

//       if (error) throw error;
//       setArtworks(data || []);
//     } catch (error) {
//       console.error('Error loading artworks:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadDescription = async (artworkId: string) => {
//     try {
//       const { data, error } = await supabase
//         .from('artwork_descriptions')
//         .select('*')
//         .eq('artwork_id', artworkId)
//         .eq('language', language)
//         .maybeSingle();

//       if (error) throw error;
//       setDescription(data);
//     } catch (error) {
//       console.error('Error loading description:', error);
//     }
//   };

//   const handleQRScan = async (qrCode: string) => {
//     try {
//       const artwork = await getArtworkByQr(qrCode, language);
//       if (artwork) {
//         // Mettre à jour l'œuvre sélectionnée avec le code QR scanné
//         setSelectedArtwork({
//           ...artwork,
//           qr_code_data: qrCode
//         });
//         // Fermer le dialogue d'erreur s'il était ouvert
//         setIsErrorDialogOpen(false);
//       } else {
//         setErrorMessage(t({
//           fr: 'Aucune œuvre trouvée pour ce code QR',
//           en: 'No artwork found for this QR code',
//           wo: 'Amul mbind moo gis ci code QR bi'
//         }));
//         setIsErrorDialogOpen(true);
//       }
//     } catch (error) {
//       console.error('Error fetching artwork:', error);
//       setErrorMessage(t({
//         fr: 'Erreur lors de la récupération des données',
//         en: 'Error fetching data',
//         wo: 'Jafe jafe bi ñu joxe xibaar bi'
//       }));
//       setIsErrorDialogOpen(true);
//     }
//   };

//   const getTitle = (artwork: Artwork) => {
//     switch (language) {
//       case 'en': return artwork.title_en;
//       case 'wo': return artwork.title_wo;
//       default: return artwork.title_fr;
//     }
//   };

//   const filteredArtworks = selectedCategory === 'all'
//     ? artworks
//     : artworks.filter(a => a.category === selectedCategory);

//   const categories = ['all', ...Array.from(new Set(artworks.map(a => a.category)))];

//   if (loading) {
//     return (
//       <div className="min-h-screen py-24 bg-[var(--off-white)] flex items-center justify-center">
//         <Loader2 className="animate-spin text-[var(--gold)]" size={48} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-24 bg-[var(--off-white)]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="mb-4 text-[var(--deep-black)]">
//             {t(translations.artworks.title)} <span className="text-[var(--gold)]">{t(translations.artworks.titleHighlight)}</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-gray-600 mb-8">
//             {t(translations.artworks.description)}
//           </p>
//           <div className="mt-6">
//             <QRScanner onScan={handleQRScan} />
//             <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
//               <DialogContent className="w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
//                 <DialogHeader className="mb-4">
//                   <DialogTitle className="text-xl md:text-2xl text-red-600">
//                     {t({ fr: 'Information', en: 'Information', wo: 'Xibaar' })}
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="py-2">
//                   <p className="text-base md:text-lg text-gray-700">
//                     {errorMessage}
//                   </p>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-2 justify-center mb-8">
//           {categories.map((category: string) => (
//             <Button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               variant={selectedCategory === category ? 'default' : 'outline'}
//               className={
//                 selectedCategory === category
//                   ? 'bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]'
//                   : 'border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10'
//               }
//             >
//               {t(translations.artworks.categories[category as keyof typeof translations.artworks.categories] ||
//                 { fr: category, en: category, wo: category })}
//             </Button>
//           ))}
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {filteredArtworks.map((artwork: Artwork) => (
//             <Card key={artwork.id} className="group overflow-hidden border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all hover:shadow-xl">
//               <div className="relative h-80 overflow-hidden">
//                 <ImageWithFallback
//                   src={artwork.image_url}
//                   alt={getTitle(artwork)}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <Badge className="bg-[var(--gold)] text-[var(--deep-black)] border-0">
//                     {artwork.category}
//                   </Badge>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="mb-2 text-sm text-gray-500">{artwork.period}</div>
//                 <h3 className="mb-3 text-[var(--deep-black)]">{getTitle(artwork)}</h3>

//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button
//                       onClick={() => setSelectedArtwork(artwork)}
//                       className="w-full bg-[var(--deep-black)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-colors gap-2"
//                     >
//                       <QrCode size={18} />
//                       {t(translations.artworks.viewDetails)}
//                     </Button>
//                   </DialogTrigger>
                  
//                   <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle className="text-[var(--deep-black)]">
//                         {getTitle(artwork)}
//                       </DialogTitle>
//                     </DialogHeader>

//                     <div className="space-y-6">
//                       <div className="relative h-96 rounded-lg overflow-hidden">
//                         <ImageWithFallback
//                           src={artwork.image_url}
//                           alt={getTitle(artwork)}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       <div className="flex gap-2">
//                         <Badge variant="outline" className="border-[var(--gold)] text-[var(--gold)]">
//                           {artwork.category}
//                         </Badge>
//                         <Badge variant="outline">
//                           {artwork.period}
//                         </Badge>
//                       </div>

//                       <div>
//                         <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Description</h4>
//                         <p className="text-gray-600">
//                           {description?.description || t(translations.artworks.description)}
//                         </p>
//                       </div>

//                       {description?.history && (
//                         <div>
//                           <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Histoire et Contexte</h4>
//                           <p className="text-gray-600">{description.history}</p>
//                         </div>
//                       )}

//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <Button
//                           variant="outline"
//                           className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
//                           onClick={() => {
//                             if (description?.audio_url) {
//                               window.open(description.audio_url, '_blank');
//                             } else {
//                               setErrorMessage("L'audio guide n'est pas disponible pour cette œuvre.");
//                               setIsErrorDialogOpen(true);
//                             }
//                           }}
//                         >
//                           <Headphones size={18} />
//                           Écouter l'audio guide
//                         </Button>
//                         <Button
//                           variant="outline"
//                           className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
//                           onClick={() => {
//                             if (description?.video_url) {
//                               window.open(description.video_url, '_blank');
//                             } else {
//                               setErrorMessage("La vidéo n'est pas disponible pour cette œuvre.");
//                               setIsErrorDialogOpen(true);
//                             }
//                           }}
//                         >
//                           <Video size={18} />
//                           Voir la vidéo
//                         </Button>
//                       </div>

//                       <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
//                         <div className="flex items-center gap-3 mb-3">
//                           <QrCode className="text-[var(--gold)]" size={24} />
//                           <h4 className="text-[var(--deep-black)] font-semibold">Code QR</h4>
//                         </div>
//                         <p className="text-sm text-gray-600">
//                           Scannez le QR code devant l'œuvre au musée pour accéder à cette page
//                           et découvrir du contenu exclusif
//                         </p>
//                       </div>
//                     </div>
//                  </DialogContent>
   
//                 </Dialog>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from 'react';
import { QrCode, Video, Headphones, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Artwork, ArtworkDescription, getArtworkByQr } from '../lib/artworkService';
import { supabase } from '../lib/supabase';
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
  const [nowPlaying, setNowPlaying] = useState<'audio' | 'video' | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    loadArtworks();
  }, []);

  // Gestion de la lecture unique audio/vidéo
  const handleAudioPlay = () => {
    if (nowPlaying === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setNowPlaying('audio');
  };

  const handleVideoPlay = () => {
    if (nowPlaying === 'audio' && audioRef.current) {
      audioRef.current.pause();
    }
    setNowPlaying('video');
  };

  // Réinitialiser l'état quand l'œuvre change
  useEffect(() => {
    setNowPlaying(null);
    if (selectedArtwork) {
      loadDescription(selectedArtwork.id);
    }
  }, [selectedArtwork, language]);

  // Nettoyer les écouteurs d'événements
  useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;

    const handleEnded = () => setNowPlaying(null);

    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }
    if (video) {
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) audio.removeEventListener('ended', handleEnded);
      if (video) video.removeEventListener('ended', handleEnded);
    };
  }, [selectedArtwork]);

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

  const handleQRScan = async (qrCode: string) => {
    try {
      const artwork = await getArtworkByQr(qrCode, language);
      if (artwork) {
        setSelectedArtwork({ ...artwork, qr_code_data: qrCode });
        setIsErrorDialogOpen(false);
      } else {
        setErrorMessage(t({ fr: 'Aucune œuvre trouvée pour ce code QR', en: 'No artwork found for this QR code', wo: 'Amul mbind moo gis ci code QR bi' }));
        setIsErrorDialogOpen(true);
      }
    } catch (error) {
      console.error('Error fetching artwork:', error);
      setErrorMessage(t({ fr: 'Erreur lors de la récupération des données', en: 'Error fetching data', wo: 'Jafe jafe bi ñu joxe xibaar bi' }));
      setIsErrorDialogOpen(true);
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
          <div className="mt-6">
            <QRScanner onScan={handleQRScan} />
            <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
              <DialogContent className="w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl md:text-2xl text-red-600">
                    {t({ fr: 'Information', en: 'Information', wo: 'Xibaar' })}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-2">
                  <p className="text-base md:text-lg text-gray-700">{errorMessage}</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Boutons filtres */}
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
              {t(translations.artworks.categories[category as keyof typeof translations.artworks.categories] || { fr: category, en: category, wo: category })}
            </Button>
          ))}
        </div>

        {/* Liste des œuvres */}
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
                  <Badge className="bg-[var(--gold)] text-[var(--deep-black)] border-0">{artwork.category}</Badge>
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

                  {/* DialogContent avec lecteurs audio et vidéo intégrés */}
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--deep-black)]">{getTitle(artwork)}</DialogTitle>
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
                        <Badge variant="outline" className="border-[var(--gold)] text-[var(--gold)]">{artwork.category}</Badge>
                        <Badge variant="outline">{artwork.period}</Badge>
                      </div>

                      <div>
                        <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Description</h4>
                        <p className="text-gray-600">{description?.description || t(translations.artworks.description)}</p>
                      </div>

                      {description?.history && (
                        <div>
                          <h4 className="mb-2 text-[var(--deep-black)] font-semibold">Histoire et Contexte</h4>
                          <p className="text-gray-600">{description.history}</p>
                        </div>
                      )}

                      <div className="space-y-4">
                        {description?.audio_url ? (
                          <audio 
                            ref={audioRef}
                            controls 
                            src={description.audio_url} 
                            className="w-full mt-2 rounded-lg border border-[var(--gold)]/20"
                            onPlay={handleAudioPlay}
                          >
                            Votre navigateur ne supporte pas l'élément audio.
                          </audio>
                        ) : (
                          <Button
                            variant="outline"
                            className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                            onClick={() => { setErrorMessage("L'audio guide n'est pas disponible pour cette œuvre."); setIsErrorDialogOpen(true); }}
                          >
                            <Headphones size={18} /> Écouter l'audio guide
                          </Button>
                        )}

                        {description?.video_url ? (
                          <video 
                            ref={videoRef}
                            controls 
                            src={description.video_url} 
                            className="w-full mt-4 rounded-lg border border-[var(--gold)]/20" 
                            poster={artwork.image_url}
                            onPlay={handleVideoPlay}
                          >
                            Votre navigateur ne supporte pas l'élément vidéo.
                          </video>
                        ) : (
                          <Button
                            variant="outline"
                            className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                            onClick={() => { setErrorMessage("La vidéo n'est pas disponible pour cette œuvre."); setIsErrorDialogOpen(true); }}
                          >
                            <Video size={18} /> Voir la vidéo
                          </Button>
                        )}
                      </div>

                      <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
                        <div className="flex items-center gap-3 mb-3">
                          <QrCode className="text-[var(--gold)]" size={24} />
                          <h4 className="text-[var(--deep-black)] font-semibold">Code QR</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Scannez le QR code devant l'œuvre au musée pour accéder à cette page et découvrir du contenu exclusif
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
