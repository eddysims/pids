import React from "react";
import { useConfig, useCurrentDoc, Link } from "docz";
import { Logo } from "../Logo";
import styles from "./Header.css";

export function Header() {
  const { repository } = useConfig();
  const { edit = true, link, route } = useCurrentDoc();

  return (
    <header className={styles.header}>
      <div>
        {route === "/" ? (
          <Logo />
        ) : (
          <Link to="/" aria-label="Go to home page">
            <Logo />
          </Link>
        )}
      </div>
      <div className={styles.actions}>
        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/stars/eddysims/pids?style=social"
              alt="PIds Github repo"
            />
          </a>
        )}
        {edit && link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Edit page
          </a>
        )}
        Hamburger Menu
      </div>
    </header>
  );
}
