"use strict";

const axios = require("axios");


exports.getIndex = (request, response) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8536a04298cc71d15a17e4390f15ac03&query=${request.query.search}`)
        .then(resultat => {
            let dB;
            dB = resultat.data.results;
            response.render("movies", { dB });
        })
        .catch((error) => { console.log(`error is ${error}`); });
};