const filmsDaos = require('../daos/films.dao');

exports.films_Get_All = async (req, res) => {
	const request = await filmsDaos.films_Get_All();
	res.status(200).json(request);
};

exports.films_Get_Id = async (req, res) => {
	const request = await filmsDaos.films_Get_Id(req.params.id);
	request.result === true && request.datas !== null
		? res.status(200).json(request)
		: request.result === true && request.datas === null
		? res.status(400).json({ ...request, message: 'Mauvais id' })
		: res.status(400).json({ ...request, message: 'Erreur de params' });
};

exports.films_Get_Category = async (req, res) => {
	const request = await filmsDaos.films_Get_Category(req.params.id);
	request.result === true && request.datas !== null
		? res.status(200).json(request)
		: request.result === true && request.datas === null
		? res.status(400).json({ ...request, message: 'Mauvais id' })
		: res.status(400).json({ ...request, message: 'Erreur de params' });
};
