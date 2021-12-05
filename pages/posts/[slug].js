import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import PageLayout from "../../components/page-layout";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PageLayout preview={preview} color={"#957186"} header={"-blog post-"}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Mark Murphy</title>
              <meta property="og:image" content={post.coverImage.url} />
            </Head>
            <PostHeader
              className={"p-4 m-4"}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody className={"p-4 m-4"} content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts && morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </>
      )}
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
