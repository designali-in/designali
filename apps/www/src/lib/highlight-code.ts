import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css"; // Choose your theme

export async function highlightCode(code: string, lang: string = "jsx") {
  if (!code) {
    console.error("Code is undefined or empty.");
    return "";
  }

  try {
    // Highlight the code using Prism
    const highlightedCode = Prism.highlight(
      code,
      Prism.languages[lang] || Prism.languages.markup,
      lang,
    );

    return `<pre class="language-${lang}"><code>${highlightedCode}</code></pre>`;
  } catch (error) {
    console.error("Error highlighting code with Prism.js:", error);
    return code; // Fallback to raw code if highlighting fails
  }
}
