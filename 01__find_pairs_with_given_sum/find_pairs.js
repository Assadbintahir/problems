function findPairs(arr, sum) {

    arr.sort((a, b) => a - b); // O(n)
    arr = Array.from(new Set(arr)); // O(n)
    
    const len = arr.length;
    const pairs = [];
  
    const hash = {}
  
    for (let i = 0; i < len; i++) { // O(n)
      
      let val = sum - arr[i];
      if(val in hash) {
        pairs.push([val,arr[i]])
      } 
      hash[arr[i]] = arr[i];
    }
  
    return pairs;
}

const pairs = findPairs(
  [ 9, 2, 7, 8, 3, 7, 7, 10, 4, 1 ],
  10
)
console.log(pairs);