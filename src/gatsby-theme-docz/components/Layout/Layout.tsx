import React, { PropsWithChildren } from "react";
import { useMenus, Link } from "docz";
import { Header } from "../Header";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const menu = useMenus() || [];

  return (
    <>
      <Header />
      <div className="main">
        {menu.map((item) => {
          if (!item.menu) {
            return <Link to={item.route || ""}>{item.name}</Link>;
          }

          return (
            <div>
              <hr />
              {item.name}
              {item.menu.map((i) => {
                return (
                  <>
                    <br />
                    <Link to={i.route || ""}>{i.name}</Link>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>{children}</div>
    </>
  );
}
