"use server";

import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";

// post action
export const createPost = async (formData) => {
  // "use server";
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
    // console.log(newPost);
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (formData) => {
  try {
    const { id } = Object.fromEntries(formData);
    connectToDb();
    const deletedPost = await Post.findByIdAndDelete(id);
    // console.log(deletedPost);
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error);
  }
};
