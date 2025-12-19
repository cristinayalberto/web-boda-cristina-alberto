import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/aFqbN72a5Wasdhfu9";

interface RSVPSectionProps {
  deadline: string;
}

export default function RSVPSection({ deadline }: RSVPSectionProps) {
  return (
    <section id="confirmar" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-6 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-rsvp-title"
        >
          Confirma tu asistencia
        </h2>

        <p className="text-center text-muted-foreground mb-10 text-lg">
          Tu confirmación es importante. Por favor, confírmanos antes del{' '}
          <span className="font-medium text-foreground" data-testid="text-deadline">{deadline}</span>.
        </p>

        <Card className="p-8 md:p-12 text-center">
          <Button
            size="lg"
            className="px-10 py-6 text-lg w-full md:w-auto"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')}
            data-testid="button-confirm-attendance-form"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Confirmar asistencia
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Se abrirá un formulario de Google
          </p>
        </Card>
      </div>
    </section>
  );
}
