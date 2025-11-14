# Design Guidelines: Wedding Website (Spanish)

## Design Approach
**Reference-Based**: Inspired by modern minimalist wedding websites, specifically the clean aesthetic of the provided reference (Isa & Jose wedding site). Focus on elegance, romance, and simplicity with a one-page scroll experience.

## Core Design Principles
- Minimalist elegance with romantic touches
- Soft, breathable layouts with generous whitespace
- Emphasis on typography and subtle visual details
- Mobile-first responsive design
- Smooth, delightful transitions between sections

## Typography
**Primary Font**: Playfair Display (serif) for headings - elegant and romantic
**Secondary Font**: Lato or Inter (sans-serif) for body text - clean and legible
- H1 (Couple Names): 3.5rem desktop / 2.5rem mobile, light weight
- H2 (Section Titles): 2.5rem desktop / 2rem mobile
- Body: 1.125rem, regular weight, line-height 1.7
- Subtle letter-spacing on headings for elegance

## Color Palette
**Primary**: Soft rose/blush (#E8D5D0 or similar)
**Secondary**: Warm beige/cream (#F5F1ED)
**Accent**: Sage green or dusty rose for CTAs
**Text**: Charcoal gray (#2D2D2D) for readability
**Backgrounds**: Alternating white and cream sections for visual rhythm

## Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-6, mt-12, etc.)
**Container**: max-w-4xl centered for content sections
**Section Padding**: py-16 mobile / py-24 desktop
**Grid**: Single column mobile, may use 2-column for details on desktop

## Section-Specific Design

### Navigation
- Fixed header with transparent/blurred background on scroll
- Horizontal menu links (Inicio, Detalles, Confirmar, Horario, Regalo)
- Subtle underline animation on hover
- Smooth scroll behavior to anchors

### Hero (Inicio)
- Full viewport height (100vh) with centered content
- Couple names as large, elegant display text
- Date below in smaller serif font
- Romantic subtitle text
- Prominent CTA button with subtle shadow and soft corners
- Optional: Delicate decorative element (floral SVG or ampersand between names)

### Detalles
- Card-style layout with soft shadow and rounded corners
- Icon for location (map pin)
- Clear hierarchy: venue name, date/time, address
- "Ver ubicación" as secondary button style
- Dress code in smaller, italicized text

### Confirmar (RSVP Form)
- Clean form design with generous spacing between fields
- Labels above inputs, clear and legible
- Input fields with subtle borders, focus state with accent color
- Grouped related fields (contact info, preferences)
- Large, prominent submit button
- Success/error messages in card with icon
- Validation errors displayed below each field in accent color

### Horario (Timeline)
- Vertical timeline with line and circular markers
- Time on left, event description on right (desktop)
- Stacked vertically on mobile
- Timeline markers in accent color
- Even spacing between timeline items

### Regalo
- Centered layout with icon (gift or heart)
- IBAN displayed in monospace font, slightly larger
- Copy-to-clipboard functionality (subtle button)
- Soft background card to highlight account details

## Components

### Buttons
**Primary CTA**: Rounded (rounded-lg), solid accent color, white text, shadow-md, scale on hover
**Secondary**: Outlined style with accent border, accent text, hover fills with accent
**Padding**: px-8 py-3 for comfortable click targets

### Form Inputs
- Border: 1px solid light gray, rounded-md
- Padding: px-4 py-3
- Focus: Ring in accent color, border darkens
- Placeholder text in lighter gray
- Error state: Red border and text below

### Cards
- Background: White with subtle shadow (shadow-sm)
- Border radius: rounded-xl
- Padding: p-6 to p-8
- Optional: Delicate border in cream/beige

## Images
**Hero Background** (Optional): Soft, romantic photo of couple or venue with overlay gradient for text readability. If used, apply blur filter to background and ensure CTA button has backdrop-blur for clarity.

**Decorative Elements**: Simple line illustrations or SVG florals as section dividers - minimal and elegant, not distracting.

## Animations
- Use sparingly: fade-in on scroll for sections
- Smooth scroll between navigation anchors (scroll-behavior: smooth)
- Button hover: subtle scale (1.02) and shadow increase
- Form submission: loading spinner, fade transition for success message
- NO complex animations - keep it elegant and performant

## Accessibility
- Form labels associated with inputs
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators visible on all interactive elements
- Semantic HTML (header, main, section, footer)
- Alt text for decorative images

## Responsive Behavior
- Mobile: Single column, full-width sections, stacked timeline
- Tablet: Introduce 2-column where appropriate (form fields side-by-side)
- Desktop: max-width container, horizontal navigation, 2-column details layout

This design creates an elegant, romantic, and functional wedding website that prioritizes user experience while maintaining visual sophistication.