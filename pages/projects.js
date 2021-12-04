import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Intro />
      </Layout>
    </>
  );
}
