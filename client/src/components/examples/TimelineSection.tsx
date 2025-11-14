import TimelineSection from '../TimelineSection';

export default function TimelineSectionExample() {
  const events = [
    { time: '12:30', title: 'Recepción invitados' },
    { time: '13:00', title: 'Ceremonia' },
    { time: '14:00', title: 'Cóctel' },
    { time: '15:30', title: 'Banquete' },
    { time: '18:00', title: 'Baile y fiesta' },
  ];

  return <TimelineSection events={events} />;
}
