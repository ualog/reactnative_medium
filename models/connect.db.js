const mongoose = require('mongoose');

const URL_BDD = 'mongodb+srv://user:LAPUglnotEbEq0IA@ualogclustertests.uquy6.mongodb.net/reactnativeMedium?retryWrites=true&w=majority';

const options = {
	connectTimeoutMS: 5000,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose.connect(URL_BDD, options, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('*** DB CONNECTED ***');
	}
});

module.exports = mongoose;
