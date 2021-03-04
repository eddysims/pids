import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@pids/components/ThemeProvider";

// eslint-disable-next-line import/no-unresolved
import "@pids/styles/styles.css";

function Wrapper({ children }: PropsWithChildren<unknown>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Wrapper;
