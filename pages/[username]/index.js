import React from "react";
import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <main>
      <h2>User Profile - {username}</h2>
    </main>
  );
}

export default UserProfile;
