console.log("video 106");
const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("name");
btnElement?.addEventListener("click", () => {
    alert(inputElement.value);
});
export {};
