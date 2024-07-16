import { useGetAllUsersQuery } from "./HomeSlice";
import { useEffect, useState } from "react";

export default function Home({ loggedIn }) {
  const [allUsers, getAllUsers] = useState([]);
  const { data, isSuccess } = useGetAllUsersQuery();
  useEffect(() => {
    if (isSuccess && data) {
      console.log(localStorage.getItem("Token"))
      const temp = JSON.parse(data);
      getAllUsers(temp.allUsers);
    }
  }, [data, isSuccess]);
  return (
    <>
      <ul>
        {allUsers.map((user) => {
          return <li key={user.id}>Email: {user.email}</li>;
        })}
      </ul>
    </>
  );
}
