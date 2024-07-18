import { useGetAllUsersQuery, useDeleteUserMutation } from "./HomeSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(loggedIn) {
  const [allUsers, setAllUsers] = useState([]);
  const { data, isSuccess, refetch } = useGetAllUsersQuery();
  const currentUser = window.sessionStorage.getItem("CurrentUser");
  const [deleteUserMutation] = useDeleteUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      const temp = JSON.parse(data);
      console.log(temp);
      setAllUsers(temp);
      refetch();
    }
  }, [data, isSuccess, refetch]);

  const userInfoRedirect = (userId) => {
    navigate(`/${userId}`);
  };

  const handleUserDelete = async (userId) => {
    try {
      await deleteUserMutation(userId);
      refetch();
      alert("User Deleted");
    } catch (error) {
      console.log(error);
    }
  };

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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => userInfoRedirect(user.id)}
                >
                  User Info
                </button>
                {user.email === currentUser ? (
                  <p>{`(Current User)`}</p>
                ) : (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleUserDelete(user.id)}
                  >
                    Delete User
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
