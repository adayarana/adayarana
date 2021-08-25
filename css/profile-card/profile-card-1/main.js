const cancel = document.querySelector(".hidden__cancel");
const arrow = document.querySelector(".box__arrow");
const boxHidden = document.querySelector(".box__hidden");

arrow.addEventListener("click", () =>  {
    arrow.classList.add("active-arrow");
    if(boxHidden.classList.contains("inactive")){
        boxHidden.classList.remove("inactive");
        boxHidden.classList.add("active");
    }
});

cancel.addEventListener("click", () => {
    arrow.classList.remove("active-arrow");
    if(boxHidden.classList.contains("active")) {
        boxHidden.classList.remove("active");
        boxHidden.classList.add("inactive");
    }
});