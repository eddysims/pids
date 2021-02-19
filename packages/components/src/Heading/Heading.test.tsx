import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Heading } from ".";

afterEach(cleanup);

it("renders an h2 by default", () => {
  const { container } = render(<Heading>Foo</Heading>);
  const heading = container.querySelector("h2");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h1 when as equals h1", () => {
  const { container } = render(<Heading as="h1">Foo</Heading>);
  const heading = container.querySelector("h1");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h3 when as equals h3", () => {
  const { container } = render(<Heading as="h3">Foo</Heading>);
  const heading = container.querySelector("h3");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h4 when as equals h4", () => {
  const { container } = render(<Heading as="h4">Foo</Heading>);
  const heading = container.querySelector("h4");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h5 when as equals h5", () => {
  const { container } = render(<Heading as="h5">Foo</Heading>);
  const heading = container.querySelector("h5");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h1 when as equals h6", () => {
  const { container } = render(<Heading as="h6">Foo</Heading>);
  const heading = container.querySelector("h6");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});
