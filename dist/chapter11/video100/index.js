console.log("video 100");
const user = "USER";
const admin = "ADMIN";
const superAdmin = 1;
const otherUser = "USER";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
})(RoleEnum || (RoleEnum = {}));
const myRole1 = RoleEnum.ADMIN;
const myRole2 = RoleEnum.USER;
console.log(myRole1);
console.log(myRole2);
export {};
