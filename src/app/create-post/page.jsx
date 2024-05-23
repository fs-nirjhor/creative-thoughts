import { createPost } from "@/lib/action";
import { auth } from "@/lib/auth";

const CreatePost = async () => {
  const session = await auth();
  const id = session?.user?.id;
  const style =
    "p-2 w-full block mb-3 bg-gray-800 focus:bg-slate-700 border border-foreground rounded";
  return (
    <section className="mt-5 max-w-md mx-auto">
      <h1 className="mb-3 text-center text-lg font-bold text-blue-500">
        Create Post
      </h1>
      <form action={createPost} method="post">
        <input type="text" name="title" placeholder="Title" className={style} />
        <input type="text" name="slug" placeholder="Slug" className={style} />
        <textarea
          name="description"
          placeholder="Description"
          className={style}
          cols="20"
          rows="5"
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image link"
          className={style}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={id}
          className={`${style} hidden`}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-1 mx-auto block hover:opacity-50 rounded"
        >
          Create
        </button>
      </form>
    </section>
  );
};
export default CreatePost;
