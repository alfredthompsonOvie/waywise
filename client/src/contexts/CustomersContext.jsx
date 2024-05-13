/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { getCustomers, deleteCustomer } from "../services/apiServices";


const CustomersContext = createContext();

const BASE_URL = "http://127.0.0.1:3000"


const initialState = {
	currentCustomerId: null,
};

function reducer(state, action) {
	switch (action.type) {
		case "active/customer":
			return { ...state, currentCustomerId: action.payload };
		// case "customers/loaded":
		// 	return { ...state, isLoading: false, customers: action.payload };
		// case "customer/loaded":
		// 	return { ...state, currentCustomer: action.payload, isLoading: false };
		// case "customer/created":
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		customers: action.payload,
    //     currentCustomer: action.payload,
    //     coordinates: action.payload
		// 	};
		// case "customer/deleted":
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		customers: action.payload,
		// 		currentCustomer: {},
		// 	};
		// case "rejected":
		// 	return { ...state, isLoading: false, error: action.payload };
		default:
			throw new Error("Unknown action type");
	}
}




function CustomersProvider({ children }) {

  const [{customers, isLoading, currentCustomer, coordinates, error}, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {

    async function fetchCustomers() {
      dispatch({ type: "loading" });
      
      try {
        const data = await getCustomers();

        dispatch({ type: "customers/loaded", payload: data});

      } catch (err) {
        console.error("Error fetching data:", err);
        dispatch({ type: "rejected", payload: "There was an error loading customers..." });
      }
    }
    fetchCustomers();
  }, []);


  const getCustomer = useCallback(
    async function getCustomer(id) {
      dispatch({ type: "loading" });
      try {
        const customerData = await getCustomer(id);
        console.log(customerData)
        dispatch({ type: "customer/loaded", payload: customerData });
      } catch (e) {
        dispatch({type: "rejected", payload: "There was an error loading the customer..."})
      }
    
     }, []
  );







  return <CustomersContext.Provider value={{
    customers, isLoading, currentCustomer, getCustomer, coordinates, deleteCustomer
  }}>
    {children}
  </CustomersContext.Provider>
}


function useCustomers() {
  const context = useContext(CustomersContext);
  if(context === undefined) throw new Error("CustomerContext was used outside CustomerProvider");
  return context; 
}

export { CustomersProvider, useCustomers };