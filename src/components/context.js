import React, { useContext, useState } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [page, setPage] = useState({ page: '', link: [] });

  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubmenu = (text, coordinates) => {
    // const page = sublinks.find((items) => items.page === text);
    const page = sublinks.find((pages) => pages.page === text);
    setPage(page);
    setIsSubmenu(true);
    setLocation(coordinates);
  };
  const closeSubmenu = () => {
    setIsSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        openSidebar,
        closeSidebar,
        isSubmenu,
        closeSubmenu,
        openSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { useGlobal, AppContext, AppProvider };
