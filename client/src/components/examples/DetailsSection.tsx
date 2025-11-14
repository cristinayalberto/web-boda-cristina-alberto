import DetailsSection from '../DetailsSection';

export default function DetailsSectionExample() {
  return (
    <DetailsSection
      venue="Monasterio de San Juan de los Reyes"
      address="Calle de los Reyes Católicos, 17"
      city="Toledo, España"
      date="Sábado, 26 de septiembre de 2026"
      time="13:00"
      mapsUrl="https://www.google.com/maps/search/?api=1&query=Monasterio+de+San+Juan+de+los+Reyes+Toledo"
      dressCode="Dress code: elegante, pero cómodo"
    />
  );
}
