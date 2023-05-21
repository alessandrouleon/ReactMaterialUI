import { router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { LightTheme } from "./shared/themes/LigthTheme";
import { ThemeProvider } from "@mui/material";

export function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <h1>APP</h1>
      <BrowserRouter></BrowserRouter>
    </ThemeProvider>
  );
}
