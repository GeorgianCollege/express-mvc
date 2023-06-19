const mongoose = require('mongoose');
const Schema = mongoose.Schema; // alias for mongoose Schema
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema
({
    displayName: String,
    username: String,
    emailAddress: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);
const Model = mongoose.model("User", UserSchema);

module.exports = Model;