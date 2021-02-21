import React from "react";
import { useConfig } from "docz";

import styles from "./Header.css";

export function Header() {
  return (
    <div className={styles.header}>
      Logo
      <div className={styles.actions}>
        <GithubStars />
        <div>Edit</div>
        <div>Mode</div>
        <div>Menu</div>
      </div>
    </div>
  );
}

function GithubStars() {
  const { repository } = useConfig();

  if (!repository) {
    return <></>;
  }

  return (
    <a
      href={repository}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.github}
    >
      <img
        src="https://img.shields.io/github/stars/eddysims/pids?style=social"
        alt="PIds Github repo"
      />
    </a>
  );
}
