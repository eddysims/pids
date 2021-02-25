import React, { PropsWithChildren } from "react";
import { useCurrentDoc } from "docz";
import { Heading } from "@pids/components/Heading";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import styles from "./Layout.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const { name, description } = useCurrentDoc();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav>
        <Sidebar />
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <Heading as="h1">{name}</Heading>
            {description}
          </div>
        </div>

        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}
