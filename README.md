# Woordle Backend

**Backend pour le jeu Woordle, développé en Node.js avec Express.**
[Démo en ligne](https://woordle-backend.vercel.app/)

---

## Description
Ce dépôt contient le **backend** du jeu Woordle, conçu pour :
- Fournir une API REST pour récupérer des mots aléatoires.
- Gérer la logique métier côté serveur (validation, scores, etc.).
- Interagir avec le [frontend](https://github.com/LLafforgue/woordle_front_new).

---

## Technologies utilisées
- **Node.js** : Environnement d'exécution.
- **Express** : Framework pour créer l'API.
- **Yarn** : Gestionnaire de dépendances.
- **Vercel** : Hébergement et déploiement.

---

## 📂 Structure du projet
woordle_backend/
├── bin/               # Fichiers de configuration et démarrage
├── models/            # Modèles de données (ex : liste de mots)
├── routes/            # Routes de l'API (ex : /words)
├── app.js             # Point d'entrée de l'application
├── package.json       # Dépendances et scripts
├── vercel.json        # Configuration pour le déploiement sur Vercel
└── .env               # Variables d'environnement (à créer)

## 🚀 Installation et exécution

### Prérequis
- [Node.js](https://nodejs.org/) (version 14 ou supérieure).
- [Yarn](https://yarnpkg.com/) (optionnel, mais recommandé).

### Étapes
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/LLafforgue/woordle_backend.git
   cd woordle_backend
2. **Installer les dépendances** :
   yarn install

3. **Configurer les variables d'environnement** :
   Créez un fichier .env à la racine du projet (voir .env.example si disponible).

4. **Démarrer le serveur** :
 yarn start
 Le serveur sera accessible à l'adresse : http://localhost:3000.

*Auteur : [Ludovic Lafforgue](https://github.com/LLafforgue)*
