// Importe le module Express
const express = require('express');
const app = express();
const port = 3001;

// Première route : page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil  saikou!');
});

// Deuxième route : une page "À propos"
app.get('/about', (req, res) => {
  res.send('Ceci est la page "À propos".');
});

// Troisième route : une route dynamique avec un paramètre
app.get('/users/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Bonjour, ${userName} !`);
});

// Démarre le serveur et le fait écouter sur le port spécifié
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});