# cookbook-main-pro

         Cookbook – Application de gestion de recettes (MEAN)
    Présentation du projet
Cookbook est une application web de gestion de recettes de cuisine développée dans le cadre d’un projet Full Stack MEAN (MongoDB, Express, Angular, Node.js).
L’application permet de :
-Gérer une collection personnelle de recettes (CRUD)
-Consulter le détail d’une recette
-D'jouter, modifier et supprimer des recettes
-D'enrichir l’expérience utilisateur grâce à une API externe (OpenFoodFacts) pour la recherche de produits alimentaires
Ce projet respecte une architecture professionnelle, avec une séparation claire entre le frontend Angular et l’API backend.
   Etape technique
Frontend
Angular
TypeScript
Bootstrap
Architecture modulaire (Model / Service / Components)
Backend
Node.js
Express
MongoDB Atlas
Mongoose
Architecture MVC
API externe (Bonus)
OpenFoodFacts API
Service Angular dédié (OpenFoodFactsService)
  Architecture du projet
COOKBOOK-PRO/
│
├── backend/                     # API Backend (Node / Express)
│   │
│   ├── src/
│   │   ├── controllers/         # Logique métier (CRUD recettes)
│   │   ├── models/              # Schémas Mongoose (Recipe)
│   │   ├── routes/              # Routes de l’API
│   │   │   └── recipe.routes.js # Routes CRUD : getAll, getOne, create, update, delete
│   │   │
│   │   ├── app.js               # Configuration Express (middlewares, routes)
│   │   └── server.js            # Démarrage du serveur
│   │
│   ├── .env                     # Variables d’environnement (MongoDB, port)
│   ├── .gitignore               # Fichiers ignorés par Git
│   ├── package.json             # Dépendances backend
│   └── package-lock.json
│
├── frontend/
│   └── cookbook-front/          # Application Angular
│       ├── src/
│       │   ├── app/
│       │   │   ├── pages/        # Pages générales (Home, Search pour l'API externe.)
│       │   │
│       │   │   ├── recipes/      # Module principal "Recettes"
│       │   │   │   ├── models/   # Modèle Recipe (classe TypeScript)
│       │   │   │   ├── pages/    # Pages recettes (liste, détail, formulaire)
│       │   │   │   ├── services/ # Services Angular (API interne + OpenFoodFacts)
│       │   │   │   ├── recipes.module.ts
│       │   │   │   └── recipes-routing.module.ts
│       │   │
│       │   │   ├── app-routing.module.ts # Routing principal
│       │   │   ├── app.module.ts          # Module principal Angular
│       │   │   └── app.component.*        # Composant racine
│       │   │
│       │   ├── assets/           # Images et ressources statiques
│       │   ├── styles.scss       # Styles globaux
│       │   └── index.html        # Fichier HTML principal
│       │
│       ├── angular.json          # Configuration Angular
│       ├── package.json          # Dépendances frontend
│       └── tsconfig.json
│
└── README.md                     # Documentation du projet

  Fonctionnalités
  Recettes (CRUD)
Affichage de toutes les recettes
Détail d’une recette
Ajout d’une recette
Modification d’une recette
Suppression d’une recette
  Recherche externe (Bonus)
Recherche de produits alimentaires via OpenFoodFacts
Affichage des résultats avec images
Intégration visuelle cohérente avec l’application
 Base de données
MongoDB Atlas
Schéma Mongoose Recipe :
title
description
ingredients
steps
imageUrl
category
  Installation & lancement
1.Prérequis
Node.js
npm
Angular CLI
Compte MongoDB Atlas
2.Backend
cd backend
npm install
npm start
Créer un fichier .env à la racine du backend :
Exemple: MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
  Un fichier .env.example est fourni.
3.Frontend
cd frontend
npm install
ng serve
Application accessible sur :
http://localhost:4200
  Sécurité
Les identifiants MongoDB sont stockés dans un fichier .env
Le fichier .env est exclu du dépôt via .gitignore
   Objectifs pédagogiques atteints
✔ Architecture MEAN respectée
✔ CRUD complet fonctionnel
✔ Séparation Front / Back
✔ Utilisation de services Angular
✔ API externe intégrée proprement
✔ UI/UX soignée (Bootstrap + CSS composants)
    Améliorations possibles
Authentification utilisateur
Favoris
Pagination
Upload d’images
Responsive avancé
 Auteur
Projet réalisé par: Magatte Seye 
Dans le cadre du Projet Final – Développement Full Stack MEAN (Angular)
