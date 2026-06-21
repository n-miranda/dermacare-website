# DermaCare — Sitio web

Sitio web para Celeste Gayoso, Dermatocosmiatra (DermaCare) — Posadas, Misiones.

## Estado actual
🎨 **Fase 1: Diseño visual** (en curso)
- Maquetado de páginas, componentes UI, paleta de colores, responsive.
- Sin lógica de backend todavía.

## Cómo continuar en Claude Code
1. Abrí esta carpeta (`dermacare-website`) en VS Code.
2. Leé `docs/DESIGN.md` primero — tiene toda la guía de marca, paleta y estructura.
3. Pedile a Claude Code que inicialice el proyecto Next.js (App Router + TypeScript +
   Tailwind CSS) dentro de esta misma carpeta, respetando la estructura ya creada:

   ```
   app/
     servicios/
     sobre-mi/
     agendar/
     contacto/
     admin/        (no tocar todavía)
   components/
     ui/           (botones, cards, inputs reutilizables)
     layout/       (header, footer, nav)
     sections/     (hero, grillas de servicios, etc.)
   lib/            (utilidades, futura conexión a Supabase)
   public/
     images/       (subir logo.png acá)
     icons/
   styles/         (globals.css, configuración de tema)
   docs/           (este archivo y DESIGN.md)
   ```

4. Subí el logo a `public/images/logo.png` antes de pedir el header/hero.
5. Trabajá página por página: Inicio → Servicios → Sobre mí → Contacto → Agendar
   (esta última solo como vista estática por ahora).

## Próximas fases (no implementar aún)
- Fase 2: Sistema de agendamiento (selección de servicio, fecha/hora)
- Fase 3: Base de datos de clientas + historial (Supabase)
- Fase 4: Panel admin con calendario (acceso compartido Celeste + dev)
- Fase 5: Notificaciones automáticas (WhatsApp/email)
- Fase 6: Dominio propio + deploy a producción (Vercel)
