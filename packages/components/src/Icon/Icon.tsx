import React from "react";
import * as Icons from "react-feather";

interface IconProps {
  readonly icon: keyof typeof Icons;
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
