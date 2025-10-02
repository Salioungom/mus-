
  # Musée des Civilisations Noires

  Application web interactive pour le Musée des Civilisations Noires, développée dans le cadre du Hackathon 2025.

  ## Fonctionnalités Principales

  - **Scan QR Code**: Scannez les œuvres au musée pour accéder aux informations détaillées
  - **Multilingue**: Support complet en Français, Anglais et Wolof
  - **Audio Guides**: Descriptions audio accessibles pour chaque œuvre
  - **Responsive**: Expérience optimisée sur mobile, tablette et desktop
  - **Base de données**: Gestion dynamique des œuvres via Supabase
  - **QR Code Generator**: Génération automatique de QR codes pour chaque œuvre

  ## Technologies

  - React 18 + TypeScript
  - Vite 6
  - TailwindCSS v4
  - Supabase (PostgreSQL)
  - Radix UI
  - QRCode.react + HTML5-QRCode

  ## Installation

  ```bash
  npm install
  ```

  ## Développement

  ```bash
  npm run dev
  ```

  L'application sera accessible sur http://localhost:5173

  ## Build Production

  ```bash
  npm run build
  ```

  ## Configuration

  Le projet utilise Supabase pour la base de données. Les variables d'environnement sont configurées dans `.env`:

  - `VITE_SUPABASE_URL`: URL de votre projet Supabase
  - `VITE_SUPABASE_ANON_KEY`: Clé anonyme Supabase

  ## Structure du Projet

  ```
  src/
  ├── components/          # Composants React
  │   ├── OeuvresPageNew.tsx   # Page des œuvres avec toutes les fonctionnalités
  │   ├── LanguageSelector.tsx # Sélecteur de langue
  │   ├── QRScanner.tsx        # Scanner de QR code
  │   └── ui/                  # Composants UI réutilisables
  ├── contexts/            # Contexts React (langue)
  ├── lib/                 # Librairies et utilitaires (Supabase)
  └── translations.ts      # Traductions multilingues
  ```

  ## Base de Données

  La base de données Supabase comprend:

  - **artworks**: Informations principales des œuvres
  - **artwork_descriptions**: Descriptions multilingues avec audio/vidéo

  Les migrations sont disponibles dans l'historique Supabase.

  ## Documentation

  Pour plus de détails sur les fonctionnalités implémentées, voir [HACKATHON_FEATURES.md](./HACKATHON_FEATURES.md).

  ## Design

  Design original disponible sur [Figma](https://www.figma.com/design/YwtZC0s263zMtl5yvUPYUg/Mus%C3%A9e-des-Civilisations-Noires).
  