import { createEl } from "../utils.js";

export default function Slide2() {
  const slide = createEl("div", "slide slide-3");

  const storiesContainer = createEl("div", "box", null, slide);
  storiesContainer.innerHTML = `
  <p class="subheading">User Stories</p>
  <ul class="body">
    <li>...I should see an unfiltered list of all restaurants</li>
    <li>...I should be able to select one/multiple filter(s) and the List View should reflect the new updates</li>
    <li>...I should be able to deselect a filter by clicking on it and the List View should reflect the new updates</li>
  </ul>
`;

  const designContainer = createEl("div", "box", null, slide);
  designContainer.innerHTML = `
  <p class="subheading">Design Criteria</p>
  <ul class="body">
    <li>The web application is implemented with a responsive design, ranging from 375px wide until 1440px wide according to the design in Figma</li>
    <li>Filters have a visual active state</li>
  </ul>
`;

  const goal = createEl(
    "div",
    "goal body",
    "I wanted to use URL-based state, server-driven rendering, and a clean component hierarchy to deliver a performant, intuitive, and maintainable solution that aligned with the brief from the start.",
    slide,
  );
  goal.innerHTML = `
    <p class="subheading">
      Goal
    </p>
    <p>
        I wanted to use URL-based state, server-driven rendering, and a clean component hierarchy to deliver a performant, intuitive, and maintainable solution that aligned with the brief from the start.",
    </p>

  `;
  const page = createEl("p", "page", "01 / 05", slide);
  const title = createEl("h1", "title", "planning", slide);

  return slide;
}
