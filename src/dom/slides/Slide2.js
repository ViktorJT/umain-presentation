import { createEl } from "../utils.js";

export default function Slide2() {
  const slide = createEl("div", "slide slide-2");
  const list = createEl("ul", null, null, slide);
  const page = createEl("p", "page", "00 / 05", slide);
  const title = createEl("h1", "title", "index", slide);

  const items = [
    "Planning & Execution",
    "Architecture",
    "Data & State",
    "Performance",
    "Reflection",
  ];

  for (let i = 0; i < items.length; i++) {
    const item = createEl("li", null, null, list);
    const content = createEl("p", null, items[i], item);
  }

  return slide;
}
