import deleteProduct from "../constant/used";
import { useProduct } from "../hooks/ProductsProvider";

function Users() {
  const { users, handelDelete } = useProduct();
  const type = "admin";
  return (
    <>
      {type === "admin" ? (
        <section className="xl:padding-l flex flex-col  gap-6  wide:padding-r paddind-b ">
          <div className="overflow-x-auto py-5   shadow-2xl mb-10">
            <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left text-xl rtl:text-right text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    #ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Image
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    UserName
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-xl">
                {users.map((user, index) => (
                  <tr key={user.id} className="odd:bg-gray-50 py-5">
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                      <img
                        className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                      <button
                        onClick={() => deleteProduct(user, handelDelete)}
                        className="  rounded bg-red-600 px-6 py-2 text-xs font-medium text-white hover:bg-red-700"
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Users;
