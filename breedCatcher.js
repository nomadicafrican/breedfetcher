const request = require('request')
let breed = process.argv[2]
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`


request(url,(error, response, body)=>{
  //const data = JSON.parse(body);
//console.log()
//console.log('body',body)
const breed = body && JSON.parse(body)[0];
 
if(error){

  console.log('error',error)
}else if (breed){
    console.log(breed.description)
    //console.log(data[0].description);
  } else {
    console.log('breed not found')
  }
  
})
//console.log(typeof data);
//console.log(process.argv)
//console.log(typeof body)
