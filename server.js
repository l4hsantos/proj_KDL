const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());
    let pessoas = [
        { id: 1, nome: 'Laís', idade: 15 },
        { id: 2, nome: 'Davi', idade: 16 },
        { id: 3, nome: 'Kelven', idade: 16 }
    ];
app.listen(port, () => {
    console.log(`Servidor em execução http://localhost:${port}`);
});
