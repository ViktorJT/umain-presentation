import "./reset.css";
import "./main.css";

import vert from "./canvas/shaders/vertex.glsl";
import frag from "./canvas/shaders/fragment.glsl";
import { initWebGL } from "./canvas/initWebGL.js";
import { startRenderLoop } from "./canvas/renderLoop.js";

import { showCurrentSlide, prevSlide, nextSlide } from "./dom/SlideManager.js";

const { gl, programInfo, bufferInfo } = initWebGL({ vert, frag });
startRenderLoop(gl, programInfo, bufferInfo);

showCurrentSlide();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
