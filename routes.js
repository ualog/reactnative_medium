const express = require('express');
const router = express.Router();

const filmsCtrl = require('./controllers/films.ctrl');
const categoriesCtrl = require('./controllers/categories.ctrl');

router.get('/films', filmsCtrl.films_Get_All);
router.get('/films/:id', filmsCtrl.films_Get_Id);
router.get('/films/category/:id', filmsCtrl.films_Get_Category);

router.get('/categories', categoriesCtrl.categories_Get_All);
router.get('/categories/:id', categoriesCtrl.categories_Get_Id);

module.exports = router;
