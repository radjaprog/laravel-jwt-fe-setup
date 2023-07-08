import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <ul>
        {!user.name && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user.name && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          <Link to="/users">Users list</Link>
        </li>
      </ul>
    </div>
  );
}
