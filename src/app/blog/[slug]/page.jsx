import Author from "@/components/author/Author";
import { getPost } from "@/lib/data";
import Image from "next/image";

const SingleBlogPage = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <main className="flex flex-col lg:flex-row justify-between gap-5">
      <section className="relative aspect-square flex-1">
        <Image src={post.image} alt={post.title} fill className="rounded" />
      </section>
      <section className="flex-1">
        <h1 className="font-bold text-2xl mb-3">{post.title}</h1>
        <Author post={post} />
        <p>{post.description}</p>
      </section>
    </main>
  );
};
export default SingleBlogPage;
