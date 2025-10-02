import { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { QrCode, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface QRScannerProps {
  onScan: (artworkId: string) => void;
}

export function QRScanner({ onScan }: QRScannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen || !isScanning) return;

    const html5QrCode = new Html5Qrcode('qr-reader');

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode
      .start(
        { facingMode: 'environment' },
        config,
        (decodedText) => {
          html5QrCode.stop();
          setIsScanning(false);
          setIsOpen(false);
          onScan(decodedText);
        },
        () => {}
      )
      .catch((err) => {
        setError(err.message || 'Error starting camera');
        setIsScanning(false);
      });

    return () => {
      if (html5QrCode.isScanning) {
        html5QrCode.stop().catch(() => {});
      }
    };
  }, [isOpen, isScanning, onScan]);

  const startScanning = () => {
    setError('');
    setIsScanning(true);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="gap-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)]"
      >
        <QrCode size={18} />
        {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Scan Code QR' })}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[var(--deep-black)] flex items-center gap-2">
              <QrCode className="text-[var(--gold)]" />
              {t({ fr: 'Scanner un QR Code', en: 'Scan QR Code', wo: 'Scan Code QR' })}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {!isScanning && !error && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  {t({
                    fr: 'Scannez le code QR devant une œuvre pour accéder à ses informations détaillées',
                    en: 'Scan the QR code in front of an artwork to access its detailed information',
                    wo: 'Scan code QR ci kanam tefes ngir gis ay information yu set'
                  })}
                </p>
                <Button
                  onClick={startScanning}
                  className="bg-[var(--gold)] hover:bg-[var(--ochre)] text-[var(--deep-black)]"
                >
                  {t({ fr: 'Démarrer le scan', en: 'Start scanning', wo: 'Tambali scan' })}
                </Button>
              </div>
            )}

            {isScanning && (
              <div className="relative">
                <div id="qr-reader" className="rounded-lg overflow-hidden" />
                <Button
                  onClick={() => {
                    setIsScanning(false);
                    setIsOpen(false);
                  }}
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                >
                  <X size={18} />
                </Button>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <p className="text-red-600 mb-4">{error}</p>
                <Button
                  onClick={() => {
                    setError('');
                    startScanning();
                  }}
                  variant="outline"
                  className="border-[var(--gold)] text-[var(--gold)]"
                >
                  {t({ fr: 'Réessayer', en: 'Try again', wo: 'Jéema ci kanam' })}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
