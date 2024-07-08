import header from "./Header.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { motion, useScroll } from "framer-motion";

export default function Header({ handleLoginOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY < lastScrollY) {
        if (lastScrollY - currentScrollY > 20) {
          setIsVisible(true);
        }
      } else {
        if (currentScrollY - lastScrollY > 20) {
          setIsVisible(false);
        }
      }
      setLastScrollY(currentScrollY);
    };
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return (
    <header
      className={header.header}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 0.3s ease-in-out",
      }}
    >
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
          to="/Search"
          className={({ isActive }) =>
            `${header.navLink} ${isActive ? header.active : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          Search
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
          <Button
            text={"Login"}
            theme="flare"
            onClick={() => handleLoginOpen()}
          />
        </div>
      </nav>
      <div className="actionIcon">
        <span
          className={`material-symbols-rounded ${header.burger} ${header.searchIcon}`}
          onClick={() => setSearchBar(!searchBar)}
          style={{ color: "rgba(251, 246, 226,1)" }}
        >
          search
        </span>
        <span
          className={`material-symbols-rounded ${header.burger}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "rgba(251, 246, 226,1)" }}
        >
          menu
        </span>
      </div>
      <SearchBar open={searchBar} />
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
