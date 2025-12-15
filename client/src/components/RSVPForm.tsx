import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  hasCompanion: z.string().min(1, 'Indica si llevas acompañante'),
  companionName: z.string().optional(),
  hasAllergy: z.string().min(1, 'Indica si tienes alguna intolerancia o alergia'),
  allergyDetails: z.string().optional(),
  attendsPreboda: z.string().min(1, 'Indica si vas a asistir a la preboda'),
  staysInToledo: z.string().min(1, 'Indica si vas a dormir en Toledo'),
  accommodation: z.string().optional(),
  needsBus: z.string().min(1, 'Indica si vas a necesitar autobús'),
}).refine((data) => {
  if (data.hasCompanion === 'si' && !data.companionName?.trim()) {
    return false;
  }
  return true;
}, {
  message: 'El nombre del acompañante es obligatorio',
  path: ['companionName'],
}).refine((data) => {
  if (data.hasAllergy === 'si' && !data.allergyDetails?.trim()) {
    return false;
  }
  return true;
}, {
  message: 'Por favor, indica tus intolerancias o alergias',
  path: ['allergyDetails'],
}).refine((data) => {
  if (data.staysInToledo === 'si' && !data.accommodation?.trim()) {
    return false;
  }
  return true;
}, {
  message: 'Por favor, indica dónde te hospedas',
  path: ['accommodation'],
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
      hasCompanion: '',
      companionName: '',
      hasAllergy: '',
      allergyDetails: '',
      attendsPreboda: '',
      staysInToledo: '',
      accommodation: '',
      needsBus: '',
    },
  });

  const hasCompanion = form.watch('hasCompanion');
  const hasAllergy = form.watch('hasAllergy');
  const staysInToledo = form.watch('staysInToledo');

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
                  name="hasCompanion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Llevas acompañante? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-has-companion">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {hasCompanion === 'si' && (
                  <FormField
                    control={form.control}
                    name="companionName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre y apellidos del acompañante *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: María Pérez García"
                            {...field}
                            data-testid="input-companion-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="hasAllergy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Tienes alguna intolerancia o alergia? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-has-allergy">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {hasAllergy === 'si' && (
                  <FormField
                    control={form.control}
                    name="allergyDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Indica tus intolerancias o alergias *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Por favor, indícanos tus intolerancias o alergias alimentarias"
                            className="resize-none"
                            rows={3}
                            {...field}
                            data-testid="input-allergy-details"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="attendsPreboda"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Vas a asistir a la preboda? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-attends-preboda">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="staysInToledo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Vas a dormir en Toledo? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-stays-toledo">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {staysInToledo === 'si' && (
                  <FormField
                    control={form.control}
                    name="accommodation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>¿Dónde te hospedas? *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: Hotel Eurostars Toledo, apartamento, casa de familiar..."
                            {...field}
                            data-testid="input-accommodation"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="needsBus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Vas a necesitar autobús? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-needs-bus">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
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
