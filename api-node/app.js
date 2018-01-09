var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    var data = [
        {
            api_version: "1.0.0",
            author: "Antônio Abrantes"
        }
    ];
    res.send(JSON.stringify(data));
});


app.get('/users', function(req, res) {
    var data = [
        {
            users : [
                {
                    id: 1,
                    name: 'Antônio Abrantes',
                    age: 32
                },
                {
                    id: 2,
                    name: 'Ana Paula',
                    age: 25
                },
                {
                    id: 3,
                    name: 'Fulano de Tal',
                    age: 32
                }
            ]
        }
    ];

    res.send(JSON.stringify(data[0]['users']));
});

app.get('/user/:id/:name/:age', function(req, res) {
    var data = [
        {
            success: true
        },
        {
            user: req.params.id,
            name: req.params.name,
            age: req.params.age
        }
    ];
    res.send(JSON.stringify(data));
});

app.listen(63342, function() {
    console.log('Server running in door 63342.');
});