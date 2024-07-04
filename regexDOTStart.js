/**
 * Function to match a single character with a pattern character.
 * @param {string} t - The text character to match.
 * @param {string} p - The pattern character to match against.
 * @param {string} prevCh - The previous character in the text.
 * @returns {boolean} - Returns true if the characters match, otherwise false.
 */
function matchChar (t, p, prevCh) {
    if (t && p) {
        // Check if pattern is '*' and previous character matches current text character
        // or if pattern is '.' (matches any character) or if text and pattern characters are the same
        return (p === '*' && prevCh && t === prevCh) || p === '.' || t === p;
    }
    return false;
}

/**
 * Function to match a text string with a pattern string.
 * @param {string} text - The text string to match.
 * @param {string} pattern - The pattern string to match against.
 * @param {string} [prevCh=undefined] - The previous character in the text.
 * @returns {boolean} - Returns true if the text matches the pattern, otherwise false.
 */
function matchStr(text, pattern, prevCh = undefined) {
    // If both text and pattern are empty and prevCh is defined, return true
    if (text === '' && pattern === '' && prevCh !== undefined) {
        return true;
    }
    // If text and pattern are not empty and the first characters match
    if (text && pattern && matchChar(text[0], pattern[0], prevCh)) {
        // If the pattern character is not '*', move to the next character in the pattern
        if (pattern[0] !== '*')
            pattern = pattern.substr(1); 
        // Recursively match the rest of the text and pattern
        return matchStr(text.substr(1), pattern, text[0]);
    } else if (pattern[0] === '*') {
        // If the pattern character is '*', skip it and try to match the rest of the pattern
        return matchStr(text, pattern.substr(1), prevCh);
    }
    // If no match is found, return false
    return false;
}

// Test cases
console.log(matchStr('*', '*')); // Expected output: true

console.log(matchStr('ccccddde', '.*.*.*')); // Expected output: true
