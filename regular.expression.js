/*
 . - any single symbol
 [] - search any symbol on this range (lower and upper)
[ - ] - range of values (by latin alphabet)(search numbers and characters)
 $ - Match end of string.
 ^ - Match start of string
 \x\ - ''escaped'' Indicates that the following character should be treated specially.

 \d - any number
 \D - anything except numbers

 /s - Matches a single white space character
 /S - Everything except white space

 /w - search of a character
 /W - Everything except character

 /b - word boundary
 /B - Anything except word boundary

 Quantifiers
 x{4} - Matches x, 4 symbol in a row
 x{4,6} - Match 4 to 6
 * - 0 and more
 ? - zero or one time
*/