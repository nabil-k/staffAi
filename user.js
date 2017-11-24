var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');
//module used to encrypt password data


var UserTrafficSchema = new Schema({
	fullName:{type: String},
	profileId:{type: String},
	trafficQuery:{type: String},
	date:{type: String},
	time:{type: String}
}, {collection: 'traffic'});

module.exports = mongoose.model('UserTraffic', UserTrafficSchema);

// var UserSchema = new Schema({
// 	name:{type: String},
// 	traffic:{type: String},
// 	date:{type: String},
// 	time:{type: String}

// });

// module.exports = mongoose.model('User', UserSchema);

