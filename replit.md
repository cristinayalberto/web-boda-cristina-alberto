# Página Web de Boda - Pablo & María

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

### Datos Personalizables
Todos los datos de ejemplo están en `client/src/pages/Wedding.tsx`:
- Nombres de la pareja: "Pablo & María"
- Fecha boda: "12 de septiembre de 2026"
- Fecha límite confirmación: "15 de julio de 2026"
- Lugar: "Finca El Encinar"
- Dirección: "Camino del Encinar, s/n"
- Ciudad: "Segovia, España"
- Hora: "13:00"
- IBAN: "ES00 0000 0000 0000 0000 0000"
- URL Google Maps: actualizar en `mapsUrl` prop

### Horario del Día
El cronograma se puede modificar en el array `timelineEvents`:
```javascript
const timelineEvents = [
  { time: '13:00', title: 'Recepción' },
  { time: '13:30', title: 'Ceremonia' },
  // ... más eventos
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
  "phone": "string (opcional)",
  "attendees": "string (requerido, 1-5+)",
  "allergies": "string (opcional)",
  "transport": "string (requerido, 'bus' o 'own')",
  "song": "string (opcional)",
  "privacy": "boolean (debe ser true)"
}
```

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
