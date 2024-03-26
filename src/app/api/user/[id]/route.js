import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// get all blog posts
export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    const user = await User.findById(id);
    return NextResponse.json(user);
  } catch (error) {
    return console.error(error.message);
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    await User.findByIdAndDelete(id);
    return NextResponse.json("Deleted Successfully");
  } catch (error) {
    return console.error(error.message);
  }
};
