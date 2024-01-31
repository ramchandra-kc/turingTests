function matchChar (t, p, prevCh) {
    if (t && p)
        return (p === '*' && prevCh && t === prevCh) || p === '.' || t === p;
    return false;
}

function matchStr(text, pattern, prevCh = undefined) {
    if (text === '' && pattern === '' && prevCh !== undefined) {
        return true;
    }
    if (text && pattern && matchChar(text[0],pattern[0], prevCh)) {
        if (pattern[0] !== '*')
            pattern = pattern.substr(1); 
        return matchStr(text.substr(1), pattern, text[0]);
    } else if (pattern[0] === '*') {
        return matchStr(text, pattern.substr(1), prevCh)
    }
    return false;
}
console.log(matchStr('*', '*'));

console.log(matchStr('ccccddde', '.*.*.*'));