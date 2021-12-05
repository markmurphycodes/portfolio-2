import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        This is a new portfolio, I will be adding projects to this page shortly!
      </Layout>
    </>
  );
}
