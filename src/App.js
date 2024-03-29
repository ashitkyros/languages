import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import Cookies from "js-cookie";

const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl"
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "guj",
    name: "ગુજરાતી",
    country_code: "guj",
  },
];
function App() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const releaseDate = new Date("2021-03-07");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title= t('app_title')
  }, [currentLanguage, t]);
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li> <span className="dropdown-item-text">{t('language')}</span></li>
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                  disabled={code === currentLanguageCode}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
