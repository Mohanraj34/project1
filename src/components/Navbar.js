import React from "react";

export default function Navbar({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <header className="navbar">
      <div className="brand">RAJ</div>

      <nav className="navlinks" aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}
