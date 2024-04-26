let age = 10;
const name = "Anonymous";

age = 20;

// console.log(name + " ma " + age + " lat");
console.log(`${name} ma ${age} lat`);

if (age < 18) {
  console.log("Niepełnoletni");
} else {
  console.log("Pełnoletni");
}

// console.log(age < 18 ? "Niepełnoletni" : "Pełnoletni");

if (age < 10) {
  console.log("Dziecko");
} else if (age < 18) {
  console.log("Młodzież");
} else {
  console.log("Dorosły");
}

// months
const month = "January";

// =
age = 21;
// == ===

if (month === "January") {
  console.log("Styczeń");
} else if (month === "February") {
  console.log("Luty");
} else if (month === "March") {
  console.log("Marzec");
} else {
  console.log("Nie znam tego miesiąca");
}

function getPolishMonthName(month) {
  switch (month) {
    case "January":
      return "Styczeń";
    case "February":
      return "Luty";
    case "March":
      return "Marzec";
    default:
      return "Nie znam tego miesiąca";
  }
}

console.log(getPolishMonthName());
const polishMonth = getPolishMonthName("February");

function isMature(age) {
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return age >= 18;
}

// const isMature = (age) => age >= 18;

// const isMature = age > 18 ? "Pełnoletni" : "Niepełnoletni";

// const ocena1 = 4;
// const ocena2 = 5;
// const ocena3 = 3;
// const ocena4 = 2;
// const ocena5 = 1;

const oceny = [4, 5, 3, 2, 1];

console.log(oceny[0]);
console.log(oceny[1]);
// console.log(oceny[4]);
console.log(oceny[oceny.length - 1]);

function getAvg(data) {
  let sum = 0;

  // i = i + 1 === i++
  for (let i = 0; i < data.length; i = i + 1) {
    sum += data[i];
    // sum = sum + data[i]
  }

  return sum / data.length;
}

// for (;;) {}

console.log(`Średnia: ${getAvg([4, 5, 3])}`);

// const name = "Tomek";
// const oceny = [4, 5, 3];
// const age = 20;

const person = {
  name: "Tomek",
  oceny: [4, 5, 2, 1, 12],
  age: 20,
};

const person2 = {
  name: "Ania",
  oceny: [1, 2, 3, 4, 5],
  age: 18,
};

const person3 = {
  name: "Kasia",
  oceny: [2, 3, 4, 5, 6],
  age: 22,
};

console.log(
  `Imię: ${person.name} (${person.age}) - średnia: ${getAvg(person.oceny)}`
);

const people = [person, person2, person3];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  //   console.log(
  //     `Imię: ${people[i].name} (${people[i].age}) - średnia: ${getAvg(
  //       people[i].oceny
  //     )}`
  //   );
}
