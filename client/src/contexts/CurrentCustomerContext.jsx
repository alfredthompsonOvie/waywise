/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const CurrentCustomerContext = createContext();

function CurrentCustomerProvider({ children }) {
  const [currentCustomerId, setCurrentCustomerId] = useState(null)

  function handleCurrentCustomer(id) {
    setCurrentCustomerId(id)
  }

  return <CurrentCustomerContext.Provider value={{handleCurrentCustomer, currentCustomerId}}>
    {children}
  </CurrentCustomerContext.Provider>
}

function useCurrentCustomer() {
  const context = useContext(CurrentCustomerContext)
  if (!context) throw new Error("Context used out side provider");

  return context;
}


export {CurrentCustomerProvider, useCurrentCustomer}