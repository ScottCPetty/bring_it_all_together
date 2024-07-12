import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useRegisterMutation } from "./RegisterSlice";

export default function Register(setLoggedIn) {
  // const [registerUser] = useRegisterMutation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   console.log("This is the form:", form);
  //   try {
  //     let success = false;
  //     success = await registerUser(form).unwrap();
  //     if (success) {
  //       window.sessionStorage.setItem("Token", success.token);
  //       setLoggedIn(true);
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const toLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Register</h2>
      {/* <form onSubmit={submit}> */}
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            // value={form.firstname}
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastname"
            // value={form.lastname}
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            // value={form.email}
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            // value={form.password}
            onChange={updateForm}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="redirect-container">
        <h3>Already Have an Account?</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={toLoginRedirect}
        >
          Click Here to Sign In!
        </button>
      </div>
    </div>
  );
}
