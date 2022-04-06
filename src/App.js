import "./App.css";
import MiniDrawer from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import "@fontsource/roboto";
import { createTheme, ThemeProvider } from "@mui/material";
import LightTheme from "./Themes/LightTheme.js";
import DarkTheme from "./Themes/DarkTheme.js";
import DarkMode from "./components/Darkmode.jsx";
import { grabLocalStorage, useLocalStorage } from "./Hooks/useLocalStorage.js";
import React, { useEffect, useState } from "react";

function App() {
  const [preferences, setPreferences] = useState(
    () =>
      grabLocalStorage("preferences") || {
        datapower: "",
        username: "",
        password: "",
        save: false,
        darkmode: false,
      }
  );
  useEffect(() => {
    const storage = grabLocalStorage("preferences");
    setPreferences({
      ...preferences,
      ...storage,
    });
  }, []);
  const [auth, setAuth] = useState(false);
  return (
    <ThemeProvider
      theme={
        preferences.darkmode ? createTheme(DarkTheme) : createTheme(LightTheme)
      }
    >
      {auth ? (
        <MiniDrawer preferences={preferences} setAuth={setAuth} />
      ) : (
        <React.Fragment>
          <DarkMode
            darkmode={preferences.darkmode ? preferences.darkmode : false}
            onClick={() => {
              setPreferences({
                ...preferences,
                darkmode: !preferences.darkmode,
              });
            }}
          />
          <Login
            preferences={preferences}
            setPreferences={setPreferences}
            setAuth={setAuth}
          />
        </React.Fragment>
      )}
    </ThemeProvider>
  );
  // {auth.user === "" ?
  // : <MiniDrawer/>}
}

export default App;
