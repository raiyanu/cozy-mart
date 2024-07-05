import header from "./Header.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header( {handleLoginOpen}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={header.header}>
      <h1>CozyMart</h1>
      <nav className={`${header.navigation} ${menuOpen ? header.open : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${header.navLink} ${isActive ? header.active : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${header.navLink} ${isActive ? header.active : ""}`
          }
          onClick={() => setMenuOpen(false)}

        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${header.navLink} ${isActive ? header.active : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        <div
          style={{
            display: "flex",
            marginInline: "auto",
            alignItems: "space-evenly",
            width: "100%",
          }}
          className={header.actionButton}
        >
          <span className="material-symbols-rounded">notifications</span>
          <span className="material-symbols-rounded">shopping_cart</span>
        </div>
        <div style={{ display: "flex", marginInline: "auto" }}>
          <Button text={"Sign Up"} theme="minimal" />
          <Button text={"Login"} theme="flare" onClick={
            ()=>handleLoginOpen()
          } />
        </div>
      </nav>
      <span
        className={`material-symbols-rounded ${header.burger}`}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{color: "rgba(251, 246, 226,1)"}}
      >
        menu
      </span>
    </header>
  );
}

// const NavLink = ({ href, children }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={`${header.navLink} ${isActive ? header.active : ""}`}
//     >
//       {children}
//     </Link>
//   );
// };
