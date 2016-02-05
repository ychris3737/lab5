var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
	// add the new friend 
	var newFriend={"name":req.query.name,
				   "description":req.query.description,
				   "imageURL":"https://lorempixel.com/400/400/people"};
	data["friends"].push(newFriend);
	//render
	res.render('add', data);
 }