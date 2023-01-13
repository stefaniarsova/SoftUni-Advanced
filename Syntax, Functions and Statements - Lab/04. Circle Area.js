function solve(param){

    if(typeof param == 'number'){
        let area = Math.PI * param * param
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
    }

}

solve(5);
solve('name')