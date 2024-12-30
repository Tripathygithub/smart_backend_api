

let movies=[
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
  { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
  { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
  { id: 5, title: 'The king', director: 'Soham Tripathy' }
];

 function getAllMovies(){
  return movies; 
}

function getMovieById(id){
  return movies.find(movie => movie.id===id);
}


module.exports={getAllMovies,getMovieById};
