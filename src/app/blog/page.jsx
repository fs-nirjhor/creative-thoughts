import Post from "@/components/post/Post";

const BlogPage = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};
export default BlogPage;
