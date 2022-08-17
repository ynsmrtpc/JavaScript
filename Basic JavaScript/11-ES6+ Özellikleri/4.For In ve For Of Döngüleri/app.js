const person = {
    name: "Yunus Emre",
    age: 23,
    salary: 3000
};

const langs = ["Python", "java", "C++", "PHP"];

const name = "Yunus";

// For In   --  index'i döndürür

for (let prop in person) {
    console.log(prop, person[prop]);
}

for (let index in langs) {
    console.log(index, langs[index]);
}

for (let index in name) {
    console.log(index, name[index]);
}

console.clear();

// For of   --  value'yi döndürür

/*
for (let value of person) {
    console.log(value);
}
*/

for (let value of langs) {
    console.log(value);
}

for (let character of name) {
    console.log(character);
}

console.clear();