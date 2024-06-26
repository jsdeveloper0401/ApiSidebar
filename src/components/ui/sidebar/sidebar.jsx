import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    const links = [
        {
            path: "/main",
            label: "Cars",
            additionalClass: "bg-warning text-bold",
        },
        { path: "/main/users", label: "Users" },
        { path: "/main/todos", label: "Todos" },
        { path: "/main/photos", label: "Photos" },
    ];

    return (
        <div className="sidebar">
            <h1>Dashboard</h1>
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={`navLink ${
                        currentPath === link.path
                            ? link.additionalClass || "active"
                            : ""
                    }`}>
                    {link.label}
                </NavLink>
            ))}
            <NavLink
                to="/"
                onClick={logOut}
                className={`navLink ${currentPath === "/" ? "active" : ""}`}>
                <span className="span">
                    Logout
                    <i className="fa-solid fa-right-from-bracket"></i>
                </span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
