function solve(param){
    if(param == undefined){
        param = 5;
    }

    let row = '';

    for(let i = 0; i < param; i++){
        row += '*';
    }

    for(let i = 0; i < param; i++){
        console.log(row);
    }
}

solve(1);
solve(7);
solve()