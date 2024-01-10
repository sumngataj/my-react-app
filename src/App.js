import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import "./components/Login.css";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Dashboard />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
