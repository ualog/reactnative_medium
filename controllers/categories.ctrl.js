const categoriesDaos = require('../daos/categories.dao');

exports.categories_Get_All = async (req, res) => {
	const request = await categoriesDaos.categories_Get_All();
	res.status(200).json(request);
};

exports.categories_Get_Id = async (req, res) => {
	const request = await categoriesDaos.categories_Get_Id(req.params.id);
	request.result === true && request.datas !== null
		? res.status(200).json({ ...request, message: 'Bien joué!' })
		: request.result === true && request.datas == null
		? res.status(400).json({ ...request, message: 'Mauvais id' })
		: res.status(400).json({...request, message: 'Erreur de params'});
};
