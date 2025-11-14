# Página Web de Boda - Cristina & Alberto

## Descripción General
Sitio web elegante y responsive para una boda, con diseño minimalista inspirado en páginas modernas de eventos. Permite a los invitados confirmar asistencia mediante un formulario que envía datos a un webhook.

## Estado Actual
✅ **Aplicación completa y funcional - Actualización Noviembre 2024**
- Diseño responsive (móvil, tablet, escritorio)
- Navegación suave entre secciones (7 secciones)
- Formulario RSVP con validación condicional (10 campos)
- Integración con webhook de Make.com
- Sistema de copia de IBAN
- Cronograma de dos días (viernes preboda + sábado boda)
- Sección de recomendaciones de hospedaje
- Sección de actividades en Toledo

## Características Principales

### 1. Sección Inicio
- Nombres de la pareja con tipografía elegante (Playfair Display)
- Fecha de la boda: 26 de septiembre de 2026
- Botón CTA para confirmar asistencia
- Scroll automático al formulario

### 2. Sección Detalles
- Información de ceremonia y celebración
- Lugar: Monasterio de San Juan de los Reyes
- Dirección: Calle Reyes Católicos, 17, Toledo, España
- Enlace a Google Maps
- Dress code

### 3. Formulario de Confirmación (RSVP)
- Validación con Zod y React Hook Form
- **10 campos con lógica condicional:**
  1. Nombre y apellidos (obligatorio)
  2. Email (obligatorio)
  3. ¿Llevas acompañante? (obligatorio)
  4. Nombre acompañante (condicional - aparece si llevas acompañante = Sí)
  5. ¿Tienes intolerancia/alergia? (obligatorio)
  6. Detalle intolerancias (condicional - aparece si tiene alergia = Sí)
  7. ¿Vas a asistir a la preboda? (obligatorio)
  8. ¿Vas a dormir en Toledo? (obligatorio)
  9. ¿Dónde te hospedas? (condicional - aparece si duerme en Toledo = Sí)
  10. ¿Necesitas autobús? (obligatorio)
- Estados de carga y mensajes de éxito/error
- Envío vía POST a webhook

### 4. Cronograma
- Timeline visual de dos días:
  - **Viernes 25 de septiembre de 2026**: Preboda (información pendiente)
  - **Sábado 26 de septiembre de 2026**:
    - 13:00 - Ceremonia en Monasterio de San Juan de los Reyes
    - 15:00 - Banquete y fiesta en Viñedos Cigarral Santa María
- Diseño con línea vertical y marcadores
- Muestra descripciones y direcciones
- Responsive (apilado en móvil)

### 5. Recomendaciones de Hospedaje
- **2 hoteles recomendados:**
  1. Eurostars Toledo (Paseo San Eugenio, s/n)
  2. Hotel Boutique Posada de la Sillería (Calle Sillería, 10)
- Código promocional: [pendiente de confirmar] (fácilmente actualizable)
- Diseño con tarjetas (Cards)

### 6. Actividades en Toledo
- **Monumentos y cultura**: lista de 6 lugares imprescindibles
  - Catedral de Toledo
  - Alcázar de Toledo
  - Iglesia de Santo Tomé
  - Mezquita del Cristo de la Luz
  - Sinagoga del Tránsito
  - Museo Sefardí
- **Pasear por el casco histórico**: descripción
- **Puy du Fou España**: información sobre el parque de espectáculos

### 7. Regalo
- Mensaje personalizado
- IBAN: ES71 0073 0100 5208 5671 7635
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
- Fecha preboda: "25 de septiembre de 2026"
- Fecha límite confirmación: "25 de agosto de 2026"
- Lugar ceremonia: "Monasterio de San Juan de los Reyes"
- Dirección ceremonia: "Calle Reyes Católicos, 17, Toledo"
- Lugar banquete: "Viñedos Cigarral Santa María"
- Dirección banquete: "Cerro del Emperador, Toledo"
- Hora ceremonia: "13:00"
- Hora banquete: "15:00"
- IBAN: "ES71 0073 0100 5208 5671 7635"
- URL Google Maps: https://www.google.com/maps/search/?api=1&query=Monasterio+de+San+Juan+de+los+Reyes+Toledo

### Hoteles Recomendados
Los códigos promocionales están marcados como "[pendiente de confirmar]" y se pueden actualizar fácilmente en el array `hotels` en `Wedding.tsx`:
1. Eurostars Toledo - Paseo San Eugenio, s/n
2. Hotel Boutique Posada de la Sillería - Calle Sillería, 10

### Horario (Timeline de 2 días)
El cronograma actual en `client/src/pages/Wedding.tsx`:
```javascript
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
```

## Estructura de Archivos

### Componentes Principales
- `client/src/pages/Wedding.tsx` - Página principal que ensambla todo
- `client/src/components/Navigation.tsx` - Menú de navegación fijo (7 items)
- `client/src/components/HeroSection.tsx` - Sección de inicio
- `client/src/components/DetailsSection.tsx` - Detalles del evento
- `client/src/components/RSVPForm.tsx` - Formulario de confirmación (10 campos con validación condicional)
- `client/src/components/TimelineSection.tsx` - Cronograma visual de 2 días
- `client/src/components/AccommodationSection.tsx` - Recomendaciones de hospedaje (2 hoteles)
- `client/src/components/ActivitiesSection.tsx` - Actividades en Toledo (3 subsecciones)
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
  "hasAllergy": "string (requerido, 'si' o 'no')",
  "allergyDetails": "string (condicional - requerido si hasAllergy = 'si')",
  "attendsPreboda": "string (requerido, 'si' o 'no')",
  "staysInToledo": "string (requerido, 'si' o 'no')",
  "accommodation": "string (condicional - requerido si staysInToledo = 'si')",
  "needsBus": "string (requerido, 'si' o 'no')"
}
```

### Campos del Formulario RSVP (10 campos)
1. **Nombre y apellidos** (obligatorio)
2. **Email** (obligatorio, validación de formato)
3. **¿Llevas acompañante?** (obligatorio, Sí/No)
4. **Nombre y apellidos del acompañante** (condicional - solo aparece si acompañante = Sí)
5. **¿Tienes alguna intolerancia o alergia?** (obligatorio, Sí/No)
6. **Indica tus intolerancias o alergias** (condicional - solo aparece si tiene alergia = Sí, textarea)
7. **¿Vas a asistir a la preboda?** (obligatorio, Sí/No)
8. **¿Vas a dormir en Toledo?** (obligatorio, Sí/No)
9. **¿Dónde te hospedas?** (condicional - solo aparece si duerme en Toledo = Sí)
10. **¿Vas a necesitar autobús?** (obligatorio, Sí/No)

### Mensajes de Estado
- Loading: "Enviando..." con spinner
- Success: "¡Gracias por confirmar! Hemos recibido tus datos"
- Error: "Ha ocurrido un problema al enviar tu confirmación, por favor inténtalo de nuevo"

## Navegación

### Anclas (IDs de sección)
- `#inicio` - Sección hero
- `#detalles` - Información del evento
- `#confirmar` - Formulario RSVP
- `#horario` - Timeline de 2 días
- `#hospedaje` - Recomendaciones de hoteles
- `#actividades` - Qué hacer en Toledo
- `#regalo` - Información de regalo

### Comportamiento
- Scroll suave (CSS + JavaScript)
- Offset de 80px para compensar menú fijo
- Menú con fondo blur cuando se hace scroll

## Cómo Personalizar

1. **Cambiar datos de la boda**: Editar props en `Wedding.tsx`
2. **Modificar colores**: Actualizar variables CSS en `index.css`
3. **Cambiar webhook**: Modificar `WEBHOOK_URL` en `Wedding.tsx`
4. **Ajustar horario**: Editar array `timelineDays` (soporta múltiples días)
5. **Actualizar códigos promocionales hoteles**: 
   - Buscar "[pendiente de confirmar]" en `Wedding.tsx`
   - Reemplazar por el código real en el array `hotels`
6. **Añadir/quitar hoteles**: Modificar array `hotels` en `Wedding.tsx`
7. **Modificar actividades**: Editar lista de monumentos en `ActivitiesSection.tsx`
8. **Actualizar IBAN**: Cambiar prop `iban` en el componente `GiftSection`

## SEO

El archivo `client/index.html` incluye:
- Meta descripción optimizada
- Open Graph tags para redes sociales
- Título descriptivo
- Lang="es" para español

## Testing

Última prueba exitosa: 14 Nov 2025 (Actualización completa)
- ✅ Navegación entre 7 secciones funciona correctamente
- ✅ Timeline de 2 días se muestra correctamente (viernes preboda + sábado boda)
- ✅ Formulario con 10 campos y validación condicional funciona perfectamente
- ✅ Campos condicionales aparecen/desaparecen según selección (3 campos)
- ✅ Validación requiere campos condicionales cuando están visibles
- ✅ Envío a webhook funcional con nueva estructura de datos
- ✅ Sección de hospedaje muestra 2 hoteles con códigos promocionales
- ✅ Sección de actividades muestra 3 subsecciones correctamente
- ✅ IBAN actualizado y copiar al portapapeles funciona
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
