import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --text: hsl(221, 61%, 94%);
    --background: hsl(227, 59%, 8%);
    --primary: hsl(222, 59%, 72%);
    --secondary: hsl(55, 59%, 32%);
    --accent: hsl(123, 59%, 59%);
    box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: var(--background);
  color: var(--text);
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 90em;
  margin-inline: auto;
}


.active {
  border: 2px solid var(--accent);
  border-left: 5px solid var(--accent);
}
.error {
  border: 2px solid red;
  background-color: red;
}


body {
  font-family: "Poppins", sans-serif;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  /* font-size: 1.6rem; */
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: inline-block;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}



`;

export default GlobalStyles;
