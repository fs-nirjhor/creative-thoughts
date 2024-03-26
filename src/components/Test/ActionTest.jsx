import { postAction } from "@/lib/action";

const ActionTest = () => {
  const style =
    "p-2 w-full block mb-3 bg-gray-800 border-2 border-foreground rounded";
  return (
    <section className="mt-5">
      <h1 className="mb-3 text-center text-lg font-bold text-blue-500">Post</h1>
      <form action={postAction} method="post">
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
          className="bg-blue-600 text-white px-5 py-2 mx-auto block hover:opacity-50 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default ActionTest;
