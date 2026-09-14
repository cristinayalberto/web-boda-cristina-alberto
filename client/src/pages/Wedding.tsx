import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import RSVPSection from '@/components/RSVPSection';
import TimelineSection from '@/components/TimelineSection';
import BusSection from '@/components/BusSection';
import UsefulInfoSection from '@/components/UsefulInfoSection';
import AccommodationSection from '@/components/AccommodationSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import GiftSection from '@/components/GiftSection';
import logoBoda from '@assets/logo-boda.png';
import ceremoniaImg from '@assets/ceremonia-monasterio.png';
import celebracionImg from '@assets/celebracion-finca.png';
import regaloImg from '@assets/regalo-decorativo.png';

export default function Wedding() {
  const timelineDays = [
    {
      day: 'Viernes',
      date: '25 de septiembre de 2026',
      events: [
        {
          time: '20:45',
          title: 'Cena de bienvenida',
          description: 'Para los que venís el viernes os invitaremos a picar algo en el restaurante Nuevo Almacén desde las 20:45. Código de vestimenta: Casual.',
          venue: 'Restaurante Nuevo Almacén',
          mapsUrl: 'https://maps.app.goo.gl/uQhbcACex8P5SX5AA?g_st=ic',
          dressCode: 'Casual',
        },
      ],
    },
    {
      day: 'Sábado',
      date: '26 de septiembre de 2026',
      events: [
        {
          time: '13:15',
          title: 'Recepción de invitados',
          description: 'Os recibiremos a las 13:15. La entrada será por la Plaza San Juan de los Reyes.',
          venue: 'Monasterio San Juan de los Reyes',
          address: 'Calle Reyes Católicos, 17, Toledo',
          image: ceremoniaImg,
        },
        {
          time: '13:30',
          title: 'Ceremonia',
          description: 'La novia entra a las 13:30. ¡Seamos puntuales para no perdernos este momento!',
          venue: 'Monasterio San Juan de los Reyes',
          address: 'Calle Reyes Católicos, 17, Toledo',
        },
        {
          time: '14:30',
          title: 'Traslado a la celebración',
          description: 'Al finalizar la ceremonia, en torno a las 14:30, los autobuses estarán esperando a la salida del monasterio para llevaros a la finca.',
          venue: 'Viñedos Cigarral de Santa María',
          address: 'Cerro del Emperador, Toledo',
          mapsUrl: 'https://maps.app.goo.gl/izsrRvRuFq3M4Nar5?g_st=ic',
          image: celebracionImg,
          imagePosition: 'center 20%',
        },
      ],
    },
  ];

  const hotels = [
    {
      name: 'Eurostars Toledo',
      address: 'Paseo San Eugenio, s/n, Toledo',
      promoCodeNote: 'Código promocional: BODACRIALB',
    },
    {
      name: 'Hotel Boutique Posada de la Sillería',
      address: 'Calle Sillería, 10, Toledo',
      promoCodeNote: 'Código promocional: BODACYA26',
    },
    {
      name: 'Hoteles Sercotel',
      address: '3 hoteles en Toledo',
      promoCodeNote: 'Registrándose en Sercotel Rewards obtendréis descuentos bastante atractivos.',
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
          time="13:15 · ceremonia a las 13:30"
          mapsUrl="https://www.google.com/maps/search/?api=1&query=Monasterio+de+San+Juan+de+los+Reyes+Toledo"
        />

        <TimelineSection days={timelineDays} />

        <BusSection />

        <UsefulInfoSection />

        <AccommodationSection hotels={hotels} />

        <ActivitiesSection />

        <RSVPSection deadline="25 de agosto de 2026" />

        <GiftSection
          iban="ES71 0073 0100 5208 5671 7635"
          message="Que estéis con nosotros en este día tan especial es lo más importante, pero si queréis realizar algún detalle para nuestra luna de miel podéis hacer una transferencia en la siguiente cuenta bancaria:"
          note="Por favor, indica tu nombre en el concepto"
          image={regaloImg}
        />
      </main>

      <footer className="py-12 text-center text-muted-foreground border-t">
        <img
          src={logoBoda}
          alt="Logo Cristina & Alberto"
          className="w-16 h-16 mx-auto mb-4 object-contain"
        />
        <p>Cristina & Alberto • 2026</p>
      </footer>
    </div>
  );
}
