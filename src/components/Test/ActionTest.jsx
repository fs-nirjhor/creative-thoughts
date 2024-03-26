import { createPost, deletePost } from "@/lib/action";

const ActionTest = () => {
  const style =
    "px-2 w-full block mb-3 bg-gray-800 focus:bg-slate-700 border border-foreground rounded";
  return (
    <section className="mt-5 max-w-md mx-auto">
      <h1 className="mb-3 text-center text-lg font-bold text-blue-500">
        Create Post
      </h1>
      <form action={createPost} method="post">
        <input type="text" name="title" placeholder="Title" className={style} />
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
          className={style}
        />
        <input type="text" name="slug" placeholder="Slug" className={style} />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-1 mx-auto block hover:opacity-50 rounded"
        >
          Create
        </button>
      </form>
      <hr className="my-3" />
      <h1 className="mb-3 text-center text-lg font-bold text-cyan-500">
        Delete Post
      </h1>
      <form action={deletePost}>
        <input type="text" name="id" placeholder="Post Id" className={style} />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-1 mx-auto block hover:opacity-50 rounded"
        >
          Delete
        </button>
      </form>
    </section>
  );
};
export default ActionTest;
