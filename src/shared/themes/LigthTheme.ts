import { createTheme } from "@mui/material";

export const colors = {
  neutral_600: "#767676",
  neutral_300: "#D5D5D5",
  primary_300: "#FFA592",
  secondary_300: "#88C1DA",
  error_300: "#EA92A1",
  error_600: "#BD041A",
  secondary_600: "#00639F",
  primary_600: "#D53502",
  secondary_700: "#005F92",
  secondary_800: "#00567B",
  secondary_200: "#CCE7F0",
  secondary_400: "#4495C0",
  secondary_500: "#0064A4",
  background_dark: "#FBFBFB",
  background_base: "#FFFFFF",
  primary_400: "#FA7E59",
  primary_700: "#AA1200",
  primary_200: "#FFD5CF",
  primary_500: "#F15E24",
  primary_800: "#800000",
  error_200: "#F7CFD8",
  error_400: "#DA5767",
  error_700: "#AA0011",
  error_500: "#C7202B",
  error_800: "#80000D",
  neutral_400: "#B8B8B8",
  neutral_700: "#525252",
  neutral_200: "#F3F3F3",
  neutral_500: "#9A9A9A",
  neutral_800: "#2E2E2E",
};

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: colors.primary_200,
      main: colors.primary_500,
      dark: colors.primary_800,
      contrastText: colors.background_base,
    },
    secondary: {
      light: colors.secondary_200,
      main: colors.secondary_500,
      dark: colors.secondary_800,
      contrastText: colors.background_base,
    },
    background: {
      paper: colors.background_base,
      default: colors.background_dark,
    },
  },
});
