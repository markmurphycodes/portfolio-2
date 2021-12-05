import PageLayout from "../components/page-layout";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import { getAllPostsForHome } from "../lib/api";

export default function Blog({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <PageLayout preview={preview} color="#7F7FF2" header="Blog">
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} text={"More Posts"} />
          )}
        </Container>
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
    revalidate: 60,
  };
}
