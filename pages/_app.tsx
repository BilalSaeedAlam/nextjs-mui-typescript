import "../styles/globals.css";
import type { AppProps } from "next/app";
import PropTypes from "prop-types";

// MUI Wrapper
// import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/theme/createEmotionCache";

// Context Wrapper
import { AppWrapper, useAppContext } from "../src/context/appContext";
import ThemeProvider from "../src/components/ThemeProvider";

// Toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function App({ Component, pageProps }: AppProps) {
  // const darkModeTheme = createTheme(themeMode("dark"));
  return (
    <>
      <AppWrapper>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </AppWrapper>
      <ToastContainer closeButton={true} limit={1} position="top-right" />
    </>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
