// function hei() {
//   console.log("hei");
// }

// function hilsen(navn) {
//   console.log(`hei ${navn}!`);
// }

// function pluss(x, y) {
//   return x + y;
// }

// let matte = pluss(2, 4);

// console.log(matte);   ------------gammel metode----------

const hei = () => {
  console.log("hei");
};

const hilsen = (navn) => `hei ${navn}!`;

let string = hilsen("Atle");

console.log(string);
