function findDuplicate(data) {
    let dataDictionary = {};
    let duplicates = []; // this can be sorted as well before returning, if required. It will increase the big o from O(n) to O(nlogn)
    let duplicateCount = {};
    let dedupData = [];

    for(let val of data) {
        if(dataDictionary[val]) {
            duplicates.push(val);
            duplicateCount[val] = duplicateCount[val] + 1;
        } else {
            dataDictionary[val] = val;
            duplicateCount[val] = 1;
            dedupData.push(val)
        }
    }

    return { duplicates, duplicateCount, dedupData }
}

console.log(findDuplicate([1,2,3,4,4,5,2,3]));