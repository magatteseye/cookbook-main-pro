const express = require('express');
const cors = require('cors');

const recipeRoutes = require('./routes/recipe.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('API Cookbook is running');
});

module.exports = app;

