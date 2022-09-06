import React, { createContext, useState, useEffect } from 'react';
import WineRecommendationImage from '../Assets/Projects/wine-recommendations-square-version-2.jpg';

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const isDarkMode = () => {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkMode ? 'dark' : 'light';
  }
  const [theme, setTheme] = useState(isDarkMode());
  const [contactName, setContactName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactPhoneNumber, setContactPhoneNumber] = useState();
  const [contactMessage, setContactMessage] = useState();

  const projects = [
    {
      img: WineRecommendationImage,
      title: 'Wine Recommendations',
      url: 'https://gilmore-wine-recommendations-v2.netlify.app/',
      link: '/wine-recommendations'
    }
  ]

  const handleThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const handeContactNameChange = (e) => setContactName(e.target.value);

  const handeContactEmailChange = (e) => setContactEmail(e.target.value);

  const handeContactPhoneNumberChange = (e) => setContactPhoneNumber(e.target.value);

  const handeContactMessageChange = (e) => setContactMessage(e.target.value);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    window.open("./Resume.pdf","_blank");
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  const value = {
    theme, 
    setTheme,
    contactName,
    setContactName,
    contactEmail,
    setContactEmail,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactMessage,
    setContactMessage,
    projects,
    handleThemeChange,
    handleDownloadResume,
    handeContactNameChange,
    handeContactEmailChange,
    handeContactPhoneNumberChange,
    handeContactMessageChange
  }
  return (
    <PortfolioContext.Provider value={value} >
      {children}
    </PortfolioContext.Provider>
  )
}
export { PortfolioContextProvider, PortfolioContext };