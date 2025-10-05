// import { useState, useEffect, useRef } from 'react';
// import { QrCode, Video, Headphones, Loader2 } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Button } from './ui/button';
// import { Card } from './ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
// import { Badge } from './ui/badge';
// import { supabase } from '../lib/supabase';
// import { QRScanner } from './QRScanner';
// import { useLanguage } from '../contexts/LanguageContext';
// import { translations } from '../translations';
// import { Artwork, ArtworkDescription } from '../types';
// import { QRCodeCanvas } from 'qrcode.react';


// export function OeuvresPageNew() {
//   const [artworks, setArtworks] = useState<Artwork[]>([]);
//   const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
//   const [scannedArtwork, setScannedArtwork] = useState<Artwork | null>(null);
//   const [description, setDescription] = useState<ArtworkDescription | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
//   const [nowPlaying, setNowPlaying] = useState<'audio' | 'video' | null>(null);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const { language, t } = useLanguage();

//   useEffect(() => {
//     loadArtworks();
//   }, []);

//   const loadArtworks = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('artworks')
//         .select('*');
      
//       if (error) throw error;
      
//       setArtworks(data || []);
//     } catch (error) {
//       console.error('Error loading artworks:', error);
//       setErrorMessage(t({
//         fr: 'Erreur lors du chargement des œuvres',
//         en: 'Error loading artworks',
//         wo: 'Jafe jafe bi ñu joxe xibaar bi'
//       }));
//       setIsErrorDialogOpen(true);
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

//   // Gestion de la lecture unique audio/vidéo
//   const handleAudioPlay = () => {
//     try {
//       if (nowPlaying === 'video' && videoRef.current) {
//         videoRef.current.pause();
//       }
//       setNowPlaying('audio');
//     } catch (error) {
//       console.error('Erreur lors de la lecture audio:', error);
//     }
//   };

//   const handleVideoPlay = () => {
//     try {
//       if (nowPlaying === 'audio' && audioRef.current) {
//         audioRef.current.pause();
//       }
//       setNowPlaying('video');
//     } catch (error) {
//       console.error('Erreur lors de la lecture vidéo:', error);
//     }
//   };

//   // Réinitialiser l'état quand l'œuvre change
//   useEffect(() => {
//     setNowPlaying(null);
//     if (selectedArtwork) {
//       loadDescription(selectedArtwork.id);
//     }
//   }, [selectedArtwork, language]);

//   // Nettoyer les écouteurs d'événements
//   useEffect(() => {
//     let isMounted = true;
    
//     const handleEnded = () => {
//       if (isMounted) {
//         setNowPlaying(null);
//       }
//     };

//     const setupMediaListeners = () => {
//       const audio = audioRef.current;
//       const video = videoRef.current;

//       if (audio) {
//         audio.addEventListener('ended', handleEnded);
//       }
//       if (video) {
//         video.addEventListener('ended', handleEnded);
//       }

//       return () => {
//         if (audio) audio.removeEventListener('ended', handleEnded);
//         if (video) video.removeEventListener('ended', handleEnded);
//       };
//     };

//     const timer = setTimeout(() => {
//       if (isMounted) {
//         setupMediaListeners();
//       }
//     }, 100);

//     return () => {
//       isMounted = false;
//       clearTimeout(timer);
//     };
//   }, [selectedArtwork]);

//   const handleQRScan = async (artwork: Artwork) => {
//     try {
//       setLoading(true);
//       if (artwork) {
//         setScannedArtwork(artwork);
//         setSelectedArtwork(artwork);
//         setIsErrorDialogOpen(false);
//       } else {
//         setErrorMessage(
//           t({
//             fr: 'Aucune œuvre trouvée pour ce code QR',
//             en: 'No artwork found for this QR code',
//             wo: 'Amul mbind moo gis ci code QR bi',
//           })
//         );
//         setIsErrorDialogOpen(true);
//       }
//     } catch (error) {
//       console.error('Error handling QR scan:', error);
//       setErrorMessage(
//         t({
//           fr: 'Erreur lors de la récupération des données',
//           en: 'Error fetching data',
//           wo: 'Jafe jafe bi ñu joxe xibaar bi',
//         })
//       );
//       setIsErrorDialogOpen(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getTitle = (artwork: Artwork) => {
//     if (!artwork) return '';
    
//     switch (language) {
//       case 'en':
//         return artwork.title_en || artwork.title;
//       case 'wo':
//         return artwork.title_wo || artwork.title;
//       default:
//         return artwork.title_fr || artwork.title;
//     }
//   };

//   const filteredArtworks = scannedArtwork 
//     ? [scannedArtwork] 
//     : selectedCategory === 'all'
//       ? artworks
//       : artworks.filter((a) => a.category === selectedCategory);

//   const categories = ['all', ...Array.from(new Set(artworks.map((a) => a.category)))];

//   if (loading && artworks.length === 0) {
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
//             {t(translations.artworks.title)}{' '}
//             <span className="text-[var(--gold)]">
//               {t(translations.artworks.titleHighlight)}
//             </span>
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
//                   <p className="text-base md:text-lg text-gray-700">{errorMessage}</p>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>

//         {/* Boutons filtres et retour */}
//         <div className="flex flex-col items-center gap-4 mb-8">
//           {scannedArtwork && (
//             <Button
//               onClick={() => {
//                 setScannedArtwork(null);
//                 setSelectedArtwork(null);
//               }}
//               variant="outline"
//               className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]"
//             >
//               {t({
//                 fr: '← Retour à la galerie',
//                 en: '← Back to gallery',
//                 wo: '← Déggoo galeri bi'
//               })}
//             </Button>
//           )}
          
//           {!scannedArtwork && (
//             <div className="flex flex-wrap gap-2 justify-center">
//               {categories.map((category: string) => (
//                 <Button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   variant={selectedCategory === category ? 'default' : 'outline'}
//                   className={
//                     selectedCategory === category
//                       ? 'bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]'
//                       : 'border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10'
//                   }
//                 >
//                   {t(
//                     translations.artworks.categories[
//                       category as keyof typeof translations.artworks.categories
//                     ] || { fr: category, en: category, wo: category }
//                   )}
//                 </Button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Liste des œuvres */}
//         <div className={`${scannedArtwork ? 'max-w-3xl mx-auto' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'}`}>
//           {filteredArtworks.map((artwork: Artwork) => (
//             <Card
//               key={artwork.id}
//               className="group overflow-hidden border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all hover:shadow-xl"
//             >
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
//                         <Badge variant="outline">{artwork.period}</Badge>
//                       </div>

//                       {description && (
//                         <>
//                           <div>
//                             <h4 className="mb-2 text-[var(--deep-black)] font-semibold">
//                               {t({ fr: 'Description', en: 'Description', wo: 'Tééréel' })}
//                             </h4>
//                             <p className="text-gray-600">{description.description}</p>
//                           </div>

//                           {description.history && (
//                             <div>
//                               <h4 className="mb-2 text-[var(--deep-black)] font-semibold">
//                                 {t({ fr: 'Histoire', en: 'History', wo: 'Taariix' })}
//                               </h4>
//                               <p className="text-gray-600">{description.history}</p>
//                             </div>
//                           )}
//                         </>
//                       )}

//                       <div className="space-y-4">
//                         {description?.audio_url ? (
//                           <audio
//                             ref={audioRef}
//                             controls
//                             src={description.audio_url}
//                             className="w-full mt-2 rounded-lg border border-[var(--gold)]/20"
//                             onPlay={handleAudioPlay}
//                           >
//                             {t({
//                               fr: 'Votre navigateur ne supporte pas l\'élément audio.',
//                               en: 'Your browser does not support the audio element.',
//                               wo: 'Navigateur bii deesu kàddug wuñu wi.'
//                             })}
//                           </audio>
//                         ) : (
//                           <Button
//                             variant="outline"
//                             className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
//                             onClick={() => { 
//                               setErrorMessage(t({
//                                 fr: "L'audio guide n'est pas disponible pour cette œuvre.",
//                                 en: "Audio guide is not available for this artwork.",
//                                 wo: "Audio guide bii amul ci tabax bii."
//                               })); 
//                               setIsErrorDialogOpen(true); 
//                             }}
//                           >
//                             <Headphones size={18} /> {t({ fr: 'Écouter', en: 'Listen', wo: 'Déggal' })}
//                           </Button>
//                         )}

//                         {description?.video_url ? (
//                           <video
//                             ref={videoRef}
//                             controls
//                             src={description.video_url}
//                             className="w-full mt-4 rounded-lg border border-[var(--gold)]/20"
//                             poster={artwork.image_url}
//                             onPlay={handleVideoPlay}
//                           >
//                             {t({
//                               fr: 'Votre navigateur ne supporte pas l\'élément vidéo.',
//                               en: 'Your browser does not support the video element.',
//                               wo: 'Navigateur bii deesu mbedd mi.'
//                             })}
//                           </video>
//                         ) : (
//                           <Button
//                             variant="outline"
//                             className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
//                             onClick={() => { 
//                               setErrorMessage(t({
//                                 fr: "La vidéo n'est pas disponible pour cette œuvre.",
//                                 en: "Video is not available for this artwork.",
//                                 wo: "Mbedd mi amul ci tabax bii."
//                               })); 
//                               setIsErrorDialogOpen(true); 
//                             }}
//                           >
//                             <Video size={18} /> {t({ fr: 'Voir la vidéo', en: 'Watch video', wo: 'Gis mbedd mi' })}
//                           </Button>
//                         )}
//                       </div>

//                       <div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20">
//                         <div className="flex items-center gap-3 mb-3">
//                           <QrCode className="text-[var(--gold)]" size={24} />
//                           <h4 className="text-[var(--deep-black)] font-semibold">
//                             {t({ fr: 'Code QR', en: 'QR Code', wo: 'Koodu QR' })}
//                           </h4>
//                         </div>
                       

// <div className="text-center space-y-4">
//   <p className="text-sm text-gray-600">
//     {t({
//       fr: 'Scannez le QR code devant l\'œuvre au musée pour accéder à cette page et découvrir du contenu exclusif',
//       en: 'Scan the QR code in front of the artwork at the museum to access this page and discover exclusive content',
//       wo: 'Skanal koodu QR bi ci kanamu tabax bi ci musée bi ngir gis xibaar yi'
//     })}
//   </p>

//   {/* QR Code affiché ici */}
//   <div className="flex justify-center">
//     <QRCodeCanvas
//       value={`${window.location.origin}/oeuvres?id=${artwork.id}`} // Lien direct vers l'œuvre
//       size={128}
//       bgColor="#ffffff"
//       fgColor="#000000"
//       level="H"
//       includeMargin={true}
//     />
//   </div>
// </div>


//                       </div>
//                     </div>
//                   </DialogContent>
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { supabase } from '../lib/supabase';
import { QRScanner } from './QRScanner';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Artwork, ArtworkDescription } from '../types';
import { QRCodeCanvas } from 'qrcode.react';

export function OeuvresPageNew() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [scannedArtwork, setScannedArtwork] = useState<Artwork | null>(null);
  const [description, setDescription] = useState<ArtworkDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // pour le popup détail
  const [nowPlaying, setNowPlaying] = useState<'audio' | 'video' | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language, t } = useLanguage();

  /** Charger toutes les œuvres */
  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    try {
      const { data, error } = await supabase.from('artworks').select('*');
      if (error) throw error;
      setArtworks(data || []);
    } catch (err) {
      console.error(err);
      setErrorMessage(t({
        fr: 'Erreur lors du chargement des œuvres',
        en: 'Error loading artworks',
        wo: 'Jafe jafe bi ñu joxe xibaar bi'
      }));
      setIsErrorDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  /** Charger la description d'une œuvre */
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
    } catch (err) {
      console.error(err);
    }
  };

  /** Audio / vidéo unique */
  const handleAudioPlay = () => {
    if (nowPlaying === 'video' && videoRef.current) videoRef.current.pause();
    setNowPlaying('audio');
  };

  const handleVideoPlay = () => {
    if (nowPlaying === 'audio' && audioRef.current) audioRef.current.pause();
    setNowPlaying('video');
  };

  /** Réinitialiser et charger la description quand l'œuvre change */
  useEffect(() => {
    setNowPlaying(null);
    if (selectedArtwork) {
      loadDescription(selectedArtwork.id);
    }
  }, [selectedArtwork, language]);

  /** Nettoyer les écouteurs */
  useEffect(() => {
    const handleEnded = () => setNowPlaying(null);
    const audio = audioRef.current;
    const video = videoRef.current;

    audio?.addEventListener('ended', handleEnded);
    video?.addEventListener('ended', handleEnded);

    return () => {
      audio?.removeEventListener('ended', handleEnded);
      video?.removeEventListener('ended', handleEnded);
    };
  }, [selectedArtwork]);

  /** QR scanner */
  const handleQRScan = async (artwork: Artwork) => {
    if (artwork) {
      setScannedArtwork(artwork);
      setSelectedArtwork(artwork);
      setIsDialogOpen(true);
      setIsErrorDialogOpen(false);
    } else {
      setErrorMessage(t({
        fr: 'Aucune œuvre trouvée pour ce code QR',
        en: 'No artwork found for this QR code',
        wo: 'Amul mbind moo gis ci code QR bi',
      }));
      setIsErrorDialogOpen(true);
    }
  };

  /** Récupérer le titre selon la langue */
  const getTitle = (artwork: Artwork) => {
    if (!artwork) return '';
    switch (language) {
      case 'en': return artwork.title_en || artwork.title;
      case 'wo': return artwork.title_wo || artwork.title;
      default: return artwork.title_fr || artwork.title;
    }
  };

  /** Filtrer les œuvres */
  const filteredArtworks = scannedArtwork 
    ? [scannedArtwork] 
    : selectedCategory === 'all'
      ? artworks
      : artworks.filter(a => a.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(artworks.map(a => a.category)))];

  /** Bonus : ouverture via URL ?id=xxx */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      supabase.from('artworks').select('*').eq('id', id).single()
        .then(({ data }) => {
          if (data) {
            setSelectedArtwork(data);
            setIsDialogOpen(true);
          }
        });
    }
  }, []);

  if (loading && artworks.length === 0) {
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
            {t(translations.artworks.title)}{' '}
            <span className="text-[var(--gold)]">{t(translations.artworks.titleHighlight)}</span>
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

        {/* Boutons filtres et retour */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {scannedArtwork && (
            <Button
              onClick={() => {
                setScannedArtwork(null);
                setSelectedArtwork(null);
              }}
              variant="outline"
              className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]"
            >
              {t({ fr: '← Retour à la galerie', en: '← Back to gallery', wo: '← Déggoo galeri bi' })}
            </Button>
          )}
          {!scannedArtwork && (
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
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
          )}
        </div>

        {/* Liste des œuvres */}
        <div className={`${scannedArtwork ? 'max-w-3xl mx-auto' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'}`}>
          {filteredArtworks.map(artwork => (
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

                <Button
                  onClick={() => {
                    setSelectedArtwork(artwork);
                    setIsDialogOpen(true);
                  }}
                  className="w-full bg-[var(--deep-black)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-colors gap-2"
                >
                  <QrCode size={18} /> {t(translations.artworks.viewDetails)}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Popup détail */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-[var(--deep-black)]">{getTitle(selectedArtwork!)}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <ImageWithFallback src={selectedArtwork?.image_url} alt={getTitle(selectedArtwork!)} className="w-full h-full object-cover" />
              </div>

              <div className="flex gap-2">
                <Badge variant="outline" className="border-[var(--gold)] text-[var(--gold)]">{selectedArtwork?.category}</Badge>
                <Badge variant="outline">{selectedArtwork?.period}</Badge>
              </div>

              {description && (
                <>
                  <div>
                    <h4 className="mb-2 text-[var(--deep-black)] font-semibold">{t({ fr: 'Description', en: 'Description', wo: 'Tééréel' })}</h4>
                    <p className="text-gray-600">{description.description}</p>
                  </div>
                  {description.history && (
                    <div>
                      <h4 className="mb-2 text-[var(--deep-black)] font-semibold">{t({ fr: 'Histoire', en: 'History', wo: 'Taariix' })}</h4>
                      <p className="text-gray-600">{description.history}</p>
                    </div>
                  )}
                </>
              )}

              <div className="space-y-4">
                {description?.audio_url ? (
                  <audio ref={audioRef} controls src={description.audio_url} className="w-full mt-2 rounded-lg border border-[var(--gold)]/20" onPlay={handleAudioPlay} />
                ) : (
                  <Button
                    variant="outline"
                    className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                    onClick={() => { setErrorMessage(t({ fr: "L'audio guide n'est pas disponible pour cette œuvre.", en: "Audio guide is not available for this artwork.", wo: "Audio guide bii amul ci tabax bii." })); setIsErrorDialogOpen(true); }}
                  >
                    <Headphones size={18} /> {t({ fr: 'Écouter', en: 'Listen', wo: 'Déggal' })}
                  </Button>
                )}

                {description?.video_url ? (
                  <video ref={videoRef} controls src={description.video_url} className="w-full mt-4 rounded-lg border border-[var(--gold)]/20" poster={selectedArtwork?.image_url} onPlay={handleVideoPlay} />
                ) : (
                  <Button
                    variant="outline"
                    className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
                    onClick={() => { setErrorMessage(t({ fr: "La vidéo n'est pas disponible pour cette œuvre.", en: "Video is not available for this artwork.", wo: "Mbedd mi amul ci tabax bii." })); setIsErrorDialogOpen(true); }}
                  >
                    <Video size={18} /> {t({ fr: 'Voir la vidéo', en: 'Watch video', wo: 'Gis mbedd mi' })}
                  </Button>
                )}
              </div>
              {/* QR Code de l'œuvre */}
<div className="p-4 bg-[var(--off-white)] rounded-lg border border-[var(--gold)]/20 mt-4 text-center">
  <div className="flex items-center justify-center mb-2">
    <QrCode className="text-[var(--gold)]" size={24} />
    <span className="ml-2 font-semibold">{t({ fr: 'Code QR', en: 'QR Code', wo: 'Koodu QR' })}</span>
  </div>

  <p className="text-sm text-gray-600 mb-2">
    {t({
      fr: "Scannez ce code QR pour accéder directement à cette œuvre depuis n'importe où.",
      en: "Scan this QR code to access this artwork from anywhere.",
      wo: "Skanal koodu QR bii ngir gis tabax bii fo meunti nekk."
    })}
  </p>
  <div className="flex justify-center">
    <QRCodeCanvas
      value={`${window.location.origin}/oeuvres?id=${selectedArtwork?.id}`}
      size={128}
      bgColor="#ffffff"
      fgColor="#000000"
      level="H"
      includeMargin={true}
    />
  </div>
</div>

            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
