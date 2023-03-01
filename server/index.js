'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//////AIXÒ ÉS NOU I SERIA PER TREBALLAR AMB MYSQL
//COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
//importem mysql
const cors = require("cors");
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

app.use(cors());

//declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
// i amb permissos restringits
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'CineLike',
    user: 'root',
    password: '1234'
});

// LOGIN - Get username and password from angular
app.post('/login', function(req,res){
	console.log("Entered login function!")
	console.log(req.body)
	let username = req.body.username;
	let password = req.body.password;

	var sql = 'select * from users where username =? and password=?';

	connection.query(sql, [username,password], function(error,result){
		if(error) {
			console.log('Loggin Error');
				res.send('username or password incorrect');
		} else {
			if(result.lenght > 0) {
				console.log("You just logged in!");
				console.log(result);
				const accessToken = jwt.sign({ username: result.username, role: result.role }, accessTokenSecret, {expiresIn: '1h'});

				res.json({ resultats: result[0], accessToken: accessToken })
				console.log(JSON.stringify(result[0]));
				user = result[0];
			} else {
				console.log("The loggin not worked :(")
				res.send();
			}
		}
	})
});

//fem servir la BBDD que tenim
app.get('/api/db', function (req, res) {
    console.log(req.body);
    console.log("Films DataBase");
    //provem de connectar-nos i capturar possibles errors
    connection.connect(function (err) {
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });

    connection.query('SELECT * FROM films', function (error, results, field) {
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            /*COMPROVACIÓ DE DADES PER CONSOLA DE NODE*/
            // console.log(results);
            // results.forEach(result => {
            // console.log(result.user);
            // })
            res.status(200).send({ resultats: results })
        }
    });
    connection.end();
})
app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})
