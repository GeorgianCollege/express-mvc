const express = require('express');
let router = express.Router();

/* Get the movie Controller */
const MovieController = require('../Controllers/movie');

/* GET /api/movies  - display the movie list */
router.get('/', (req, res, next) => 
{
  MovieController.DisplayMovieList(req, res, next);
});

/* GET /api/movies/:id - display a movie by id */
router.get('/:id', (req, res, next) => 
{
  MovieController.DisplayMovieByID(req, res, next);
});

/* POST /api/movies - add a new movie */
router.post('/', (req, res, next) => 
{
  MovieController.AddMovie(req, res, next);
});

/* PUT /api/movies/:id - update a movie by id */
router.put('/:id', (req, res, next) => 
{
  MovieController.UpdateMovie(req, res, next);
});

/* DELETE /api/movies/:id - delete a movie by id */
router.delete('/:id', (req, res, next) =>
{
  MovieController.DeleteMovie(req, res, next);
});

module.exports = router;
