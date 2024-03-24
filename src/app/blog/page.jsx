import Post from "@/components/post/Post";
import { getPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog",
  description: "Blog of creative thoughts agency",
};

const BlogPage = async () => {
  const posts = await getPosts();
  if (!posts) {
    notFound();
  }
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </main>
  );
};
export default BlogPage;
