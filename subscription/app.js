const subAdded = document.querySelector(".sub-added");
const noSub = document.querySelector(".no-sub");
const back = document.querySelector(".no-sub-close");
const close = document.querySelector(".close");
const seeSubs = document.querySelector(".all-subs");
const addSub = document.querySelectorAll(".add-subscription");
const container = document.querySelector(".container");

addSub.forEach(
    (addSub) => {
        addSub.addEventListener("click", () => {
            subAdded.style.display = "block";
            container.classList.toggle("blur");
        })
    }
);

seeSubs.addEventListener("click", () => {
    noSub.style.display = "block";
    container.classList.toggle("blur");
});

close.addEventListener("click", () => {
    subAdded.style.display = "none";
    container.classList.toggle("blur")
});

back.addEventListener("click", () => {
    noSub.style.display = "none";
    container.classList.toggle("blur")
});

