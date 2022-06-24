function getLargestPiece(w, h, horizontalCuts, verticalCuts) {
    const mod = BigInt(1e9 + 7);
    horizontalCuts.sort((a,b) => a-b);
    verticalCuts.sort((a,b) => a-b);

    horizontalCuts.push(h);
    horizontalCuts.unshift(0);
    verticalCuts.push(w);
    verticalCuts.unshift(0)

    
    let maxHorizontal = 0;
    let maxVertical = 0;

    for (let i = 1; i < horizontalCuts.length; i++) {
        let difference = horizontalCuts[i] - horizontalCuts[i-1];
        maxHorizontal = Math.max(maxHorizontal, difference)
    }

    for (let i = 1; i < verticalCuts.length; i++) {
        let difference = verticalCuts[i] - verticalCuts[i-1];
        maxVertical = Math.max(maxVertical, difference)
    }

    return parseInt(BigInt(maxHorizontal) * BigInt(maxVertical) % mod);
}

console.log(getLargestPiece(4, 6, [2, 5], [1, 3]));
console.log(getLargestPiece(4,5,[1,2,4], [1,3]))
console.log(getLargestPiece(4,5,[3,1], [1]))