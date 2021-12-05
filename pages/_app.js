import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
