// UserActions.jsx
// import React from "react";
// import { useDeleteUserMutation, useUpdateUserMutation } from "./HomeSlice";

// const UserActions = ({ user }) => {
//   const [deleteUser] = useDeleteUserMutation();
//   const [updateUser] = useUpdateUserMutation();
//   const signedInUserToken = window.sessionStorage.getItem("Token");

//   const handleDelete = () => {
//     if (user.id === signedInUserToken) {
//       alert("You cannot delete the signed-in user.");
//       return;
//     }
//     deleteUser(user.id)
//       .unwrap()
//       .then(() => {
//         console.log("User deleted successfully");
//       })
//       .catch((error) => {
//         console.error("Failed to delete the user:", error);
//       });
//   };

//   const handleUpdate = () => {
//     // Handle the update logic here
//     const updatedData = { ...user, name: "Updated Name" }; // example update
//     updateUser({ id: user.id, ...updatedData })
//       .unwrap()
//       .then(() => {
//         console.log("User updated successfully");
//       })
//       .catch((error) => {
//         console.error("Failed to update the user:", error);
//       });
//   };

//   return (
//     <div>
//       <button onClick={handleDelete}>Delete</button>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// };

// export default UserActions;
