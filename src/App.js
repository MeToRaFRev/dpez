import "./App.css";
import MiniDrawer from "./components/Navbar.jsx";
import Login from "./components/Auth.jsx";
import { useState } from "react";
import "@fontsource/roboto";
import { ThemeProvider } from "@emotion/react";
import LightTheme from "./Themes/LightTheme.js";
import DarkTheme from "./Themes/DarkTheme.js";
import useLocalStorage from "./Hooks/useLocalStorage.js";

function App() {
  const [auth, setAuth] = useLocalStorage("auth", {
    dp: [{ label: "" }],
    user: "",
    password: "",
  });
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return <Login />;
  // {auth.user === "" ?
  // : <MiniDrawer/>}
}

export default App;
