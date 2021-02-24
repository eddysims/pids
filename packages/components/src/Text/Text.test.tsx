import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Text } from ".";

afterEach(cleanup);

it("renders some text", () => {
  const { getByText } = render(<Text>Foo</Text>);
  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("adds the large class if size is large", () => {
  const { getByText } = render(<Text size="large">Foo</Text>);
  const text = getByText("Foo");
  expect(text.classList.contains("large")).toBeTruthy();
});
