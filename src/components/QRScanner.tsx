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
    if (typeof window === 'undefined') return;
    if (!isOpen || !isScanning) return;

    setError('');
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
        const html5QrCode = new window.Html5Qrcode('qr-reader');
        html5QrCodeRef.current = html5QrCode;

        const config = { fps: 10, qrbox: { width: 250, height: 250 }, disableFlip: true };
        const cameraConfig = { facingMode: 'environment' };

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
                const nonCritical = [
                  'NotFoundException',
                  'NotAllowedError',
                  'NotReadableError',
                  'Could not start camera scan',
                  'QR code parse error',
                  'No MultiFormat Readers were able to detect the code'
                ];
                if (!nonCritical.some(e => errorMessage.includes(e))) {
                  console.error('Erreur de scan:', errorMessage);
                  if (isMounted) setError(`Erreur du scanner: ${errorMessage}`);
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
        setError('Impossible d\'accéder à la caméra. Vérifiez les autorisations.');
        setIsScanning(false);
      }
    };

    const timer = setTimeout(() => startScan(), 300);
    return () => {
      isMounted = false;
      clearTimeout(timer);
      stopScanning();
    };
  }, [isOpen, isScanning]);

  const fetchArtworkById = async (id: string) => {
    if (!id) {
      setError(t({ fr: 'Aucun ID valide trouvé dans le QR code', en: 'No valid ID found in QR code', wo: 'Amul ID wu am solo ci code QR bi' }));
      return null;
    }

    setIsLoading(true);
    setError('');
    try {
      const { data: artwork, error } = await supabase
        .from('artworks') // <- Table corrigée
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (!artwork) {
        setError(t({ fr: 'Aucune œuvre trouvée avec cet ID', en: 'No artwork found with this ID', wo: 'Amul tabax wuñu am solo ci ID bii' }));
        return null;
      }
      return artwork;
    } catch (err: any) {
      console.error('Erreur récupération œuvre:', err);
      setError(
        err.message.includes('NetworkError') || err.message.includes('Failed to fetch')
          ? t({ fr: 'Erreur de connexion au serveur.', en: 'Server connection error.', wo: 'Jàngalekat du serveur bi.' })
          : t({ fr: 'Erreur lors de la récupération des données', en: 'Error fetching artwork data', wo: 'amnane ay jafé jafé Skanné QR code bi' })
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleScan = async (decodedText: string) => {
    let artworkId = decodedText.trim();
    try {
      const url = new URL(decodedText);
      const idParam = url.searchParams.get('id');
      if (idParam) artworkId = idParam;
      else {
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0) artworkId = pathParts[pathParts.length - 1];
      }
    } catch (e) {
      console.log('Not a URL, using direct ID');
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
        {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Skanèl Code QR bi' })}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90%] lg:w-1/2 max-w-2xl mx-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium">
              {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Skanèl Code QR bi' })}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {t({ fr: 'Scannez le code QR devant une œuvre pour accéder à ses informations détaillées', en: 'Scan the QR code in front of an artwork to access its detailed information', wo: 'Scanèl code QR bi nek ci kanamou oeuvre bi ngir nga meuna yaatal saag xol ' })}
            </p>
          </DialogHeader>

          <div className="mt-6">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-12 w-12 text-[var(--gold)] animate-spin mb-4" />
                <p className="text-sm text-gray-600">{t({ fr: 'Recherche de l\'œuvre...', en: 'Searching for artwork...', wo: ' Weural oeuvre bi...' })}</p>
              </div>
            ) : !isScanning ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <QrCode className="h-16 w-16 mx-auto text-[var(--gold)] mb-4" />
                  <p className="text-sm text-gray-600 mb-4">{t({ fr: 'Placez le code QR dans le cadre pour le scanner', en: 'Position the QR code within the frame to scan', wo: 'Tégal QR code bi ci cadre bi' })}</p>
                  <Button onClick={startScanning} className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]">{t({ fr: 'Démarrer le scan', en: 'Start scanning', wo: 'Tambalil scan bi' })}</Button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div id="qr-reader" className="w-full aspect-square border rounded-lg overflow-hidden" />
              </div>
            )}

            {error && <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
