"use server";

import bcrypt from "bcrypt";
import { User } from "@/lib/models";
import { revalidatePath } from "next/cache";
import { baseUrl, saltRounds } from "@/lib/secret";
import { signIn, signOut } from "@/lib/auth";
import { connectToDb } from "@/lib/utils";

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

export const handleRegistration = async (formData) => {
  try {
    const data = Object.fromEntries(formData);
    const { username, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return "Passwords do not match";
    }
    await connectToDb();
    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (user) {
      console.log("User already exists");
      return "User already exists";
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    throw new Error(error);
  }
};
