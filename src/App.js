import "./App.css";
import MiniDrawer from "./components/Navbar.jsx";
import Login from "./components/Auth.jsx";
import "@fontsource/roboto";
import { createTheme, ThemeProvider } from "@mui/material";
import LightTheme from "./Themes/LightTheme.js";
import DarkTheme from "./Themes/DarkTheme.js";
import DarkMode from "./components/Darkmode.jsx";
import { useLocalStorage } from "./Hooks/useLocalStorage.js";

function App() {
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", true);
  return (
    <ThemeProvider
      theme={darkmode ? createTheme(DarkTheme) : createTheme(LightTheme)}
    >
      <DarkMode onClick={() => setDarkmode(!darkmode)}></DarkMode>
      <Login />
    </ThemeProvider>
  );
  // {auth.user === "" ?
  // : <MiniDrawer/>}
}

export default App;
