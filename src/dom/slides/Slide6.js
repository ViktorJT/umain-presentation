import { createEl } from "../utils.js";

export default function Slide6() {
  const slide = createEl("div", "slide slide-6", null, null);

  const scoresContainer = createEl("div", "scores box body", null, slide);
  scoresContainer.innerHTML = `
    <div>
      <p class="subheading">PageSpeed Summary</p>
      <ul class="summary">
        <li>Performance: <strong>100</strong></li>
        <li>Accessibility: <strong>95</strong></li>
        <li>Best Practices: <strong>93</strong></li>
        <li>SEO: <strong>100</strong></li>
      </ul>
    </div>

    <div>
      <p class="subheading">Core Web Vitals</p>
      <ul class="vitals">
        <li>First Contentful Paint (FCP): <strong>0.2s</strong></li>
        <li>Largest Contentful Paint (LCP): <strong>0.5s</strong></li>
        <li>Total Blocking Time (TBT): <strong>0ms</strong></li>
        <li>Cumulative Layout Shift (CLS): <strong>0</strong></li>
        <li>Speed Index (SI): <strong>0.7s</strong></li>
      </ul>
    </div>
`;

  const body = createEl(
    "p",
    "body",
    "To keep the app feeling fast and fluid, I optimized rendering and resource loading. I used server components to reduce JavaScript payload, implemented image optimization with lazy-loading, WebP formats and blur-up placeholders, and cached frequently accessed data like Open Status using React’s cache() API. Visual components are presentational, lightweight, and no unnecessary work happens on the client.",
    slide,
  );

  const page = createEl("p", "page", "04 / 05", slide);
  const title = createEl("h1", "title", "Performance", slide);

  return slide;
}
