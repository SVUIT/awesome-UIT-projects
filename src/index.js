import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'aos/dist/aos.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
