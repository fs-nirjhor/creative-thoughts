"use client";

import { deleteUser } from "@/lib/action";

const DeleteUser = ({ userId }) => {
  return (
    <form action={deleteUser}>
      <input
        type="text"
        name="id"
        placeholder="userId"
        defaultValue={userId}
        className="hidden"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-2 py-1 mx-auto block hover:opacity-70 rounded"
      >
        Delete
      </button>
    </form>
  );
};
export default DeleteUser;
