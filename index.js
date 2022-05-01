const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Node Express!!!');
});

const users = [
    {id: 1, name: 'halim', email: 'halim@gmail.com', phone: '01700000111'},
    {id: 2, name: 'halima', email: 'halima@gmail.com', phone: '017000000222'},
    {id: 3, name: 'riyaj', email: 'riyaj@gmail.com', phone: '01700000333'},
    {id: 4, name: 'rony', email: 'rony@gmail.com', phone: '01700000444'},
    {id: 5, name: 'moyna', email: 'moyna@gmail.com', phone: '01700000555'},
    {id: 6, name: 'lalon', email: 'lalon@gmail.com', phone: '01700000666'},
    {id: 7, name: 'rashid', email: 'rashid@gmail.com', phone: '01700000777'},
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
    console.log('Node is listenjing...', port);
});