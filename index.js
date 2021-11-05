const { fetchBreedDescription } = require('./breedCatcher');

const breedName = process.argv[2];
// let url = `https://api.thecatapicom/v1/breeds/search?q=${breed}`

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});