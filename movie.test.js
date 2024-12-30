let app = require('./index.js');
// Mocking the './movie.js' module
let request = require('supertest');
let http = require('http');
jest.mock('./movie.js', () => ({
  getAllMovies: jest.fn(),
  getMovieById: jest.fn(),
}));

const { getAllMovies, getMovieById } = require('./movie.js');

describe('Function Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test('should return all movies', async () => {
    const mockMovies = [
      { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
      { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
    ];

    getAllMovies.mockResolvedValue(mockMovies);

    let result = await request(app).get('/api/movies'); // Assertions
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(mockMovies);
  });
  test('should give Movie By Id', () => {
    const mockMovie = {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
    };

    getMovieById.mockReturnValue(mockMovie);
    const result = getMovieById(2);

    expect(result).toEqual(mockMovie);
    expect(getMovieById).toHaveBeenCalled();
  });
});
