const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    title: String,
    description: String,
    director: String,
    imgUrl: String,
});

const FilmModel = mongoose.model('films', filmSchema);

module.exports = FilmModel;