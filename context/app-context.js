import React from 'react';
import { createContext, useState, useCallback } from 'react';

const defaultFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  region: {},
  district: {},
  gdpr: undefined,
};

const AppContext = createContext({
  formData: defaultFormData,
  setFormData: (field, value) => { },
  clearFormData: () => { },
});

export const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const setFormDataHandler = useCallback(
    (field, value) => setFormData((prevValue) => ({ ...prevValue, [field]: value })),
    []
  );

  const clearFormDataHandler = useCallback(
    () => setFormData(defaultFormData),
    []
  );

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData: setFormDataHandler,
        clearFormData: clearFormDataHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;