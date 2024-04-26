let count = 0;
while (count < 2) {
  count = count + 1;
}

// Do while
let countB = 0;
do {
  console.log(`Count: ${countB}`);
  // countB = countB + 1
  countB++;
} while (countB < 2);

console.log("Take #2");
for (let count = 0; count < 2; count++) {
  console.log(`Count: ${count}`);
}

// Lists and loops
const names = ["Per", "Pernille", "Espen"];

while (condition) {}

for (const iterator of object) {
}

console.log(names[1]);
console.log(names.length);

let index = 0;
while (index < names.length) {
  console.log(`Current index: ${index}`);
  console.log(`Current person: ${names[index]}`);

  // Add as HTML element

  // Where shall the element be put in?
  const theList = document.getElementById("name-list");

  // Decide what we're going to put in
  const person = document.createElement("li");

  // Configure the element
  person.textContent = names[index];

  // Put the element we decided on where we want it
  theList.appendChild(person);

  index++;
}
