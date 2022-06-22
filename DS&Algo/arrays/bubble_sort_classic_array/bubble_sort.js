function doBubbleSort(data) {
    let upperBound = data.length - 1;
    let sorted = true;

    while (sorted) {
        sorted = false;
        for (let i = 0; i <= upperBound; i++) {
            if (data[i] > data[i+1]) {
                let temp = data[i+1];
                data[i+1] = data[i];
                data[i] = temp;
            }
            sorted = true;
        }

        upperBound -= 1;
    }

    return data;
}

console.log(doBubbleSort([4,5,4,6,2,8,1,9]));
console.log(doBubbleSort([1,2,3,4,5]));