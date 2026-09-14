import { Card } from '@/components/ui/card';
import { Bus, Clock3, MapPin } from 'lucide-react';

const buses = [
  {
    name: 'Autobús 1',
    stops: ['Hotel Cigarrales', 'Puente San Martín', 'Hacienda El Cardenal', 'Plaza de Toros'],
  },
  {
    name: 'Autobús 2',
    stops: ['Hotel Palacio Buenavista', 'Hotel Beatriz', 'Ronda Granadal'],
  },
];

export default function BusSection() {
  return (
    <section id="autobuses" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Vuelta de la celebración</p>
          <h2
            className="text-3xl md:text-5xl font-serif tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="text-bus-title"
          >
            Autobuses de vuelta
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Habrá dos horarios de salida desde Viñedos Cigarral de Santa María. Los autobuses no pueden entrar en el casco histórico, así que revisad qué parada os viene mejor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {buses.map((bus, busIndex) => (
            <Card key={bus.name} className="p-6 md:p-8" data-testid={`bus-card-${busIndex}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Bus className="w-6 h-6" />
                </div>
                <h3
                  className="text-2xl font-serif"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  data-testid={`bus-name-${busIndex}`}
                >
                  {bus.name}
                </h3>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Clock3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-2">Horarios de salida</p>
                  <div className="flex flex-wrap gap-2">
                    {['22:30', '00:30'].map((time) => (
                      <span
                        key={time}
                        className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm"
                        data-testid={`bus-time-${busIndex}-${time}`}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium mb-3">Paradas</p>
                  <ol className="space-y-3">
                    {bus.stops.map((stop, stopIndex) => (
                      <li
                        key={stop}
                        className="flex items-start gap-3 text-muted-foreground"
                        data-testid={`bus-stop-${busIndex}-${stopIndex}`}
                      >
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                          {stopIndex + 1}
                        </span>
                        <span>{stop}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}