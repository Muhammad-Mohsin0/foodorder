import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("signin");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return isLoggedIn ? <Component /> : null;
};

export default ProtectedRoute;
