const fetch = require('node-fetch')

async function getBreakingBadTest () {
    console.log(`getBreakingBad`)
    return;
}

async function getAllCharacters () {
    let url = `https://www.breakingbadapi.com/api/characters`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}


async function getCharacter (name) {
    let url = `https://www.breakingbadapi.com/api/characters?name=${name}`
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getAllEpisodes () {
    let url = `https://www.breakingbadapi.com/api/episodes`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getEpisodeById (id) {
    let url = `https://www.breakingbadapi.com/api/episodes/${id}`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getAllQuotes () {
    let url = `https://www.breakingbadapi.com/api/episodes`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getQuoteByAuthor (fName, lName) {
    console.log(`getQuoteByAuthor`)
    let url = `https://www.breakingbadapi.com/api/quote?author=${fName}+${lName}`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}



module.exports = { getBreakingBadTest,
                    getAllCharacters,
                    getCharacter,
                    getAllEpisodes,
                    getEpisodeById,
                    getAllQuotes,
                    getQuoteByAuthor
                 };
