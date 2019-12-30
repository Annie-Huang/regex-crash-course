// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

let sentence = 'The dog chased the cat.';
let regex = /the/;

let myString = 'Hello, World!';
let myRegex = /Hello/;
console.log("'Hello, World!' with /Hello/ ", myRegex.test(myString));

// #############################################################################
let waldoIsHiding = 'Somewhere Waldo is hiding in this text';
let waldoRegex = /Waldo/;
console.log("'Somewhere Waldo is hiding in this text' with /search/", waldoRegex.test(waldoIsHiding));

// #############################################################################
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;     // 'or' operator
console.log("'James has a pet cat.' with /dog|cat|bird|fish/", petRegex.test(petString));

// #############################################################################
let myString1 = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;         // Ignore Case While Matching
console.log("'freeCodeCamp' with /freecodecamp/i", fccRegex.test(myString1));

// #############################################################################
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;             // Extraction
console.log("'Extract the word 'coding' from this string.'" + ' with .match(/coding/) = ', extractStr.match(codingRegex));

// #############################################################################
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/g;               // Find More Than the First Match
console.log("'Repeat, Repeat, Repeat' with /Repeat/g = ", testStr.match(ourRegex));

let twinkleStar = 'Twinkle, twinkle, little star';
let startRegex = /twinkle/ig;
console.log("'Twinkle, twinkle, little star' with /twinkle/ig = ", twinkleStar.match(startRegex));

// #############################################################################
let humStr = "I'll hum a song";
let hugStr = "Bean hug";
let huRegex = /hu./;                    // Match Anything with Wildcard Period
                                        // The decimal point (.) matches any single character except the newline character, by default.
console.log("'I'll hum a song' with /hu./ = ", humStr.match(huRegex));;
console.log("'Bean hug' with /hu./ = ", hugStr.match(huRegex));;

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log("'Let's have fun with regular expressions! with /.un/", unRegex.test(exampleStr));

// #############################################################################




























