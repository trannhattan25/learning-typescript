export {};

console.log("video 92");

// infer : tự động đoán type trả về
const sum = (a: number, b: number) => {
  return a + b;
};
//name : any
const sayHi = (name: string) => {
  console.log("say hi....", name);
};
sayHi("tan");

const mySum = sum(4, 4);
console.log("My sum : ", mySum);
