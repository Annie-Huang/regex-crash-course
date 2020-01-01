// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

let bgRegex = /b[aiu]g/;    // means start with b, then either a, i, u, then followed by g

let quoteSample = 'Beware of bugs in the above code; I have only prove it correct';
let vowelRegex = /[aeiou]/ig;           // use [] is the same as using | seperator.
let vowelRegex1 = /a|e|i|o|u/ig;
console.log("'Beware of bugs in the above code; I have only prove it correct' with /[aeiou]/ig = ", quoteSample.match(vowelRegex));
console.log("'Beware of bugs in the above code; I have only prove it correct' with /a|e|i|o|u/ig = ", quoteSample.match(vowelRegex1));

// #############################################################################
let quoteSample1 = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/ig;          // match all alphabet, small case or upper case.
console.log("'The quick brown fox jumps over the lazy dog.' with /[a-z]/ig = ", quoteSample1.match(alphabetRegex));

// #############################################################################
let quoteSample2 = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[2-6h-s]/ig;             // match some alphabets and some numbers
console.log("'Blueberry 3.141592653s are delicious.' with /[2-6h-s]/ig", quoteSample2.match(myRegex));

// #############################################################################
// Match Single Characters Not Specified
// [^xyz]       A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets.
//              You can specify a range of characters using a hyphen. Everything that works in the normal character set also works here.
let quoteSample3 = '3 blind mice.';
let myRegex1 = /[^0-9aeiou]/ig;                     // Match everything except for all numbers and all vowels
console.log("'3 blind mice.' with /[^0-9aeiou]/ig = ", quoteSample3.match(myRegex1));

// #############################################################################
// Match Characters that Occur One or More Times
// +            Matches the preceding expression 1 or more times.
let difficultSpelling = 'Mississippi';
let myRegex2 = /s+/g;                               // Match 's' One or More Times
console.log("'Mississippi' with /s+/g = ", difficultSpelling.match(myRegex2));

// #############################################################################
// Match Characters that Occur Zero or More Times
// *            Matches the preceding expression 0 or more times.
let soccerWord = 'gooooooooal!';
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;                                // Match 'o' Zero or More Times
console.log("'gooooooooal!' with /go*/ = ", soccerWord.match(goRegex));     // there is a 'gooooooooal'
console.log("'gut feeling' with /go*/ = ", gPhrase.match(goRegex));         // there is a 'gut'
console.log("'over the moon' with /go*/ = ", oPhrase.match(goRegex));       // there is no 'g'

let chewieQuote = 'Aaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/;                              // Find match for 'a' Zero or More times.
let chewieRegex1 = /a*/i;                              // My version
console.log("'Aaaaaaaaaaaaaaarrrgh!' with /Aa*/ = ", chewieQuote.match(chewieRegex));
console.log("'Aaaaaaaaaaaaaaarrrgh!' with /a*/i = ", chewieQuote.match(chewieRegex1));

// #############################################################################
// Find Characters with Lazy Matching
// Greedy and lazy matches... * vs *?
// A greedy match finds the longest possible part of the string that fits the regex pattern and returns it as a match
// A lazy match finds the smallest possible part of the string and returns that regex patterns default to greedy

// greedy match
let string = 'titanic';
let regex = /t[a-z]*i/; // t: start with t. [a-z]*: we want zero or more of any letter (a-z means a-z letter, * means 0 or more occurrence). i: ends with a i.
console.log("'titanic' with /t[a-z]*i/ = ", string.match(regex));
// lazy match
// ?            Matches the preceding expression 0 or 1 time.
let regex1 = /t[a-z]*?i/; // t: start with t. [a-z]*: we want zero or more of any letter (a-z means a-z letter, * means 0 or more occurrence, ? means 0 or 1 occurrence). i: ends with a i.
console.log("'titanic' with /t[a-z]*?i/ = ", string.match(regex1));


let text = '<h1>Winter is coming</h1>';
let myRegex3 = /<.*>/;
console.log("'<h1>Winter is coming</h1>' with /<.*>/ = ", text.match(myRegex3));
let myRegex4 = /<.*?>/;
console.log("'<h1>Winter is coming</h1>' with /<.*>/ = ", text.match(myRegex4));










