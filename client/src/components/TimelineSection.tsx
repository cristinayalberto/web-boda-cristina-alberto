import { Card } from '@/components/ui/card';

interface TimelineEvent {
  time: string;
  title: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export default function TimelineSection({ events }: TimelineSectionProps) {
  return (
    <section id="horario" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-timeline-title"
        >
          Horario
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center"
                data-testid={`timeline-event-${index}`}
              >
                <div className="md:w-1/2 md:pr-12 w-full pl-20 md:pl-0 md:text-right">
                  <p className="text-lg md:text-xl font-medium text-primary mb-1" data-testid={`time-${index}`}>
                    {event.time}
                  </p>
                  <Card className="inline-block p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }} data-testid={`event-title-${index}`}>
                      {event.title}
                    </h3>
                  </Card>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 border-4 border-background" />

                <div className="hidden md:block w-1/2 pl-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
