const mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias for mongoose Schema

// Movie Schema - defines the structure of a movie
let movieSchema = new Schema
({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: String,
    criticsRating: Number
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;