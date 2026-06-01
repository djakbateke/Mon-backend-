#mon-Backend.....

API Express simple pour le TP3.

## Lancer le projet
npm install
node server.js

## Routes
GET  /api/articles      → liste tous les articles
GET  /api/articles/:id  → un article par ID
POST /api/articles      → ajouter un article (body JSON : titre, contenu, auteur)
