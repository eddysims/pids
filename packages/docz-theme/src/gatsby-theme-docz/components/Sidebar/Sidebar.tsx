import React from "react";
import { Navigation } from "../Navigation";

import styles from "./Sidebar.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Navigation />
    </div>
  );
}
