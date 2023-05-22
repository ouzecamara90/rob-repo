console.log("HELLO WORLD");


//Créez un fichier nommé hello-world.js
const http = require('http');

//créer un serveur
const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello Node!!!</h1>\n');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});


const fs = require('fs');

// Creer le fichier "welcome.txt"
fs.WriteFile('Welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

//Lire les donnees du fichier "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

});


