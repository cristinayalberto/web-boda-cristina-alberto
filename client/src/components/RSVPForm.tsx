import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  attendees: z.string().min(1, 'Indica el número de asistentes'),
  allergies: z.string().optional(),
  transport: z.string().min(1, 'Selecciona una opción de transporte'),
  song: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad'
  }),
});

type FormData = z.infer<typeof formSchema>;

interface RSVPFormProps {
  webhookUrl: string;
  deadline: string;
}

export default function RSVPForm({ webhookUrl, deadline }: RSVPFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      attendees: '',
      allergies: '',
      transport: '',
      song: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Ha ocurrido un problema al enviar tu confirmación, por favor inténtalo de nuevo');
    }
  };

  return (
    <section id="confirmar" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-3xl md:text-5xl font-serif text-center mb-6 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-testid="text-rsvp-title"
        >
          Confirma tu Asistencia
        </h2>

        <p className="text-center text-muted-foreground mb-8 text-lg">
          Tu confirmación es importante. Por favor, confírmanos antes del{' '}
          <span className="font-medium text-foreground" data-testid="text-deadline">{deadline}</span>
        </p>

        {submitStatus === 'success' ? (
          <Card className="p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¡Gracias por confirmar!
            </h3>
            <p className="text-muted-foreground" data-testid="text-success-message">
              Hemos recibido tus datos correctamente
            </p>
          </Card>
        ) : (
          <Card className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre y apellidos *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ej: Juan García López"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+34 600 000 000"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attendees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Cuántas personas asistirán? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-attendees">
                            <SelectValue placeholder="Selecciona el número" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 persona (yo solo/a)</SelectItem>
                          <SelectItem value="2">2 personas</SelectItem>
                          <SelectItem value="3">3 personas</SelectItem>
                          <SelectItem value="4">4 personas</SelectItem>
                          <SelectItem value="5">5 o más personas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="allergies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Intolerancias o alergias alimentarias</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Por favor, indícanos si tienes alguna alergia o intolerancia"
                          className="resize-none"
                          rows={3}
                          {...field}
                          data-testid="input-allergies"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="transport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transporte *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-transport">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bus">Usaré el autobús de la boda</SelectItem>
                          <SelectItem value="own">Iré por mi cuenta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="song"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Canción para la fiesta</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Sugiere una canción que te gustaría escuchar"
                          {...field}
                          data-testid="input-song"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          data-testid="checkbox-privacy"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <Label>
                          Acepto la{' '}
                          <a href="#" className="text-primary underline">
                            política de privacidad
                          </a>{' '}
                          *
                        </Label>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-md">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm" data-testid="text-error-message">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitStatus === 'loading'}
                  data-testid="button-submit-rsvp"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar confirmación'
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        )}
      </div>
    </section>
  );
}
