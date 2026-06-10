# SMARTD Onboarding - Data Engineering Fundamentals

Página de onboarding interactiva para nuevos colaboradores en SMARTD, cubriendo conceptos fundamentales de Data Engineering.

## 📋 Contenido

12 módulos interactivos que cubren:

1. **Introducción a Data Engineering** - Conceptos y roles
2. **Rol del Data Engineer** - Responsabilidades y relaciones
3. **Ciclo de Vida del Dato** - Journey completo del dato
4. **Fuentes y Formatos** - Tipos de datos y formatos
5. **Batch, Streaming, Event-Driven** - Paradigmas de procesamiento
6. **ETL vs ELT** - Enfoques de integración
7. **Pipelines de Datos** - Anatomía y diseño
8. **Capas de Datos** - Arquitectura de warehouse
9. **Data Warehouse, Lake, Lakehouse** - Almacenamiento moderno
10. **Calidad, Trazabilidad e Idempotencia** - Confiabilidad
11. **Orquestación y Operación** - Gestión de workflows
12. **Consumo de Datos** - Usuarios y use cases

Cada módulo incluye:
- Explicaciones conceptuales
- Videos de YouTube para refuerzo
- Ejemplos prácticos
- Puntos clave destacados

## 🚀 Despliegue en GitHub Pages (Gratuito)

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) y crea una cuenta (si no tienes)
2. Crea un nuevo repositorio con el nombre: `smartd-onboarding` o `username.github.io`
3. Inicializa con README (opcional)

### Paso 2: Subir los archivos

**Opción A: Usando Git (línea de comandos)**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/smartd-onboarding.git
cd smartd-onboarding

# Copiar archivos de este proyecto a la carpeta

# Agregar cambios
git add .
git commit -m "Initial commit: SMARTD Onboarding"
git push origin main
```

**Opción B: Subir directamente desde GitHub**

1. En tu repositorio, haz clic en "Add file" → "Upload files"
2. Sube los archivos (index.html, styles.css, app.js, logo.png)
3. Haz commit

### Paso 3: Habilitar GitHub Pages

1. Ve a Settings del repositorio
2. Busca "Pages" en el menú lateral
3. En "Source", selecciona "main" branch
4. La página estará disponible en: `https://tu-usuario.github.io/smartd-onboarding`

## 🎨 Personalización

### Agregar logo de SMARTD

1. Coloca tu logo en `assets/logo.png` (recomendado: PNG con fondo transparente, 200x200px)
2. El archivo se cargará automáticamente

### Modificar colores

En `styles.css`, edita las variables CSS:

```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #ec4899;    /* Color secundario */
    --dark-bg: #0f172a;            /* Fondo oscuro */
    /* ... otras variables */
}
```

### Agregar más módulos

En `app.js`, dentro del array `modules`, agrega un nuevo objeto:

```javascript
{
    id: 13,
    number: "13",
    title: "Nuevo Módulo",
    icon: "fas fa-icon-name",
    description: "Descripción breve",
    content: `
        <h2 class="module-title">Título del Módulo</h2>
        <div class="content-section">
            <h4>Sección</h4>
            <ul>
                <li>Punto 1</li>
                <li>Punto 2</li>
            </ul>
        </div>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
        </div>
    `
}
```

## 🔗 Alternativas de Despliegue (También Gratuitas)

### Vercel (Recomendado - Más fácil)

1. Ve a [Vercel.com](https://vercel.com)
2. Conecta tu repositorio GitHub
3. Haz click en "Deploy"
4. URL: `tu-proyecto.vercel.app`

### Netlify

1. Ve a [Netlify.com](https://netlify.com)
2. Conecta tu repositorio
3. Drag and drop los archivos o conecta GitHub
4. URL: `tu-proyecto.netlify.app`

### Cloudflare Pages

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com)
2. Conecta tu repositorio GitHub
3. Configura build (puede estar vacío)
4. Deploy automático con cada push

## 📱 Características

✅ Responsive design (móvil, tablet, desktop)
✅ 12 módulos interactivos
✅ Videos embebidos de YouTube
✅ Smooth scrolling
✅ Menú hamburguesa para móvil
✅ Modal para detalles de módulos
✅ Sin dependencias externas (solo FontAwesome)
✅ Totalmente gratuito

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- FontAwesome (iconos)

## � Guardado gratuito en Firebase

Si quieres que la aplicación guarde datos de usuarios de forma centralizada, usa Firebase (gratis en el plan Spark).

1. Ve a https://console.firebase.google.com
2. Crea un nuevo proyecto
3. Añade una app web
4. Copia la configuración de Firebase (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId)
5. Reemplaza esos valores en `app.js` dentro de la variable `firebaseConfig`

Ejemplo:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### Reglas de Firestore recomendadas para desarrollo

En Firestore, ve a `Rules` y usa reglas abiertas temporales mientras pruebas:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> Para producción, ajusta las reglas según tu política de acceso.

### Qué guarda Firebase
- `email`
- `progress` (módulos completados)
- `quizResult` (puntaje y estado de prueba)
- `approvedAt` (fecha de aprobación cuando aprueba la prueba)
- `updatedAt` (última fecha de modificación)

## �📄 Licencia

Este proyecto está disponible para SMARTD y sus colaboradores.

## 📞 Soporte

Para preguntas o mejoras, contacta al equipo de Data Engineering de SMARTD.

---

**Nota:** La página se puede actualizar en cualquier momento con nuevos módulos, videos o contenido adicional. Solo realiza cambios en los archivos y haz push a GitHub para que se desplieguen automáticamente.
