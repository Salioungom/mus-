# Guide de Démarrage Rapide

## Installation (2 minutes)

```bash
# Cloner le projet
cd musee-civilisations-noires

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur http://localhost:5173

## Premiers Pas

### 1. Changer de Langue
- Cliquez sur le sélecteur de langue en haut à droite (🇫🇷 🇬🇧 🇸🇳)
- Choisissez entre Français, English ou Wolof
- Toute l'interface se met à jour instantanément

### 2. Explorer les Œuvres
- Cliquez sur "Œuvres" dans le menu
- Parcourez la collection
- Filtrez par catégorie (Sculpture, Textile, Bijoux, Céramique)

### 3. Voir les Détails d'une Œuvre
- Cliquez sur "Voir les détails" sous une œuvre
- Découvrez:
  - Image en haute résolution
  - Description complète
  - Contexte historique
  - QR Code unique
  - Audio guide (si disponible)
  - Vidéo (si disponible)

### 4. Scanner un QR Code
- Cliquez sur "Scanner un QR Code"
- Autorisez l'accès à la caméra
- Pointez vers un QR code d'œuvre
- La fiche s'ouvre automatiquement

### 5. Écouter l'Audio Guide
- Ouvrez une fiche d'œuvre
- Cliquez sur "Écouter l'audio guide"
- Utilisez les contrôles Play/Pause

## Configuration de la Base de Données

La base de données Supabase est déjà configurée et contient 6 œuvres d'exemple.

**Variables d'environnement** (dans `.env`):
```
VITE_SUPABASE_URL=https://glygcjhnykdcyarzyugq.supabase.co
VITE_SUPABASE_ANON_KEY=[votre_clé]
```

## Structure des Données

### Table `artworks`
Contient les informations principales:
- `id`: UUID unique
- `title_fr`, `title_en`, `title_wo`: Titres multilingues
- `category`: Catégorie de l'œuvre
- `period`: Période historique
- `image_url`: URL de l'image
- `qr_code_data`: Données du QR code

### Table `artwork_descriptions`
Descriptions détaillées multilingues:
- `artwork_id`: Référence à l'œuvre
- `language`: Code langue (fr, en, wo)
- `description`: Description complète
- `history`: Contexte historique
- `audio_url`: Lien audio (optionnel)
- `video_url`: Lien vidéo (optionnel)

## Ajouter une Œuvre (via Supabase Dashboard)

1. Aller sur https://supabase.com/dashboard
2. Sélectionner votre projet
3. Aller dans "Table Editor" > "artworks"
4. Cliquer "Insert" > "Insert row"
5. Remplir les champs multilingues
6. Ajouter les descriptions dans `artwork_descriptions`

## Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview
```

## Support des Navigateurs

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 5+)

## Fonctionnalités par Navigateur

| Fonctionnalité | Desktop | Mobile |
|----------------|---------|--------|
| Navigation | ✅ | ✅ |
| Multilingue | ✅ | ✅ |
| Audio | ✅ | ✅ |
| QR Scanner | ✅* | ✅ |
| QR Generator | ✅ | ✅ |

*Nécessite une webcam

## Résolution de Problèmes

### La caméra ne fonctionne pas
- Vérifiez les permissions du navigateur
- Utilisez HTTPS en production
- Sur mobile, autorisez l'accès à la caméra

### Les images ne se chargent pas
- Vérifiez votre connexion internet
- Les images sont hébergées sur Unsplash
- Un fallback est prévu en cas d'erreur

### L'audio ne se lance pas
- Vérifiez que l'URL audio est valide
- Certains navigateurs nécessitent une interaction utilisateur
- Vérifiez le volume de votre appareil

## Ressources

- **Documentation complète**: Voir [HACKATHON_FEATURES.md](./HACKATHON_FEATURES.md)
- **Évaluation**: Voir [EVALUATION.md](./EVALUATION.md)
- **Design Figma**: https://www.figma.com/design/YwtZC0s263zMtl5yvUPYUg/

## Support

Pour toute question ou problème:
1. Vérifiez la documentation
2. Consultez les logs de la console navigateur
3. Vérifiez la connexion Supabase

---

**Bonne découverte du patrimoine culturel africain !** 🎨🌍
