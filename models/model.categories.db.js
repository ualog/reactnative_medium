const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
    films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'films' }]
});

const CategoryModel = mongoose.model('categories', categorySchema);

module.exports = CategoryModel;