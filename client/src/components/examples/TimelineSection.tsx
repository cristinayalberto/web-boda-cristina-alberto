import TimelineSection from '../TimelineSection';

export default function TimelineSectionExample() {
  const events = [
    { time: '13:00', title: 'Recepción' },
    { time: '13:30', title: 'Ceremonia' },
    { time: '14:15', title: 'Cóctel' },
    { time: '15:30', title: 'Banquete' },
    { time: '18:00', title: 'Baile y fiesta' },
  ];

  return <TimelineSection events={events} />;
}
