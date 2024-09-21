//your JS code here. If required.


const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

const nextButton = document.querySelectorAll("#next");
const prevButton = document.querySelectorAll("#prev");

let val = 1;

nextButton.addEventListener("click", ()=> {
	val++;
	updateUi();
})

prevButton.addEventListener("click", () =>{
	val--;
	updateUi();
})

function updateUi(){
	circles.forEach((circle, idx) => {
		idx<val?circle.classList.add("active"):circle.classList.remove("active");
	})

	lines.forEach((line,idx) => {
		idx<val?line.classList.add("active"):line.classList.remove("active");
	})

	prevButton.disabled = val===1;
	nextButton.disabled = val===circles.length;
}