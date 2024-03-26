import Author from "@/components/author/Author";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.description,
  };
}

const SingleBlogPage = async ({ params }) => {
  const post = await getPost(params.slug);
  console.log(post);
  if (!post) {
    notFound();
  }
  return (
    <main className="flex flex-col lg:flex-row justify-between gap-5">
      {post.image && (
        <section className="relative aspect-square flex-1 max-w-sm">
          <Image src={post.image} alt={post.title} fill className="rounded" />
        </section>
      )}
      <section className="flex-1">
        <h1 className="font-bold text-2xl mb-3">{post.title}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Author post={post} />
        </Suspense>
        <p>{post.description}</p>
      </section>
    </main>
  );
};
export default SingleBlogPage;
