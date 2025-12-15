import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock } from 'lucide-react';

interface DetailsSectionProps {
  venue: string;
  address: string;
  city: string;
  date: string;
  time: string;
  mapsUrl: string;
}

export default function DetailsSection({
  venue,
  address,
  city,
  date,
  time,
  mapsUrl
}: DetailsSectionProps) {
  return (
    <section id="detalles" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-details-title"
        >
          Detalles del Evento
        </h2>

        <Card className="p-6 md:p-8 mb-8">
          <h3 className="text-2xl font-serif mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ceremonia y Celebración
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium" data-testid="text-event-date">{date}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg" data-testid="text-event-time">Recepción: {time}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium mb-1" data-testid="text-venue-name">{venue}</p>
                <p className="text-muted-foreground">{address}</p>
                <p className="text-muted-foreground" data-testid="text-venue-city">{city}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => window.open(mapsUrl, '_blank')}
              data-testid="button-view-location"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ver ubicación
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
