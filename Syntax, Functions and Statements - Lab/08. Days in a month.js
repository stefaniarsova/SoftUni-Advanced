function solve(month, year){
    let date = new Date(year, month, 0);

    let currYear = date.getFullYear();
    let currMonth = date.getMonth() + 1;
    let daysInCurrMonth = date.getDate();

    return daysInCurrMonth;

}

solve(1, 2012);
solve(2, 2021)