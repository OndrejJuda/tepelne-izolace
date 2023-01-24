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

const CoinContext = createContext({
  formData: defaultFormData,
  setFormData: (field, value) => { },
  clearFormData: () => { },
});

export const CoinContextProvider = ({ children }) => {
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
    <CoinContext.Provider
      value={{
        formData,
        setFormData: setFormDataHandler,
        clearFormData: clearFormDataHandler,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;