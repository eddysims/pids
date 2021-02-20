import React, { PropsWithChildren } from "react";

import styles from "./Layout.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>Header</header>
      <nav>Sidebar</nav>
      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}
