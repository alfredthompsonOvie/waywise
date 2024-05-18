import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {

  --text: #d0d8fc;
  --background: #02051c;
  --primary: #738bf6;
  --secondary: #810a9a;
  --secondary-alt: rgba(129, 10, 154, 0.2);
  --accent: #f00fb8;
  --accent-alt: rgba(240, 15, 184, 0.2);

  --text: #ecedf5;
--background: #0a0b18;
--background-card: #111222;
--primary: #9da2de;
--secondary: #232b8a;
--accent: #3845db;

--text: #dbedfe;
--background: #000c17;
--background-card: #051423;
--primary: #6eb8fd;
--secondary: #aa026d;
--accent: #fc2831;




  /* --background: #312c51;
  --secondary: #48426d;
  --primary: #f0c38e;
  --accent: #f1aa9b;
  
  --background: #006270;
  --secondary: #009394;
  --primary: #00e0c7;
  --accent: #fff;
  
  --background: #2d3250;
  --secondary: #424769;
  --primary: #676f9d;
  --accent: #f9b17a;
  --text: #fff;
  
  --background: #001b48;
  --secondary: #02457a;
  --primary: #018abe;
  --accent: #97cadb;
  --text: #d6e8ee;
  
  --background: #47466d;
  --secondary: #3d84a7;
  --primary: #46cdcf;
  --accent: #abedd8;
  --text: #fff;
  
  --background: #210440;
  --secondary: #fdb095;
  --primary: #e5958e;
  --accent: #ffba00;
  --text: #fff; */


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

  border: 2px solid var(--secondary);
  border-left: 5px solid var(--secondary);
  
  border: 2px solid var(--secondary);
  border-left: 5px solid var(--secondary);
}
.isOpen {
  
  transition: all 0.3s linear;
}
.leaflet-map {
  width: 100%;
  min-height: 100vh; 
  height: 100%;
  position: relative;
  z-index: 10;
}

body {
  font-family: "Poppins", sans-serif;

  transition: color 0.3s, background-color 0.3s;
  background-color: var(--background);
  min-height: 100vh;
  line-height: 1.5;
}
.toast {
  position: relative;
  z-index: 1000;
}
.wrapper-menu {
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
}

.wrapper-menu.open {
  transform: rotate(-45deg);  
} 

.line-menu {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 2px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.open .line-menu.start {
  transform: rotate(-90deg) translateX(2px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.open .line-menu.end {
  transform: rotate(-90deg) translateX(-2px);
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input {
  color: black !important;
  padding: 1em;
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

/* MENU LIST */

#webapp_cover {
  width: 39px;
  width: 35px;
  /* background-color: red; */
  /* padding: 1em; */
}

#menu_button {
  width: 39px;
  width: 35px;
  overflow: hidden;
}

#menu_checkbox {
  display: none;
}

#menu_label {
  position: relative;
  display: block;
  height: 29px;
  /* height: 20px; */
  cursor: pointer;
}

#menu_label:before,
#menu_label:after,
#menu_text_bar {
  position: absolute;
  left: 0;
  width: 100%;
  /* height: 5px; */
  height: 2px;
  background-color: #fff;
}

#menu_label:before,
#menu_label:after {
  content: "";
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
}

#menu_label:before {
  top: 0;
}

#menu_label:after {
  top: 12px;
  /* top: 8px; */
}

#menu_text_bar {
  top: 24px;
  /* top: 18px; */
}

#menu_text_bar:before {
  content: "MENU";
  position: absolute;
  top: 5px;
  right: 0;
  left: 0;
  color: #fff;
  font-size: 12px;
  font-size: 10px;
  font-weight: bold;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-align: center;
}

#menu_checkbox:checked + #menu_label:before {
  left: -39px;
}

#menu_checkbox:checked + #menu_label:after {
  left: 39px;
}

#menu_checkbox:checked + #menu_label #menu_text_bar:before {
  animation: moveUpThenDown 0.8s ease 0.2s forwards,
    shakeWhileMovingUp 0.8s ease 0.2s forwards,
    shakeWhileMovingDown 0.2s ease 0.8s forwards;
}

@keyframes moveUpThenDown {
  0% {
    top: 0;
  }
  50% {
    top: -27px;
  }
  100% {
    top: -14px;
  }
}

@keyframes shakeWhileMovingUp {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes shakeWhileMovingDown {
  0% {
    transform: rotateZ(0);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-3deg);
  }
  100% {
    transform: rotateZ(0);
  }
}



`;

export default GlobalStyles;
