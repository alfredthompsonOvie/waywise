/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [hasToken, setHasToken] = useState(false);
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => { 
    setHasToken(!!localStorage.getItem("token"));
    
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate])
  return hasToken ? children : null
}

export default ProtectedRoute;
