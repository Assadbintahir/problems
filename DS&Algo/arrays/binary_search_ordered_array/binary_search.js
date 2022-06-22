function doBinarySearch(data, searchValue) {
    let lowerBound = 0;
    let upperBound = data.length - 1;

    for (let i = 0; i < data.length; i++) {
        let midpoint = (lowerBound + upperBound) / 2;
        let valueAtMidpoint = data[midpoint];

        if(searchValue === valueAtMidpoint) {
            return midpoint;
        } else if(searchValue < valueAtMidpoint) {
            upperBound = midpoint - 1;
        } else if(searchValue > valueAtMidpoint) {
            lowerBound = midpoint + 1;
        }
    }
}

console.log(doBinarySearch([1,2,3,4,5], 3))