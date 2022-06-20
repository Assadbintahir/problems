function solution(P, S) {
    let minCars = 0;
    
    let totalPassengers = 0;
    for (let val of P) {
        totalPassengers += val
    }

    S.sort((a,b) => b - a);

    for (let val of S) {
        let remainingPassengers = totalPassengers - val;
        if(remainingPassengers > 0) {
            totalPassengers = remainingPassengers;
            minCars += 1;
        } else {
            minCars += 1;
            break;
        }
    }

    return minCars;
}

console.log(solution([4, 4, 2, 4], [5, 5, 2, 5]))