function solve(param1, param2, param3){
    let allParamsLength = Number(param1.length) + Number(param2.length) + Number(param3.length);
    let avgParamLength = Math.floor(allParamsLength/3);

    console.log(allParamsLength);
    console.log(avgParamLength);

}
solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3')