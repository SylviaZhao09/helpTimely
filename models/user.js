var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userScheMa = new Schema({
	userName: String,
	passWord: String
});
exports.user = mongoose.model('user',userScheMa);