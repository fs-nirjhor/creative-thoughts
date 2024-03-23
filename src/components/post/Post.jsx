import Image from "next/image";
import Link from "next/link";

const Post = () => {
  const title = "Title";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad debitis inventore numquam accusantium totam libero facilis autem error nam dolores.";
  const image =
    "https://images.pexels.com/photos/19598115/pexels-photo-19598115/free-photo-of-women-painting-on-easels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const date = "Mar 03 2024";
  const slug = "title";
  return (
    <article className="rounded hover:border-2 hover:border-secondary-background p-2">
      <div className="flex justify-between ">
        <div className="relative flex-1 aspect-square">
          <Image src={image} alt={title} className="rounded" fill />
        </div>
        <p className="-rotate-90 m-auto">{date}</p>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="my-3 mr-5 text-justify">{description}</p>
        <Link href={`/blog/${slug}`} className="underline">
          Read More
        </Link>
      </div>
    </article>
  );
};
export default Post;
