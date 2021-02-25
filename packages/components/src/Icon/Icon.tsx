import React from "react";
import * as Icons from "react-feather";

export type IconType = keyof typeof Icons;
interface IconProps {
  readonly icon: IconType;
  readonly size?: "small" | "base" | "large";
}

export function Icon({ icon, size = "base" }: IconProps) {
  const Element = Icons[icon];

  const sizes = {
    small: 16,
    base: 24,
    large: 32,
  };

  return (
    <Element
      size={sizes[size]}
      color="var(--pids-colors--text)"
      data-testid={`icon-${icon}`}
    />
  );
}
