import { createEl } from "../utils.js";

export default function Slide5() {
  const slide = createEl("div", "slide slide-5", null, null);

  const diagram = createEl("p", "body ascii flow box", null, slide);
  diagram.innerHTML = `
<pre>
          │
          ▼
┌─────────────────────┐
│  URL Search Params  │
└─────────────────────┘
          │
          ▼
┌─────────────────────┐
│  Get Filters        │
└─────────────────────┘
          │
          ▼
┌─────────────────────┐
│  Get Data           │
└─────────────────────┘
          │
          ▼
┌─────────────────────┐
│  Server Component   │
└─────────────────────┘
</pre>`;

  const body = createEl(
    "p",
    "body",
    "I designed the data layer to be predictable, scalable, and easy to reason about. All filtering logic is driven by the URL, making the state shareable, bookmarkable, and free from client-side complexity. Server components handle initial rendering, while a custom fetchData utility allows fine-grained control over caching and revalidation based on how frequently each endpoint changes. This strategy keeps the app stateless on the client and ensures that every view reflects the latest data without overfetching.",
    slide,
  );

  const page = createEl("p", "page", "03 / 05", slide);
  const title = createEl("h1", "title", "Data & State", slide);

  return slide;
}
