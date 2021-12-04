import PostPreview from "../components/post-preview";
import Container from "./container";

export default function MoreStories({ posts, text = "Recent Posts" }) {
  return (
    <>
      <h5 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {text}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <Container>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </Container>
        ))}
      </div>
    </>
  );
}
