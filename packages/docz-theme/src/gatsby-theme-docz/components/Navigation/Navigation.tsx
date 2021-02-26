import React, { useState } from "react";
import { XOR } from "ts-xor";
import { useCurrentDoc, useMenus, Link, MenuItem } from "docz";
import { Icon } from "@pids/components/Icon";

import styles from "./Navigation.css";

export function Navigation() {
  const menus = useMenus();

  if (!menus) {
    return <></>;
  }

  return (
    <div className={styles.navigation}>
      {menus.map((menu) => {
        if (!menu.menu) {
          return (
            <div className={styles.item} key={menu.id}>
              <TopLevelLink label={menu.name} url={menu.route as string} />
            </div>
          );
        }

        return (
          <div className={styles.item} key={menu.id}>
            <LinkGroup menu={menu} />
          </div>
        );
      })}
    </div>
  );
}

interface TopLevelLinkBaseProps {
  readonly label: string;
}

interface TopLevelLinkLinkProps extends TopLevelLinkBaseProps {
  readonly url: string;
}

interface TopLevelLinkButtonProps extends TopLevelLinkBaseProps {
  readonly open?: boolean;
  onClick(): void;
}

type TopLevelLinkProps = XOR<TopLevelLinkLinkProps, TopLevelLinkButtonProps>;

function TopLevelLink({ label, url, open, onClick }: TopLevelLinkProps) {
  if (url) {
    return (
      <Link to={url} className={styles.topLevelLink}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles.topLevelLink}>
      {label} <Icon icon={open ? "ChevronUp" : "ChevronDown"} size="small" />
    </button>
  );
}

interface LinkGroupProps {
  readonly menu: MenuItem;
}

function LinkGroup({ menu }: LinkGroupProps) {
  const doc = useCurrentDoc();
  const [open, setOpen] = useState(doc.menu === menu.name);

  if (!menu.menu) {
    return <></>;
  }

  return (
    <>
      <TopLevelLink label={menu.name} onClick={handleClick} open={open} />
      <div className={styles.linkGroup}>
        {open &&
          menu.menu.map((subMenu) => {
            return (
              <Link
                to={subMenu.route as string}
                className={styles.levelTwoLink}
              >
                {subMenu.name}
              </Link>
            );
          })}
      </div>
    </>
  );

  function handleClick() {
    setOpen(!open);
  }
}
