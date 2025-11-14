import RSVPForm from '../RSVPForm';

export default function RSVPFormExample() {
  return (
    <RSVPForm
      webhookUrl="https://mi-webhook-de-ejemplo.com/rsvp"
      deadline="25 de agosto de 2026"
    />
  );
}
