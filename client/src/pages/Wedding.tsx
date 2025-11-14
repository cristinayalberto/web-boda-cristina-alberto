import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import RSVPForm from '@/components/RSVPForm';
import TimelineSection from '@/components/TimelineSection';
import GiftSection from '@/components/GiftSection';

const WEBHOOK_URL = "https://mi-webhook-de-ejemplo.com/rsvp";

export default function Wedding() {
  const timelineEvents = [
    { time: '12:30', title: 'Recepción invitados' },
    { time: '13:00', title: 'Ceremonia' },
    { time: '14:00', title: 'Cóctel' },
    { time: '15:30', title: 'Banquete' },
    { time: '18:00', title: 'Baile y fiesta' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection
          couple="Cristina & Alberto"
          date="26 de septiembre de 2026"
          subtitle="Nos casamos y queremos celebrarlo contigo"
        />

        <DetailsSection
          venue="Monasterio de San Juan de los Reyes"
          address="Calle de los Reyes Católicos, 17"
          city="Toledo, España"
          date="Sábado, 26 de septiembre de 2026"
          time="13:00"
          mapsUrl="https://www.google.com/maps/search/?api=1&query=Monasterio+de+San+Juan+de+los+Reyes+Toledo"
          dressCode="Dress code: elegante, pero cómodo"
        />

        <RSVPForm
          webhookUrl={WEBHOOK_URL}
          deadline="25 de agosto de 2026"
        />

        <TimelineSection events={timelineEvents} />

        <GiftSection
          iban="ES00 0000 0000 0000 0000 0000"
          message="Tu presencia es el mejor regalo. Si además quieres hacernos un regalo, puedes hacerlo en la siguiente cuenta:"
          note="Por favor, indica tu nombre en el concepto"
        />
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t">
        <p>Cristina & Alberto • 2026</p>
      </footer>
    </div>
  );
}
