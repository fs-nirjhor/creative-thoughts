import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

// post action
export const postAction = async (formData) => {
  "use server";
  try {
    const { title, description, image, author, slug } =
      Object.fromEntries(formData);
    connectToDb();
    const newPost = await Post.create({
      title,
      description,
      image,
      author,
      slug,
    });
    console.log(newPost);
  } catch (error) {
    throw new Error(error);
  }
};
