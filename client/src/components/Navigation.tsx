import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onNavigate?.(id);
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'detalles', label: 'Detalles' },
    { id: 'confirmar', label: 'Confirmar' },
    { id: 'horario', label: 'Horario' },
    { id: 'regalo', label: 'Regalo' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-sm md:text-base font-serif hover-elevate"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
