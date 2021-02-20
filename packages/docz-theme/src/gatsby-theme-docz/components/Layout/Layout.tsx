import React, { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
