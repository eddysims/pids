import React, { PropsWithChildren } from "react";

interface HeadingProps {
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  as = "h2",
  children,
}: PropsWithChildren<HeadingProps>) {
  const Element = as;
  return <Element>{children}</Element>;
}
