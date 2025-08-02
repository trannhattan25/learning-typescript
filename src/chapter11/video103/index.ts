export {};

console.log("video 103");

interface IPerson {
  name: string;
  age: number;
  address?: string;
  readonly language: string;
  sayHi: () => void;
}
const user1: IPerson = {
  age: 32,
  name: "nhattan",
  language: "vn",
  sayHi: () => console.log("I am user 1"),
};
// user1.language = "en"; // chỉ đọc không gán => lỗi
user1.sayHi();
const user2: IPerson = {
  age: 32,
  name: "nhattan",
  address: "Ha Noi",
  language: "vn",
  sayHi: () => console.log("I am user 2"),
};

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
