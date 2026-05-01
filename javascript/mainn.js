const items = [
  { name: "Notebook", price: 35000 },
  { name: "Pen", price: 5000 },
  { name: "Laptop Stand", price: 120000 },
];

const names = items.map(i => i.name);
console.log("Items:", names);

const prices = items.map(m => m.price / 100);
console.log("prices:", prices);

const priceFormatted = items.map(c => `KSh ${c.price / 100}`);
console.log("Ksh:", priceFormatted);

const affordableItems = items.filter(m => m.price < 100000);
console.log("affordable:", affordableItems);

const longName = items.filter(i => i.name.length > 5);
console.log("items with long names:", longName);

const totalCents =items.reduce ((sum,p)=>sum +p.price ,0);
console .log("Total:",totalCents);
