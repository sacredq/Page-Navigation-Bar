// arrows const
const leftArrow = document.getElementById("arrow-left");
const leftArrow2 = document.getElementById("arrow-left-2");
const rigthArrow = document.getElementById("arrow-right");
const rigthArrow2 = document.getElementById("arrow-right-2");

// all number-boxes
const boxes = document.querySelectorAll(".icon-box.icon");

// default setup 
let currentBtn = boxes[0];
currentBtn.classList.add("active");
leftArrow.classList.add("blockedArrow");
leftArrow2.classList.add("blockedArrow");

// arrows function
let currentIndex = 0;
function arrowUpdate(){
    leftArrow.classList.toggle("blockedArrow", currentIndex === 0);
    leftArrow2.classList.toggle("blockedArrow", currentIndex === 0);

    rigthArrow.classList.toggle("blockedArrow", currentIndex === boxes.length -1);
    rigthArrow2.classList.toggle("blockedArrow", currentIndex === boxes.length -1);
}
arrowUpdate();

function main(index){
    if(index < 0 || index >= boxes.length ) return;

    boxes[currentIndex].classList.remove("active");
    currentIndex = index;
    boxes[currentIndex].classList.add("active");

    arrowUpdate();
}

// main-code
boxes.forEach((box, index) => {
    box.addEventListener("click", () => main(index));
});

leftArrow.addEventListener("click", () => main(currentIndex - 1));
rigthArrow.addEventListener("click", () => main(currentIndex + 1));

leftArrow2.addEventListener("click", () => main(0));
rigthArrow2.addEventListener("click", () => main(boxes.length - 1));