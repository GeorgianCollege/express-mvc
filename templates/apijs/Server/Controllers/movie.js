// import the Movie Model
const Movie = require('../Models/movie');

// Helper function for sanitizing arrays
function SanitizeArray(unsanitizedArray)
{
    let sanitizedArray = [];
    for (const unsanitizedString of unsanitizedArray) 
    {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}

/* API Functions */

// Display the Movie List
function DisplayMovieList(req, res, next)
{
    // Find all Movies in the Movie collection
    Movie.find({})
    .then(function(data)
    {
        res.status(200).json(data);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Display a single Movie by ID
function DisplayMovieByID(req, res, next)
{
    let id = req.params.id;
    Movie.findById({_id: id})
    .then(function(data)
    {
        res.status(200).json(data)
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Add a new Movie to the database
function AddMovie(req, res, next)
{

    let genres = SanitizeArray((req.body.genres).split(","));
    let directors = SanitizeArray((req.body.directors).split(","));
    let writers = SanitizeArray((req.body.writers).split(","));
    let actors = SanitizeArray((req.body.actors).split(","));

    let movie = new Movie({
       movieID: req.body.movieID,
       title: req.body.title,
       studio: req.body.studio,
       genres: genres,
       directors: directors,
       writers: writers,
       actors: actors,
       length: req.body.length,
       year: req.body.year,
       shortDescription: req.body.shortDescription,
       mpaRating: req.body.mpaRating,
       criticsRating: req.body.criticsRating
    });

    Movie.create(movie)
    .then(function()
    {
        res.json(movie);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Update an existing Movie in the database
function UpdateMovie(req, res, next)
{
    // Get the id from the url
    let id = req.params.id;

    // Sanitize the array
    let genres = SanitizeArray((req.body.genres).split(","));
    let directors = SanitizeArray((req.body.directors).split(","));
    let writers = SanitizeArray((req.body.writers).split(","));
    let actors = SanitizeArray((req.body.actors).split(","));

    // Instantiate a new Movie Object
    let movieToUpdate = new Movie({
       _id: id,
       movieID: req.body.movieID,
       title: req.body.title,
       studio: req.body.studio,
       genres: genres,
       directors: directors,
       writers: writers,
       actors: actors,
       length: req.body.length,
       year: req.body.year,
       shortDescription: req.body.shortDescription,
       mpaRating: req.body.mpaRating,
       criticsRating: req.body.criticsRating
    });

    // Find the Movie by id and then update
    Movie.updateOne({_id: id}, movieToUpdate)
    .then(function()
    {
        res.json(movieToUpdate);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Delete an existing Movie in the database
function DeleteMovie(req, res, next)
{
    // Get the id from the url
    let id = req.params.id;

    // Find the Movie by id and then delete
    Movie.deleteOne({_id: id})
    .then(function()
    {
        res.json(id);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Make these functions accessible outside the module
module.exports = {
    DisplayMovieList,
    DisplayMovieByID,
    AddMovie,
    UpdateMovie,
    DeleteMovie,
  };