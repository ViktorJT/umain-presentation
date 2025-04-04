#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

in vec2 v_uv;
out vec4 outColor;

vec3 palette(float t) {
    vec3 a = vec3(0.5);
    vec3 b = vec3(0.5);
    vec3 c = vec3(1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);
    return a + b * cos(6.28318 * (c * t + d));
}

float sdCircle(vec2 p, float r) {
    return length(p) - r;
}

float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float wobble(vec2 uv, float time) {
    float sum = 0.0;
    const int octaves = 5;

    for (int i = 0; i < octaves; i++) {
        float fi = float(i);
        vec2 dir = vec2(cos(fi * 13.1), sin(fi * 17.3));
        float freq = mix(3.0, 6.0, hash(fi));
        float speed = mix(0.5, 1.0, hash(fi + 5.0));
        float amp = mix(0.01, 5.0, hash(fi + 5.0));
        float phase = time * speed + fi * 15.0;

        sum += sin(dot(uv, dir) * freq + phase) * amp;
    }

    return sum;
}

void main() {
    vec2 uv = v_uv;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    uv = (uv - 0.5) * aspect;
    uv.x -= 2.0;

    vec2 mousePos = (u_mouse - 0.5) * aspect;
    float mouseDist = length(uv - mousePos);

    float time = u_time * 0.09;

    float growthDuration = 10.0;

    float growthFactor = smoothstep(0.0, growthDuration, u_time);

    float radiusBase = 0.3 + sin(time * 0.5) * 0.3;
    float radius = radiusBase * growthFactor;

    float wobbleStrength = mix(0.0, 1.0, growthFactor);
    float d = sdCircle(uv, radius);
    d += wobble(uv, time) * wobbleStrength;

    float glow = 0.1 / (abs(d) + 0.2);

    float glowGrowthDuration = 15.0;
    float glowGrowth = smoothstep(0.0, glowGrowthDuration, u_time);

    glow *= (0.5 + smoothstep(1000.0, 0.0, mouseDist) * 7.0) * glowGrowth;

    vec3 col = palette(time * 0.4 + length(uv));
    col *= glow;

    float vignette = 2.0 - length(uv) * 0.1;
    // float vignette = 2.0 - length(uv) * 20.0;
    col *= vignette;

    vec3 backgroundColor = vec3(0.05, 0.07, 0.1);
    // vec3 backgroundColor = vec3(1.0, 0.5, 0.0); // pure orange (RGB)

    col = mix(backgroundColor, col, smoothstep(0.0, 3.0, glow * 2.0));

    outColor = vec4(col, 1.0);
}
