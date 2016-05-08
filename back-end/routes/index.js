var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoUrl = "mongodb://localhost:27017/students";
var connection = mongoose.connect(mongoUrl);
var Student = require('../models/students');


router.get('/students/:method', function(req, res, next) {
	var students = [];

	Student.find({}, function(error, document){
		for(var i = 0; i < document.length; i++){
			students.push(document[i].name);
		}
		if(req.params.method == 'sort'){
			students.sort();
		}
		else if(req.params.method == 'reverse'){
			students.sort();
			students.reverse();
		}
		
		res.json(students);
	});	
});

module.exports = router;
