import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="sidebar">
            <h1>Dashboard</h1>
            <NavLink
                to="/main"
                className={
                    "navLink " +
                    (location.pathname === "/main/cars" ? "active" : "")
                }>
                Cars
            </NavLink>
            <NavLink
                to="/main/users"
                className={
                    "navLink " +
                    (location.pathname === "/main/users" ? "active" : "")
                }>
                Users
            </NavLink>
            <NavLink
                to="/main/todos"
                className={
                    "navLink " +
                    (location.pathname === "/main/todos" ? "active" : "")
                }>
                Todos
            </NavLink>
            <NavLink
                to="/main/photos"
                className={
                    "navLink " +
                    (location.pathname === "/main/photos" ? "active" : "")
                }>
                Photos
            </NavLink>
            <NavLink
                to="/"
                onClick={logOut}
                className={
                    "navLink " + (location.pathname === "/" ? "active" : "")
                }>
                <span className="span">
                    Logout
                    <i className="fa-solid fa-right-from-bracket"></i>
                </span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
