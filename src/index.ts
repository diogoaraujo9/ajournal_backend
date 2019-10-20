const dotenv = require('dotenv');
import express from "express";
import * as bodyParser from 'body-parser';
const contextMongoose = require('mongoose');

var cors = require('cors')
const app = express();
dotenv.config();


const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['application/json', 'application/*+json'], limit: '100mb' }));
app.use(bodyParser.text({ type: [ 'application/xml', 'text/xml'], limit: '100mb' }));
app.use(bodyParser.raw({ type: [ 'application/vnd.custom-type' ], limit: '100mb' }));
app.use(bodyParser.text({ type: [ 'text/html', 'text/plain', '' ], limit: '100mb' }));
app.use(cors());

app.get("/", ( req, res ) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening at http://localhost:${port}`);
});

app.use('/api', require('./routers'));


// essa biblioteca será utilizada na API para fazer autenticaçao seguindo o método JWT. 
// Se quiser estudar um pouco mais sobre JWT, pesquise aqui
// https://jwt.io/introduction/
//var expressJwt = require('express-jwt');
// carrega as configurações mapeadas no json
//var config = require('tsconfig.json');

// DESCOMENTAR ESSA LINHA!!!
//api.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));



const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail';      // REPLACE WITH YOUR DB NAME
var uri = "mongodb://diogo_araujo9:lanadelrey@clusteteste-shard-00-00-pmzhi.mongodb.net:27017,clusteteste-shard-00-01-pmzhi.mongodb.net:27017,clusteteste-shard-00-02-pmzhi.mongodb.net:27017/ajournal?ssl=true&replicaSet=ClusteTeste-shard-0&authSource=admin&retryWrites=true&w=majority";

contextMongoose.connect(uri)
    .then(() => {
        console.log('Database connection successful')
    })
    .catch((err: any) => {
        console.error('Database connection error')
    })