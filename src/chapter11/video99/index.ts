export {};

console.log("video 99");

type TName = string | null;
let name: string | null = null;
name = "hoidanit";
const age = undefined;
const printName = (myName: string | null) => {
  //   if (myName) {
  //     myName?.toUpperCase();
  //   }
  //   myName?.toUpperCase();

  myName!.toLocaleUpperCase();
  console.log("name", myName);
};
