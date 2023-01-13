function solve(array){
    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for(let i = 0 ; i < array.length; i++){
        let currEl = array[i];
        sum += currEl;
        sumInverse += 1/currEl;
        concat += currEl;
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);