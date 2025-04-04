import Slide1 from "./slides/Slide1.js";
import Slide2 from "./slides/Slide2.js";
import Slide3 from "./slides/Slide3.js";
import Slide4 from "./slides/Slide4.js";
import Slide5 from "./slides/Slide5.js";
import Slide6 from "./slides/Slide6.js";
import Slide7 from "./slides/Slide7.js";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

let currentIndex = 0;
let direction = "up";
let isTransitioning = false;

export function showCurrentSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  const container = document.getElementById("slide-container");
  const oldSlide = container.firstChild;

  const newSlide = slides[currentIndex]();
  newSlide.classList.add("slide", "slide-enter", `slide-enter-${direction}`);
  container.appendChild(newSlide);

  newSlide.addEventListener("animationend", () => {
    newSlide.classList.remove("slide-enter", `slide-enter-${direction}`);
    isTransitioning = false;
  });

  if (oldSlide) {
    oldSlide.classList.add("slide-exit", `slide-exit-${direction}`);
    oldSlide.addEventListener("animationend", () => {
      oldSlide.remove();
    });
  }
}

export function nextSlide() {
  if (isTransitioning) return;
  direction = "up";
  currentIndex = (currentIndex + 1) % slides.length;
  showCurrentSlide();
}

export function prevSlide() {
  if (isTransitioning) return;
  direction = "down";
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showCurrentSlide();
}
