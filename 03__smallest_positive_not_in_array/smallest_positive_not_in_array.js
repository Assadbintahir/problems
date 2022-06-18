// function solution(A) {
//     A.sort((a,b) => a-b)
//     let count = 1;

//     for(let val of A) {
//         if(val === count) {
//             count++;
//         }
//     }

//     return count;
// }

function solution(arr) {
    let dictionary = {}
    let smallestPositive = 1;

    for(let val of arr) {
        if(val < 1) {
            continue;
        }
        dictionary[val] = val;
    }

    for(let i = 1; i<arr.length + 1; i++) {
        if(!dictionary[i]){
            break;
        }
        smallestPositive++;
    }

    return smallestPositive;
}

console.log(solution([2, 3, -7, 6, 8, 1, -10, 15]));