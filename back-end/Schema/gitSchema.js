const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Github = new Schema({
    profilePicture: {
        type: String
    },
    profileName: {
        type: String
    },
    profileFollowers: {
        type: Integer
    },
    profileFollowing: {
        type: Integer
    }
});
module.exports = mongoose.model('Github', Github);
