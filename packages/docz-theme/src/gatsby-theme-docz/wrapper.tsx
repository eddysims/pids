import React, { PropsWithChildren } from "react";

// eslint-disable-next-line import/no-unresolved
import "@pids/styles/styles.css";

function Wrapper({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

export default Wrapper;
