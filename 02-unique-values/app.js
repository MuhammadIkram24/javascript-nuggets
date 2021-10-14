// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const categories = ['all', ...new Set(menu.map((item) => item.category))];
const result = document.querySelector('.result');
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');



// Convert multiple arrays to single array in an object of array object
const menu = [
  {
    name: "pancakes",
    category: ["breakfast", "different"],
  },
  {
    name: "burger",
    category: ["lunch", "different"],
  },
  {
    name: "steak",
    category: ["dinner", "different"],
  },
  {
    name: "bacon",
    category: ["breakfast", "different"],
  },
  {
    name: "eggs",
    category: ["breakfast", "different"],
  },
  {
    name: "pasta",
    category: ["dinner", "different"],
  },
];

const result = menu.map((item) => item.category);
const merged = [...new Set([].concat.apply([], result))];
console.log(merged);
