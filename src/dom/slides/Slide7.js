import { createEl } from "../utils.js";

export default function Slide7() {
  const slide = createEl("div", "slide slide-7", null, null);

  const improvementsContainer = createEl("div", "box body", null, slide);
  improvementsContainer.innerHTML = `
    <p class="subheading">Improvements</p>
    <ul>
      <li>Backend Control</li>
      <li>Testing Strategy</li>
      <li>Accessibility</li>
      <li>Image CDN</li>
      <li>Edge Cases & Empty States</li>
      <li>Real-Time Updates</li>
      <li>Internationalization (i18n)</li>
      <li>Developer Tooling</li>
    </ul>
`;

  const body = createEl(
    "p",
    "body",
    "If this were a real client project, I would make filters dynamic and backend-driven, improve accessibility and image handling, and add proper empty states and error handling. For better accuracy, I’d consider real-time updates with websockets. Moving core logic to the backend would improve maintainability, and adding tests, i18n support, and tools like Storybook and Postman would make the project more robust and team-friendly.",
    slide,
  );

  const page = createEl("p", "page", "05 / 05", slide);
  const title = createEl("h1", "title", "Reflections", slide);

  return slide;
}
