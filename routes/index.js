var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/helpTimely');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function(callback){
	console.log('connect successfully')
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
