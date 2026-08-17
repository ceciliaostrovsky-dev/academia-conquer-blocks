# 🎓 Academia Conquer Blocks - Frontend

🚀 **[Ver Demo en Vivo aquí](https://ceciliaostrovsky-dev.github.io/academia-conquer-blocks/)**

Este proyecto es el desarrollo del Frontend para la plataforma educativa "Academia Conquer Blocks", diseñado como parte del Máster en Desarrollo Web Full Stack.

El objetivo principal es construir una interfaz web moderna, escalable y optimizada, aplicando las mejores prácticas de maquetación, arquitectura de estilos modular y herramientas de desarrollo profesional.

---

## ✨ Características Principales

- **Arquitectura Modular:** Uso de Vite y `vite-plugin-html-inject` para la inyección de componentes globales (`header.html` y `footer.html`), garantizando un código limpio y mantenible (DRY).
- **Estilos con SCSS:** Arquitectura modular con variables de diseño, mixins reutilizables para el control preciso de breakpoints y anidamiento estructurado.
- **Diseño Responsivo Completo:** Adaptación fluida a dispositivos móviles (vertical y rotado/landscape), tablets y pantallas de escritorio grandes (Desktop y Desktop-XL).
- **Optimización para Producción:** Configuración de rutas relativas en Vite (`base: './'`) y despliegue automatizado mediante **GitHub Actions** en GitHub Pages.
- **Accesibilidad y Semántica:** Maquetación con etiquetas HTML5 semánticas, navegación accesible y jerarquía visual optimizada.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** (Semántico y Accesible)
- **SCSS / CSS3** (Flexbox, Grid, Custom Properties y Mixins)
- **JavaScript** (Vanilla ES6+)
- **Vite** (Entorno de desarrollo rápido y empaquetador para producción)
- **GitHub Actions & GitHub Pages** (CI/CD y alojamiento web)

---

## ⚙️ Instalación y Uso Local

Para clonar y ejecutar este proyecto en tu entorno local, abre tu terminal y ejecuta los siguientes comandos paso a paso:

```bash
# 1. Clonar el repositorio
git clone https://github.com/ceciliaostrovsky-dev/academia-conquer-blocks.git

# 2. Acceder al directorio del proyecto
cd academia-conquer-blocks

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor local
npm run dev

```

---

## Estructura del proyecto

```
├── 📁 .github/workflows/ # Flujos de CI/CD para GitHub Pages
├── 📁 blog/ # Páginas de artículos y catálogo del blog
├── 📁 cursos/ # Páginas de másters y oferta formativa
├── 📁 img/ # Recursos gráficos y multimedia
├── 📁 js/ # Módulos y lógica JavaScript
├── 📁 scss/ # Arquitectura de estilos SASS
├── header.html # Componente modular del Header
├── footer.html # Componente modular del Footer
├── index.html # Página principal
├── vite.config.js # Configuración del empaquetador Vite
└── package.json # Dependencias y scripts del proyecto
```

---

---

## 👩‍💻 Autor

Cecilia Ostrovsky

GitHub: @ceciliaostrovsky-dev

---
