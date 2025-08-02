export {};

console.log("video 94");

// optional
const student1: {
  name: string;
  id: number;
  phone?: number; // co hoac khong
} = {
  name: "eric",
  id: 123,
};
const student2 = {
  name: "eric",
  id: 123,
  phone: 123432434,
};

const person: {
  name: string;
  age: number;
  address: string;
  isHandsome: boolean;
} = {
  name: "hoidanit",
  age: 35,
  address: "hanoi",
  isHandsome: true,
};
const printInfo = (people: {
  name: string;
  age: number;
  address: string;
  isHandsome: boolean;
}) => {
  console.log("your name `s ", people.name);
};
printInfo(person);
