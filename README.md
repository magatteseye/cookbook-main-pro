# cookbook-mean-project

Cookbook Pro — Application Full Stack MEAN
       Présentation du projet
Cookbook Pro est une application web full stack développée dans le cadre du Projet Final MEAN.
Elle permet de gérer une collection personnelle de recettes de cuisine (CRUD complet), avec une interface moderne, intuitive et une architecture professionnelle.
L’application respecte strictement l’architecture MEAN :
MongoDB (Base de données – Atlas)
Express.js (API REST)
Angular (Frontend)
Node.js (Serveur)
Une API externe (OpenFoodFacts) est également intégrée pour enrichir l’application (bonus).
      Objectifs pédagogiques
Mettre en place une architecture full stack complète
Implémenter un CRUD fonctionnel
Respecter les bonnes pratiques professionnelles
Utiliser Git proprement
Structurer une application Angular modulaire
Séparer clairement backend / frontend
Intégrer une API REST externe
       Architecture Globale 

       cookbook-pro/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   └── cookbook-front/
│       ├── src/
│       │   ├── app/
│       │   │   ├── pages/
│       │   │   ├── recipes/
│       │   │   ├── core/
│       │   │   └── app-routing.module.ts
│       │   └── styles.scss
│       ├── angular.json
│       ├── package.json
│       └── README.md
│
└── README.md


Backend — API REST (Node.js / Express / MongoDB)
    Sécurité & Configuration
Les informations sensibles sont stockées dans un fichier .env (non commité).
Exemple de .env :
PORT=3000
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/cookbook
   Modèle Mongoose (Recipe)
{
  title: String,
  description: String,
  category: String,
  imageUrl: String,
  ingredients: [String],
  steps: [String],
  createdAt,
  updatedAt
}

  Routes CRUD (obligatoires)
Méthode	Route	Description
GET	/api/recipes	        Récupérer toutes les recettes
GET	/api/recipes/:id	    Récupérer une recette
POST	/api/recipes	    Créer une recette
PUT	/api/recipes/:id	    Modifier une recette
DELETE	/api/recipes/:id	Supprimer une recette

✔ Testées via  Thunder Client
✔ Réponses JSON
✔ Architecture MVC respectée

   Lancer le backend
cd backend
npm install
npm run dev
Serveur lancé sur :
👉 http://localhost:3000
🎨 Frontend — Angular
🧱 Architecture Angular
Modules Angular
Components pages
Services HTTP centralisés
Classe Model Recipe
Routing propre
Template-driven forms
📦 Modules principaux
RecipesModule → gestion des recettes
CoreModule → layout / navbar
Pages → Home, Search
🧠 Classe Model Recipe
export class Recipe {
  constructor(
    public _id: string | null,
    public title: string,
    public description: string,
    public ingredients: string[],
    public steps: string[],
    public imageUrl: string,
    public category: string
  ) {}
}
🌐 Services Angular
🔹 RecipeService (API interne)
getAll()
getOne(id)
create(recipe)
update(id, recipe)
delete(id)
🔹 OpenFoodFactsService (API externe — BONUS)
Recherche de produits alimentaires
Service Angular dédié (bonne pratique respectée)
🔍 Recherche externe (Bonus)
Champ de recherche dans la navbar
Redirection vers /search
Résultats affichés depuis OpenFoodFacts
Message si aucun résultat
✔ Bonus API externe validé
▶️ Lancer le frontend
cd frontend/cookbook-front
npm install
ng serve
Application disponible sur :
👉 http://localhost:4200
🎨 UI / UX
Design moderne inspiré de Tastebite
Page Home avec :
Hero section
Catégories
Dernières recettes
Feedback utilisateur :
Messages de chargement
Messages d’erreur
Navigation fluide
🧪 Tests & validation
✔ CRUD testé via API + UI
✔ Formulaires fonctionnels
✔ Navigation Angular
✔ API externe fonctionnelle
✔ Séparation des responsabilités respectée


👨‍💻 Auteur
Nom : Magatte 
Formation : Développement Web / Full Stack
Projet : Projet Final MEAN
✅ Conclusion
Ce projet démontre la capacité à :
Concevoir une application full stack professionnelle
Respecter des consignes techniques strictes
Mettre en œuvre une architecture propre
Intégrer une API externe