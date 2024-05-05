import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext } from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  const { userStatus, changeUserStatus } = useContext(UserStatusContext);

  const handleUserStatusChange = () => {
    changeUserStatus();
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Code School</h1>
        <div className={classes["admin-switch"]}>
          <p>Admin</p>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            onChange={handleUserStatusChange}
            checked={userStatus === "admin"}
          />
        </div>
      </header>
      <nav>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Početna
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Tečajevi
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/predavaci"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Predavači
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Administracija
            </NavLink>
          </li>
          {userStatus === "admin" && (
            <li>
              <NavLink
                to="/course/new"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Dodaj Tečaj
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
