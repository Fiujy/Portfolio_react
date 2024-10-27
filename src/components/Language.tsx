import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const Language = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    localStorage.setItem('language', lng);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 flex justify-center"
        onClick={toggleDropdown}
      >
        {language === 'en' ? 'EN' : 'FR'}
      </div>
      {isDropdownOpen && (
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow-primary rounded-box z-[1] w-auto p-2 shadow">
          <li>
            <a onClick={() => changeLanguage('en')} className="flex justify-center items-center">
              EN
            </a>
          </li>
          <li>
            <a onClick={() => changeLanguage('fr')} className="flex justify-center items-center">
              FR
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};