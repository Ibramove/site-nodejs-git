const express = require('express');
const app = express();

// Écoute le port fourni par OpenShift (PORT) ou 8080 par défaut
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello depuis Node.js sur OpenShift 🚀'));
app.listen(port, '0.0.0.0', () => console.log(`Server listening on ${port}`));
