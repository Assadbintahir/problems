function doSelectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        let lowestElementPointer = i;
        for(let j = i + 1; j < data.length; j++) {
            if(data[j] < data[lowestElementPointer]) {
                lowestElementPointer = j;
            }
        }

        if(lowestElementPointer !== i) {
            let temp = data[i];
            data[i] = data[lowestElementPointer];
            data[lowestElementPointer] = temp;
        }
    }

    return data;
}

console.log(doSelectionSort([4,5,4,6,2,8,1,9,100]));
console.log(doSelectionSort([1,2,3,4,5]));