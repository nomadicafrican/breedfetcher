const request = require('request');
let breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
const fetchBreedDescription = function(breedName, callback) {
  request(url,(error, response, body)=>{
    //const data = JSON.parse(body);
    //console.log()
    //console.log('body',body)
    
    if (error) {
      callback(error, null);
      // console.log('error',error)
    }
    const breed = body && JSON.parse(body)[0];
    if (breed) {
      callback(null,breed.description);
      // console.log(breed.description)
      //console.log(data[0].description);
    } else {
      callback('breed not found');// console.log('breed not found')
    }
    
  });
};
  

//console.log(typeof data);
//console.log(process.argv)
//console.log(typeof body)
module.exports = {fetchBreedDescription};