import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, Check } from 'lucide-react';

interface GiftSectionProps {
  iban: string;
  message: string;
  note?: string;
  image?: string;
}

export default function GiftSection({ iban, message, note, image }: GiftSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="regalo" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Gift className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2
            className="text-3xl md:text-5xl font-serif text-center mb-6 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="text-gift-title"
          >
            ¿Quieres hacernos un regalo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {image && (
            <div className="order-1 md:order-1">
              <img
                src={image}
                alt="Regalo decorativo"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
                data-testid="img-gift-decorative"
              />
            </div>
          )}

          <Card className={`p-6 md:p-8 bg-accent/20 ${image ? 'order-2 md:order-2' : 'md:col-span-2 max-w-xl mx-auto'}`}>
            <p className="text-center text-sm text-muted-foreground mb-3">Número de cuenta:</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <p
                className="text-base md:text-lg font-mono text-center"
                style={{ fontFamily: 'monospace' }}
                data-testid="text-iban"
              >
                {iban}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                data-testid="button-copy-iban"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            {note && (
              <p className="text-center text-sm text-muted-foreground mt-4" data-testid="text-gift-note">
                {note}
              </p>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
