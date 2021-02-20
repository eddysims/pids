import React, { PropsWithChildren } from "react";

import "@pids/styles/styles.css";

function Wrapper({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

export default Wrapper;
