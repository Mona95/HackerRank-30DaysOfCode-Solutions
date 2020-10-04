
function solve(meal_cost, tip_percent, tax_percent) {

  let tip = (meal_cost * tip_percent/100).toFixed(2),
    tax = (meal_cost * tax_percent/100).toFixed(2),
    totalCost = parseFloat(meal_cost) + parseFloat(tip) + parseFloat(tax);

    console.log(Math.round(totalCost));
}
