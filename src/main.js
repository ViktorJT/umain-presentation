import * as twgl from "twgl.js";

import "./main.css";

const gl = document.getElementById("webgl-canvas").getContext("webgl2");
if (!gl) {
  throw new Error("WebGL2 not supported");
}
