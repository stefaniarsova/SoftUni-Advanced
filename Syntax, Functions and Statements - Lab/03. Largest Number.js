function solve(a, b, c){
    let result

    if(a > b && a > c){
        result = a;
    }else if(b > a && b > c){
        result = b;
    }else if(c > b && c > a){
        result = c;
    }

    console.log(`The largest number is ${result}.`);

}

solve(5, -3, 16);
solve(-3, -5, -22.5)