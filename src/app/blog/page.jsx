import Post from "@/components/post/Post";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </main>
  );
};
export default BlogPage;
