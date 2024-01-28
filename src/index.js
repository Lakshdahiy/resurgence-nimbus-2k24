import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//for seo
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>

// );
