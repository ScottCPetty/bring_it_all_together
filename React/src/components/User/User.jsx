import { useGetAllUsersQuery } from "../Home/HomeSlice";
import { useUpdateUserMutation } from "./userSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function User(loggedIn) {
  const [updateUser] = useUpdateUserMutation();
  const [user, setUser] = useState([]);
  const { data, isSuccess } = useGetAllUsersQuery();
  const currentUser = window.sessionStorage.getItem("CurrentUser");
  //   console.log(currentUser);
  const navigate = useNavigate();
  const { userId } = useParams();
  //   console.log(userId);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess && data) {
      const temp = JSON.parse(data);

      if (Array.isArray(temp)) {
        const filteredUser = temp.find(
          (filteredUser) => filteredUser.id === userId
        );

        if (filteredUser) {
          setUser(filteredUser);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    }
  }, [data, isSuccess, userId]);
  //   console.log(user);

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(form);
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("This is the form:", form);
    try {
      let success = false;
      success = await updateUser({ userId, form }).unwrap();
      console.log("Success response:", success);
      if (success) {
        if (user.email == currentUser) {
          sessionStorage.setItem("CurrentUser", form.email);
        }
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">User Information:</h2>
      {loggedIn && (
        <form onSubmit={submit}>
          <div className="row">
            <div className="col">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={user.firstName}
                name="firstName"
                value={form.firstName}
                onChange={updateForm}
              />
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={user.lastName}
                name="lastName"
                value={form.lastName}
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={user.email}
              name="email"
              value={form.email}
              onChange={updateForm}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="New Password"
              name="password"
              value={form.password}
              onChange={updateForm}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
