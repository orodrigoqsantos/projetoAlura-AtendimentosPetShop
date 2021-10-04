const fs = require('fs');

fs.readFile('./assets/doguinho.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada');
    console.log(buffer);

    fs.writeFile('./assets/doguinho2.jpg', buffer, (erro) => {
        console.log('A imagem foi escrita');
    })
});