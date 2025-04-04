import * as twgl from "twgl.js";

export function initWebGL({ canvasId = "webgl-canvas", vert, frag }) {
  const gl = document.getElementById(canvasId).getContext("webgl2");
  if (!gl) throw new Error("WebGL2 not supported");

  const programInfo = twgl.createProgramInfo(gl, [vert, frag]);
  const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

  return { gl, programInfo, bufferInfo };
}
