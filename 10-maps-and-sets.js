// Example of Maps
const maps = new Map();
maps.set("a", 10);
maps.set("b", 20);
maps.set("c", 30);

maps.set("a", 100);
console.log(maps);
console.log(maps.entries());
console.log(maps.values());
console.log();

// Example of Sets
const sets = new Set();
sets.add(10);
sets.add(20);
sets.add(30);
sets.add(10);
console.log(sets);
console.log([...sets]);
console.log(sets.values());
