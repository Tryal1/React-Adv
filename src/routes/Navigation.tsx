import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { ShoppingPage } from "../02-component-patters/pages/ShoppingPage";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                User
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShoppingPage/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/user" element={<h1>User</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
