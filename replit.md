# Página Web de Boda - Cristina & Alberto

## Descripción General
Sitio web elegante y responsive para una boda, con diseño minimalista inspirado en páginas modernas de eventos. Permite a los invitados confirmar asistencia mediante un formulario que envía datos a un webhook.

## Estado Actual
✅ **Aplicación completa y funcional**
- Diseño responsive (móvil, tablet, escritorio)
- Navegación suave entre secciones
- Formulario RSVP con validación
- Integración con webhook de Make.com
- Sistema de copia de IBAN

## Características Principales

### 1. Sección Inicio
- Nombres de la pareja con tipografía elegante (Playfair Display)
- Fecha de la boda
- Botón CTA para confirmar asistencia
- Scroll automático al formulario

### 2. Sección Detalles
- Información de ceremonia y celebración
- Nombre del lugar: Finca El Encinar
- Dirección completa en Segovia, España
- Fecha y hora del evento
- Enlace a Google Maps
- Dress code

### 3. Formulario de Confirmación (RSVP)
- Validación con Zod y React Hook Form
- Campos obligatorios: nombre, email, asistentes, transporte, política de privacidad
- Campos opcionales: teléfono, alergias, canción sugerida
- Estados de carga y mensajes de éxito/error
- Envío vía POST a webhook

### 4. Cronograma
- Timeline visual con 5 eventos del día
- Diseño con línea vertical y marcadores
- Responsive (apilado en móvil)

### 5. Regalo
- Mensaje personalizado
- IBAN con formato destacado
- Funcionalidad copiar al portapapeles
- Nota explicativa

## Configuración

### Webhook URL
Configurado en `client/src/pages/Wedding.tsx`:
```javascript
const WEBHOOK_URL = "https://hook.eu1.make.com/ymt1b3rt5sadj37ikag5wx4hjh8815rg";
```

### Datos Actuales
Todos los datos están en `client/src/pages/Wedding.tsx`:
- Nombres de la pareja: "Cristina & Alberto"
- Fecha boda: "26 de septiembre de 2026"
- Fecha límite confirmación: "25 de agosto de 2026"
- Lugar: "Monasterio de San Juan de los Reyes"
- Dirección: "Calle de los Reyes Católicos, 17"
- Ciudad: "Toledo, España"
- Hora: "13:00"
- IBAN: "ES00 0000 0000 0000 0000 0000"
- URL Google Maps: https://www.google.com/maps/search/?api=1&query=Monasterio+de+San+Juan+de+los+Reyes+Toledo

### Horario del Día
El cronograma actual:
```javascript
const timelineEvents = [
  { time: '12:30', title: 'Recepción invitados' },
  { time: '13:00', title: 'Ceremonia' },
  { time: '14:00', title: 'Cóctel' },
  { time: '15:30', title: 'Banquete' },
  { time: '18:00', title: 'Baile y fiesta' },
];
```

## Estructura de Archivos

### Componentes Principales
- `client/src/pages/Wedding.tsx` - Página principal que ensambla todo
- `client/src/components/Navigation.tsx` - Menú de navegación fijo
- `client/src/components/HeroSection.tsx` - Sección de inicio
- `client/src/components/DetailsSection.tsx` - Detalles del evento
- `client/src/components/RSVPForm.tsx` - Formulario de confirmación
- `client/src/components/TimelineSection.tsx` - Cronograma visual
- `client/src/components/GiftSection.tsx` - Información de regalo

### Estilos
- `client/src/index.css` - Estilos globales y tema
- Paleta de colores romántica (tonos rosa/beige suaves)
- Tipografía: Playfair Display (títulos) + Lato/Inter (textos)

## Diseño y UX

### Paleta de Colores
- Primario: Rosa suave (#E8D5D0)
- Secundario: Beige/crema (#F5F1ED)
- Texto: Gris carbón para legibilidad
- Fondos alternados (blanco/crema) para ritmo visual

### Responsive
- Móvil: columna única, timeline apilada
- Tablet: campos de formulario en pares
- Desktop: contenedor max-w-4xl, navegación horizontal

### Accesibilidad
- HTML semántico (header, main, section, footer)
- Labels asociados a inputs
- Contraste de colores suficiente (WCAG AA)
- data-testid en elementos interactivos

## Formulario RSVP - Campos y Validación

### Datos Enviados al Webhook
```json
{
  "name": "string (requerido, min 2 caracteres)",
  "email": "string (requerido, formato email)",
  "hasCompanion": "string (requerido, 'si' o 'no')",
  "companionName": "string (condicional - requerido si hasCompanion = 'si')",
  "allergies": "string (opcional)",
  "needsTransport": "string (opcional, 'si' o 'no')",
  "needsAccommodation": "string (opcional, 'si' o 'no')",
  "privacy": "boolean (debe ser true)"
}
```

### Campos del Formulario RSVP
1. **Nombre y apellidos** (obligatorio)
2. **Email** (obligatorio, validación de formato)
3. **¿Llevas acompañante?** (obligatorio, Sí/No)
4. **Nombre y apellidos del acompañante** (condicional - solo aparece si selecciona "Sí" en acompañante, y es obligatorio en ese caso)
5. **Intolerancias o alergias alimentarias** (opcional, textarea)
6. **¿Vas a coger transporte de la boda?** (opcional, Sí/No)
7. **¿Te vas a quedar hospedado/a?** (opcional, Sí/No)
8. **Política de privacidad** (obligatorio, checkbox)

### Mensajes de Estado
- Loading: "Enviando..." con spinner
- Success: "¡Gracias por confirmar! Hemos recibido tus datos"
- Error: "Ha ocurrido un problema al enviar tu confirmación, por favor inténtalo de nuevo"

## Navegación

### Anclas (IDs de sección)
- `#inicio` - Sección hero
- `#detalles` - Información del evento
- `#confirmar` - Formulario RSVP
- `#horario` - Timeline
- `#regalo` - Información de regalo

### Comportamiento
- Scroll suave (CSS + JavaScript)
- Offset de 80px para compensar menú fijo
- Menú con fondo blur cuando se hace scroll

## Cómo Personalizar

1. **Cambiar datos de la boda**: Editar props en `Wedding.tsx`
2. **Modificar colores**: Actualizar variables CSS en `index.css`
3. **Cambiar webhook**: Modificar `WEBHOOK_URL` en `Wedding.tsx`
4. **Ajustar horario**: Editar array `timelineEvents`
5. **Actualizar mapa**: Cambiar `mapsUrl` prop con URL real de Google Maps

## SEO

El archivo `client/index.html` incluye:
- Meta descripción optimizada
- Open Graph tags para redes sociales
- Título descriptivo
- Lang="es" para español

## Testing

Última prueba exitosa: 14 Nov 2025
- ✅ Navegación entre secciones funciona correctamente
- ✅ Validación de formulario opera como esperado
- ✅ Envío a webhook funcional
- ✅ Copiar IBAN al portapapeles funciona
- ✅ Responsive en diferentes tamaños de pantalla
- ✅ Todos los elementos interactivos responden correctamente

## Próximas Mejoras Posibles
- Galería de fotos de la pareja
- Contador regresivo hasta la boda
- Playlist colaborativa de Spotify
- Mapa interactivo embebido
- Códigos QR únicos por invitado
- Sistema de gestión de confirmaciones (admin)

## Ejecución

```bash
npm run dev
```

La aplicación se sirve en el puerto 5000 (frontend y backend en mismo puerto).
