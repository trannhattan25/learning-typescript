export {};

console.log("video 102");

type TUsername = string | number; // union type => dấu hoặc
type TStudent = {
  id: number;
  name: string;
};
type TCoder = {
  address: string;
  language: string;
};
type TProgramer = TStudent & TCoder;

const hoidanit: TProgramer = {
  id: 323,
  name: "nhattan",
  address: "ha",
  language: "typescrip",
};

let username: TUsername = "hoidanit";
username = 32342423;
