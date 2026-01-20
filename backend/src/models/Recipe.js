const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },  
    category: {
        type: String,
        required: true
      },
    ingredients: {
      type: [String],
      required: true
    },
    steps: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  },
 
  
);

module.exports = mongoose.model('Recipe', recipeSchema);

