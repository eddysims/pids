import React, { PropsWithChildren } from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { useColorMode, ThemeProvider } from ".";

afterEach(cleanup);

it("renders the children", () => {
  const { getByText } = render(<MockProvider>Foo</MockProvider>);

  expect(getByText("Foo")).toBeInstanceOf(HTMLDivElement);
});

it('sets a default colorMode of "default"', () => {
  const { getByText } = render(<MockProvider>Foo</MockProvider>);

  expect(getByText("current colorMode: default")).toBeInstanceOf(
    HTMLDivElement
  );
});

it("changes color mode when told to", () => {
  const { getByText } = render(<MockProvider>Foo</MockProvider>);

  const button = getByText("change color mode");

  fireEvent.click(button);

  expect(getByText("current colorMode: dark")).toBeInstanceOf(HTMLDivElement);
});

function MockColorMode({ children }: PropsWithChildren<unknown>) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <div>{children}</div>
      <div>current colorMode: {colorMode}</div>
      <button type="button" onClick={handleClick}>
        change color mode
      </button>
    </>
  );

  function handleClick() {
    setColorMode("dark");
  }
}

function MockProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider>
      <MockColorMode>{children}</MockColorMode>
    </ThemeProvider>
  );
}
