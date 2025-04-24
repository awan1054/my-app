import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckAuth(shouldNavigate = false, ifLoggedNavTo) {
  const to = ifLoggedNavTo || "/";
  const [loggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  const navigate = useNavigate();
  function handleLogout(navTo = "/login") {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate(navTo);
  }
  useEffect(() => {
    if (!loggedIn) {
      if (shouldNavigate) navigate("/login");
    } else {
      if (shouldNavigate) navigate(to);
    }
  }, [loggedIn, navigate, shouldNavigate, to]);
  return { loggedIn, handleLogout };
}
