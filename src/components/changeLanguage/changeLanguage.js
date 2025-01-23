import React, { useState, useRef, useEffect } from 'react';
import './changeLanguage.css';
import CurrencyFlag from 'react-currency-flags';

const languages = [
    { code: 'en', name: 'English', flag: 'GBP' },  // Use 'GBP' for the British flag as per react-currency-flags
    { code: 'ge', name: 'Georgian', flag: 'GEL' }, // Use 'ALL' for the Albanian flag
];

const ChangeLanguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) { // Adjust 50 to the point where you want the background to appear
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <div className={scrolling ? "language-button navbar-scrolled" : "language-button"} onClick={toggleDropdown}>
            <CurrencyFlag
                style={{
                    width: '28px',
                    height: '28px'
                }}
                className='currency-flag-main'
                currency={selectedLanguage.flag}
            />
            </div>
            {isOpen && (
                <div className="dropdown">
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            className="dropdown-item"
                            onClick={() => selectLanguage(language)}
                        >
                            <CurrencyFlag className='currency-flag' currency={language.flag}  />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChangeLanguage;
