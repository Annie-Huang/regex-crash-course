// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Find One or More Criminals in a Hunt
// A C represent a criminal. We want to find any C in the string
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
console.log("'P1P2P3P4P5P6CCCP7P8P9' with /C+/ = ", crowd.match(reCriminals));

// #############################################################################
// Match Beginning String Patterns
// ^        Matches the beginning of input.
let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/;
console.log("'Cal and Ricky both like racing.' with /^Cal/", calRegex.test(rickyAndCal));
let rickyAndCal1 = ' and Ricky Cal both like racing.';
console.log("' and Ricky Cal both like racing.' with /^Cal/", calRegex.test(rickyAndCal1));

// #############################################################################
// Match Ending String Patterns
// $        Matches the end of input.
let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/;
console.log("'The last car on the train is the caboose' with /caboose$/", lastRegex.test(caboose));
let caboose1 = 'The last car on a caboose train is the ';
console.log("'The last car on a caboose train is the ' with /caboose$/", lastRegex.test(caboose1));


// #############################################################################
// Match All Letters and Numbers
// \w       Matches any alphanumeric character including the underscore. Equivalent to [A-Za-z0-9_]
let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g;
// each letter will be counted as one item. space the '.' are not counted
console.log("'The five boxing wizards jump quickly.' with /\\w/g has the length of ", quoteSample.match(alphabetRegexV2).length); // 31

// #############################################################################
// Match Everything But Letters and Numbers
// \W       Matches any non-word character.
//          Opposite of \w
let quoteSample1 = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g;
// Only count ' ' and '.'
console.log("'The five boxing wizards jump quickly.' with /\\W/g has the length of ", quoteSample1.match(nonAlphabetRegex).length); // 6

// #############################################################################
// Match All Numbers
// \d       Matches a digit character. Equivalent to [0-9].
let numString = 'Your sandwich will be $5.00';
let numRegex = /\d/g;
// [ '5', '0', '0' ]
console.log("'Your sandwich will be $5.00' with /\\d/g has the length of ", numString.match(numRegex).length);

// #############################################################################
// Match All Non-Numbers
// \D       	Matches a non-digit character.
let numString1 = 'Your sandwich will be $5.00';
let numRegex1 = /\D/g;
// Everything except for [ '5', '0', '0' ]
console.log("'Your sandwich will be $5.00' with /\\D/g has the length of ", numString1.match(numRegex1).length); // 24

// #############################################################################
// Restrict Possible Usernames
// 1) If there are numbers, they must be at the end.
// 2) Letters can be lowercase and uppercase.
// 3) At least two characters long. Two-letter names can't have numbers
// {n,m}        Matches at least "n" and at most "m" occurrences of the preceding expression,
//              where "n" and "m" are positive integers and n <= m. When "m" is omitted, it's treated as ∞.
let username = 'JackOfAllTrades';
let userCheck = /^[A-Za-z]{2,}\d*$/i;       // Every letters will at least have two but go to infinite numbers of letters
console.log("'JackOfAllTrades' with /^[A-Za-z]{2,}\\d*$/i", userCheck.test(username));

// #############################################################################
// Match Whitespace
// \s           Matches a white space character, including space, tab, form feed, or line feed.
let sample = 'WhiteSpace is important in separating words';
let countWhiteSpace = /\s/g;
console.log("'WhiteSpace is important in separating words' with /\\s/g = ", sample.match(countWhiteSpace));

// #############################################################################
// Match Non-Whitespace Characters
// \S           Matches a character other than white space.
let sample1 = 'WhiteSpace is important in separating words';
let countWhiteSpace1 = /\S/g;
console.log("'WhiteSpace is important in separating words' with /\\S/g = ", sample1.match(countWhiteSpace1));

// #############################################################################
// Specify Upper and Lower Number of Matches
// Find anything that has 3-6 occurrence of 'h' in between 'Oh' and 'no' with
let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6} no/;
console.log("'Ohhh no' with /Oh{3,6} no/", ohRegex.test(ohStr));

// #############################################################################
// Specify Only the Lower Number of Matches
let haStr = 'Hazzzzah';
let haRegex = /z{4,}/;
console.log("'Hazzzzah' with /z{4,}/", haRegex.test(haStr));

// #############################################################################
// Specify Exact Number of Matches
let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/;
console.log("'Timmmmber' with /Tim{4}ber/", timRegex.test(timStr));

// #############################################################################
// Check for All or None
// favorite or favourite
let favWord = 'favorite';
let favRegex = /favou?rite/;    // 0 or 1 occurrence
console.log("'favorite' with /favou?rite/", favRegex.test(favWord));

// #############################################################################
// Positive and Negative Lookahead
// x(?=y)               Matches "x" only if "x" is followed by "y". This is called a lookahead.
// x(?!y)               Matches "x" only if "x" is not followed by "y". This is called a negated lookahead.
let quit = 'qu';
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log("'qu' with /q(?=u)/", quit.match(quRegex));
console.log("'qt' with /q(?!u)/", noquit.match(qRegex));

// Lookhead is usually used to check 2 or more pattern in a string.
// password that is more than 5 characters long and have 2 consecutive digits
let sampleWord = 'astronaut';
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;      // why \w{5} not meaning 5 words?? haha
console.log("'astronaut' with /(?=\\w{5})(?=\\D*\\d{2})/", pwRegex.test(sampleWord));


// #############################################################################
// Reuse Patterns Using Capture Groups
// \n                   A back reference to the last substring matching the n parenthetical in the regular expression
//                      (counting left parentheses), where "n" is a positive integer,
// (x)                  Matches "x" and remembers the match, as the following example shows.
//                      The parentheses are called capturing parentheses.
//                      The (foo) and (bar) in the pattern /(foo) (bar) \1 \2/ match and remember the first two words in the string "foo bar foo bar".
let repeatStr = 'regex abc';
let repeatRegex = /(\w+)\s\1/;       // This is to find any number words, follow by space, and the follow by the same words.
                                     // \1 refer to the first () content.
console.log("'regex regex' with /(\\w)\\s\\1/", repeatRegex.test(repeatStr)); // Return true;
// Returns ["regex regex", "regex"], The first item in the return list is full regex. The second one is the capture group.
console.log("'regex regex' with /(\\w)\\s\\1/", repeatStr.match(repeatRegex));

let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/; // Only want to find numbers that repeat exactly 3 times and separated by space.
                                 // For me, this also restricted the not to be able to have 3 same number in the middle, like 'a 42 42 42 a'
console.log("'42 42 42' with /(\\d+)\\s\\1\\s\\1/", reRegex.test(repeatNum));


// #############################################################################
// Use Capture Groups to Search and Replace
// $1-$9                $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular
//                      expressions that contain parenthesized substring matches.
let wrongText = 'The sky is silver';
let silverRegex = /silver/;
console.log("'The sky is silver' replace \/silver\/ with 'blue' = ", wrongText.replace(silverRegex, 'blue'));

console.log("\"Code Camp\" replace /(\\w+)\\s(\\w+)/ with '$2 $1' = ", "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

let huhText = 'This sandwich is good.';
let fixRegex = /good/;
let replaceText = 'okey-dokey';
console.log("'This sandwich is good.' replace \/good\/ with 'okey-dokey = '", huhText.replace(fixRegex, replaceText));
