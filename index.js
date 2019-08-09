const express = require('express');
require('dotenv').config()

const server = express();
server.use(express.json())

const people = [
    {
        id: 1,
        name: 'Madison McKown',
    },

    {
        id: 2,
        name: 'Skye Malmberg',
    },

    {
        id: 3,
        name: 'Luke Skywalker',
    },
]


const chores = [
    {
        id: 1,
        description: 'killing monsters',
        assignedTo: people[0].id,
        completed: false
    },

    {
        id: 2,
        description: 'slaying dragons',
        assignedTo: people[1].id,
        completed: false
    },

    {
        id: 3,
        description: 'toppling the Empire',
        assignedTo: people[2].id,
        completed: false
    }
]

let choreID = 3



server.get('/', (req, res) => {
    res.status(200).json(people)
});

server.get('/chores', (req, res) => {

    const com = req.query.com;

    if(com){
        const filter = com === 'true' ? true : false;
        const result = chores.filter(chore => chore.com === filter);
        res.status(200).json(result)
    } else {
        res.status(200).json(chores)
    }
});

server.get('/chores/:id', (req, res) => {
    
});


server.put('/chores', (req, res) => {
    
});


server.post('/chores', (req, res) => {
    const chore = req.body
    
    chore.id = choreID

    choreID = choreID + 1

    chores.push(chore)

    res.status(200).json(chore)
});

server.delete('/chores', (req, res) => {
    
});

const port = process.env.PORT || 7777
server.listen(port, () => {
    console.log(`\nServer is running on port ${port}\n`)
});