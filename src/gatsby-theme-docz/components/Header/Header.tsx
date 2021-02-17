import React from "react";
import { useConfig, useCurrentDoc, Link } from "docz";
import styles from "./Header.css";

export function Header() {
  const { title, repository } = useConfig();
  const { edit = true, link, route } = useCurrentDoc();

  return (
    <header className={styles.header}>
      <div>{route === "/" ? title : <Link to="/">{title}</Link>}</div>
      <div className={styles.actions}>
        {edit && link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Edit page
          </a>
        )}

        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/stars/eddysims/pids?style=social"
              alt="PIds Github repo"
            />
          </a>
        )}
      </div>
    </header>
  );
}
