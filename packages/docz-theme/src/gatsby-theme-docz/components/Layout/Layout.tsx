import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import { useCurrentDoc } from "docz";

import { Heading } from "@pids/components/Heading";
import { Text } from "@pids/components/Text";
import { Logo } from "../Logo";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import styles from "./Layout.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const { route } = useCurrentDoc();
  const containerClass = classnames(styles.container, {
    [styles.homeContainer]: route === "/",
  });

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav>
        <Sidebar />
      </nav>
      <main className={styles.main}>
        <HeroBanner />
        <div className={containerClass}>{children}</div>
      </main>
    </div>
  );
}

function HeroBanner() {
  const { name, description, route } = useCurrentDoc();
  const heroClass = classnames(styles.hero, {
    [styles.heroHome]: route === "/",
  });

  return (
    <div className={heroClass}>
      <div className={styles.container}>
        {route === "/" && <Logo size="large" />}
        <Heading as="h1">{name}</Heading>
        {description && <Text size="large">{description}</Text>}
      </div>
    </div>
  );
}
