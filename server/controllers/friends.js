var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
	return {
	// notice how index in the factory(client side) is calling the index method(server side)		
		index: function(req, res) {
			Friend.find({}, function(err, results) {
				if(err){
					console.log(err);
				}else {
					res.json(results);
				}
			});
		},

		create: function(req, res) {
			var friend = new Friend({name: req.body.name, age: req.body.age});
			friend.save (function (err, results) {
				if(err)
					console.log("something went wrong");
				else{
					console.log("successfully added a document to the db");
					res.json(results);
				}
			});			
		},

		remove: function(req, res) {
			console.log("req.body.name: " + req.body.name);

			Friend.remove({name: req.body.name}, function (err, results) {
				if(err)
					res.json(err);
				else
					res.json(results);
			});			
		}
	}
})();