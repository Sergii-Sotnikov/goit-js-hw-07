Метод forEach(callback)
const numbers = [5, 10, 15, 20, 25];
numbers.forEach(function (number, index) {
console.log(`Index ${index}, value ${number}`);
});

//!===================================================//!===================================================
Стрілочні функції: синтаксис

const arrowAdd = (a, b, c) => {
return a + b + c;
};

const add = a => {
return a + 5;
};

const greet = () => {
console.log("Hello!");
};

//!===================================================//!===================================================
Неявне повернення
const add = (a, b, c) => a + b + c;

Псевдомасив arguments
const add = (...args) => {
console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

//!===================================================//!===================================================
Колбеки
const numbers = [5, 10, 15, 20, 25];
numbers.forEach((number, index) => {
console.log(`Index ${index}, value ${number}`);
});

//!===================================================//!===================================================
//!===================================================//!===================================================
//!===================================================//!===================================================
Перебираючі методи

Метод map()
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

//!===================================================//!===================================================
Метод flatMap()
const students = [
{ name: "Mango", courses: ["mathematics", "physics"] },
{ name: "Poly", courses: ["science", "mathematics"] },
{ name: "Kiwi", courses: ["physics", "biology"] },
];

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//!===================================================//!===================================================
Метод filter()
const values = [51, -3, 27, 21, -68, 42, -37];
const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

//!===================================================//!===================================================
Метод filter() на масиві об'єктів
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
{ name: "Mango", score: 83 },
{ name: "Poly", score: 59 },
{ name: "Ajax", score: 37 },
{ name: "Kiwi", score: 94 },
{ name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

//!===================================================//!===================================================
Метод find()
const colorPickerOptions = [
{ label: "red", color: "#F44336" },
{ label: "green", color: "#4CAF50" },
{ label: "blue", color: "#2196F3" },
{ label: "pink", color: "#E91E63" },
{ label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

//!===================================================//!===================================================
Метод every()
const products = [
{ name: "apple", quantity: 2 },
{ name: "orange", quantity: 5 },
{ name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false

//!===================================================//!===================================================
Метод some()
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

//!===================================================//!===================================================
Метод reduce()
const total = [2, 7, 3].reduce((previousValue, number) => {
return previousValue + number;}, 0);

console.log(total); // 12

//!===================================================
Метод reduce() і масив об'єктів
const students = [
{ name: "Mango", score: 83 },
{ name: "Poly", score: 59 },
{ name: "Ajax", score: 37 },
{ name: "Kiwi", score: 94 },
{ name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

//!===================================================//!===================================================
Метод toSorted()

Масив чисел
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();
console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Масив рядків
const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

Сортування за зростанням
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Сортування за спаданням
const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

Свій порядок сортування рядків
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

Сортування об'єктів
const students = [
{ name: "Mango", score: 83 },
{ name: "Poly", score: 59 },
{ name: "Ajax", score: 37 },
{ name: "Kiwi", score: 94 },
];
const inAscendingScoreOrder = students.toSorted(
(firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
const inDescendingScoreOrder = students.toSorted(
(firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
firstStudent.name.localeCompare(secondStudent.name)
);

//!===================================================//!===================================================
Прототипи

const animal = {
legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

//!===================================================
Перевірка прототипу
objA.isPrototypeOf(objB)

const customer = {
username: "Jacob"
};

const animal = {
legs: 4
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false

//!===================================================
Власні і невласні властивості

const animal = {
legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

//!===================================================
Перебір власних властивостей
Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj

const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
console.log(key); // "name"
}

//!===================================================//!===================================================
Класи
Оголошення класу
class User {
// Тіло класу
}

створити його екземпляр
class User {
// Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

//!===================================================
Конструктор класу
class User {
constructor(name, email) {
// Ініціалізація властивостей екземпляра
this.name = name;
this.email = email;
}
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//!===================================================
Об'єкт параметрів

class User {
constructor(params) {
this.name = params.name;
this.email = params.email;
}
}

const mango = new User({
name: "Mango",
email: "mango@mail.com",
});

console.log(mango);
// { name: "Mango", email: "mango@mail.com" }
