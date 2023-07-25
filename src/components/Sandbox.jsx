import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

const Sandbox = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h1>Enter a word or phrase</h1>
      <InputTextarea
        autoResize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        cols={30}
      />
    </div>
  );
};

export default Sandbox;
