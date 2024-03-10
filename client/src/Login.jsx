import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/home">
        <button className="btn">Log In</button>
      </Link>
    </div>
  );
};

export default Login;
