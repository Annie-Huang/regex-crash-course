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











