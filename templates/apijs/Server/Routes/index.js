const express = require('express');
let router = express.Router();

/* Get the movie Controller */
const MovieController = require('../Controllers/movie');

router.get('/list', function(req, res, next)
{
  MovieController.DisplayMovieList(req, res, next);
});

router.get('/find/:id', function(req, res, next)
{
  MovieController.DisplayMovieByID(req, res, next);
});

router.post('/add', function(req, res, next)
{
  MovieController.AddMovie(req, res, next);
});

router.put('/update/:id', function(req, res, next)
{
  MovieController.UpdateMovie(req, res, next);
});

router.delete('/delete/:id', function(req, res, next)
{
  MovieController.DeleteMovie(req, res, next);
});

module.exports = router;
