console.log('index.js')

const characterContainer = document.querySelector('.characters-container');
const episodeContainer = document.querySelector('.episodes-container');
const quoteContainer = document.querySelector('.quotes-container');

let charactersAllGlobal;
let characterSingleGlobal;
let episodesAllGlobal;
let episodeSingleGlobal;
let quote;

async function getAllCharacters () {
    let url = `https://my-breaking-bad.herokuapp.com/api/characters`

    const response = await fetch(url);
    const data = await response.json();
    charactersAllGlobal = data;
    console.log(charactersAllGlobal);
    getAllCharactersDisplay ()

    return charactersAllGlobal;
}

getAllCharacters();

function getAllCharactersDisplay () {
    charactersAllGlobal.forEach(element => {
        
        let li = document.createElement('li');
        let charImg = document.createElement('img');
        let charName = document.createElement('p');
        let charNickName = document.createElement('p');
        let charOccu = document.createElement('p');
        let charstatus = document.createElement('p');
        let charPortray = document.createElement('p');

        charImg.src = element.img;
        charName.textContent = element.name;
        charOccu.textContent = element.occupation[0];
        charNickName.textContent = element.nickname;
        charstatus.textContent = element.status;
        charPortray.textContent = element.portrayed;

        li.append(charImg,
                 charName, 
                 charOccu,
                 charNickName,
                 charstatus,
                 charPortray);
                 
        li.classList.add('character');
        characterContainer.append(li);


        //console.log(element);
    });
}


async function getCharacter (name) {
    let url = `https://my-breaking-bad.herokuapp.com/api/characters/${name}`

    const response = await fetch(url);
    const data = await response.json();
    characterSingleGlobal = data;

    console.log(characterSingleGlobal);

    return characterSingleGlobal;
}

//getCharacter('walter');


async function getAllEpisodes () {
    let url = `https://my-breaking-bad.herokuapp.com/api/episodes`

    const response = await fetch(url);
    const data = await response.json();
    episodesAllGlobal = data;
    console.log(episodesAllGlobal);

    return episodesAllGlobal;
}

//getAllEpisodes()

async function getEpisodeById (id) {
    let url = `https://my-breaking-bad.herokuapp.com/api/episodes/${id}`

    const response = await fetch(url);
    const data = await response.json();
    episodeSingleGlobal = data;
    console.log(episodeSingleGlobal);

    return episodeSingleGlobal;
}

//getEpisodeById(1);

async function getQuoteByAuthor (fname, lname) {
    let url = `https://my-breaking-bad.herokuapp.com/api/quotes?fname=${fname}&lname=${lname}`

    const response = await fetch(url);
    const data = await response.json();
    quote = data;
    console.log(quote);

    return quote;
}

//getQuoteByAuthor ('jesse', 'pinkman')
