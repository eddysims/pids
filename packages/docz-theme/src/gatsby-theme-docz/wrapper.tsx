import React from "react";
import { Button } from "@pids/components/Button";

function Wrapper() {
  return (
    <div>
      Wrapper
      <Button label="Hello" onClick={() => alert("hi")} />
    </div>
  );
}

export default Wrapper;
