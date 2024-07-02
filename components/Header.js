"use client";
import header from "./Header.module.css";
import Button from "../components/Button";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={header.header}>
      <h1>CozyMart</h1>
      <nav className={`${header.navigation} ${menuOpen ? header.open : ""}`}>
        <ul>
          <li>
            <a href="/" className={header.active}>
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            marginInline: "auto",
            alignItems: "space-evenly",
            width: "100%",
          }}
          className={header.actionButton}
        >
          <span class="material-symbols-rounded">notifications</span>
          <span className="material-symbols-rounded">shopping_cart</span>
        </div>
        <div style={{ display: "flex", marginInline: "auto" }}>
          <Button text={"Sign Up"} theme="minimal" />
          <Button text={"Login"} theme="flare" />
        </div>
      </nav>
      <span
        className={`material-symbols-rounded ${header.burger}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        menu
      </span>
    </header>
  );
}
