import { getUser } from "@/lib/data";
import Image from "next/image";

const Author = async ({ post }) => {
  const user = await getUser(post.userId);
  if (!user) {
    return <div></div>;
  }
  return (
    <section className="flex items-center gap-5 mb-3">
      <div className="relative w-10 h-10">
        <Image
          src={user.image || "/noavatar.png"}
          alt={user.username}
          fill
          className="rounded-full"
        />
      </div>
      <div>
        <h5 className="text-gray-400 font-semibold">Author</h5>
        <p>{user.username}</p>
      </div>
      <div>
        <h5 className="text-gray-400 font-semibold">Published</h5>
        <p>{post.createdAt.toString().slice(4, 16)}</p>
      </div>
    </section>
  );
};
export default Author;
