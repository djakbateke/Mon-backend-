# Mon-backend-
  const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let articles = [
  { id: 1, titre: "Introduction à Node.js", contenu: "Node.js tourne côté serveur.", auteur: "Teddy" },
  { id: 2, titre: "Les API REST", contenu: "REST échange des données JSON via HTTP.", auteur: "Teddy" },
  { id: 3, titre: "Express.js", contenu: "Express simplifie le routage des API.", auteur: "Teddy" }
];

let nextId = 4;

app.get('/api/articles', (req, res) => {
  res.status(200).json(articles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: "Article non trouvé." });
  res.status(200).json(article);
});

app.post('/api/articles', (req, res) => {
  const { titre, contenu, auteur } = req.body;
  if (!titre || !contenu) return res.status(400).json({ message: "titre et contenu sont requis." });

  const nouvelArticle = { id: nextId++, titre, contenu, auteur: auteur || "Anonyme" };
  articles.push(nouvelArticle);

  res.status(201).json({ message: "Article ajouté !", article: nouvelArticle });
});

app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`));
