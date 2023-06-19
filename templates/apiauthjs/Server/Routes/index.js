const express = require('express');
let router = express.Router();

/* Get the movie Controller */
const indexController = require('../Controllers/movie');

/* GET /api/movies - display the movie list */
router.get('/', (req, res, next) => 
{
  indexController.DisplayMovieList(req, res, next);
});

/* GET /api/movies/:id - display a movie by id */
router.get('/:id', (req, res, next) => 
{
  indexController.DisplayMovieByID(req, res, next);
});

/* POST /api/movies - add a new movie */
router.post('/', (req, res, next) => 
{
  indexController.AddMovie(req, res, next);
});

/* PUT /api/movies/:id - update a movie by id */
router.put('/:id', (req, res, next) => 
{
  indexController.UpdateMovie(req, res, next);
});

/* GET /api/movies/:id - delete a movie by id */
router.delete('/:id', (req, res, next) => 
{
  indexController.DeleteMovie(req, res, next);
});

module.exports = router;
