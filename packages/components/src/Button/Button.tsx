import React from 'react';

interface ButtonProps {
  readonly label: string;
  onClick(): void;
}

export function Button({label, onClick}: ButtonProps) {
  return (
    <button type="button" onClick={handleClick}>{label}</button>
  )

  function handleClick() {
    onClick()
  }
}
