'use strict';

const express = require('express');
const app = express();

const user = [
    {
      userName:"userone",
      password: "userOne",
      blogPost: "SomethingOne",
      friends: [
        'jim5', 'bob6', 'me3'
      ]
    },
    {
      userName:"userTwo",
      password: "userTwo",
      blogPost: "SomethingTwo",
      friends: [
        'jim5', 'bob6', 'me3'
      ]
    },
    {
      userName:"userThree",
      password: "userThree",
      blogPost: "SomethingThree",
      friends: [
        'jim5', 'bob6', 'me3'
      ]
    },
    {
      userName:"userFour",
      password: "userFour",
      blogPost: "SomethingFour",
      friends: [
        'jim5', 'bob6', 'me3'
      ]
    }
    ];


app.use(express.static('./public/styles'));
app.use(express.static('./public/javascript'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html");
});

app.post('/', (req, res) => {
    res.redirect('localhost:8080/profile');
});
app.get('/profile', (req, res) => {
    res.sendFile(__dirname + "/public/views/profile.html");
});





app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});