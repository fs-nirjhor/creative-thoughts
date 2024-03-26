// user routes

import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// get all users
export const GET = async (request) => {
  try {
    connectToDb();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return console.error(error.message);
  }
};
