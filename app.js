const express =  require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const func = require('./functions');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'client')));

let reqPath = path.join(__dirname, '/client');
let errorPath = path.join(__dirname, '/client');


app.get('/', (req, res)=> {
    res.sendFile(reqPath + '/index.html');
});

app.get('/api/characters', async (req, res)=> {
    const result = await func.getAllCharacters();

    res.send(result);
});

app.get('/api/characters/:name', async (req, res)=> {
    //console.log(req.params.name);
    const result = await func.getCharacter(req.params.name);
    res.send(result);
});

app.get('/api/episodes', async (req, res)=> {
    const result = await func.getAllEpisodes()
    res.send(result);
});

app.get('/api/episodes/:id', async (req, res)=> {

    const result = await func.getEpisodeById(req.params.id)
    res.send(result);
});

app.get('/api/quotes', async (req, res)=> {

    let result;
    let fName = req.query.fname;
    let lName = req.query.lname;

    console.log(req.query.fname)
    //http://localhost:3000/api/quotes?fname=jesse&lname=pinkman

    // && Object.keys(obj).length === 0
    // && Object.getPrototypeOf(obj) === Object.prototype

    req.query.fname && req.query.lname? 
    result = await func.getQuoteByAuthor(fName, lName)  
    : result = await func.getAllQuotes() 

    res.send(result);
});


app.get('*', function(req, res) {
    res.sendFile(errorPath + '/error.html');
  });


app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})
