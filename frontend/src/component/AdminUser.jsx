import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <div className="px-5 py-10 sm:ml-64">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-primary">Kelola User</h1>
        <Link to="/admin-user/add">
          <button className="bg-primary text-white w-32 h-10 rounded-xl">
            Tambah User
          </button>
        </Link>
      </div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700 text-center">
          <tr className="m-1">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 text-center">
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex flex-col gap-1">
                  <Link
                    to={`/EditUser/${user.uuid}`}
                    className="bg-green-800 rounded-sm text-white text-center px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="bg-red-500 rounded-sm text-white text-center px-2 py-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
