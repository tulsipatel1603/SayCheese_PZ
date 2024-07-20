import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";

// Create a root and render the application
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const globalStyles = `
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #fec76f;
  }
`;

const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(globalStyles));
document.head.appendChild(styleTag);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//improvements - make another file for global styles and import it here