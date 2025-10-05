import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { QrCode, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Artwork } from '../types';

// Déclaration du type pour la variable globale
declare global {
  interface Window {
    Html5Qrcode: any;
  }
}

interface QRScannerProps {
  onScan: (artwork: Artwork) => void;
}

export function QRScanner({ onScan }: QRScannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const html5QrCodeRef = useRef<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR safe
    if (!isOpen || !isScanning) return;
    
    // Reset error when opening the dialog
    if (isOpen) {
      setError('');
    }

    let isMounted = true;
    const qrReaderElement = document.getElementById('qr-reader');
    
    if (!qrReaderElement) {
      setError('Élément du scanner QR introuvable');
      setIsScanning(false);
      return;
    }

    const startScan = async () => {
      if (!window.Html5Qrcode) {
        setError('Le module de scan QR n\'est pas chargé');
        setIsScanning(false);
        return;
      }

      try {
        // Utilisation de la variable globale depuis le CDN
        const html5QrCode = new window.Html5Qrcode('qr-reader');
        html5QrCodeRef.current = html5QrCode;

        // Configuration du scanner
        const config = {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          // Désactiver les fonctionnalités avancées pour plus de stabilité
          showZoomSliderIfSupported: false,
          disableFlip: true
        };
        
        // Configuration de la caméra
        const cameraConfig = {
          facingMode: 'environment'  // Préfère la caméra arrière
        };

        try {
          // Démarrer le scanner avec une gestion d'erreur améliorée
          await new Promise<void>(async (resolve, reject) => {
            try {
              await html5QrCode.start(
                cameraConfig,
                config,
                async (decodedText: string) => {
                  if (isMounted) {
                    stopScanning();
                    await handleScan(decodedText);
                    resolve();
                  }
                },
                (errorMessage: string) => {
                  // Filtrer les messages d'erreur non critiques
                  const isCriticalError = ![
                    'NotFoundException',
                    'NotAllowedError',
                    'NotReadableError',
                    'Could not start camera scan',
                    'QR code parse error',
                    'No MultiFormat Readers were able to detect the code'
                  ].some(error => errorMessage.includes(error));
                  
                  if (isCriticalError) {
                    console.log('Erreur de scan:', errorMessage);
                    if (isMounted) {
                      setError(`Erreur du scanner: ${errorMessage}`);
                      setIsScanning(false);
                    }
                    reject(new Error(errorMessage));
                  }
                }
              );
            } catch (err) {
              reject(err);
            }
          });
        } catch (err: any) {
          console.error('Erreur lors du démarrage du scanner:', err);
          if (isMounted) {
            setError('Impossible d\'accéder à la caméra. Vérifiez les autorisations.');
            setIsScanning(false);
          }
        }
      } catch (err: any) {
        console.error('Erreur lors du démarrage du scanner:', err);
        setError('Impossible de démarrer la caméra. Vérifiez les autorisations.');
        setIsScanning(false);
      }
    };

    // Délai plus long pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      startScan();
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      stopScanning();
    };
  }, [isOpen, isScanning, onScan]);

  const fetchArtworkById = async (id: string) => {
    if (!id) {
      setError(t({ 
        fr: 'Aucun ID valide trouvé dans le QR code', 
        en: 'No valid ID found in QR code',
        wo: 'Amul ID wu am solo ci code QR bi' 
      }));
      return null;
    }

    setIsLoading(true);
    setError('');

    try {
      const { data: artwork, error } = await supabase
        .from('oeuvres')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      if (!artwork) {
        setError(t({
          fr: 'Aucune œuvre trouvée avec cet ID',
          en: 'No artwork found with this ID',
          wo: 'Amul tabax wuñu am solo ci ID bii'
        }));
        return null;
      }

      return artwork;
    } catch (error: any) {
      console.error('Error fetching artwork:', error);
      setError(
        error.message.includes('NetworkError') || error.message.includes('Failed to fetch')
          ? t({
              fr: 'Erreur de connexion au serveur. Vérifiez votre connexion internet.',
              en: 'Server connection error. Please check your internet connection.',
              wo: 'Jàngalekat du serveur bi. Seet liggéey bi nga am internet bi.'
            })
          : t({
              fr: 'Erreur lors de la récupération des données de l\'œuvre',
              en: 'Error fetching artwork data',
              wo: 'Jàpp na jàpp ci wàllu njàngale kàddug tabax bi'
            })
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleScan = async (decodedText: string) => {
    // Extract the artwork ID from the QR code
    // The QR code might contain just the ID or a URL with the ID as a parameter
    let artworkId = decodedText.trim();
    
    // If it's a URL, try to extract the ID from it
    try {
      const url = new URL(decodedText);
      // Check if the URL has an 'id' parameter
      const idParam = url.searchParams.get('id');
      if (idParam) {
        artworkId = idParam;
      } else {
        // If no 'id' parameter, try to get the last part of the path
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0) {
          artworkId = pathParts[pathParts.length - 1];
        }
      }
    } catch (e) {
      // If it's not a valid URL, assume it's just the ID
      console.log('Not a URL, using as direct ID');
    }
    
    const artwork = await fetchArtworkById(artworkId);
    if (artwork) {
      onScan(artwork);
      setIsOpen(false);
    }
  };

  const stopScanning = () => {
    if (html5QrCodeRef.current?.isScanning) {
      html5QrCodeRef.current.stop().catch(() => {});
    }
    setIsScanning(false);
    setIsOpen(false);
  };

  const startScanning = () => {
    setError('');
    setIsScanning(true);
  };

  return (
    <div className="text-center">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)] transition-colors"
      >
        <QrCode size={18} className="mr-2" />
        {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Scan Code QR' })}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90%] lg:w-1/2 max-w-2xl mx-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium">
              {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Skanu QR Code bi' })}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {t({
                fr: 'Scannez le code QR devant une œuvre pour accéder à ses informations détaillées',
                en: 'Scan the QR code in front of an artwork to access its detailed information',
                wo: 'Scan code QR ci kanam tefes ngir gis ay information yu set',
              })}
            </p>
          </DialogHeader>
          
          <div className="mt-6">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-12 w-12 text-[var(--gold)] animate-spin mb-4" />
                <p className="text-sm text-gray-600">
                  {t({
                    fr: 'Recherche de l\'œuvre...',
                    en: 'Searching for artwork...',
                    wo: 'Ngi doppal tabax bi...',
                  })}
                </p>
              </div>
            ) : !isScanning ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <QrCode className="h-16 w-16 mx-auto text-[var(--gold)] mb-4" />
                  <p className="text-sm text-gray-600 mb-4">
                    {t({
                      fr: 'Placez le code QR dans le cadre pour le scanner',
                      en: 'Position the QR code within the frame to scan',
                      wo: 'Metti code QR ci kaw la ngir scan ko',
                    })}
                  </p>
                  <Button
                    onClick={startScanning}
                    className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]"
                  >
                    {t({ fr: 'Démarrer le scan', en: 'Start scanning', wo: 'Démarrer scan bi' })}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div id="qr-reader" className="w-full aspect-square border rounded-lg overflow-hidden" />
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                {error}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
