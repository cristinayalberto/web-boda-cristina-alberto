import { Card } from '@/components/ui/card';
import { Church, MapPin, Sparkles } from 'lucide-react';

export default function ActivitiesSection() {
  const monuments = [
    'Catedral de Toledo',
    'Alcázar de Toledo',
    'Iglesia de Santo Tomé',
    'Mezquita del Cristo de la Luz',
    'Sinagoga del Tránsito',
    'Museo Sefardí',
  ];

  return (
    <section id="actividades" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-activities-title"
        >
          Qué hacer en Toledo
        </h2>

        <div className="space-y-8">
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Church className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3
                className="text-2xl font-serif text-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="text-monuments-title"
              >
                Monumentos y cultura
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Si tienes tiempo para disfrutar de Toledo, te recomendamos algunos lugares imprescindibles:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {monuments.map((monument, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-testid={`monument-${index}`}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{monument}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Es recomendable pasear con calma y reservar entradas con antelación para evitar colas.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3
                className="text-2xl font-serif text-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="text-historic-title"
              >
                Pasear por el casco histórico
              </h3>
            </div>
            <p className="text-muted-foreground">
              Perderse por las calles del casco histórico es una de las mejores formas de conocer Toledo: 
              miradores, plazas, callejones y rincones con mucho encanto.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3
                className="text-2xl font-serif text-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="text-puydufou-title"
              >
                Puy du Fou España
              </h3>
            </div>
            <p className="text-muted-foreground">
              Si te quedas algún día extra, Puy du Fou España ofrece espectáculos al aire libre inspirados 
              en la historia, muy cerca de Toledo. Es recomendable consultar horarios y entradas con antelación.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
