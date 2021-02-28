import React, { PropsWithChildren } from "react";

import styles from "./Container.css";

export function Container({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.container}>{children}</div>;
}
