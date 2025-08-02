export {};

console.log("video 100");

type TRole = string | number;
type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const superAdmin: TRole = 1;

const otherUser: TSuperRole = "USER";

enum RoleEnum {
  USER = "USER", //0
  ADMIN = "ADMIN", //1
  SUPERADMIN = "SUPERADMIN", //2
}

const myRole1: RoleEnum = RoleEnum.ADMIN;
const myRole2: RoleEnum = RoleEnum.USER;
console.log(myRole1);
console.log(myRole2);
