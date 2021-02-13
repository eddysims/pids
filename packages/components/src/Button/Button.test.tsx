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
