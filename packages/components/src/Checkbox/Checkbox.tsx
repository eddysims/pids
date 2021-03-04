import React, { ChangeEvent } from "react";

interface CheckboxProps {
  onChange?(checked: boolean): void;
}

export function Checkbox({ onChange }: CheckboxProps) {
  return <input type="checkbox" onChange={handleChange} />;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.currentTarget;

    if (onChange) {
      onChange(checked);
    }
  }
}
