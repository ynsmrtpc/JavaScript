// Sets - Kümeler 
// Aynı elemanı sadece 1 kere ekler

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Yunus");
myset.add(true);
myset.add([1, 2, 3]);
myset.add({ a: 1, b: 2 });

const myset2 = new Set([100, 3.14, "Yunus"]);

console.log(myset);
console.log(myset2);

console.clear();

// Size Methodu
console.log(myset.size);

// Delete Methodu
myset.delete("Yunus");

// Has Methodu
console.log(myset.has("Yunus"));
console.log(myset.has([1, 2, 3]));
console.clear();
// ForEach
myset.forEach(function(value) {
    console.log(value);
})
console.clear();

// Forof
for (let value of myset) {
    console.log(value);
}
console.clear();

// Setten Array Oluşturma
const array = Array.from(myset);
console.log(array);