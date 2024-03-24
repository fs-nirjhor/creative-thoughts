import Image from "next/image";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <article className="rounded hover:border-2 hover:border-secondary-background p-2">
      <div className="flex justify-between aspect-square">
        <div className="relative flex-1">
          <Image src={post.image} alt={post.title} className="rounded" fill />
        </div>
        <p className="-rotate-90 m-auto">{post.createdAt}</p>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="my-3 mr-5 text-justify">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="underline uppercase">
          Read More
        </Link>
      </div>
    </article>
  );
};
export default Post;
