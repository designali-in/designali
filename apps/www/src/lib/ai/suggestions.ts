export interface Suggestion {
  text: string;
  prompt: string;
}

const graphicDesignStyles = [
  "minimalism",
  "surrealism",
  "futuristic cyberpunk",
  "bold typography",
  "geometric abstraction",
  "pop art",
  "retro-futurism",
  "glitch art",
];

const basePrompts: { text: string; prompt: string }[] = [
  {
    text: "Neon Typography",
    prompt:
      "A futuristic neon typography design with glowing letters and a cyberpunk aesthetic",
  },
  {
    text: "Geometric Poster",
    prompt:
      "An abstract poster design with bold geometric shapes and vibrant gradients",
  },
  {
    text: "Surreal Collage",
    prompt:
      "A surreal collage combining classical art elements with modern digital textures",
  },
  {
    text: "Minimalist Branding",
    prompt: "A sleek and clean minimalist logo design with subtle typography",
  },
  {
    text: "Futuristic UI",
    prompt:
      "A high-tech user interface design with glowing elements and smooth animations",
  },
  {
    text: "Retro Wave",
    prompt:
      "A retro-futuristic design featuring 80s neon aesthetics and digital grids",
  },
  {
    text: "Glitch Aesthetic",
    prompt:
      "A digital artwork with distorted and glitchy effects inspired by VHS and CRT screens",
  },
  {
    text: "Nature & Tech Blend",
    prompt:
      "A graphic design composition merging nature with futuristic technology elements",
  },
  {
    text: "Kinetic Typography",
    prompt: "A bold, moving typographic poster that conveys motion and energy",
  },
  {
    text: "Abstract Gradient Flow",
    prompt:
      "A fluid abstract composition with smooth gradient transitions and organic shapes",
  },
];

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomDesignSuggestions(count: number = 5): Suggestion[] {
  const shuffledPrompts = shuffle(basePrompts);
  const shuffledStyles = shuffle(graphicDesignStyles);

  return shuffledPrompts.slice(0, count).map((item, index) => ({
    text: item.text,
    prompt: `${item.prompt}, designed in the style of ${shuffledStyles[index % shuffledStyles.length]}`,
  }));
}
