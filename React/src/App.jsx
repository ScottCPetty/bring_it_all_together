import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    window.sessionStorage.getItem("Token") ? true : false
  );

  return (
    <>
      <div className="header">
        <h1>User Management</h1>
      </div>
      <Router>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <Home loggedIn={loggedIn} /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/registration"
            element={<Registration setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
