var friends = require('./../controllers/friends.js');

module.exports = function(app) {
	app.get('/friends', function(req, res) {
		friends.index(req, res);
	});
	app.post('/friends', function(req, res) {
		friends.create(req, res);
	});
	app.post('/friends/remove', function(req, res) {
		friends.remove(req, res);
		console.log("Req object in remove post: " + req)
	});
}