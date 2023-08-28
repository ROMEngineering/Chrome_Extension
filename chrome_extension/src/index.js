import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Initializes a new root container element with the given class name.
 *
 * @param {string} className - The CSS class name to assign to the new root container.
 * @returns {HTMLElement} - The new root container element.
 */
function initializeRootContainer(className) {
  const container = document.createElement("div");
  container.className = className;
  document.body.appendChild(container);
  return container;
}

/**
 * Bootstraps the React application.
 *
 * @param {HTMLElement} container - The DOM container to render the React app into.
 */
function bootstrapReactApp(container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Main execution
const rootContainer = initializeRootContainer("container");
bootstrapReactApp(rootContainer);
