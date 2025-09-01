# Site Web Formation IA

Un site web moderne et professionnel en français pour promouvoir la formation à l'intelligence artificielle.

## 🚀 Fonctionnalités

- **Design moderne et responsive** : Compatible desktop et mobile
- **Navigation fluide** : Barre de navigation sticky avec liens d'ancrage
- **Section Hero impactante** : Titre accrocheur avec statistiques clés
- **Cartes de bénéfices** : 4 avantages concrets de la formation IA
- **Statistiques visuelles** : Données récentes avec graphiques colorés
- **Témoignages authentiques** : Retours d'expérience de professionnels
- **Call-to-Actions clairs** : Boutons vers Google Calendar et Jaydai
- **Palette moderne** : Dégradés bleu-violet avec accents colorés

## 🛠️ Technologies utilisées

- **React 18** avec Vite
- **Tailwind CSS** pour le styling
- **Shadcn/UI** pour les composants
- **Lucide React** pour les icônes
- **Framer Motion** pour les animations

## 📦 Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou pnpm

### Installation
```bash
cd formation-ia-site
npm install
# ou
pnpm install
```

### Développement
```bash
npm run dev
# ou
pnpm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
# ou
pnpm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

## 🌐 Déploiement

### Option 1: Netlify (Recommandé)
1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Déployez automatiquement

### Option 2: Vercel
1. Importez le projet sur Vercel
2. Les paramètres sont détectés automatiquement
3. Déployez en un clic

### Option 3: Hébergement traditionnel
1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur web

## 📁 Structure du projet

```
formation-ia-site/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React
│   │   └── ui/           # Composants UI (shadcn)
│   ├── App.jsx           # Composant principal
│   ├── App.css           # Styles globaux
│   └── main.jsx          # Point d'entrée
├── index.html            # Template HTML
├── package.json          # Dépendances
└── README.md            # Ce fichier
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `src/App.css` :
- Bleu primaire : `#2563eb`
- Violet secondaire : `#7c3aed`
- Vert accent : `#16a34a`
- Orange accent : `#ea580c`

### Contenu
Modifiez le contenu dans `src/App.jsx` :
- Textes et titres
- Statistiques et chiffres
- Témoignages
- Liens CTA

### Images
Remplacez les images dans `src/assets/` et mettez à jour les imports dans `App.jsx`

## 🔗 Liens configurés

- **Prendre rendez-vous** : https://calendar.app.google/aRPgontveB5NCa359
- **Découvrir Jaydai** : https://jayd.ai

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Images optimisées
- Textes redimensionnés

## ⚡ Performance

- Images optimisées
- CSS minifié en production
- JavaScript bundlé et optimisé
- Chargement rapide

## 🎯 SEO

- Titre de page optimisé
- Structure HTML sémantique
- Meta descriptions (à ajouter si nécessaire)
- URLs propres avec ancres

## 📞 Support

Pour toute question ou personnalisation, contactez l'équipe de développement.

---

**Développé avec ❤️ pour promouvoir la formation à l'IA**

