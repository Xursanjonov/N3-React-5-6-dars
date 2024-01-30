import React from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";

export const ClientLayout = () => {
  return (
    <div className="box">
      <div className="item">
        <ul>
          <li>
            <Link to="/client">Profile</Link>
          </li>
          <li>
            <Link to="/client/address">Addres</Link>
          </li>
          <li>
            <Link to="/client/change-profile">ChangeProfile</Link>
          </li>
        </ul>
      </div>
      <div className="item">
        <Outlet />
      </div>
    </div>
  );
};
