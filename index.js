const http = require('http')
const fs = require('fs')

const axios = require("axios")

let myData = 'lorem'


const host = 'localhost'
const port = 8000


// Ecrire le fichier

fs.writeFile('test.txt', myData, (err) =>{
    if (err){
        console.log(err)
    }
    else{
        console.log('File has been created')
    }
})

// Lire le fichier

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });


// Create le serveur

const server = http.createServer((req, res)=>{
    res.end('<h1>Hello world</h1>')
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)    
})


axios.get('http://www.google.com/')
    .then((response) => {
        const content = response.data;

        fs.writeFile('googleResponse.html', content, (err) => {
            if (err) {
                console.error(err)
            } else {
                console.log('document google check')
            }
        })
    })
    .catch((error) => {
        console.error('La requête marche pas : ', error)
    })


