/*
#########################################################################
From javascript_cardio
#########################################################################
 */
/*
    ^    Matches the beginning of input. If the multiline flag is set to true, it also matches immediately after a line break character.
    \w   Matches any alphanumeric character including the underscore. Equivalent to [A-Za-z0-9_].

    That following is suppose to find anything that is NOT a word character set. But I don't see how it does that.
 */
str.replace(/[^\w]/g, '');  // This is to remove all none word character, e.g 'dirty room##' will become 'dirtyroom'


// \b Matches a word boundary.
//      A word boundary matches the position between a word character followed by a non-word character,
//      or between a non-word character followed by a word character,
//      or the beginning of the string,
//      or the end of the string.
// The pattern [a-d], which performs the same match as [abcd]
// g	Global search.
//      The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
//      if you don't have "g", it's only going to do it in the FIRST instant.
// i	Case-insensitive search.
str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();      // This is to capitalizeLetter the first letter of each word.
})

// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp. If pattern is a string, only the first occurrence will be replaced.
// var newStr = str.replace(regexp|substr, newSubstr|function)
str.toLowerCase().replace(/[a-z]/gi, char => {
    // execute this part for any character that is in the range of [a-zA-Z]
});


newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase()); // Uppercase a|e|i|o|u characters.


// Remove white space.
s = s.replace(/\s/gi, '');

/*
#########################################################################
From hackerank-test
#########################################################################
 */

// matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
// ^    means the beginning
// $    means the end
// .    The decimal point (.) matches any single character except the newline character, by default.
// *    means 0+ characters
// \1   The first arguement.
const re = /^(a|e|i|o|u).*\1$/
