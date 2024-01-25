import { createContext, useContext, useState } from "react";

const InfoFormContext = createContext();

export const InfoFormProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
  });

  return (
    <InfoFormContext.Provider value={{ person, setPerson }}>
      {children}
    </InfoFormContext.Provider>
  );
};

export const useInfoForm = () => {
  return useContext(InfoFormContext);
};
