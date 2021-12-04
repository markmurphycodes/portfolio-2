import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import MoreStories from "../components/more-stories";

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Intro />
        {allPosts.length > 0 && (
          <MoreStories posts={allPosts} text={"Recent Blog Posts"} />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
