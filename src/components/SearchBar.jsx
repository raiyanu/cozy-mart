import React, { useState, useEffect } from "react";

function SearchBar({ open }) {
  return (
    <form
      method="get"
      action="/search"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBlock: "0rem",
        position: "absolute",
        width: "100%",
        maxWidth: "100%",
        marginInline: "auto",
        top: "100%",
        left: 0,
        zIndex: 950,
        padding: ".5rem 1rem",
        background: "rgba(var(--primary-color,1))",

        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        translateY: open ? 0 : -100,
        transition: open ? " all 0.3s ease-in-out" : "",
      }}
      // animate={{
      //   opacity: isVisible ? 1 : 0,
      //   y: isVisible ? 0 : -100,
      // }}
      // transition={{
      //   duration: 0.3,
      //   ease: "easeInOut",
      // }}
    >
      <input
        type="text"
        name="search"
        placeholder="Search Product . . ."
        style={{ padding: "0.5rem", width: "70%", borderRadius: "1rem" }}
      />
      <button
        style={{
          paddingInline: "1rem",
          marginLeft: "0.5rem",
          borderRadius: "5px",
          background: "rgba(var(--primary-color,1))",
          color: "white",
          border: "1px solid rgba(var(--background-primary), 1)",
        }}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
