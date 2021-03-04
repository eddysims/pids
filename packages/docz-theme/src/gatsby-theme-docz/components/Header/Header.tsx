import React from "react";
import { useConfig, useCurrentDoc, Link } from "docz";
import { Icon } from "@pids/components/Icon";
import { useColorMode } from "@pids/components/ThemeProvider";
import { Logo } from "../Logo";

import styles from "./Header.css";

export function Header() {
  const { route } = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className={styles.header}>
      {route === "/" ? (
        <Logo />
      ) : (
        <Link to="/">
          <Logo />
        </Link>
      )}

      <div className={styles.actions}>
        {colorMode}
        <GithubStars />
        <Icon icon="Edit" />
        <button
          type="button"
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          <Icon icon={colorMode === "default" ? "Sun" : "Moon"} />
        </button>
        <Icon icon="Menu" />
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
