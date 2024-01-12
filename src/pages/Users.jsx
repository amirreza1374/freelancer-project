import React from "react";
import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className=" font-bold text-secondary-700 text-xl mb-8">
          لیست کاربرها
      </h1>
      <UsersTable />
    </div>
  );
}

export default Users;
