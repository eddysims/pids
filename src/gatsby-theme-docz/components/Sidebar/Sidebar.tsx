import React, { useState } from "react";
import { useMenus, Link, MenuItem } from "docz";
import { XOR } from "ts-xor";

import { Icon } from "@pids/components/Icon";

import styles from "./Sidebar.css";

export function Sidebar() {
  const menus = useMenus();

  return (
    <div className={styles.sidebar}>
      <nav className={styles.navigation}>
        {menus &&
          menus.map((menu) => {
            if (!menu.menu) {
              return (
                <div className={styles.item} key={menu.id}>
                  <MainLink label={menu.name} url={menu.route as string} />
                </div>
              );
            }

            return (
              <div className={styles.item} key={menu.id}>
                <LinkGroup menu={menu} />
              </div>
            );
          })}
      </nav>
    </div>
  );
}

interface MainLinkBaseProps {
  readonly label: string;
}

interface MainLinkLinkProps extends MainLinkBaseProps {
  readonly url: string;
}

interface MainLinkDropdownProps extends MainLinkBaseProps {
  readonly open?: boolean;
  onClick(): void;
}

type MainLinkProps = XOR<MainLinkLinkProps, MainLinkDropdownProps>;

function MainLink({ label, url, onClick, open }: MainLinkProps) {
  if (url) {
    return (
      <Link to={url} className={styles.mainLink}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={styles.mainLink}>
      {label} <Icon icon={open ? "ChevronUp" : "ChevronDown"} size="small" />
    </button>
  );

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
}

interface LinkGroupProps {
  readonly menu: MenuItem;
}

function LinkGroup({ menu }: LinkGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MainLink onClick={handleClick} label={menu.name} open={open} />
      {open &&
        menu.menu &&
        menu.menu.map((menuItem) => {
          return (
            <div className={styles.item} key={menuItem.id}>
              <Link to={menuItem.route || ""}>{menuItem.name}</Link>
            </div>
          );
        })}
    </div>
  );

  function handleClick() {
    setOpen(!open);
  }
}
