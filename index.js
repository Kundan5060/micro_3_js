const fooddata = require('./data.json');

// 1 list all the food item
function listAllFoodItems(data) {
  return data.map(item => item.foodname);
}
console.log("all the food item is", listAllFoodItems(fooddata));


// 2 list all the food items with category vegetables
function listVegetable(data) {
  return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
}
console.log("all the food items with category vegetables", listVegetable(fooddata));


// 3 list all the food items with category fruit
function fruitItem(data) {
  return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
}
console.log("all the food items with category fruit", fruitItem(fooddata));


// 4 list all the food items with category protien
function protienItem(data) {
  return data.filter(item => item.category === 'Protein').map(item => item.foodname);
}
console.log("all the food items with category protien",protienItem(fooddata));


// 5 list all the food items with category nuts
function nutsItem(data) {
  return data.filter(item => item.category === 'Nuts').map(item => item.foodname);
}
console.log("all the food items with category nuts",nutsItem(fooddata));


// 6 list all the food items with category grains
function grainItem(data) {
  return data.filter(item => item.category === 'Grain').map(item => item.foodname);
}
console.log("all the food items with category grains", grainItem(fooddata));



// 7 list all the food items with category dairy
function dairyItem(data) {
  return data.filter(item => item.category === 'Dairy').map(item => item.foodname);
}
console.log("all the food items with category dairy", dairyItem(fooddata));

// 8 list all the food items with calorie above 100

function calorieAbove_100(data) {
  return data.filter(item => item.calorie > 100).map(item => item.foodname);
}
console.log("all the food items with calorie above 100",calorieAbove_100(fooddata));


// 9 list all the food items with calorie below 100
function calorieBelow_100(data) {
  return data.filter(item => item.calorie < 100).map(item => item.foodname);
}
console.log("all the food items with calorie below 100",calorieBelow_100(fooddata));


// 10 list all the food items with highest protien content to lowest
function sortedByProtein(data) {
  return data.slice().sort((x, y) => y.protiens - x.protiens).map(item => item.foodname);
}
console.log("all the food items with highest protien content to lowest",sortedByProtein(fooddata));


// 11 list all the food items with lowest cab content to highest
function sortedByCab(data) {
  return data.slice().sort((x, y) => x.cab - y.cab).map(item => item.foodname);
}
console.log("all the food items with lowest cab content to highest",sortedByCab(fooddata));