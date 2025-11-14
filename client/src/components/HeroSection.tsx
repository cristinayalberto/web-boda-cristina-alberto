import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  couple: string;
  date: string;
  subtitle: string;
  onCTAClick?: () => void;
}

export default function HeroSection({ couple, date, subtitle, onCTAClick }: HeroSectionProps) {
  const scrollToConfirm = () => {
    const element = document.getElementById('confirmar');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onCTAClick?.();
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
        </div>
        <h1
          className="text-5xl md:text-7xl font-serif font-light text-foreground mb-6 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-couple-names"
        >
          {couple}
        </h1>
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-wedding-date"
        >
          {date}
        </p>
        <p className="text-lg md:text-xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Button
          size="lg"
          className="px-8 py-6 text-lg shadow-md"
          onClick={scrollToConfirm}
          data-testid="button-confirm-attendance"
        >
          Confirmar asistencia
        </Button>
      </div>
    </section>
  );
}
