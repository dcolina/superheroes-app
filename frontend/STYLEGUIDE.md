# Superheroes App – Guía de Estilos

## Referencia visual

- Inspiración principal: [LEGO Life](https://www.lego.com/en-us/kids)
- Inspiración adicional: Marvel HQ, PBS Kids, Disney Junior

---

## Paleta de Colores

| Nombre         | Color     | Uso sugerido         |
|----------------|-----------|----------------------|
| Rojo brillante | #FF3B30   | Botones primarios, acentos |
| Azul héroe     | #007AFF   | Botones, enlaces, fondos |
| Amarillo       | #FFD600   | Destacados, badges   |
| Verde poder    | #34C759   | Confirmaciones, éxito|
| Violeta cómic  | #AF52DE   | Elementos secundarios|
| Gris claro     | #F2F2F7   | Fondo principal      |
| Blanco         | #FFFFFF   | Tarjetas, textos     |
| Negro cómic    | #222222   | Texto, bordes        |

---

## Tipografías

- **Principal:** [Baloo 2](https://fonts.google.com/specimen/Baloo+2)
- **Alternativa:** [Comic Neue](https://fonts.google.com/specimen/Comic+Neue), [Fredoka One](https://fonts.google.com/specimen/Fredoka+One)
- **Para textos largos:** [Quicksand](https://fonts.google.com/specimen/Quicksand)

---

## Componentes UI

- **Botones:** Grandes, redondeados, colores vivos, iconos claros.
- **Tarjetas:** Bordes redondeados, sombra suave, imagen grande del superhéroe.
- **Navegación inferior:** Iconos grandes y coloridos para Inicio, Explorar, Logros, Perfil.
- **Feedback:** Animaciones suaves, sonidos opcionales, mensajes motivadores.

---

## Accesibilidad

- Contraste alto por defecto.
- Botones grandes y bien separados.
- Textos legibles, mínimo 18px.
- Soporte para lectores de pantalla.

---

## Ejemplo de estructura de landing page

```
┌─────────────────────────────┐
│  Superheroes App (logo)     │
│        [Login]              │
├─────────────────────────────┤
│  [Banner con héroes]        │
│  ¡Bienvenido, pequeño héroe!│
│  [Comenzar]                 │
├─────────────────────────────┤
│  Héroes destacados:         │
│  ┌─────┐ ┌─────┐ ┌─────┐    │
│  │img  │ │img  │ │img  │    │
│  └─────┘ └─────┘ └─────┘    │
├─────────────────────────────┤
│🏠 Inicio 🔍 Explorar ⭐ Logros 👦 Perfil│
└─────────────────────────────┘
```

---

## Prompt para IA de diseño

> "Diseña una landing page para una aplicación web infantil llamada 'Superheroes App', orientada a niños de 6 a 10 años. La interfaz debe ser divertida, colorida y fácil de usar, inspirada en cómics de Marvel y DC, y tomando como referencia el estilo visual de la página LEGO Life (https://www.lego.com/en-us/kids). Utiliza una paleta de colores vivos: rojo brillante (#FF3B30), azul héroe (#007AFF), amarillo estrella (#FFD600), verde poder (#34C759), violeta cómic (#AF52DE), gris claro (#F2F2F7), blanco puro (#FFFFFF) y negro cómic (#222222). Emplea tipografías redondeadas y amigables como 'Baloo 2', 'Comic Neue' o 'Fredoka One'. Incluye un gran banner con personajes de superhéroes, botones grandes y redondeados, iconos llamativos, y una navegación inferior con iconos para Inicio, Explorar, Logros y Perfil. El diseño debe ser accesible, con alto contraste y elementos visuales atractivos para niños. El layout debe ser modular, con tarjetas grandes, ilustraciones llamativas y un ambiente lúdico y seguro, similar a LEGO Life." 

# LAYOUT GENERAL (wireframe visual inspirado en LEGO Life)

┌────────────────────────────────────────────────────────┐
│  LOGO Superheroes App          🔍 [Log In]  [☰ Menu]   │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ ◀️   [ Imagen GRANDE del personaje seleccionado ]   ▶️ │
│     Nombre del personaje (Baloo 2, grande)             │
│     [ Botón "¡Jugar como este héroe!" ]                │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  [Miniatura personaje 1] [Miniatura 2] [Miniatura 3] ...│
│  [Miniatura personaje N]                                │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ 🏠 Inicio   🔍 Explorar   ⭐ Logros   👦 Perfil        │
└────────────────────────────────────────────────────────┘
```

LandingPageComponent
│
├── SuperheroCarouselComponent
│   ├── SuperheroCardComponent (ficha central)
│   └── SuperheroThumbnailComponent (miniaturas)
│
├── HeaderComponent (logo, búsqueda, login, menú)
└── FooterNavComponent (barra de navegación inferior)