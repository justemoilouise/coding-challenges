import * as React from 'react';

export const DrawerContext = React.createContext(null);

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);

  const providerValues = {
    open,
    toggle: toggleDrawer,
  };

  return (
    <DrawerContext.Provider value={providerValues}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => React.useContext(DrawerContext);
