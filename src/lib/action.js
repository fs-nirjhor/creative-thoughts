"use server";

//import { Post } from "@/lib/models";
//import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { baseUrl } from "@/lib/secret";
import { signIn, signOut } from "@/lib/auth";

// post action
export const createPost = async (formData) => {
  try {
    const data = Object.fromEntries(formData);
    const res = await fetch(`${baseUrl}/api/blog`, {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-store",
    });
    //const newPost = res.json();
    // console.log(res);
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (formData) => {
  try {
    const data = Object.fromEntries(formData);
    const res = await fetch(`${baseUrl}/api/blog`, {
      method: "DELETE",
      body: JSON.stringify(data),
      cache: "no-store",
    });
    // console.log(res);
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error);
  }
};

export const handleLoginWithGithub = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
