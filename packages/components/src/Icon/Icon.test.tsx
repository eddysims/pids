import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Icon } from ".";

afterEach(cleanup);

it("renders the correct icon as an svg", () => {
  const { getByTestId } = render(<Icon icon="Copy" />);
  expect(getByTestId("icon-Copy")).toBeInstanceOf(SVGElement);
});

it("renders a small, base and large icon", () => {
  const { getByTestId } = render(
    <>
      <Icon icon="Copy" size="small" />
      <Icon icon="Cpu" size="base" />
      <Icon icon="File" size="large" />
    </>
  );

  const copy = getByTestId("icon-Copy");
  const cpu = getByTestId("icon-Cpu");
  const file = getByTestId("icon-File");

  expect(copy.getAttribute("height")).toBe("16");
  expect(cpu.getAttribute("height")).toBe("24");
  expect(file.getAttribute("height")).toBe("32");
});
