import { useGetAllUsersQuery } from "./HomeSlice";
import { useEffect, useState } from "react";
import UserActions from "./UserActions";

export default function Home(loggedIn) {
  const [allUsers, setAllUsers] = useState([]);
  const { data, isSuccess } = useGetAllUsersQuery();

  useEffect(() => {
    if (isSuccess && data) {
      const temp = JSON.parse(data);
      setAllUsers(temp.allUsers);
    }
  }, [data, isSuccess]);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            Email: {user.email}
            <UserActions user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
