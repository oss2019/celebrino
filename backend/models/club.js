const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    name: {type: String, required: true},
    secretary: {type: String, required: true},
    content: {type: String, required: true}
});
 
module.exports = mongoose.model('Club',clubSchema);