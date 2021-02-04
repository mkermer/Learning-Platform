const mongoose = require('mongoose');

const Schema = mongoose.Schema;

autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://user:user@cluster0.bhid2.mongodb.net/user?retryWrites=true&w=majority");

autoIncrement.initialize(connection);

const verificationSchema = new Schema({
    username: { type: String, },
    password: { type: String, },

});

verificationSchema.plugin(autoIncrement.plugin, 'Verfication')
const Verfication = mongoose.model('Verfication', verificationSchema);

module.exports = Verfication;