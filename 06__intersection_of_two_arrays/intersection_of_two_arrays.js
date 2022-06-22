function findIntersection(firstSet, secondSet) {
    let intersection = []

    let firstSetMap = {};
    for (let val of firstSet) {
        if(firstSetMap[val]) {
            firstSetMap[val] = firstSetMap[val] + 1;    
        } else {
            firstSetMap[val] = 1;
        }
    }

    for (let val of secondSet) {
        if(firstSetMap[val]) {
            intersection.push(val);
            firstSetMap[val] = firstSetMap[val] - 1;
        }
    }

    return intersection;
}

console.log(findIntersection([1,2,3,4], [3,3,4,4,5,6]));