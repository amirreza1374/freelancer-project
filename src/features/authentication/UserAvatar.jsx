import React from "react";
import useUser from "./useUser";

function UserAvatar() {
  const { isLoading, user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-600 gap-x-6">
      <img
        className="size-7 rounded-full object-cover object-fill "
        src="/public/user.jpg"
        alt="user-image"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
