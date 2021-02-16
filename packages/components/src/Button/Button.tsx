import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  readonly label: string;
  onClick(): void;
}

export function Button({ label = "Button", onClick }: ButtonProps) {
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      {label}
    </button>
  );

  function handleClick() {
    onClick();
  }
}
