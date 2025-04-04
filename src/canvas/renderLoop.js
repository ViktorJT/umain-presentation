import * as twgl from "twgl.js";

export function startRenderLoop(gl, programInfo, bufferInfo) {
  function render(time) {
    time *= 0.001;
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, {
      u_time: time,
      u_resolution: [gl.canvas.width, gl.canvas.height],
    });
    twgl.drawBufferInfo(gl, bufferInfo);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
