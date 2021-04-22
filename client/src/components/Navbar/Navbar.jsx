import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="bg-dark container-fluid">
      <div className="text-white text-center py-3">Memories</div>
      {user ? (
        <div>
          <img src={user.result.imageUrl} alt="" />
          {user.result.name.charAt(0)}
          <p>{user.result.name}</p>
          <button className="btn-danger btn text-white" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/auth">
          <button className="btn-primary btn mb-3">Login</button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
