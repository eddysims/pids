import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Button } from ".";

afterEach(cleanup);

it("renders a Button", () => {
  const { getByText } = render(<Button label="Foo" onClick={jest.fn()} />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLButtonElement);
});
