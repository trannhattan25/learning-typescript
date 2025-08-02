export {};

console.log("video 95");

type TStudent = {
  id: string;
  name: string;
  address: string;
  age: number;
};

const student1: TStudent = {
  id: "sv1",
  name: "hoidanit",
  address: "hanoi",
  age: 23,
};
const student2: TStudent = {
  id: "sv1w",
  name: "hoidanfsdasfd it",
  address: "hanoi",
  age: 23,
};

const printInfo = (st: TStudent) => {
  console.log("student name", st.name);
};
printInfo(student1);
printInfo(student2);
