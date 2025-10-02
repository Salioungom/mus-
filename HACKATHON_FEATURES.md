# Fonctionnalités du Hackathon - Musée des Civilisations Noires

## Vue d'ensemble
Ce projet implémente toutes les fonctionnalités requises pour le Hackathon Musée des Civilisations Noires 2025.

## Fonctionnalités Implémentées

### 1. Base de données Supabase
- **Tables créées:**
  - `artworks`: Contient les informations principales des œuvres (titre multilingue, catégorie, période, image, QR code)
  - `artwork_descriptions`: Descriptions détaillées multilingues avec support audio et vidéo

- **Sécurité:**
  - Row Level Security (RLS) activé sur toutes les tables
  - Politiques de lecture publiques (tout le monde peut voir les œuvres)
  - Politiques d'écriture restreintes aux utilisateurs authentifiés

### 2. Système Multilingue (Français, Anglais, Wolof)
- **Sélecteur de langue** dans le header avec drapeaux
- **Traductions complètes** de l'interface:
  - Navigation
  - Titres et descriptions
  - Boutons et actions
- **Contenu des œuvres** en 3 langues:
  - Titres
  - Descriptions
  - Contexte historique
- **Support du Wolof** authentique pour l'accessibilité locale

### 3. Scan de QR Code
- **Scanner intégré** utilisant la caméra du device
- **Génération automatique** de QR codes pour chaque œuvre
- **Affichage des QR codes** dans les fiches détaillées
- **Navigation directe** vers la fiche d'une œuvre après scan

### 4. Lecteur Audio
- **Bouton Play/Pause** pour chaque description
- **Audio guides** disponibles en français, anglais et wolof
- **Interface accessible** pour les personnes malvoyantes
- **Contrôles intuitifs** avec icônes claires

### 5. Support Vidéo
- **Liens vers contenus vidéo** pour enrichir l'expérience
- **Ouverture dans nouvel onglet** pour ne pas interrompre la navigation
- **Intégration fluide** dans la fiche d'œuvre

### 6. Fiches d'Œuvres Complètes
Chaque œuvre dispose de:
- **Galerie d'images** haute résolution
- **Titre multilingue** selon la langue sélectionnée
- **Catégorie et période** historique
- **Description détaillée** en 3 langues
- **Contexte historique et culturel**
- **QR Code unique** pour partage et scan
- **Audio guide** dans la langue choisie
- **Liens vidéo** (si disponibles)

### 7. Filtrage par Catégorie
- **Filtres dynamiques**: Sculpture, Textile, Bijoux, Céramique
- **Interface intuitive** avec boutons de catégorie
- **Mise à jour instantanée** de la liste

### 8. Design et UX

#### Palette de Couleurs
- **Noir profond** (#1a1a1a) pour l'élégance et le contraste
- **Or** (#c9a961) pour mettre en valeur et symboliser la richesse culturelle
- **Terre cuite** (#d4a574) pour l'authenticité africaine
- **Blanc cassé** (#faf9f6) pour la douceur et la lisibilité

#### Responsive Design
- **Mobile First**: Optimisé pour smartphones
- **Tablette**: Layout adapté pour lecture confortable
- **Desktop**: Expérience immersive plein écran
- **Breakpoints**: sm (640px), md (768px), lg (1024px)

#### Accessibilité
- **Contrastes élevés** pour lisibilité maximale
- **Audio guides** pour personnes malvoyantes
- **Navigation au clavier** complète
- **Tailles de texte** adaptatives
- **Support multilingue** incluant langues locales

### 9. Expérience Utilisateur

#### Navigation Fluide
- **Menu fixe** avec indicateur de page active
- **Transitions douces** entre les pages
- **Chargement progressif** des images
- **États de chargement** visuels

#### Interactions
- **Hover effects** subtils sur les cartes
- **Animations** de scale sur les images
- **Feedback visuel** sur tous les boutons
- **Modales** élégantes pour les détails

## Technologies Utilisées

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS v4 avec design system personnalisé
- **Base de données**: Supabase (PostgreSQL)
- **QR Code**:
  - `qrcode.react` pour la génération
  - `html5-qrcode` pour le scan
- **UI Components**: Radix UI pour l'accessibilité
- **Internationalisation**: Context API React

## Architecture

```
src/
├── components/
│   ├── OeuvresPageNew.tsx      # Page principale des œuvres
│   ├── LanguageSelector.tsx    # Sélecteur de langue
│   ├── QRScanner.tsx           # Scanner de QR code
│   ├── Header.tsx              # En-tête avec navigation multilingue
│   └── ui/                     # Composants UI réutilisables
├── contexts/
│   └── LanguageContext.tsx     # Gestion de l'état de langue
├── lib/
│   └── supabase.ts             # Client et types Supabase
└── translations.ts             # Toutes les traductions
```

## Utilisation

### Pour les visiteurs
1. Sélectionner la langue préférée (Français/English/Wolof)
2. Explorer la collection ou scanner un QR code
3. Cliquer sur une œuvre pour voir les détails
4. Écouter l'audio guide
5. Voir les vidéos explicatives

### Pour les administrateurs
Les données sont stockées dans Supabase et peuvent être gérées via:
- Le dashboard Supabase
- Des requêtes SQL directes
- Une future interface d'administration

## Performance

- **Build optimisé**: ~814 KB JS (gzippé: 243 KB)
- **CSS minifié**: ~46 KB (gzippé: 8 KB)
- **Images**: Lazy loading avec fallback
- **Cache**: Utilisation du cache navigateur

## Sécurité

- **RLS activé** sur toutes les tables
- **Clés d'API** sécurisées via variables d'environnement
- **CORS** configuré correctement
- **Validation** des entrées utilisateur

## Conformité au Cahier des Charges

✅ Scan des œuvres via QR Code
✅ Descriptions multilingues (FR, EN, WO)
✅ Consultation web et mobile responsive
✅ Audio guide pour accessibilité
✅ Historique et contexte culturel
✅ Expérience fluide et inclusive
✅ Utilisation hors musée (via web)
✅ Design moderne avec thème approprié
✅ Navigation intuitive
✅ Performance optimisée

## Améliorations Futures

- Interface d'administration pour gérer les œuvres
- Système de favoris
- Parcours thématiques guidés
- Réalité augmentée (AR)
- Mode hors ligne
- Statistiques de visite
- Partage sur réseaux sociaux
- Commentaires et avis des visiteurs
