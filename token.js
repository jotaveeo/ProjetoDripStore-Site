// JWT (JSON Web Token)

// 1.Instalar o jwt: npm i jsonwebtoken

// 2. Importar o jwt
import jwt from 'jsonwebtoken';

// Palavra Secreta
const secret = "Geração Tech"

function gerarToken() {
    const usuario = {
        id: 1,
        username: "Tayara"
    };

    const options = { expiresIn: '1h' };

    //Gera um Token
    return jwt.sign(usuario, secret, options);
}

function verificarToken(token) {
    jwt.verify(token, secret, (erro, decoded) => {
        if (erro) {
            console.error('Token invalido: ', erro);
            
        } else {
            console.log('Token decodificado: ', decoded);           
        } 
    });
}


// ===== Chama as Functions ===== //
const token = gerarToken();
    console.log("\nToken: " + token + "\n") ;

verificarToken(token);

//  Middleware para validar token
function validateToken(request, response, next) {
    const authHeader = req.headers['autorizado'];

    if (!authHeader || !authHeader.startWith('')) {
        return res.status(400).json({ error: 'Token inválido ou ausente' });
    }

    const token = authHeader.split('')[1];

    jwt.verify(token, secret, (err, user) => {
        if (erro) {
            return res.status(400).json({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
}

// GET 
app.get('/protected', validateToken, (resquest, response) => {
    resquest.status(200).json({ message: 'Rota protegida acessada com sucesso' });
});

// POST
app.post('/public', validateToken, (resquest, response) => {
    resquest.status(200).json({ message: '  Rota protegida acessada com sucesso' });
});

// PUT
app.put('/protected', validateToken, (resquest, response) => {
    response.status(200).hson({ message: 'Recurso atualizado com sucesso' });
});

// DELETE
app.delete('/protected', validateToken, (resquest, response) => {
    response.status(200).json({ message: 'Recuso deletado com sucesso'})
});

// Servidor
const PORT = 3000;
app.listen(PORT)










    