// Inital requirement for the "dotenv" package //
require("dotenv").config();

// Package requirements and variables for LIRI to run properly //
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

// List of LIRI commands //
switch (liriCommand) {
    case "my-tweets":
        text = "My tweets":
        break;
    case "spotify-this-song":
        text = "Spotify this song";
        break;
    case "move-this":
        text = "Move this";
        break;
    case "do-what-it-says";
        text: "Do what it says";
}