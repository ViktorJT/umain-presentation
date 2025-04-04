#version 300 es
in vec4 position;
out vec2 v_uv;

void main() {
  v_uv = position.xy * 0.5 + 0.5;
  gl_Position = position;
}
