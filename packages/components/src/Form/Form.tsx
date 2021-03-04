import React, { PropsWithChildren } from "react";

export function Form({ children }: PropsWithChildren<unknown>) {
  return <form>{children}</form>;
}
