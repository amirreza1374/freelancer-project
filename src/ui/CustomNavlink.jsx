import { NavLink } from "react-router-dom";

export default function CustomNavlink({ children, to }) {
  const navlinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/30 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClasses} bg-primary-100/80 text-primary-900`
            : `${navlinkClasses} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
