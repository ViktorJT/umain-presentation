import { createEl } from "../utils.js";

export default function Slide1() {
  const slide = createEl("div", "slide slide-1");

  const name = createEl("p", "name", "Viktor J. Torp", slide);
  const date = createEl("p", "date", "04/04/25", slide);
  const title = createEl("h1", "title", "umain work test", slide);

  return slide;
}
