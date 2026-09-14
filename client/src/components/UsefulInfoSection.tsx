import { Card } from '@/components/ui/card';
import { Footprints, Hand, MessageCircle } from 'lucide-react';

export default function UsefulInfoSection() {
  return (
    <section id="informacion" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Para disfrutar del día</p>
          <h2
            className="text-3xl md:text-5xl font-serif tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="text-useful-info-title"
          >
            Información útil
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Hand className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Abanicos
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si el día acompaña pero la temperatura es más alta de lo esperado, pondremos unos abanicos para que el evento se haga más llevadero.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Footprints className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Alpargatas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Para las chicas habrá alpargatas. Os recomendamos cogerlas aunque estéis cómodas en la fiesta, para que os las podáis poner en la vuelta, ya que las calles de Toledo son un poco incómodas para el tacón.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
          <MessageCircle className="w-5 h-5 text-primary" />
          <p>Cualquier duda podéis escribirnos.</p>
        </div>
      </div>
    </section>
  );
}