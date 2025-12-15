import { Button } from '@/components/ui/button';
import logoBoda from '@assets/logo-boda.png';
import heroBg from '@assets/hero-bg.png';

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
      className="hero-background min-h-screen flex items-center justify-center px-4 py-20 relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <img
            src={logoBoda}
            alt="Logo de boda Cristina y Alberto"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
            data-testid="img-wedding-logo"
          />
        </div>
        <h1
          className="text-5xl md:text-7xl font-serif font-light text-white mb-6 tracking-wide drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-couple-names"
        >
          {couple}
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 font-serif drop-shadow-md"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-wedding-date"
        >
          {date}
        </p>
        <p 
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-6 text-lg shadow-md bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 hover:text-white"
          onClick={scrollToConfirm}
          data-testid="button-confirm-attendance"
        >
          Confirmar asistencia
        </Button>
      </div>
    </section>
  );
}
