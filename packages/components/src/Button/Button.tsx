import React from "react";
import { XOR } from "ts-xor";
import { Icon, IconType } from "../Icon";

import styles from "./Button.css";

interface ButtonBaseProps {
  onClick(): void;
}

interface ButtonIconProps extends ButtonBaseProps {
  readonly icon: IconType;
  /**
   * The label that is to be read by screen readers.
   */
  readonly ariaLabel: string;
  readonly label?: string;
}

interface ButtonNoIconProps extends ButtonBaseProps {
  readonly label: string;
  readonly icon?: IconType;
}

type ButtonProps = XOR<ButtonIconProps, ButtonNoIconProps>;

export function Button({ label, icon, ariaLabel, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.button}
      aria-label={ariaLabel}
    >
      {icon && <Icon icon={icon} />}
      {label}
    </button>
  );

  function handleClick() {
    onClick();
  }
}
