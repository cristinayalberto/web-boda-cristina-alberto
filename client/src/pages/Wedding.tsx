import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import RSVPForm from '@/components/RSVPForm';
import TimelineSection from '@/components/TimelineSection';
import GiftSection from '@/components/GiftSection';

const WEBHOOK_URL = "https://hook.eu1.make.com/ymt1b3rt5sadj37ikag5wx4hjh8815rg";

export default function Wedding() {
  const timelineDays = [
    {
      day: 'Viernes',
      date: '25 de septiembre de 2026',
      events: [
        {
          title: 'Preboda',
          description: 'Habrá una preboda el viernes 25. Os daremos más información más adelante.',
        },
      ],
    },
    {
      day: 'Sábado',
      date: '26 de septiembre de 2026',
      events: [
        {
          time: '13:00',
          title: 'Ceremonia',
          description: 'Ceremonia en el Monasterio de San Juan de los Reyes.',
          address: 'Calle Reyes Católicos, 17, Toledo',
        },
        {
          time: '15:00',
          title: 'Banquete y fiesta',
          description: 'Banquete y fiesta en Viñedos Cigarral Santa María.',
          address: 'Cerro del Emperador, Toledo',
        },
      ],
    },
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

        <TimelineSection days={timelineDays} />

        <GiftSection
          iban="ES71 0073 0100 5208 5671 7635"
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
