import { useGetAllUsersQuery } from "./HomeSlice";
import { useEffect, useState } from "react";

export default function Home({ loggedIn }) {
  const [allUsers, getAllUsers] = useState([]);
  const { data, isSuccess } = useGetAllUsersQuery();
  useEffect(() => {
    if (isSuccess && data) {
      const temp = JSON.parse(data);
      console.log(temp);
      getAllUsers(temp);
    }
  }, [data, isSuccess]);

  return (
    <div>
      <h2 className="users-header">Users:</h2>
      <div className="users-list">
        {loggedIn &&
          isSuccess &&
          allUsers.map((user) => (
            <div key={user.id} className="user-container">
              <h5>{`Email: ${user.email}`}</h5>
              <h5>{`Name: ${user.firstName} ${user.lastName}`}</h5>
              <div className="buttons-container">
                <button type="button" className="btn btn-primary">
                  User Info
                </button>
                <button type="button" className="btn btn-danger">
                  Delete User
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
