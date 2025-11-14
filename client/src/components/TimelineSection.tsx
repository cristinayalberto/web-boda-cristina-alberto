import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface TimelineEvent {
  time?: string;
  title: string;
  description?: string;
  address?: string;
}

interface TimelineDay {
  day: string;
  date: string;
  events: TimelineEvent[];
}

interface TimelineSectionProps {
  days: TimelineDay[];
}

export default function TimelineSection({ days }: TimelineSectionProps) {
  return (
    <section id="horario" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-16 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-timeline-title"
        >
          Horario
        </h2>

        <div className="space-y-16">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} data-testid={`timeline-day-${dayIndex}`}>
              <h3
                className="text-2xl md:text-3xl font-serif text-center mb-8 text-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid={`day-title-${dayIndex}`}
              >
                {day.day} — {day.date}
              </h3>

              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

                <div className="space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="relative flex items-center"
                      data-testid={`timeline-event-${dayIndex}-${eventIndex}`}
                    >
                      <div className="md:w-1/2 md:pr-12 w-full pl-20 md:pl-0 md:text-right">
                        {event.time && (
                          <p className="text-lg md:text-xl font-medium text-primary mb-1" data-testid={`time-${dayIndex}-${eventIndex}`}>
                            {event.time}
                          </p>
                        )}
                        <Card className="inline-block p-4 md:p-6 text-left">
                          <h4 className="text-xl md:text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }} data-testid={`event-title-${dayIndex}-${eventIndex}`}>
                            {event.title}
                          </h4>
                          {event.description && (
                            <p className="text-muted-foreground mb-2" data-testid={`event-description-${dayIndex}-${eventIndex}`}>
                              {event.description}
                            </p>
                          )}
                          {event.address && (
                            <p className="text-sm text-muted-foreground flex items-start gap-1" data-testid={`event-address-${dayIndex}-${eventIndex}`}>
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>{event.address}</span>
                            </p>
                          )}
                        </Card>
                      </div>

                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 border-4 border-background" />

                      <div className="hidden md:block w-1/2 pl-12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
