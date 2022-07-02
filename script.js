let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("dot");
let curr = 0;

document.getElementById("button-next").addEventListener("click", () => {
  transition(curr + 1);
});
document.getElementById("button-prev").addEventListener("click", () => {
  transition(curr - 1);
});

function transition(moveTo) {    
  console.log("c",curr);
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[curr].classList.toggle("active");
  navlinks[curr].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activeDot");
  curr = moveTo; 
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (curr !== bulletIndex) {
      transition(bulletIndex);
    }
  });
});
