function solution(message, k) {
    // if string is valid
    if(k < 1) {
        return "";
    } else if(message.length <= k) {
        return message;
    } else {
        const cropped = message.substring(0, k+1);
        return cropped.substring(0, cropped.lastIndexOf(" "));
    }
}

console.log(solution("To crop or not to crop", 21))