import { useI18next } from "gatsby-plugin-react-i18next";
import React, { FunctionComponent } from "react";
import "../assets/styles/language-switcher.scss";

const LanguageSwitcher: FunctionComponent = () => {
  const { languages, changeLanguage, language } = useI18next();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    changeLanguage(newLanguage);
  };

  return (
    <select
      className="language-switch"
      onChange={handleLanguageChange}
      value={language}
    >
      {languages.map((lng) => (
        <option value={lng} key={lng}>
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
