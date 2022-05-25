"use strict";

// "api_key=8536a04298cc71d15a17e4390f15ac03"

//IMPORTS
const express = require("express");
const server = express();
const path = require("path");
const homeController = require("./controllers/homeController");

server.set("view engine", "ejs");

server.use(express.static("public"));

server.get("/search", (request, response) => response.redirect("/"));
server.get("/", (request, response) => {
    response.sendFile(path.resolve(__dirname, "index.html"));
});

//ROUTE
server.get("/movies", homeController.getIndex);

//PORTS
const port = 3000;

server.listen(port, () => {
    console.log(`Server has started and is listening at port ${port}`);
});