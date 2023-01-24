import React from 'react';
import { createContext, useState, useCallback } from 'react';

const defaultFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gdpr: undefined,
};

const CoinContext = createContext({
  formData: defaultFormData,
  setFormData: (field, value) => { },
});

export const CoinContextProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const setFormDataHandler = useCallback(
    (field, value) => setFormData((prevValue) => ({ ...prevValue, [field]: value })),
    []
  );

  return (
    <CoinContext.Provider
      value={{
        formData,
        setFormData: setFormDataHandler,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;