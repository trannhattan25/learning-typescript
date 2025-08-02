console.log("video 92");
// infer : tự động đoán type trả về
const sum = (a, b) => {
    return a + b;
};
//name : any
const sayHi = (name) => {
    console.log("say hi....", name);
};
sayHi("tan");
const mySum = sum(4, 4);
console.log("My sum : ", mySum);
export {};
