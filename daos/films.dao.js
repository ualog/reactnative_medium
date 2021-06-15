const FilmModel = require('../models/model.films.db');
const CategoryModel = require('../models/model.categories.db');

exports.films_Get_All = async () => {
	const request = await FilmModel.find();
	return request;
};

exports.films_Get_Id = async (id) => {
	try {
		const request = await FilmModel.findById(id);
		return { result: true, datas: request };
	} catch (error) {
		return { result: false, datas: error };
	}
};

exports.films_Get_Category = async (id) => {
	try {
		const request = await CategoryModel.findById(id).populate('films').exec();
		return { result: true, datas: request };
	} catch (error) {
		return { result: false, datas: error };
	}
};
