import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import RSVPForm from '@/components/RSVPForm';
import TimelineSection from '@/components/TimelineSection';
import GiftSection from '@/components/GiftSection';

const WEBHOOK_URL = "https://hook.eu1.make.com/ymt1b3rt5sadj37ikag5wx4hjh8815rg";

export default function Wedding() {
  const timelineEvents = [
    { time: '13:00', title: 'Recepción' },
    { time: '13:30', title: 'Ceremonia' },
    { time: '14:15', title: 'Cóctel' },
    { time: '15:30', title: 'Banquete' },
    { time: '18:00', title: 'Baile y fiesta' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection
          couple="Pablo & María"
          date="12 de septiembre de 2026"
          subtitle="Nos casamos y queremos celebrarlo contigo"
        />

        <DetailsSection
          venue="Finca El Encinar"
          address="Camino del Encinar, s/n"
          city="Segovia, España"
          date="Sábado, 12 de septiembre de 2026"
          time="13:00"
          mapsUrl="https://www.google.com/maps"
          dressCode="Dress code: elegante, pero cómodo"
        />

        <RSVPForm
          webhookUrl={WEBHOOK_URL}
          deadline="15 de julio de 2026"
        />

        <TimelineSection events={timelineEvents} />

        <GiftSection
          iban="ES00 0000 0000 0000 0000 0000"
          message="Tu presencia es el mejor regalo. Si además quieres hacernos un regalo, puedes hacerlo en la siguiente cuenta:"
          note="Por favor, indica tu nombre en el concepto"
        />
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t">
        <p>Pablo & María • 2026</p>
      </footer>
    </div>
  );
}
