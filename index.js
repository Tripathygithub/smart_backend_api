const express = require('express');
const { resolve } = require('path');
let { getAllMovies, getMovieById } = require('./movie.js');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.get('/api/movies', async (req, res) => {
  try{
  let result = await getAllMovies();
  if(result.length===0)
    res.status(404).json({error : "No movie found"});
  res.status(200).json(result);
  }catch(error){
    res.status(500).json({error : "internal server error"});
  }
});

app.get('/api/movies/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let result = getMovieById(id);
  res.status(200).json(result);
});

app.get('/api/movie-details', (req, res) => {
  let id = parseInt(req.query.id);
  let result = getMovieById(id);
  res.status(200).json(result);
});

module.exports = app;

app.listen(port);
