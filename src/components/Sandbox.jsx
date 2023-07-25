import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import styled from "styled-components"

const Sandbox = () => {
  const [value, setValue] = useState('')
  return (
    <Container>
      <h2>Enter a word or phrase</h2>
      <InputTextarea
        autoResize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        cols={40}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 2rem;
`

export default Sandbox;
