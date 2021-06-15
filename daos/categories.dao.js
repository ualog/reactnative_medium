const CategoryModel = require('../models/model.categories.db');

exports.categories_Get_All = async () => {
    const request = await CategoryModel.find()
	return request;
};

exports.categories_Get_Id = async (id) => {
    try {
        const request = await CategoryModel.findById(id);
        return ({result: true, datas: request});
    } catch (error) {
        return ({result: false, datas: error});
    }
}