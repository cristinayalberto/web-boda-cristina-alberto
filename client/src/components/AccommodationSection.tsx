import { Card } from '@/components/ui/card';
import { MapPin, Tag } from 'lucide-react';

interface Hotel {
  name: string;
  address: string;
  promoCodeNote: string;
}

interface AccommodationSectionProps {
  hotels: Hotel[];
}

export default function AccommodationSection({ hotels }: AccommodationSectionProps) {
  return (
    <section id="hospedaje" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-accommodation-title"
        >
          Recomendaciones de hospedaje en Toledo
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {hotels.map((hotel, index) => (
            <Card key={index} className="p-6" data-testid={`hotel-card-${index}`}>
              <h3
                className="text-2xl font-serif mb-4 text-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid={`hotel-name-${index}`}
              >
                {hotel.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p data-testid={`hotel-address-${index}`}>{hotel.address}</p>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground bg-primary/5 p-3 rounded-md">
                  <Tag className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Código promocional</p>
                    <p className="text-sm" data-testid={`hotel-promo-${index}`}>{hotel.promoCodeNote}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
