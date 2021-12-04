import Alert from "../components/alert";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "./container";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
      </Container>
      <Footer />
    </>
  );
}
