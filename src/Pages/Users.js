import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/getAllUsersAction";
import woman from "../images/woman.png";
import man from "../images/man.png";
import group from "../images/friends.png";
import "../css/users.css";
import { NavLink, Outlet } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "box active-box" : "box")}
      to={to}
      end
      {...props}
    />
  );
};

export default function Users() {
  const allUsers = useSelector((state) => state.allUsers);
  const femaleUsers = useSelector((state) => state.femaleUsers);
  const maleUsers = useSelector((state) => state.maleUsers);
  const femaleUsersLength =
    femaleUsers && femaleUsers.response
      ? femaleUsers.response.results.length
      : 0;

  const maleUsersLength =
    maleUsers && maleUsers.response ? maleUsers.response.results.length : 0;
  const allUsersLength =
    allUsers && allUsers.response ? allUsers.response.results.length : 0;
  return (
    <main className="container users-main">
      <h1>In search of new friends?</h1>
      <i>Click either of the boxes below...</i>

      <section>
        <CustomNavLink to="/users/all">
          <div className="box-img">
            <img src={group} alt="group" />
          </div>
          <div>
            <span>
              <i className="fa-solid fa-people-roof"></i> {allUsersLength}
            </span>
          </div>
        </CustomNavLink>
        <CustomNavLink to="/users/female">
          <div className="box-img">
            <img src={woman} alt="woman" />
          </div>
          <div>
            <span>
              <i className="fa-solid fa-people-roof"></i> {femaleUsersLength}
            </span>
          </div>
        </CustomNavLink>
        <CustomNavLink to="/users/male">
          <div className="box-img">
            <img src={man} alt="man" />
          </div>
          <div>
            <span>
              <i className="fa-solid fa-people-roof"></i> {maleUsersLength}
            </span>
          </div>
        </CustomNavLink>
      </section>
      <Outlet />
    </main>
  );
}
