// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\r\n  margin: 0;\r\n  background-color: rgb(24, 24, 28);\r\n\r\n}\r\n\r\n#app {height: 100%;}\r\n\r\n#drum-machine {\r\n  margin: 1.8rem;\r\n}\r\n\r\n#drum-machine h1 {\r\n  font-family: \"Press Start 2P\", monospace;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  background-color: rgb(15, 15, 19);\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#drum-machine div {\r\n  margin-top: 2rem;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, auto);\r\n  overflow: hidden;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.drum-pad {font-family: \"Press Start 2P\", monospace;\r\n  border: solid 1px rgba(16, 16, 22, 0.302);\r\n  color: lightgrey;\r\n  background-color: rgb(36, 35, 55);\r\n  font-size: 2.5rem;\r\n  min-height: 160px;\r\n  /* width: 400px; */\r\n}\r\n\r\n.drum-pad:hover {\r\n  background-color: rgb(26, 25, 39);\r\n}\r\n\r\n.drum-pad:active, .drum-pad-active {\r\n  background-color: rgb(51, 50, 63);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}