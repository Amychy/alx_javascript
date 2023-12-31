const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

//#!/usr/bin/node
/**
 * Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
 */

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
