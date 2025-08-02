console.log("video 107");
const fectUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[];
    const data = await res.json();
    console.log(">>> check data", data[0].email);
};
fectUsers();
export {};
