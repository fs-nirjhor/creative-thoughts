import { getUsers } from "@/lib/data";
import DeleteUser from "./../../components/delete/DeleteUser";

const AdminPage = async () => {
  const users = await getUsers();

  return (
    <main>
      <h3 className="text-3xl text-center font-bold mb-5">Users</h3>
      <section>
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-secondary-background p-2 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <p>{user.username}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
            <DeleteUser userId={user._id} />
          </div>
        ))}
      </section>
    </main>
  );
};
export default AdminPage;
