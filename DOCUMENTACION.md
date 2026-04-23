# Portal Web — Iglesia Metodista Pentecostal IMP Lo Hermida

Documentación técnica y operativa del portal web de la congregación.

---

## Índice

1. [Resumen del proyecto](#1-resumen-del-proyecto)
2. [Stack tecnológico](#2-stack-tecnológico)
3. [Estructura de páginas](#3-estructura-de-páginas)
4. [Sanity CMS — Panel de administración](#4-sanity-cms--panel-de-administración)
5. [Variables de entorno](#5-variables-de-entorno)
6. [Estructura del proyecto](#6-estructura-del-proyecto)
7. [Cómo cargar contenido](#7-cómo-cargar-contenido)
8. [Desarrollo local](#8-desarrollo-local)
9. [Deploy y dominios](#9-deploy-y-dominios)
10. [Próximos pasos](#10-próximos-pasos)

---

## 1. Resumen del proyecto

Portal web institucional para la Iglesia Metodista Pentecostal IMP Lo Hermida (Peñalolén, Santiago, Chile). Aproximadamente 150 miembros.

**URLs:**
- Desarrollo: `http://localhost:3000`
- Staging: `https://portal-web-iglesia.vercel.app`
- Dominio iglesia (staging): `https://testweb.iumplohermida.cl`
- Dominio producción (futuro): `https://www.iumplohermida.cl`

**Repositorio:** `https://github.com/vitokios/portalWebIglesia` (privado)

---

## 2. Stack tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | 16.2.4 | Framework principal (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos (sistema oklch) |
| Framer Motion | 12 | Animaciones |
| Sanity | v3 | CMS headless |
| next-sanity | 12 | Integración Sanity + Next.js |
| shadcn/ui | — | Componentes base (@base-ui/react) |
| Embla Carousel | 8 | Carrusel del Hero |
| Lucide React | 1 | Iconografía |
| Vercel | — | Hosting y deploy |
| Cloudflare | — | DNS del dominio |

**Fuentes:**
- Playfair Display — títulos y headings
- Inter — cuerpo de texto

**Colores de marca (oklch):**
- Navy (primary): `oklch(0.25 0.08 255)` — azul marino IUMP
- Dorado (accent): `oklch(0.72 0.12 75)` — dorado institucional

---

## 3. Estructura de páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home — Hero, Eventos, Noticias, Estudios, Avisos, Oración |
| `/nosotros` | Historia, misión/visión, pastor, equipo, horarios |
| `/eventos` | Agenda completa con filtros por categoría |
| `/noticias` | Blog/noticias con artículos individuales |
| `/noticias/[slug]` | Artículo individual con contenido Portable Text |
| `/escuela-dominical` | Lecciones dominicales organizadas por mes |
| `/estudios` | Videos bíblicos (YouTube embed) con filtros |
| `/avisos` | Tablón de avisos con filtros por tipo |
| `/oracion` | Formulario de petición de oración |
| `/studio` | Sanity Studio (panel de administración) |

---

## 4. Sanity CMS — Panel de administración

### Acceso
URL: `https://testweb.iumplohermida.cl/studio`

Solo personas con acceso al proyecto en `sanity.io` pueden ingresar.

### Tipos de contenido (schemas)

#### Evento (`evento`)
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Título | texto | ✓ |
| Descripción | texto | ✓ |
| Fecha | fecha | ✓ |
| Hora de inicio | texto (ej: "11:00 AM") | ✓ |
| Hora de término | texto | — |
| Lugar | texto | ✓ |
| Categoría | Culto / Formación / Oración / Retiro / Comunidad / Jóvenes | ✓ |
| Destacado | booleano | — |
| Imagen | imagen | — |

#### Noticia (`noticia`)
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Título | texto | ✓ |
| Slug (URL) | generado desde título | ✓ |
| Resumen | texto corto | ✓ |
| Contenido | Portable Text (editor rico) | ✓ |
| Imagen destacada | imagen | ✓ |
| Categoría | Congregación / Misión / Jóvenes / Familia / Comunidad | ✓ |
| Autor | texto | ✓ |
| Fecha de publicación | fecha | ✓ |
| Destacada | booleano | — |

#### Aviso (`aviso`)
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Título | texto | ✓ |
| Contenido | texto | ✓ |
| Tipo | urgente / informativo / general | ✓ |
| Fecha de publicación | fecha | ✓ |
| Vigente hasta | fecha | — |
| Publicado por | texto | — |

#### Lección Dominical (`leccion`)
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Título | texto | ✓ |
| Serie | texto (ej: "El Sermón del Monte") | ✓ |
| Fecha del domingo | fecha | ✓ |
| Pasaje bíblico | texto (ej: "Mateo 5:1-12") | ✓ |
| Versículo clave | texto largo | ✓ |
| Referencia del versículo | texto (ej: "Mateo 5:3") | ✓ |
| Maestro / Predicador | texto | ✓ |
| Resumen | texto | ✓ |
| Objetivos | lista de textos | — |
| Es la lección de este domingo | booleano | — |

> Solo una lección debe tener "Es la lección de este domingo" activo a la vez.

#### Video / Estudio Bíblico (`videoEstudio`)
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Título | texto | ✓ |
| Descripción | texto | ✓ |
| ID de YouTube | texto (parte final de la URL) | ✓ |
| Categoría | Cápsula / Predicación / Estudio / Devocional | ✓ |
| Predicador | texto | ✓ |
| Fecha | fecha | ✓ |
| Duración | texto (ej: "12:30") | ✓ |
| Pasaje bíblico | texto | — |
| Video destacado | booleano | — |

> El ID de YouTube está en la URL: `youtube.com/watch?v=`**ESTE_ES_EL_ID**

---

## 5. Variables de entorno

### Archivo `.env.local` (desarrollo local)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=71p1qdki
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-23
```

### Vercel (producción)
Las mismas variables están configuradas en el proyecto `portal-web-iglesia` en Vercel bajo **Settings → Environment Variables**.

> Estas variables son públicas por diseño — el Project ID de Sanity no es un secreto.

---

## 6. Estructura del proyecto

```
PortalWebIglesia/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home
│   │   ├── layout.tsx                  # Layout raíz + SanityLive
│   │   ├── globals.css                 # Estilos globales + variables de color
│   │   ├── nosotros/
│   │   ├── eventos/
│   │   │   ├── data.ts                 # Tipos e interfaces
│   │   │   ├── page.tsx                # Server Component (fetch Sanity)
│   │   │   └── components/
│   │   ├── noticias/
│   │   │   ├── data.ts
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/page.tsx         # Artículo individual
│   │   │   └── components/
│   │   ├── escuela-dominical/
│   │   ├── estudios/
│   │   ├── avisos/
│   │   ├── oracion/
│   │   └── studio/[[...tool]]/page.tsx # Sanity Studio embebido
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/                   # Secciones del Home
│   │   │   ├── Hero.tsx
│   │   │   ├── EventosPreview.tsx
│   │   │   ├── NoticiasPreview.tsx
│   │   │   ├── EstudiosPreview.tsx
│   │   │   ├── AvisosSection.tsx
│   │   │   └── OracionSection.tsx
│   │   └── ui/                         # Componentes base (shadcn)
│   └── sanity/
│       ├── env.ts                      # Variables de entorno Sanity
│       ├── lib/
│       │   ├── client.ts               # Cliente Sanity
│       │   ├── image.ts                # urlFor() — URLs de imágenes
│       │   ├── live.ts                 # sanityFetch + SanityLive
│       │   └── queries.ts              # Queries GROQ centralizadas
│       ├── schemaTypes/                # Schemas de contenido
│       │   ├── evento.ts
│       │   ├── noticia.ts
│       │   ├── aviso.ts
│       │   ├── leccion.ts
│       │   └── videoEstudio.ts
│       └── structure.ts                # Menú del Studio en español
├── sanity.config.ts                    # Configuración del Studio
├── sanity.cli.ts                       # CLI de Sanity
├── next.config.ts                      # Configuración Next.js
└── .env.local                          # Variables locales (no se sube a Git)
```

---

## 7. Cómo cargar contenido

### Acceder al Studio
1. Ir a `https://testweb.iumplohermida.cl/studio`
2. Iniciar sesión con la cuenta de Sanity

### Publicar un evento
1. Clic en **Eventos** → **+ Crear**
2. Completar los campos requeridos
3. Clic en **Publicar** (botón verde)
4. El evento aparece en el portal en segundos

### Publicar una noticia
1. Clic en **Noticias** → **+ Crear**
2. En el campo **Slug**, hacer clic en **Generate** (se genera desde el título)
3. Escribir el contenido en el editor rico (permite negritas, títulos, citas, imágenes)
4. Clic en **Publicar**

### Cargar videos de YouTube
1. Copiar el ID del video desde la URL: `youtube.com/watch?v=`**dQw4w9WgXcQ**
2. En el Studio → **Estudios Bíblicos** → **+ Crear**
3. Pegar el ID en el campo **ID de YouTube**
4. Completar el resto y publicar

### Marcar la lección del domingo
1. En **Escuela Dominical**, encontrar la lección de la semana
2. Activar el campo **¿Es la lección de este domingo?**
3. Desactivar ese campo en la lección anterior
4. Publicar

---

## 8. Desarrollo local

### Requisitos
- Node.js 20+
- npm

### Instalar dependencias
```bash
npm install
```

### Crear archivo de variables de entorno
```bash
# Crear .env.local con:
NEXT_PUBLIC_SANITY_PROJECT_ID=71p1qdki
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-23
```

### Iniciar servidor de desarrollo
```bash
npm run dev
```

Portal disponible en `http://localhost:3000`
Studio disponible en `http://localhost:3000/studio`

---

## 9. Deploy y dominios

### Deploy automático
Cada `git push` a la rama `main` dispara un deploy automático en Vercel.

### Deploy manual
```bash
npx vercel --prod
```

### Configuración de dominios en Vercel
```bash
# Agregar dominio
npx vercel domains add testweb.iumplohermida.cl

# Verificar estado
npx vercel domains inspect testweb.iumplohermida.cl
```

### Registro DNS en Cloudflare
| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | testweb | 76.76.21.21 | DNS only (gris) |
| A | www | 76.76.21.21 | DNS only (gris) |

### Pasar a producción (cuando esté listo)
1. Agregar el dominio en Vercel:
   ```bash
   npx vercel domains add www.iumplohermida.cl
   ```
2. Agregar registro A en Cloudflare: `www` → `76.76.21.21`
3. Opcional: agregar redirect de `testweb` a `www`

---

## 10. Próximos pasos

- [ ] Cargar contenido real en Sanity (eventos, noticias, lecciones, videos)
- [ ] Reemplazar imágenes de Unsplash por fotos reales de la iglesia
- [ ] Reemplazar IDs de YouTube de ejemplo por videos reales
- [ ] Actualizar número de teléfono en Footer y página de Oración
- [ ] Actualizar dirección exacta de la iglesia
- [ ] Configurar formulario de oración para enviar emails (Resend o similar)
- [ ] Pasar de `testweb.iumplohermida.cl` a `www.iumplohermida.cl`
- [ ] Agregar Google Analytics o Plausible para ver visitas
- [ ] Configurar usuarios adicionales en Sanity para que el pastor o secretaria carguen contenido sin ayuda técnica
