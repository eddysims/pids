import React, { PropsWithChildren } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import styles from "./Layout.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <main className={styles.content}>
          <div className={styles.container}>{children}</div>
        </main>
      </div>
    </div>
  );
}
