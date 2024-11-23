import { createContext } from "react";
import { professionals as defaultProfessionals } from "../assets/assets";

// Create a context
export const AppContext = createContext();

// AppContextProvider Component
const AppContextProvider = (props) => {
  const value = {
    defaultProfessionals,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
