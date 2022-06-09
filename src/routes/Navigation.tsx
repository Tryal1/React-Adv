import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
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
                to="/laz1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laz2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laz3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="laz1" element={<LazyPage1 />} />
          <Route path="laz2" element={<LazyPage2 />} />
          <Route path="laz3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/laz1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
