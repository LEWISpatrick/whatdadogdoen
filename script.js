// .then - promises
// asynchronous programing or stuff you have to wait for 

const dogImageDiv = document.getElementById('dogImage')

fetch('https://dog.ceo/api/breeds/image/random')
  .then(Response => Response.json())
  .then(jason => {
    
    dogImageDiv.innerHTML = `<img src="${jason.message}" height = 300 width = 800 /> `

    
  })

