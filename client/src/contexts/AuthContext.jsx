/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const BASE_URL = "http://127.0.0.1:3000";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    default:
      throw new Error("Unknown action")
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispath] = useReducer(reducer, initialState);

  async function signup(data) {
    const {name, email, address, password, passwordConfirm } = data;
    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          password,
          passwordConfirm,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send data to backend");
      }

      const dataRes = await res.json();
      console.log(dataRes);
      localStorage.setItem("token", dataRes.token);
      dispath({type: "login", payload: dataRes.token })
    } catch (e) {
      console.log(e)
    }
  }

  async function login(email, password) {

    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send data to backend");
      }

      const dataRes = await res.json();
      console.log(dataRes);
      localStorage.setItem("token", dataRes.token);
      dispath({type: "login", payload: dataRes.token })
    } catch (e) {
      console.log(e)
    }
  }
  async function logout() {
    try {
      dispath({ type: 'logout' })
      localStorage.removeItem("token");
    } catch (e) {
      console.log("could not sign you out")
    }
   }
  
  return <AuthContext.Provider value={{
    user, isAuthenticated, login, signup, logout
  }}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}


export { AuthProvider, useAuth };