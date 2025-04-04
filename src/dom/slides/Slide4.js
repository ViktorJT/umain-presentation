import { createEl } from "../utils.js";

export default function Slide2() {
  const slide = createEl("div", "slide slide-4", null, null);

  const filetree = createEl("p", "body box ascii tree", null, slide);
  filetree.innerHTML = `
    <pre>
      .
      ├── app/
      │   ├── welcome/
      │   ├── page.tsx
      │   └── layout.tsx
      ├── components/
      │   ├── atoms/
      │   ├── molecules/
      │   └── organisms/
      ├── data/
      ├── hooks/
      ├── public/
      ├── types/
      ├── utils/
      └── middleware.ts
    </pre>
  `;

  const body = createEl(
    "p",
    "text body",
    "I wanted the architecture to be simple, scalable, and easy to reason about—both for myself and future developers. I followed the Atomic Design pattern for modularity, used TypeScript for safety, Tailwind for consistent styling, and added SVG support for flexible UI elements. The result is a predictable, maintainable, and easily extensible codebase.",
    slide,
  );

  const page = createEl("p", "page", "02 / 05", slide);
  const title = createEl("h1", "title", "Architecture", slide);

  return slide;
}
