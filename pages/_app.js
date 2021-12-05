import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import config from "react-reveal/globals";
import ParticlesContainer from "../components/particles";
import Header from "../components/header";
import Container from "../components/container";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Container>
        <Header className="absolute z-10" />
        <Component {...pageProps} className="relative z-2" />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
