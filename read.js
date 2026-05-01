// Step 1: Define the data
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone',  price: 800  },
  { id: 3, name: 'Tablet', price: 600  }
];

// Step 2: Read properties
products.forEach(p => {
  console.log(`${p.name}: $${p.price}`);
});

// Step 3: Add inStock property
function addInStock(items) {
  for (const item of items) {
    item.inStock = true;
  }
  return items;
}

addInStock(products);
console.log("\nAfter adding inStock:");
console.log(products);

// Step 4: Inspect keys
console.log("\nKeys of first product:");
console.log(Object.keys(products[0]));

// Step 5: Experiment with references

// Case 1: Reassigning
products[0] = {};
console.log("\nAfter reassigning products[0] = {}:");
console.log(products);

// Reset data
const inventory = [
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 75 }
];

// Case 2: Reference mutation
const item = inventory[0];
item.price = 0;

console.log("\nAfter modifying item.price = 0:");
console.log(inventory);

// Step 6: Find most expensive (dynamic key)
function findMostExpensive(items, priceKey = 'price') {
  if (items.length === 0) return null;

  let winner = items[0];

  for (const item of items) {
    if (item[priceKey] > winner[priceKey]) {
      winner = item;
    }
  }

  return winner;
}

// Test function
const mostExpensive = findMostExpensive(inventory);

console.log("\nMost expensive item:");
console.log(mostExpensive);

// Step 7: Detailed logging
if (mostExpensive) {
  console.log("\nMost Expensive Item Details:");
  for (const [key, value] of Object.entries(mostExpensive)) {
    console.log(`${key}: ${value}`);
  }
} 