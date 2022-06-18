function isValid(s) {
    const bracketStack = [];
    const closingBracketMap = {
        ')':'(',
        ']':'[',
        '}':'{'
    };
    for (let val of s) {
        if (!closingBracketMap[val]) {
            bracketStack.push(val);
        } else if (bracketStack[bracketStack.length - 1] === closingBracketMap[val]) {
            bracketStack.pop();
        }
    }
    
    if (bracketStack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid("[()]{}{[()()]()}"))