# Guía de Contenido — Panel de Administración
## Iglesia Metodista Pentecostal IUMP Lo Hermida

Esta guía está pensada para el equipo pastoral y de secretaría.
No se necesita conocimiento técnico para usar el panel.

---

## Acceso al Panel

1. Abrí el navegador y andá a:
   ```
   https://testweb.iumplohermida.cl/studio
   ```
2. Iniciá sesión con tu cuenta de Sanity (te la tiene que dar el administrador del sistema)
3. Una vez adentro vas a ver el menú lateral con todas las secciones

> **Importante:** Los cambios que publiques aparecen en el portal en segundos. No hay que hacer nada más.

---

## Regla general para publicar cualquier contenido

1. Seleccioná la sección en el menú izquierdo
2. Hacé clic en el botón **+ Crear** (arriba a la derecha)
3. Completá los campos
4. Hacé clic en **Publicar** (botón azul/verde, abajo a la derecha)

Si querés guardar un borrador sin publicarlo todavía, podés cerrar sin publicar y el borrador queda guardado.

---

## Secciones del panel

### 1. Horarios de Culto

Los horarios que aparecen en la franja roja debajo del inicio del portal.

**Cómo agregar un horario:**
1. Clic en **Horarios de Culto** → **+ Crear**
2. Completar:
   - **Día**: Ej: `Domingo`
   - **Hora**: Ej: `11:00`
   - **Nombre del culto**: Ej: `Culto General`
   - **Orden de aparición**: número del 1 al 10 (define el orden en pantalla)
   - **¿Activo?**: dejarlo activado para que se muestre
3. Clic en **Publicar**

**Para ocultar un horario temporalmente** (sin borrarlo):
- Abrí el horario → desactivá el campo **¿Activo?** → Publicar

---

### 2. Eventos

Los eventos aparecen en la sección "Próximos Eventos" del inicio y en la página `/eventos`.

**Cómo crear un evento:**
1. Clic en **Eventos** → **+ Crear**
2. Completar:
   - **Título**: nombre del evento
   - **Descripción**: detalle breve
   - **Fecha**: seleccionar del calendario
   - **Hora de inicio**: Ej: `11:00 AM`
   - **Hora de término** *(opcional)*: Ej: `13:00 PM`
   - **Lugar**: Ej: `Templo Central` o dirección completa
   - **Categoría**: elegir entre Culto / Formación / Oración / Retiro / Comunidad / Jóvenes
   - **Destacado**: activar si querés que aparezca resaltado
   - **Imagen** *(opcional)*: subir una foto del evento
3. Clic en **Publicar**

**Para editar un evento existente:**
- Buscarlo en la lista → clic sobre él → hacer los cambios → **Publicar**

**Para eliminar un evento:**
- Abrir el evento → menú de tres puntos (`...`) arriba a la derecha → **Delete**

---

### 3. Noticias

Las noticias aparecen en la sección "Noticias" del inicio y en la página `/noticias`. Cada noticia tiene su propia página con URL.

**Cómo publicar una noticia:**
1. Clic en **Noticias** → **+ Crear**
2. Completar:
   - **Título**: título de la noticia
   - **Slug (URL)**: hacer clic en **Generate** — se genera automáticamente desde el título
   - **Resumen**: texto corto que aparece en las tarjetas (máx. 2-3 líneas)
   - **Contenido**: editor de texto rico — podés usar negritas, títulos, listas, imágenes y citas
   - **Imagen destacada**: foto principal de la noticia
   - **Categoría**: Congregación / Misión / Jóvenes / Familia / Comunidad
   - **Autor**: nombre de quien escribe
   - **Fecha de publicación**: seleccionar del calendario
   - **Destacada**: activar para que aparezca primero en la lista
3. Clic en **Publicar**

> **Tip para el contenido rico:** En el editor podés usar la barra de herramientas para agregar títulos (H2, H3), negritas, itálicas, listas numeradas, citas bíblicas y hasta imágenes dentro del artículo.

---

### 4. Avisos

Los avisos aparecen en la sección "Tablón de Avisos" del inicio y en `/avisos`. Son anuncios breves para la congregación.

**Cómo crear un aviso:**
1. Clic en **Avisos** → **+ Crear**
2. Completar:
   - **Título**: título corto del aviso
   - **Contenido**: texto del aviso
   - **Tipo**: elegir entre:
     - `urgente` — para avisos importantes (aparece resaltado en rojo)
     - `informativo` — para información relevante
     - `general` — para anuncios comunes
   - **Fecha de publicación**: cuándo se publicó
   - **Vigente hasta** *(opcional)*: fecha en que deja de ser relevante
   - **Publicado por** *(opcional)*: nombre de quien publica
3. Clic en **Publicar**

---

### 5. Escuela Dominical

Las lecciones aparecen en la página `/escuela-dominical`. Se organizan por fecha.

**Cómo cargar una lección:**
1. Clic en **Escuela Dominical** → **+ Crear**
2. Completar:
   - **Título**: título de la lección
   - **Serie**: nombre de la serie de estudio (Ej: `El Sermón del Monte`)
   - **Fecha del domingo**: seleccionar del calendario
   - **Pasaje bíblico**: Ej: `Mateo 5:1-12`
   - **Versículo clave**: el versículo completo
   - **Referencia del versículo**: Ej: `Mateo 5:3`
   - **Maestro / Predicador**: nombre de quien enseña
   - **Resumen**: breve descripción de la lección
   - **Objetivos** *(opcional)*: lista de puntos clave
   - **¿Es la lección de este domingo?**: activar solo en la lección del domingo actual
3. Clic en **Publicar**

> **Regla importante:** Solo **una lección** puede tener **¿Es la lección de este domingo?** activado a la vez. Antes de activarlo en la nueva, desactivarlo en la anterior y publicar.

---

### 6. Estudios Bíblicos (Videos)

Los videos aparecen en la sección "Estudios Bíblicos" del inicio y en `/estudios`.

**Cómo encontrar el ID de un video de YouTube:**
- Abrí el video en YouTube
- Mirá la URL: `https://www.youtube.com/watch?v=`**ESTE_ES_EL_ID**
- Ejemplo: si la URL es `youtube.com/watch?v=hNYiMDAecig`, el ID es `hNYiMDAecig`

**Antes de cargar el video, verificá que se pueda embeber:**
1. Abrí esta URL en el navegador (reemplazando el ID):
   ```
   https://www.youtube.com/embed/hNYiMDAecig
   ```
2. Si el video reproduce → está listo para cargar
3. Si da error → revisá la configuración del video en YouTube Studio (ver sección de errores abajo)

**Cómo cargar un video:**
1. Clic en **Estudios Bíblicos** → **+ Crear**
2. Completar:
   - **Título**: título del video
   - **Descripción**: breve descripción del contenido
   - **ID de YouTube**: solo el ID (Ej: `hNYiMDAecig`), **no** la URL completa
   - **Categoría**: Cápsula / Predicación / Estudio / Devocional
   - **Predicador**: nombre de quien expone
   - **Fecha**: fecha del video
   - **Duración**: Ej: `12:30`
   - **Pasaje bíblico** *(opcional)*: Ej: `Juan 3:16`
   - **Video destacado**: activar para que aparezca primero y más grande
3. Clic en **Publicar**

---

## Solución de problemas frecuentes

### El video no se puede reproducir en el portal

Si al intentar reproducir un video aparece el mensaje **"Este video no está disponible para reproducir aquí"**, el video tiene restricciones de embedding. Para solucionarlo:

1. Andá a [studio.youtube.com](https://studio.youtube.com)
2. Seleccioná el video → **Details** (Editar)
3. Bajá hasta la sección **More options**
4. Verificá que **Allow embedding** esté activado (con tilde)
5. Bajá hasta la sección **Audience**
6. Asegurate que diga **"No, it's not made for kids"**
7. Guardá con **Save**
8. Esperá 10-15 minutos y probá de nuevo

### El video muestra una imagen gris en la previsualización

Esto pasa cuando el ID de YouTube ingresado no es válido. Verificá que:
- Copiaste solo el ID (Ej: `hNYiMDAecig`), no la URL completa
- El video existe y es público en YouTube

### Los cambios no aparecen en el portal

1. Verificá que hiciste clic en **Publicar** (no solo guardaste)
2. Refrescá la página del portal con `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac)
3. Si sigue sin aparecer, esperá 1-2 minutos — el sistema tarda unos segundos en actualizar

### No puedo iniciar sesión en el Studio

Pedile al administrador del sistema que verifique que tu usuario tenga acceso al proyecto en [sanity.io](https://sanity.io).

---

## Buenas prácticas

- **Imágenes**: usá fotos horizontales (formato 16:9 o similar) para mejores resultados
- **Textos**: sé breve en los resúmenes — los lectores en el portal ven tarjetas pequeñas
- **Eventos pasados**: no es necesario borrarlos, el portal los filtra automáticamente por fecha
- **Borradores**: podés trabajar en un borrador y publicarlo cuando esté listo — nadie lo ve hasta que publiques
- **Videos**: siempre verificá el embed antes de publicar usando la URL de prueba indicada arriba

---

*Para soporte técnico, contactar al administrador del sistema.*
