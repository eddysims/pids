import React from "react";
import classnames from "classnames";
import { XOR } from "ts-xor";
import { Icon, IconType } from "../Icon";

import styles from "./Button.css";

interface ButtonBaseProps {
  readonly variation?: 'filled' | 'ghost';
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

export function Button({ label, icon, variation = 'filled', ariaLabel, onClick }: ButtonProps) {
  const buttonClasses = classnames(styles.button, styles[variation]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClasses}
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
