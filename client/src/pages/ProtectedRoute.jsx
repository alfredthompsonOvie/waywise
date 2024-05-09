/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [hasToken, setHasToken] = useState(false);
  const { isAuthenticated, dispatch } = useAuth();

  const navigate = useNavigate();

  useEffect(() => { 

    const token = localStorage.getItem("token");
    setHasToken(!!token);
    
    if (!isAuthenticated && token) {
      const userData = JSON.parse(localStorage.getItem("user"));
      dispatch({type: "update", payload: userData})
    } else if (!isAuthenticated && !token) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate, dispatch])
  return hasToken ? children : null
}

export default ProtectedRoute;
