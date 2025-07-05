import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'react-range-slider-input/dist/style.css';
import { registerSW } from "virtual:pwa-register";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HeroUIProvider } from "@heroui/react";
if (import.meta.env.MODE === "production") {
  registerSW();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </Provider>
);

AOS.init();
