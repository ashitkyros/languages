import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportesLng: ["ar", "en", "guj"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "./assets/locales/{{lng}}/translation.json",
    },
  });

const lodingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={lodingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
