// Inital requirement for the "dotenv" package //
require("dotenv").config();

var keys = require("./keys.js");

// Package requirements and variables for LIRI to run properly //

var spotify = new Spotify(keys.spotify);  // Grabs Spotify keys //
var client = new Twitter(keys.twitter);  // Grabs Twitter keys //

var Twitter = require("twitter");  // Implements the twitter npm package //
var Spotify = require("node-spotify-api");  // Implements the spotify npm package //
var request = require("request");  // Implements the request npm package //
var fs = require("fs");  // Implements the file structure //

var ombdUrl = "http://www.omdbapi.com/?apikey=trilogy&t=";  // Sets the web url for ombd as a variable //

// User inputs on the command line //

var inputOne = process.argv[2];  //first user input that tells Liri what to do //
var inputTwo = process.argv[3];
var searchInput = "track";

console.log("\nConnecting to Skynet Mainframe\n")

// List of LIRI commands as functions //

switch (liriCommand) {
    
    case "my-tweets":
        myTweets();
        break;
    
    case "spotify-this-song":
        spotifyThisSong();
        break;
    
    case "movie-this":
        movieThis();
        break;
    
    case "do-what-it-says":
        doThis();
        break;

// Default message to be displayed to the user //

default: 
    console.log("\r\n" +"Don't let Devon's hairline be sacrificed for nothing, try a command after 'node liri.js' and see what happens! :" + "\r\n"+
    "1. my-tweets 'any twitter name' " +"\r\n"+
    "2. spotify-this-song 'any song name' "+"\r\n"+
    "3. movie-this 'any movie name' "+"\r\n"+
    "4. do-what-it-says."+"\r\n"+
    "Be sure to put the movie or song name in quotation marks if it's more than one word.");

}

// Functions ------------------------------------------------------------------------------------------ //

// Tried to get functions running but couldnt get them to work as well as the spotify npm package keeps returning a "not a constructor error" will rewrite functions for practice later. //