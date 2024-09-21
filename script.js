//your JS code here. If required.


const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let val = 1;

nextButton.addEventListener("click", ()=> {
	val++;
	updateUi();
});

prevButton.addEventListener("click", () =>{
	val--;
	updateUi();
});

function updateUi(){
	 circles.forEach((circle, idx) => {
        if (idx < val) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    lines.forEach((line, idx) => {
        if (idx < val - 1) {
            line.classList.add("active");
        } else {
            line.classList.remove("active");
        }
    });

	prevButton.disabled = val === 1;
	nextButton.disabled = val === circles.length;
}