# DermaCare — Celeste Gayoso Dermatocosmiatra
## Guía de diseño (fase actual: solo diseño visual, sin funcionalidades aún)

## Negocio
- Nombre: DermaCare (marca personal: Celeste Gayoso, Dermatocosmiatra)
- Rubro: Cosmetología, pestañas, depilación, cejas, tratamientos personalizados de piel
- Ciudad: Posadas, Misiones, Argentina
- Atención: local propio

## Paleta de colores (extraída del logo)
- Fondo principal (beige hueso): #F2EDE1
- Texto principal (marrón oscuro): #4A3D38
- Acento dorado/ocre: #B98D4D
- Blanco roto (cards/secciones): #FAF8F3
- Texto secundario (marrón grisáceo): #7A6B63

## Estilo
- Minimalista, opaco, cálido
- Tipografía serif elegante y espaciada para títulos (coherente con el logo: "CELESTE GAYOSO")
- Mucho espacio en blanco, líneas finas, sin saturar
- Detalles florales sutiles opcionales (acorde al logo), sin sobrecargar
- Botones con bordes suaves, no muy redondeados (transmitir elegancia, no "app casual")

## Estructura de páginas (solo diseño, sin lógica de backend todavía)
1. Inicio (/) — hero con logo, frase de marca, servicios destacados, CTA "Agendar cita"
2. Servicios (/servicios) — listado de servicios con descripción y duración
3. Sobre mí (/sobre-mi) — historia de Celeste, formación, fotos del local
4. Agendar cita (/agendar) — placeholder visual por ahora, sin lógica funcional
5. Contacto (/contacto) — ubicación, WhatsApp, redes sociales
6. Admin (/admin) — NO desarrollar todavía, página reservada para el futuro panel de gestión

## Fase actual del proyecto
Estamos trabajando ÚNICAMENTE en el diseño visual (maquetado, componentes UI, paleta,
tipografía, responsive). El sistema de agendamiento, base de datos, autenticación y
notificaciones se implementan en una fase posterior. No agregar lógica de backend,
Supabase, ni integraciones todavía — solo estructura visual y componentes estáticos.

## Stack técnico definido
- Next.js (App Router) + Tailwind CSS
- Hosting futuro: Vercel
- Base de datos futura: Supabase
- Notificaciones futuras: WhatsApp Cloud API / Resend (email)

## Logo
Archivo disponible en /public/images/logo.png — circular, con detalles florales dorados,
monograma "CG" en marrón, fondo beige hueso. Usar como referencia de identidad visual
en todo el sitio (header, favicon, footer).
