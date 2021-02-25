import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { Button } from ".";

afterEach(cleanup);

it("renders a Button", () => {
  const { getByText } = render(<Button label="Foo" onClick={jest.fn()} />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLButtonElement);
});

it("calls the onClick method", () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button label="Foo" onClick={clickHandler} />);
  const button = getByText("Foo");

  fireEvent.click(button);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it("can have an Icon", () => {
  const { getByTestId } = render(
    <Button label="Foo" icon="Circle" onClick={jest.fn()} />
  );

  expect(getByTestId("icon-Circle")).toBeInstanceOf(SVGElement);
});

it("adds the filled class by default", () => {
  const { getByText } = render(<Button label="Foo" onClick={jest.fn()} />);
  const button = getByText("Foo");

  expect(button.classList.contains("primary")).toBeTruthy();
});

it("adds the ghost class by when ghost variation is set", () => {
  const { getByText } = render(
    <Button label="Foo" type="ghost" onClick={jest.fn()} />
  );
  const button = getByText("Foo");

  expect(button.classList.contains("ghost")).toBeTruthy();
});
